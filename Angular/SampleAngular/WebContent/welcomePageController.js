
var app = angular.module('welcome', []);
app.controller('welcomecontroller',function($scope){
$scope.firstname="sandeep";
$scope.btnclick=function(value)
{
$scope.firstname=value;
}
});
