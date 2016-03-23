/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCM.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Contract.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Contract." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

