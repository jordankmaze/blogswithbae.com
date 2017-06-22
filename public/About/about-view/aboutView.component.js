(function () {
    "use strict";

    var componentController =
    [//injections go here
    function ViewController() {
        var vm = this;
    }];

    angular
        .module("aboutViewModule")
        .component("aboutView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "About/about-view/aboutView.template.html",
            
        });

})();