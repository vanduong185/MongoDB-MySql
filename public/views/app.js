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

  $scope.wait11 = false;
  $scope.wait21 = false;
  $scope.wait31 = false;
  $scope.wait41 = false;
  $scope.wait51 = false;
  $scope.wait61 = false;
  $scope.wait71 = false;
  $scope.wait81 = false;
  $scope.wait91 = false;

  $scope.wait12 = false;
  $scope.wait22 = false;
  $scope.wait32 = false;
  $scope.wait42 = false;
  $scope.wait52 = false;
  $scope.wait62 = false;
  $scope.wait72 = false;
  $scope.wait82 = false;
  $scope.wait92 = false;

  $scope.findOne = function() {
    $scope.wait11 = true;
    $scope.wait12 = true;
    $http.get("mongo/findOne").then(function success(response) {
      console.log(response);
      $scope.wait11 = false;
      $scope.mongo_data.timeFindOne = response.data.mongo_data.timeFindOne;
    })
    $http.get("mysql/findOne").then(function success(response) {
      $scope.wait12 = false;
      $scope.mysql_data.timeFindOne = response.data.mysql_data.timeFindOne;
    })
  }

  $scope.findAll = function() {
    $scope.wait21 = true;
    $scope.wait22 = true;
    $http.get("mongo/findAll").then(function success(response) {
      $scope.wait21 = false;
      $scope.mongo_data.timeFindAll = response.data.mongo_data.timeFindAll;
    })
    $http.get("mysql/findAll").then(function success(response) {
      $scope.wait22 = false;
      $scope.mysql_data.timeFindAll = response.data.mysql_data.timeFindAll;
    })
  }

  $scope.updateOne = function() {
    $scope.wait31 = true;
    $scope.wait32 = true;
    $http.get("mongo/updateOne").then(function success(response) {
      $scope.wait31 = false;
      $scope.mongo_data.timeUpdateOne = response.data.mongo_data.timeUpdateOne;
    })
    $http.get("mysql/updateOne").then(function success(response) {
      $scope.wait32 = false;
      $scope.mysql_data.timeUpdateOne = response.data.mysql_data.timeUpdateOne;
    })
  }

  $scope.updateMany = function() {
    $scope.wait41 = true;
    $scope.wait42 = true;
    $http.get("mongo/updateMany").then(function success(response) {
      $scope.wait41 = false;
      $scope.mongo_data.timeUpdateMany = response.data.mongo_data.timeUpdateMany;
    })
    $http.get("mysql/updateMany").then(function success(response) {
      $scope.wait42 = false;
      $scope.mysql_data.timeUpdateMany = response.data.mysql_data.timeUpdateMany;
    })
  }

  $scope.deleteOne = function() {
    $scope.wait51 = true;
    $scope.wait52 = true;
    $http.get("mongo/deleteOne").then(function success(response) {
      $scope.wait51 = false;
      $scope.mongo_data.timeDeleteOne = response.data.mongo_data.timeDeleteOne;
    })
    $http.get("mysql/deleteOne").then(function success(response) {
      $scope.wait52 = false;
      $scope.mysql_data.timeDeleteOne = response.data.mysql_data.timeDeleteOne;
    })
  }

  $scope.deleteMany = function() {
    $scope.wait61 = true;
    $scope.wait62 = true;
    $http.get("mongo/deleteMany").then(function success(response) {
      $scope.wait61 = false;
      $scope.mongo_data.timeDeleteMany = response.data.mongo_data.timeDeleteMany;
    })
    $http.get("mysql/deleteMany").then(function success(response) {
      $scope.wait62 = false;
      $scope.mysql_data.timeDeleteMany = response.data.mysql_data.timeDeleteMany;
    })
  }

  $scope.join2 = function() {
    $scope.wait71 = true;
    $scope.wait72 = true;
    $http.get("mongo/join2").then(function success(response) {
      $scope.wait71 = false;
      $scope.mongo_data.timeJoin2 = response.data.mongo_data.timeJoin2;
    })
    $http.get("mysql/join2").then(function success(response) {
      $scope.wait72 = false;
      $scope.mysql_data.timeJoin2 = response.data.mysql_data.timeJoin2;
    })
  }

  $scope.join3 = function() {
    $scope.wait81 = true;
    $scope.wait82 = true;
    $http.get("mongo/join3").then(function success(response) {
      $scope.wait81 = false;
      $scope.mongo_data.timeJoin3 = response.data.mongo_data.timeJoin3;
    })
    $http.get("mysql/join3").then(function success(response) {
      $scope.wait82 = false;
      $scope.mysql_data.timeJoin3 = response.data.mysql_data.timeJoin3;
    })
  }

  $scope.count = function() {
    $scope.wait91 = true;
    $scope.wait92 = true;
    $http.get("mongo/count").then(function success(response) {
      $scope.wait91 = false;
      $scope.mongo_data.timeCount = response.data.mongo_data.timeCount;
    })
    $http.get("mysql/count").then(function success(response) {
      $scope.wait92 = false;
      $scope.mysql_data.timeCount = response.data.mysql_data.timeCount;
    })
  }
})
