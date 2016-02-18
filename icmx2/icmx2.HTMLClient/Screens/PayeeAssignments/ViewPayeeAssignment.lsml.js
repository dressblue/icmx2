/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPayeeAssignment.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.PayeeAssignment.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.PayeeAssignment." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

