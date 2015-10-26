var app = angular.module('myApp', []);

app.directive('makeEditable', function() {
    return {
        restrict: 'A',
        transclude: true,
        templateUrl: 'edit-content.html',
        scope: true,
        link: function(scope) {
            scope.isEditable = false;
        }
    };
});