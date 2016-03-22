/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewPeopleSet.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.PeopleSet.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.PeopleSet." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

