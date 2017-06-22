(function () {
    "use strict";

    function blogPostFactory($http) {

        function getBlogPosts(){
          return $http.get('posts.json');
        }

        var service = {
            getBlogPosts: getBlogPosts,
        };
        
        return service;
    }

    angular
        .module("app")
        .factory("blogPostFactory", blogPostFactory);

    blogPostFactory.$inject = ["$http"];
})();
