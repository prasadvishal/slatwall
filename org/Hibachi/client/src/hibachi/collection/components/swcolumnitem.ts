/// <reference path='../../../../typings/slatwallTypescript.d.ts' />
/// <reference path='../../../../typings/tsd.d.ts' />
class SWColumnItem{
	constructor(
		$compile,
		$templateCache,
		$log,
		$timeout,
		pathBuilderConfig, 
		collectionService,
		collectionPartialsPath
	){
		return {
			restrict: 'A',
			require:"^swDisplayOptions",
			scope:{
				column:"=",
				columns:"=",
				columnIndex:"=",
				saveCollection:"&",
				propertiesList:"=",
				orderBy:"="
			},
			templateUrl:pathBuilderConfig.buildPartialsPath(collectionPartialsPath)+"columnitem.html",
			link: function(scope, element,attrs,displayOptionsController){
                scope.editingDisplayTitle=false;
                
                scope.editDisplayTitle = function(){
                    if(angular.isUndefined(scope.column.displayTitle)){
                        scope.column.displayTitle = scope.column.title;
                    }
                    if(!scope.column.displayTitle.length){
                        scope.column.displayTitle = scope.column.title;
                    }
                    scope.previousDisplayTitle=scope.column.displayTitle;
                    scope.editingDisplayTitle = true;
                }
                scope.saveDisplayTitle = function(){
                    var savePromise = scope.saveCollection();
                    scope.editingDisplayTitle = false;
                }
                scope.cancelDisplayTitle = function(){
                    scope.column.displayTitle = scope.previousDisplayTitle;
                    scope.editingDisplayTitle = false;
                }
                
				$log.debug('displayOptionsController');
				if(angular.isUndefined(scope.column.sorting)){
					scope.column.sorting = {
						active:false,
						sortOrder:'asc',
						priority:0
					};
				}
				
				scope.toggleVisible = function(column){
					$log.debug('toggle visible');
					if(angular.isUndefined(column.isVisible)){
						column.isVisible = false;
					}
					column.isVisible = !column.isVisible;
					scope.saveCollection();
				};
				
				scope.toggleSearchable = function(column){
					$log.debug('toggle searchable');
					if(angular.isUndefined(column.isSearchable)){
						column.isSearchable = false;
					}
					column.isSearchable = !column.isSearchable;
					scope.saveCollection();
				};
				
				scope.toggleExportable = function(column){
					$log.debug('toggle exporable');
					if(angular.isUndefined(column.isExportable)){
						column.isExportable = false;
					}
					column.isExportable = !column.isExportable;
					scope.saveCollection();
				};
				
				var compareByPriority = function(a,b){
					if(angular.isDefined(a.sorting) && angular.isDefined(a.sorting.priority)){
						if(a.sorting.priority < b.sorting.priority){
							return -1;
						}
						if(a.sorting.priority > b.sorting.priority){
							return 1;
						}
					}
					return 0;
				};
				
				var updateOrderBy = function(){
					if(angular.isDefined(scope.columns)){
						var columnsCopy = angular.copy(scope.columns);
						columnsCopy.sort(compareByPriority);
						scope.orderBy = [];
						
						angular.forEach(columnsCopy,function(column){
							if(angular.isDefined(column.sorting) && column.sorting.active === true){
								var orderBy = {
									propertyIdentifier:column.propertyIdentifier,
									direction:column.sorting.sortOrder
								};
								scope.orderBy.push(orderBy);
							}
						});
					}
				};
				
				scope.toggleSortable = function(column){
					$log.debug('toggle sortable');
					if(angular.isUndefined(column.sorting)){
						column.sorting = {
								active:true,
								sortOrder:'asc',
								priority:0
						};
					}
					
					if(column.sorting.active === true){
						if(column.sorting.sortOrder === 'asc'){
							column.sorting.sortOrder = 'desc';
						}else{
							removeSorting(column);
							column.sorting.active = false;
							
						}
					}else{
						column.sorting.active = true;
						column.sorting.sortOrder = 'asc';
						column.sorting.priority = getActivelySorting().length;
					}
					updateOrderBy();
					scope.saveCollection();
					
				};
				
				var removeSorting = (column,saving?)=>{
					if(column.sorting.active === true){
						for(var i in scope.columns){
							if(scope.columns[i].sorting.active === true && scope.columns[i].sorting.priority > column.sorting.priority){
								scope.columns[i].sorting.priority = scope.columns[i].sorting.priority - 1;
							}
						}
						column.sorting.priority = 0;
					}
					
					if(!saving){
						updateOrderBy();
						scope.saveCollection();
					}
					
				};
				
				scope.prioritize = function(column){
					if(column.sorting.priority === 1){
						
						var activelySorting = getActivelySorting();
						for(var i in scope.columns){
							if(scope.columns[i].sorting.active === true){
								scope.columns[i].sorting.priority = scope.columns[i].sorting.priority - 1;
							}
						}
						column.sorting.priority = activelySorting.length;
						
					}else{
						for(var i in scope.columns){
							if(scope.columns[i].sorting.active === true && scope.columns[i].sorting.priority === column.sorting.priority - 1){
								scope.columns[i].sorting.priority = scope.columns[i].sorting.priority + 1;
							}
						}
						
						column.sorting.priority -= 1;
					}
					
					updateOrderBy();
					scope.saveCollection();
				};
				
				var getActivelySorting = function(){
					var activelySorting = [];
					for(var i in scope.columns){
						if(scope.columns[i].sorting.active === true){
							activelySorting.push(scope.columns[i]);
						}
					}
					return activelySorting;
				};
				
				scope.removeColumn = function(columnIndex){
					$log.debug('remove column');
					$log.debug(columnIndex);
					removeSorting(scope.columns[columnIndex],true);
					displayOptionsController.removeColumn(columnIndex);
					updateOrderBy();
					scope.saveCollection();
				};
			}
		};
	}
	public static Factory(){
		var directive:ng.IDirectiveFactory = (
			$compile,
			$templateCache,
			$log,
			$timeout,
			pathBuilderConfig,
			collectionService,
			collectionPartialsPath
		) => new SWColumnItem(
			$compile,
			$templateCache,
			$log,
			$timeout,
			pathBuilderConfig,
			collectionService,
			collectionPartialsPath
		);
		directive.$inject = [
			'$http',
			'$compile',
			'$templateCache',
			'$log',
			'$timeout',
			'pathBuilderConfig',
			'collectionService',
			'collectionPartialsPath'
		];
		return directive;
	}
}
export{
	SWColumnItem
}
