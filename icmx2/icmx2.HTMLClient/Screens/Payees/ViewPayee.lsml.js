/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPayee.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Payee.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Payee." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

