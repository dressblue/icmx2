/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewOpportunityStatu.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.OpportunityStatu.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.OpportunityStatu." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

