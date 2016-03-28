/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewLaborCategoryAssignmentsSet.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.LaborCategoryAssignmentsSet.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.LaborCategoryAssignmentsSet." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

