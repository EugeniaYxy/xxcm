
angular.module('formApp', [])

    .controller('FormController', function ($scope, $http) {

        $scope.submit = function() {
            // saw a submit function in the 31st line index file
            // if want, you can make the form refresh when
            // you hit submit? otherwise we should take
            // this out
        }
    })

    .directive('validDate', function() {
        return {
            require:'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.validDate = function(modelValue) {
                    var userImp = Date.parse(modelValue);
                    return !isNaN(userImp);
                }
            }
        }
    })


    .directive('validAge', function() {
        return {
            require:'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.validAge = function(modelValue) {
                    var currentDate = new Date();
                    var userImp = Date.parse(modelValue);
                    var year = (365 * 24 * 60 * 60 * 1000);
                    var age = (currentDate - userImp) / year;
                    return (age >= 13);
                }
            }
        }
    })


    .directive('validPassword', function() {
        return {
            require: 'ngModel',
            link: function(scope, elem, attrs, controller) {
                controller.$validators.validPassword = function(modelValue) {
                    var p1 = scope.user.password;
                    return (p1 === modelValue);
                }
            }
        }
    });

