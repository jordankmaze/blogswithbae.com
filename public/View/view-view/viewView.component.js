(function () {
    "use strict";

    var componentController =
    ["$http", "$state", "blogPostFactory",
    function ViewController($http, $state, blogPostFactory) {
        var vm = this;
        vm.$onInit = function() {
          blogPostFactory.getBlogPosts()
            .then(function (response) {
                vm.fullBlog = response.data[$state.params.id];
            }, function (error) {
                console.log(error.message);
            });
        }
    }];

    angular
        .module("viewViewModule")
        .component("viewView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "View/view-view/viewView.template.html",

        });

})();
