(function() {
    'use strict';

    angular
        .module('app')
        .directive('navigation', navigation);

    navigation.$inject = ['$window'];
    
    function navigation ($window) {
        // Usage:
        //     <navigation></navigation>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'A'

        };
        return directive;

        function link(scope, element, attrs) {
            element.find('li').on('click', function () {
                angular.element(this)
                    .parent().children().removeClass('active');
                angular.element(this)
                    .addClass('active')
            });
        }
    }

})();