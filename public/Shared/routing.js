(function () {
    "use strict";
    angular.module("app").config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.hashPrefix("!");
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("home", {
                url: "/home",
                views: {
                  nav: {
                    template: "<sidebar-View></sidebar-View>"
                  },
                  content: {
                    template: "<home-View></home-View>"
                  }
                }
            })
            .state("postEmail", {
                url: "/postEmail",
                views: {
                  nav: {
                    template: "<sidebar-View></sidebar-View>"
                  },
                  content: {
                    template: "<home-View></home-View>"
                  }
                }
            })
            .state("about", {
                url: "/about",
                views: {
                  nav: {
                    template: "<sidebar-View></sidebar-View>"
                  },
                  content: {
                    template: "<about-View></home-View>"
                  }
                }
            })
            .state("contact", {
                url: "/contact",
                views: {
                  nav: {
                    template: "<sidebar-View></sidebar-View>"
                  },
                  content: {
                    template: "<contact-View></contact-View>"
                  }
                }
            })
            .state("date", {
                url: "/date",
                views: {
                  nav: {
                    template: "<sidebar-View></sidebar-View>"
                  },
                  content: {
                    template: "<date-View></date-View>"
                  }
                }
            })
            .state("view", {
                url: "/view/:id",
                views: {
                  nav: {
                    template: "<sidebar-View></sidebar-View>"
                  },
                  content: {
                    template: "<view-View></view-View>"
                  }
                }
            });
    });
})();
