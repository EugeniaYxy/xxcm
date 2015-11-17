
angular.module('formApp', [])
    .controller('formController', function($scope, $location, $anchorScroll) {
        'use strict';
        $scope.confirm = function() {
            $scope.showSuccessAlert = true;
            $location.hash('box');
            $anchorScroll();
        };
        $scope.tab = function() {
            $scope.showSuccessAlert = false;
        };
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
    });



    