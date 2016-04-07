angular.module('app.services', [])

.factory('safeApply', [function($rootScope) {
    return function($scope, fn) {
        var phase = $scope.$root.$$phase;
        if(phase == '$apply' || phase == '$digest') {
            if (fn) {
                $scope.$eval(fn);
            }
        } else {
            if (fn) {
                $scope.$apply(fn);
            } else {
                $scope.$apply();
            }
        }
    }
}])


.service('cardService', function() {
    this.requestCards = function() {
      var cardsRequest = new WLResourceRequest(
        "/adapters/mockAdapter/getCards",
        WLResourceRequest.GET
      );

      cardsRequest.setQueryParameters("params", "[]");

      return cardsRequest.send().then(function(result){
        return result.responseJSON;
      })
    },
    this.requestTransactions = function(cardId) {
      var cardsRequest = new WLResourceRequest(
        "/adapters/mockAdapter/getCardTransactions",
        WLResourceRequest.GET
      );

      cardsRequest.setQueryParameter("params", "['" + cardId + "']");

      return cardsRequest.send().then(function(result){
        return result.responseJSON;
      })
    },
    this.setLimit = function(limit) {
      var cardsRequest = new WLResourceRequest(
        "/adapters/mockAdapter/setLimit",
        WLResourceRequest.GET
      );

      cardsRequest.setQueryParameter("params", "['" + limit + "']");

      return cardsRequest.send().then(function(result){
        return result.responseJSON;
      })
    },
    this.requestLimit = function() {
      var cardsRequest = new WLResourceRequest(
        "/adapters/mockAdapter/getLimit",
        WLResourceRequest.GET
      );

      cardsRequest.setQueryParameter("params", "[]");

      return cardsRequest.send().then(function(result){
        return result.responseJSON;
      })
    },
    this.requestMessages = function() {
      var cardsRequest = new WLResourceRequest(
        "/adapters/mockAdapter/getMessages",
        WLResourceRequest.GET
      );

      cardsRequest.setQueryParameter("params", "[]");

      return cardsRequest.send().then(function(result){
        return result.responseJSON;
      })
    }
})
