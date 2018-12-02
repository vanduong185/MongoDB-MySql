myApp = angular.module('app', [])

myApp.controller("AppController", function($scope, $http) {
  $scope.mongo_data = {
    timeFindOne: "",
    timeUpdateOne: "",
    timeUpdateMany: "",
    timeDeleteOne: "",
    timeDeleteMany: "",
    timeJoin2: "",
    timeJoin3: "",
    timeCount: ""
  };

  $scope.mysql_data = {
    timeFindOne: "",
    timeUpdateOne: "",
    timeUpdateMany: "",
    timeDeleteOne: "",
    timeDeleteMany: "",
    timeJoin2: "",
    timeJoin3: "",
    timeCount: ""
  };

  $scope.wait1 = false;
  $scope.wait2 = false;
  $scope.wait3 = false;
  $scope.wait4 = false;
  $scope.wait5 = false;
  $scope.wait6 = false;
  $scope.wait7 = false;
  $scope.wait8 = false;
  $scope.wait9 = false;

  $scope.findOne = function() {
    $scope.wait1 = true;
    $http.get("/findOne").then(function success(response) {
      console.log(response)
      $scope.wait1 = false;
      $scope.mongo_data.timeFindOne = response.data.mongo_data.timeFindOne;
      $scope.mysql_data.timeFindOne = response.data.mysql_data.timeFindOne;
    })
  }

  $scope.findAll = function() {
    $scope.wait2 = true;
    $http.get("/findAll").then(function success(response) {
      console.log(response)
      $scope.wait2 = false;
      $scope.mongo_data.timeFindAll = response.data.mongo_data.timeFindAll;
      $scope.mysql_data.timeFindAll = response.data.mysql_data.timeFindAll;
    })
  }

  $scope.updateOne = function() {
    $scope.wait3 = true;
    $http.get("/updateOne").then(function success(response) {
      console.log(response)
      $scope.wait3 = false;
      $scope.mongo_data.timeUpdateOne = response.data.mongo_data.timeUpdateOne;
      $scope.mysql_data.timeUpdateOne = response.data.mysql_data.timeUpdateOne;
    })
  }

  $scope.updateMany = function() {
    $scope.wait4 = true;
    $http.get("/updateAll").then(function success(response) {
      console.log(response)
      $scope.wait4 = false;
      $scope.mongo_data.timeUpdateMany = response.data.mongo_data.timeUpdateMany;
      $scope.mysql_data.timeUpdateMany = response.data.mysql_data.timeUpdateMany;
    })
  }

  $scope.deleteOne = function() {
    $scope.wait5 = true;
    $http.get("/deleteOne").then(function success(response) {
      console.log(response)
      $scope.wait5 = false;
      $scope.mongo_data.timeDeleteOne = response.data.mongo_data.timeDeleteOne;
      $scope.mysql_data.timeDeleteOne = response.data.mysql_data.timeDeleteOne;
    })
  }

  $scope.deleteMany = function() {
    $scope.wait6 = true;
    $http.get("/deleteMany").then(function success(response) {
      console.log(response)
      $scope.wait6 = false;
      $scope.mongo_data.timeDeleteMany = response.data.mongo_data.timeDeleteMany;
      $scope.mysql_data.timeDeleteMany = response.data.mysql_data.timeDeleteMany;
    })
  }

  $scope.join2 = function() {
    $scope.wait7 = true;
    $http.get("/join2").then(function success(response) {
      console.log(response)
      $scope.wait7 = false;
      $scope.mongo_data.timeJoin2 = response.data.mongo_data.timeJoin2;
      $scope.mysql_data.timeJoin2 = response.data.mysql_data.timeJoin2;
    })
  }

  $scope.join3 = function() {
    $scope.wait8 = true;
    $http.get("/join3").then(function success(response) {
      console.log(response)
      $scope.wait8 = false;
      $scope.mongo_data.timeJoin3 = response.data.mongo_data.timeJoin3;
      $scope.mysql_data.timeJoin3 = response.data.mysql_data.timeJoin3;
    })
  }

  $scope.count = function() {
    $scope.wait9 = true;
    $http.get("/count").then(function success(response) {
      console.log(response)
      $scope.wait9 = false;
      $scope.mongo_data.timeCount = response.data.mongo_data.timeCount;
      $scope.mysql_data.timeCount = response.data.mysql_data.timeCount;
    })
  }
})
