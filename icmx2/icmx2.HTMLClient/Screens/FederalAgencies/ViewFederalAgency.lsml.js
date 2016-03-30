/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewFederalAgency.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.FederalAgency.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.FederalAgency." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

