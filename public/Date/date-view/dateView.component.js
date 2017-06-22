(function () {
    "use strict";

    var componentController =
    ["$filter",
    function ViewController($filter) {
        var vm = this;
        vm.searchDateArray = [];
        vm.id = '1';
        vm.lastNumber = 0;

        vm.randomNumber = function () {
            for (var key in vm.dates) {
                if (vm.dates[key].category == vm.categorySelected.category) {
                    vm.searchDateArray.push(vm.dates[key]);
                }
            }

            var getRandomNumber = Math.floor(Math.random() * key) + 0;

            if(getRandomNumber != vm.lastNumber){
                vm.rand = vm.searchDateArray[getRandomNumber].desc;
                vm.lastNumber = getRandomNumber;
            } else {
                vm.randomNumber();
            }
        }

        vm.dates = $filter('filter')(vm.dates, function (date) {
          return vm.id === vm.dates.category;
        });

        vm.dates = [
         {
             "index": 0,
             "desc": "Have a picnic in Laurelhurst Park",
             "price": 0,
             "category": "fun"
         },
         {
             "index": 1,
             "desc": "See a movie outside",
             "price": 0,
             "category": "fun"
         },
         {
             "index": 2,
             "desc": "Get cozy at Living Room Theater",
             "price": 5,
             "category": "fun"
         },
         {
             "index": 3,
             "desc": "See free art at the Portland Art Museum",
             "price": 5,
             "category": "nofun"
         },
         {
             "index": 4,
             "desc": "Play mini golf at Oaks Park",
             "price": 6,
             "category": "nofun"
         }
        ]
    }];

    angular
        .module("dateViewModule")
        .component("dateView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Date/date-view/dateView.template.html",
        });

})();
