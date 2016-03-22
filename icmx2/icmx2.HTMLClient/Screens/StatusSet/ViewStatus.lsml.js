/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewStatus.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.ContractStatusSet.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.ContractStatusSet." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

