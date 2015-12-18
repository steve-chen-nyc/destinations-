angular
  .module('Destinations', ['ui.router'])
  .config(MainRouter);

  function MainRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('index', {
        url: "/",
    })
      .state('new', {
      url: "/new",
      templateUrl: "new.html"
    })
      .state('show', {
      url: "/destinations/:id",
      templateUrl: "show.html"
    });
   $urlRouterProvider.otherwise("/");
  }
