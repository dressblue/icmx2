/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCompaniesSet.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.CompaniesSet.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.CompaniesSet." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

