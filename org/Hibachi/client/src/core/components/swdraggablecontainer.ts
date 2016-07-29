/// <reference path='../../../typings/hibachiTypescript.d.ts' />
/// <reference path='../../../typings/tsd.d.ts' />

class SWDraggableContainerController{
    
    public draggable:boolean; 

    //@ngInject
    constructor(public draggableService){
        if(angular.isUndefined(this.draggable)){
            this.draggable = false; 
        }
    }

}

class SWDraggableContainer implements ng.IDirective{
    public _timeoutPromise; 
    public restrict:string = 'EA';
    public scope={};
    public bindToController={
        draggable:"=?",
        draggableRecords:"=?"
    };

    public static Factory(){
        var directive:ng.IDirectiveFactory=(
            $timeout, 
            corePartialsPath,
            utilityService,
            draggableService,
			hibachiPathBuilder
        ) => new SWDraggableContainer(
            $timeout, 
            corePartialsPath,
            utilityService,
            draggableService,
			hibachiPathBuilder
        );
        directive.$inject = [
            '$timeout',
            'corePartialsPath',
            'utilityService',
            'draggableService',
			'hibachiPathBuilder'
        ];
        return directive;
    }

    public controller=SWDraggableContainerController;
    public controllerAs="swDraggableContainer";
    //@ngInject
    constructor(
        public $timeout, 
        public corePartialsPath,
        public utilityService,
        public draggableService,
		public hibachiPathBuilder
     ){
    }

    public link:ng.IDirectiveLinkFn = (scope:any, element:any, attrs:any) =>{
        
        angular.element(element).attr("draggable", "true");

        var placeholderElement = angular.element("<tr class='s-placeholder'><td></td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td><td>placeholder</td></tr>");//temporarirly hardcoding tds so it will show up
        
        var id = angular.element(element).attr("id");
        if (!id) {
            id = this.utilityService.createID(32);  
        } 

        var listNode = element[0];
        var placeholderNode = placeholderElement[0]; 
        placeholderElement.remove();

        element.on('drop', (e)=>{
            e = e.originalEvent || e;
            e.preventDefault();
            
            if(!this.draggableService.isDropAllowed(e)) return true;  

            var record = e.dataTransfer.getData("application/json") || e.dataTransfer.getData("text/plain");
            var parsedRecord = JSON.parse(record); 
            
            var index =  Array.prototype.indexOf.call(listNode.children, placeholderNode);

            if(index <= parsedRecord.draggableStartKey){
                parsedRecord.draggableStartKey++;
            } else if(parsedRecord.draggableStartKey != 0) {
                parsedRecord.draggableStartKey--; 
            }

            this.$timeout(
                ()=>{
                    scope.swDraggableContainer.draggableRecords.splice(index, 0, parsedRecord);
                    scope.swDraggableContainer.draggableRecords.splice(parsedRecord.draggableStartKey, 1);
                }, 0
            );
                
            placeholderElement.remove();
            e.stopPropagation(); 
            return false;
        });

        element.on('dragenter', (e)=>{
            e = e.originalEvent || e;
            if (!this.draggableService.isDropAllowed(e)) return true;
            e.preventDefault();
        });
        
        element.on('dragleave', (e)=>{
            e = e.originalEvent || e;
            
            if (e.pageX != 0 || e.pageY != 0) {
                return false;
            } 
                
            return false; 
        }); 
        
        element.on('dragover', (e)=>{
            e = e.originalEvent || e;
            e.stopPropagation(); 

            console.log("e", e);

            if(placeholderNode.parentNode != listNode) {
                element.append(placeholderElement);
            }

            if(e.target !== listNode) {
                var listItemNode = e.target;
                while (listItemNode.parentNode !== listNode && listItemNode.parentNode) {
                    listItemNode = listItemNode.parentNode;
                }

                if (listItemNode.parentNode === listNode && listItemNode !== placeholderNode) {
                    if (this.draggableService.isMouseInFirstHalf(e, listItemNode)) {
                        listNode.insertBefore(placeholderNode, listItemNode);
                        console.log("insertBefore");
                    } else {
                        listNode.insertBefore(placeholderNode, listItemNode.nextSibling);
                        console.log("insertAfter");
                    }
                }
            }

            element.addClass("s-dragged-over");
            return false; 
        }); 

        
 
    }   
}
export{
    SWDraggableContainer
}

