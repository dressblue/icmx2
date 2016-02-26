/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewClientAgenciesSet.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ClientAgenciesSet.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ClientAgenciesSet." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

