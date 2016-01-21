var app = angular.module('myApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/home.html',
    controller: 'homeController'
  })
  $locationProvider.html5Mode(true)
})


app.controller('homeController', ['$scope', function($scope){

  $scope.positives = ['supercool', 'rad', 'nice', 'neat', 
  'awesome', 'Darrin', 'Jaroop', 'Cats & Dogs']

  $scope.negatives = ['terrible', 'no', 'negative', 'rude']

  $scope.addTerm = function(isValid) {
    $scope.myForm.isSubmitted = true;
    if (isValid) {  
      if ($scope.type == 'positive') {
        $scope.positives.push($scope.term);
      }
      else if ($scope.type == 'negative') { 
        $scope.negatives.push($scope.term); 
      }
    $scope.term = '';
    $scope.type = '';
    $scope.myForm.isSubmitted = false;
    }
  }

  $scope.removeLabelPositives = function() {
    $scope.positives.splice($scope.positives.indexOf(this.positive), 1);
  }

  $scope.removeLabelNegatives = function() {
    $scope.negatives.splice($scope.negatives.indexOf(this.negative), 1);
  }

  $scope.showAttributesPositive = function(){
    $scope.term = this.positive;
    $scope.type = 'positive';
  }

  $scope.showAttributesNegative = function(){
    $scope.term = this.negative;
    $scope.type = 'negative';
  }

}]);
