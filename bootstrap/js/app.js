/**
 * Created by TDP on 12/22/13.
 */
app = angular.module("app", ['ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", {
        url: "/",
        template: '<p class="lead">Welcome to the UI-Router Demo</p>' +
            '<p>Use the menu above to navigate. ' +
            'Pay attention to the <code>$state</code> and <code>$stateParams</code> values below.</p>' +
            '<p>Click these links—<a href="#/app">Alice</a> or ' +
            '<a href="#/user/42">Bob</a>—to see a url redirect in action.</p>'
    });
    $stateProvider.state("app", {
        url: "/app",
        templateUrl: "views/app.html"
    });

    $stateProvider.state("resource", {
        url: "/resource",
        templateUrl:"views/resource.html"
    });

    $stateProvider.state("app.list", {
        url: "/logictemplates",
        templateUrl: "views/app.logictemplates.html"
    });

    $stateProvider.state("app.logictemplates", {
        url: "/logictemplates",
        templateUrl: 'views/app.logictemplates.html'
    });
    $stateProvider.state("app.softtemplates", {
        url: "/softtemplates"
    });

    $stateProvider.state("resource.list", {

    });

    $stateProvider.state("resource.dc", {

    });

    $stateProvider.state("resource.zone", {

    })
}]);
app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);
var html = document.getElementsByTagName("html")[0];
angular.bootstrap(angular.element(html), [app.name]);