
angular.module('formApp', [])
    .controller('formController', function ($scope, $http, $location, $anchorScroll) {
        'use strict';
        $scope.master = {
            lname: "",
            bDate: "",
            emailInp: ""
        };

        $scope.confirm = function() {
            $scope.showSuccessAlert = true;
            $location.hash('box');
            $anchorScroll();
        };

        $scope.tab = function() {
            $scope.showSuccessAlert = false;
        };

        $scope.reset = function() {
            console.log('reset called');
            $scope.showSuccessAlert = false;
            $scope.user = angular.copy($scope.master);
            $scope.signupForm.$setPristine();
        };

        $scope.user = {password:"",  cpassword:""};
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



    