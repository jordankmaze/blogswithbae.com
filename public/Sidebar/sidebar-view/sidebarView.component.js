(function () {
    "use strict";

    var componentController =
    ["blogPostFactory",
    function ViewController(blogPostFactory) {
        var vm = this;
        vm.$onInit = function() {
          blogPostFactory.getBlogPosts()
            .then(function (response) {
                vm.categories = response.data;
            }, function (error) {
                console.log(error.message);
            });
        }
    }];

    angular
        .module("sidebarViewModule")
        .component("sidebarView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Sidebar/sidebar-view/sidebarView.template.html",

        });

})();
