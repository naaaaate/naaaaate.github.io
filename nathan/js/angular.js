function pageCtrl() {
  var self = this;

  self.banner = true
  self.portfolio = false
  self.about = false
  self.contact = false

  self.losangeles = false

  self.pages = [];
  self.addPage = function(page){
    self.pages.push(page)
  }

  // self.select = function(selectedPage){
  //   selectedPage.active = true;
  // }


  self.showBanner = function(){
   self.banner = true;
   self.portfolio = false;
   self.about = false;
   self.contact = false;
  }

  self.showPortfolio =  function(){
   self.portfolio = true;
   self.banner = false;
   self.about = false;
   self.contact = false;
  }

  self.showAbout = function(){
    self.about = true;
    self.banner = false;
    self.portfolio = false;
    self.contact = false;
  }

  self.showContact = function() {
    self.contact = true;
    self.banner = false;
    self.about = false;
    self.portfolio = false;
  }
}

angular.module('app', ['ngAnimate'])
//controller
.controller('pageCtrl', pageCtrl)




// Define directives here
.directive('portfolio', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'portfolio.html',
    // require says this tab directive needs to be nested inside of another directive that has a controller
    // so we are requiring a controller and now it becomes avail in the link function as the 4th option..
    // the ^ says move up scope heirarchy and look for controller on tabset
    scope: {
      heading: '@'
    },
    link: function(scope, elem, attr){
      scope.nate = "Hi from portfolio scope link function"
      scope.active = false
      // now we can access properties and methods on the tabset controller
      pageCtrl.addPage(scope)
    }
  }
})

.directive('banner', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'banner.html',
    scope: {},
    link: function(scope, elem, attr){
      scope.active = true
      // pageCtrl.addPage(scope)
    }
  }
})

.directive('about', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'about.html',
    scope: {},
    link: function(scope, elem, attr){
      scope.active = true
      // pageCtrl.addPage(scope)
    }
  }
})

.directive('contact', function(){
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'contact.html',
    scope: {},
    link: function(scope, elem, attr){
      scope.active = true
      // pageCtrl.addPage(scope)
    }
  }
})





