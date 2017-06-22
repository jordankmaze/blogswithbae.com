(function () {
    "use strict";

    var componentController =
    ["$http", "$state", "blogPostFactory", "$filter",
    function ViewController($http, $state, blogPostFactory, $filter) {
        var vm = this;
        vm.blogs = {};
        vm.previewLimit = 500;
        vm.pageSize = 1;
        vm.currentPage = 1;
        vm.itemsPerPage = 2
        vm.maxSize = 1;

        vm.$onInit = function() {
          blogPostFactory.getBlogPosts()
            .then(function (response) {
                vm.blogs = response.data;
                vm.totalItems = vm.blogs.length;
            }, function (error) {
                console.log(error.message);
            });
        }

        vm.setPage = function (pageNo) {
          vm.currentPage = pageNo;
        };

        vm.pageChanged = function() {
          console.log('Page changed to: ' + vm.currentPage);
        };
    }];

    angular
        .module("homeViewModule")
        .component("homeView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Home/home-view/homeView.template.html"
        });

})();
