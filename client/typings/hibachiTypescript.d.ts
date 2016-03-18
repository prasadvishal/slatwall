//{
/// <reference path="../src/basebootstrap.ts" />
/// <reference path="../src/bootstrap.ts" />
/// <reference path="../src/vendor.ts" />
/// <reference path="../src/alert/alert.module.ts" />
/// <reference path="../src/collection/collection.module.ts" />
/// <reference path="../src/core/core.module.ts" />
/// <reference path="../src/form/form.module.ts" />
/// <reference path="../src/dialog/dialog.module.ts" />
/// <reference path="../src/hibachi/hibachi.module.ts" />
/// <reference path="../src/frontend/bootstrap.ts" />
/// <reference path="../src/frontend/frontend.module.ts" />
/// <reference path="../src/entity/entity.module.ts" />
/// <reference path="../src/pagination/pagination.module.ts" />
/// <reference path="../src/logger/logger.module.ts" />
/// <reference path="../src/validation/validation.module.ts" />
/// <reference path="../src/workflow/workflow.module.ts" />
/// <reference path="../src/alert/controllers/alertcontroller.ts" />
/// <reference path="../src/alert/model/alert.ts" />
/// <reference path="../src/alert/service/alertservice.ts" />
/// <reference path="../src/collection/controllers/collections.ts" />
/// <reference path="../src/collection/controllers/confirmationcontroller.ts" />
/// <reference path="../src/collection/controllers/createcollection.ts" />
/// <reference path="../src/collection/components/swaddfilterbuttons.ts" />
/// <reference path="../src/collection/components/swcollection.ts" />
/// <reference path="../src/collection/components/swcollectiontable.ts" />
/// <reference path="../src/collection/components/swcolumnitem.ts" />
/// <reference path="../src/collection/components/swconditioncriteria.ts" />
/// <reference path="../src/collection/components/swcriteria.ts" />
/// <reference path="../src/collection/components/swcriteriaboolean.ts" />
/// <reference path="../src/collection/components/swcriteriadate.ts" />
/// <reference path="../src/collection/components/swcriteriamanytomany.ts" />
/// <reference path="../src/collection/components/swcriteriamanytoone.ts" />
/// <reference path="../src/collection/components/swcriterianumber.ts" />
/// <reference path="../src/collection/components/swcriteriaonetomany.ts" />
/// <reference path="../src/collection/components/swcriteriastring.ts" />
/// <reference path="../src/collection/components/swdisplayitem.ts" />
/// <reference path="../src/collection/components/swdisplayoptions.ts" />
/// <reference path="../src/collection/components/sweditfilteritem.ts" />
/// <reference path="../src/collection/components/swfiltergroupitem.ts" />
/// <reference path="../src/collection/components/swfiltergroups.ts" />
/// <reference path="../src/collection/components/swfilteritem.ts" />
/// <reference path="../src/collection/services/collectionconfigservice.ts" />
/// <reference path="../src/collection/services/collectionservice.ts" />
/// <reference path="../src/core/components/swactioncaller.ts" />
/// <reference path="../src/core/components/swactioncallerdropdown.ts" />
/// <reference path="../src/core/components/swclickoutside.ts" />
/// <reference path="../src/core/components/swcolumnsorter.ts" />
/// <reference path="../src/core/components/swconfirm.ts" />
/// <reference path="../src/core/components/swdirective.ts" />
/// <reference path="../src/core/components/swentityactionbar.ts" />
/// <reference path="../src/core/components/swentityactionbarbuttongroup.ts" />
/// <reference path="../src/core/components/swexpandablerecord.ts" />
/// <reference path="../src/core/components/swexportaction.ts" />
/// <reference path="../src/core/components/swgravatar.ts" />
/// <reference path="../src/core/components/swhref.ts" />
/// <reference path="../src/core/components/swlistingaggregate.ts" />
/// <reference path="../src/core/components/swlistingcolorfilter.ts" />
/// <reference path="../src/core/components/swlistingcolumn.ts" />
/// <reference path="../src/core/components/swlistingdisplay.ts" />
/// <reference path="../src/core/components/swlistingfilter.ts" />
/// <reference path="../src/core/components/swlistingglobalsearch.ts" />
/// <reference path="../src/core/components/swlistingorderby.ts" />
/// <reference path="../src/core/components/swloading.ts" />
/// <reference path="../src/core/components/swlogin.ts" />
/// <reference path="../src/core/components/swnumbersonly.ts" />
/// <reference path="../src/core/components/swoptions.ts" />
/// <reference path="../src/core/components/swprocesscaller.ts" />
/// <reference path="../src/core/components/swrbkey.ts" />
/// <reference path="../src/core/components/swscrolltrigger.ts" />
/// <reference path="../src/core/components/swselect.ts" />
/// <reference path="../src/core/components/swselection.ts" />
/// <reference path="../src/core/components/swsortable.ts" />
/// <reference path="../src/core/components/swtooltip.ts" />
/// <reference path="../src/core/components/swtypeaheadsearch.ts" />
/// <reference path="../src/core/components/swtypeaheadsearchlineitem.ts" />
/// <reference path="../src/core/controllers/globalsearch.ts" />
/// <reference path="../src/core/filters/datefilter.ts" />
/// <reference path="../src/core/filters/entityrbkey.ts" />
/// <reference path="../src/core/filters/percentage.ts" />
/// <reference path="../src/core/filters/swcurrency.ts" />
/// <reference path="../src/core/services/baseservice.ts" />
/// <reference path="../src/core/services/expandableservice.ts" />
/// <reference path="../src/core/services/formservice.ts" />
/// <reference path="../src/core/services/hibachiinterceptor.ts" />
/// <reference path="../src/core/services/hibachipathbuilder.ts" />
/// <reference path="../src/core/services/hibachiservice.ts" />
/// <reference path="../src/core/services/hibachiservicedecorator.ts" />
/// <reference path="../src/core/services/metadataservice.ts" />
/// <reference path="../src/core/services/observerservice.ts" />
/// <reference path="../src/core/services/publicservice.ts" />
/// <reference path="../src/core/services/rbkeyservice.ts" />
/// <reference path="../src/core/services/selectionservice.ts" />
/// <reference path="../src/core/services/utilityservice.ts" />
/// <reference path="../src/form/components/swfformfield.ts" />
/// <reference path="../src/form/components/swform.ts" />
/// <reference path="../src/form/components/swformfield.ts" />
/// <reference path="../src/form/components/swformfieldjson.ts" />
/// <reference path="../src/form/components/swformfieldnumber.ts" />
/// <reference path="../src/form/components/swformfieldpassword.ts" />
/// <reference path="../src/form/components/swformfieldradio.ts" />
/// <reference path="../src/form/components/swformfieldsearchselect.ts" />
/// <reference path="../src/form/components/swformfieldselect.ts" />
/// <reference path="../src/form/components/swformfieldtext.ts" />
/// <reference path="../src/form/components/swformregistrar.ts" />
/// <reference path="../src/form/components/swfpropertydisplay.ts" />
/// <reference path="../src/form/components/swinput.ts" />
/// <reference path="../src/form/components/swpropertydisplay.ts" />
/// <reference path="../src/dialog/controllers/pagedialog.ts" />
/// <reference path="../src/dialog/model/pagedialog.ts" />
/// <reference path="../src/dialog/services/dialogservice.ts" />
/// <reference path="../src/hibachi/components/swsaveandfinish.ts" />
/// <reference path="../src/frontend/components/swfcreateaccount.ts" />
/// <reference path="../src/frontend/components/swfdirective.ts" />
/// <reference path="../src/frontend/components/switerator.ts" />
/// <reference path="../src/frontend/controllers/frontend.ts" />
/// <reference path="../src/entity/components/swdetail.ts" />
/// <reference path="../src/entity/components/swdetailtabs.ts" />
/// <reference path="../src/entity/components/swlist.ts" />
/// <reference path="../src/entity/controllers/otherwisecontroller.ts" />
/// <reference path="../src/entity/controllers/routercontroller.ts" />
/// <reference path="../src/pagination/components/swpaginationbar.ts" />
/// <reference path="../src/pagination/services/paginationservice.ts" />
/// <reference path="../src/logger/services/exceptionhandler.ts" />
/// <reference path="../src/validation/components/swvalidate.ts" />
/// <reference path="../src/validation/components/swvalidationdatatype.ts" />
/// <reference path="../src/validation/components/swvalidationeq.ts" />
/// <reference path="../src/validation/components/swvalidationgte.ts" />
/// <reference path="../src/validation/components/swvalidationlte.ts" />
/// <reference path="../src/validation/components/swvalidationmaxlength.ts" />
/// <reference path="../src/validation/components/swvalidationmaxvalue.ts" />
/// <reference path="../src/validation/components/swvalidationminlength.ts" />
/// <reference path="../src/validation/components/swvalidationminvalue.ts" />
/// <reference path="../src/validation/components/swvalidationneq.ts" />
/// <reference path="../src/validation/components/swvalidationnumeric.ts" />
/// <reference path="../src/validation/components/swvalidationregex.ts" />
/// <reference path="../src/validation/components/swvalidationrequired.ts" />
/// <reference path="../src/validation/components/swvalidationunique.ts" />
/// <reference path="../src/validation/components/swvalidationuniqueornull.ts" />
/// <reference path="../src/workflow/components/swadmincreatesuperuser.ts" />
/// <reference path="../src/workflow/components/swworkflowbasic.ts" />
/// <reference path="../src/workflow/components/swworkflowcondition.ts" />
/// <reference path="../src/workflow/components/swworkflowconditiongroupitem.ts" />
/// <reference path="../src/workflow/components/swworkflowconditiongroups.ts" />
/// <reference path="../src/workflow/components/swworkflowtask.ts" />
/// <reference path="../src/workflow/components/swworkflowtaskactions.ts" />
/// <reference path="../src/workflow/components/swworkflowtasks.ts" />
/// <reference path="../src/workflow/components/swworkflowtrigger.ts" />
/// <reference path="../src/workflow/components/swworkflowtriggers.ts" />
/// <reference path="../src/workflow/services/workflowconditionservice.ts" />
//}
