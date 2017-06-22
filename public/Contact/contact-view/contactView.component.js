(function () {
    "use strict";

    var componentController =
    ["$http", "$animate",
    function ViewController($http, $animate) {
        var vm = this;
        vm.emailInfo = {};

        vm.sendMail = function () {
          //console.log('test');
          var data = vm.emailInfo
          //sendContactInfo.sendContact(vm.emailInfo);
          $http.post('/postEmail', data)
                .then(function(successCallback, errorCallback) {
                  console.log('email was success');
                });
        };
    }];

    angular
        .module("contactViewModule")
        .component("contactView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Contact/contact-view/contactView.template.html"
        });
})();
