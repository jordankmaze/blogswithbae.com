(function () {
    "use strict";

    var componentController =
    ["$filter",
    function ViewController($filter) {
        var vm = this;
        vm.searchDateArray = [];
        vm.id = '1';
        vm.lastNumber = 0;

        vm.changedValue = function () {
          vm.searchDateArray = [];
          for (var key in vm.dates) {
              if (vm.dates[key].category == vm.categorySelected.category) {
                  vm.searchDateArray.push(vm.dates[key]);
              }
          }
        }

        vm.randomNumber = function () {
            var getRandomNumber = Math.floor(Math.random() * vm.searchDateArray.length) + 0;

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
             "category": "<$10"
         },
         {
             "index": 1,
             "desc": "See a movie outside",
             "price": 0,
             "category": "<$10"
         },
         {
             "index": 2,
             "desc": "Get cozy at Living Room Theater",
             "price": 5,
             "category": "<$10"
         },
         {
             "index": 3,
             "desc": "See free art at the Portland Art Museum",
             "price": 5,
             "category": "<$10"
         },
         {
             "index": 4,
             "desc": "Play mini golf at Oaks Park",
             "price": 6,
             "category": "<$10"
         },
         {
             "index": 5,
             "desc": "Tigard Balloon Festival",
             "price": 30,
             "category": ">$10"
         },
         {
             "index": 6,
             "desc": "Stand in line at Salt and Straw",
             "price": 12,
             "category": ">$10"
         },
         {
             "index": 7,
             "desc": "Dinner at 23Hoyt",
             "price": 50,
             "category": ">$10"
         },
         {
             "index": 8,
             "desc": "Drinks at Sauce ",
             "price": 15,
             "category": ">$10"
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
