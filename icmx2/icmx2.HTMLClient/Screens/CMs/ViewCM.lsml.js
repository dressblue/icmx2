/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCM.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Contract.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Contract." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}


myapp.ViewCM.LaborCategories1_ItemTap_execute = function (screen) {
    // Write code here.
    screen.LcatSelected1 = screen.LaborCategories.selectedItem.Id;

};
myapp.ViewCM.LcatLookup1_ItemTap_execute = function (screen) {
    // Write code here.
    screen.LcatAssignmentSelected = screen.LcatLookup1.selectedItem.Id;
};
