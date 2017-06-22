(function () {
    'use strict';

    angular.module("app", [
        // Angular modules
        "ui.router",
        "angular.filter",
        "ui.bootstrap",
        // Custom modules
        "homeViewModule",
        "dateViewModule",
        "aboutViewModule",
        "contactViewModule",
        "viewViewModule",
        "sidebarViewModule"
        // 3rd Party Modules
    ]);
})();
