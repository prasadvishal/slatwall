/// <reference path='../../../typings/hibachiTypescript.d.ts' />
/// <reference path='../../../typings/tsd.d.ts' />
class SWFormFieldSingleEditController {
    
    public property:string;
    public object:any;
    public options:{};
    public edited:boolean; 
    public isHidden:boolean;
    public title:string;
    public hint:string;
    public optionsArguments:string;
    public eagerLoadOptions;
    public isDirty:boolean;
    public onChange;
    public fieldType:string;
    public noValidate:boolean;
    
    public ngModelValue:any; 
    
    public valueToRevertTo:any; 
    public singleEditedObject:any; 

    // @ngInject
    constructor(private $hibachi
        ){
        /* init the object that will actually be saved 
         * (so we don't accidentily change other fields 
         * that have been changed on the past object)
         */
        angular.copy(this.object, this.singleEditedObject);
    }
    
    public save = () => {
        this.singleEditedObject.$$save().then((response)=>{
            //do anything?
        });
        this.edited = false;
    }
    
    public revert = () => {
        angular.copy(this.valueToRevertTo, this.ngModelValue);
        //call save? 
    }

}

class SWFormFieldSingleEdit implements ng.IDirective{

    public templateUrl;
    public restrict = "EA";
    public scope = {};

    public bindToController = {
        property:"@",
        object:"=",
        options:"=?",
        edited:"=?",
        isHidden:"=?",
        title:"=?",
        hint:"@?",
        optionsArguments:"=?",
        eagerLoadOptions:"=?",
        isDirty:"=?",
        onChange:"=?",
        fieldType:"@?",
        noValidate:"=?"
    };
    public controller=SWFormFieldSingleEdit;
    public controllerAs="swFormFieldSingleEdit";

    // @ngInject
    constructor(public $compile, public ngModelController, private coreFormPartialsPath,hibachiPathBuilder){
        this.templateUrl = hibachiPathBuilder.buildPartialsPath(coreFormPartialsPath) + "formfieldsingleedit.html";
    }

    public link:ng.IDirectiveLinkFn = ($scope, element: ng.IAugmentedJQuery, attrs:ng.IAttributes, modelCtrl: ng.INgModelController) =>{

         var thisDirectiveScope = $scope[this.controllerAs];

         modelCtrl.$parsers.unshift((inputValue) =>{
            var modelValue = modelCtrl.$modelValue;
            
            //figure out if the model value has changed
            //was it a revert?
            if(modelValue !== inputValue){
                thisDirectiveScope.valueToRevertTo = modelValue;
                thisDirectiveScope.singleEditedObject[thisDirectiveScope.property] = inputValue; 
                thisDirectiveScope.edited = true; 
            }
                
            return modelValue;
        });


    }

    public static Factory(){
        var directive:ng.IDirectiveFactory = (
            $compile
            ,NgModelController
            ,coreFormPartialsPath
            ,hibachiPathBuilder

        )=> new SWFormFieldSingleEdit(
            $compile
            ,NgModelController
            ,coreFormPartialsPath
            ,hibachiPathBuilder
        );
        directive.$inject = [
            "$compile",
            ,"NgModelController"
            ,"coreFormPartialsPath"
            ,'hibachiPathBuilder'
        ];
        return directive;
    }
}
export{
    SWFormFieldSingleEdit,
    SWFormFieldSingleEditController
}