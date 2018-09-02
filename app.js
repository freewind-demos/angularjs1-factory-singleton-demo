const app = angular.module('app', [])

app.factory('RandomNumber', function () {
    console.log('------- factory: RandomNumber')
    return Math.random()
})

app.controller('MyController1', function ($scope, RandomNumber) {
    $scope.message = 'random number: ' + RandomNumber
})

app.controller('MyController2', function ($scope, RandomNumber) {
    $scope.message = 'random number: ' + RandomNumber
})