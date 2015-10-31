var app = angular.module('flapperNews', ['ui.router'])

app.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}]);



app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  // $scope.test = 'Hello World';
  // turn our posts array into a factory(like a service) that we inject...
    // $scope.posts = [
    //   {title: 'post 1', upvotes: 5},
    //   {title: 'post 2', upvotes: 2},
    //   {title: 'post 3', upvotes: 15},
    //   {title: 'post 4', upvotes: 9},
    //   {title: 'post 5', upvotes: 4}
    // ];
  //here is our posts array from the factory...
  $scope.posts = posts.posts;

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') {return;}
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool Post!', upvotes: 0},
        {author: 'Bob', body: 'Great idea, but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };
  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  }

}]); //ends MainCtrol Controller

app.controller('PostsCtrl', [ '$scope', '$stateParams', 'posts', function($scope, $stateParams, posts ){
  $scope.post = posts.posts[$stateParams.id]
  $scope.addComment = function(){
    if($scope.body === '') {return;}
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };

  $scope.incrementUpvotes = function(comment){
    comment.upvotes += 1;
  }

}]); //ends posts controller


// this is creating a new state using the ui.router module we injected into our app..
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

    // NOTE: when we declare new state, dont forget to create new template and new controller for it.. and inject the right services to the controller

    $stateProvider
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);
