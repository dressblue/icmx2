/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewLaborDataCollector.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.LaborDataCollector.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.LaborDataCollector." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

