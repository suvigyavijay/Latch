'use strict';

angular.module('latchApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/',
          views: {
              'content': {
                  templateUrl: 'views/landing.html'
              }
          }

      })

      .state('app.register', {
          url: 'register',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/register.html'
              }
          }

      })

      .state('app.login', {
          url: 'login',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/login.html'
              }
          }

      })


      .state('app.nick', {
          url: 'nick',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/nick.html'
              }
          }

      })
       .state('app.interests', {
          url: 'interests',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/interests.html'
              }
          }

      })

      .state('app.profile', {
          url: 'profile',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/profile.html'
              }
          }

      })


      .state('app.main', {
          url: 'main',
          views: {
              'header@': {
                  templateUrl: 'views/header.html',
              },
              'content@': {
                  templateUrl: 'views/home.html'
              }
          }

      })

      // route for the map page
      .state('app.location', {
          url: 'location',
          views: {
              'header@': {
                  templateUrl: 'views/header.html',
              },
              'content@': {
                  templateUrl: 'views/location.html'
              }
          }
      })

      // route for the chats page
      .state('app.chats', {
          url: 'chats',
          views: {
              'header@': {
                  templateUrl: 'views/header.html',
              },
              'content@': {
                  templateUrl: 'views/chats.html'
              }
          }
      })



      // route for the groups page
      .state('app.groups', {
          url: 'groups',
          views: {
              'header@': {
                  templateUrl: 'views/header.html',
              },
              'content@': {
                  templateUrl: 'views/groups.html'
              }
          }
      })

      .state('app.message', {
          url: 'message',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/messages.html'
              }
          }
      })


      .state('app.group_info', {
          url: 'group_info',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/group_info.html'
              }
          }
      })

     .state('app.group_message', {
          url: 'group_message',
          views: {
              'header@': {
                  templateUrl: 'views/group_chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/group_messages.html'
              }
          }
      })

      .state('app.settings', {
          url: 'settings',
          views: {
              'header@': {
                  templateUrl: 'views/chat_header.html',
              },
              'content@': {
                  templateUrl: 'views/settings.html'
              }
          }
      })

      // route for the test page
      .state('app.sample', {
          url: 'sample',
          views: {
              'content@': {
                  templateUrl: 'views/sample.html'
              }
          }
      })

      ;

      // route to redirect to home in case URL not defined
      $urlRouterProvider.otherwise('/');

  })

.directive("compareTo", function() {
  return {
      require: "ngModel",
      scope: {
          otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

          ngModel.$validators.compareTo = function(modelValue) {
              return modelValue == scope.otherModelValue;
          };

          scope.$watch("otherModelValue", function() {
              ngModel.$validate();
          });
      }
  };
})

.run(function ($rootScope, $location) {

    var history = [];

    $rootScope.$on('$locationChangeStart', function() {
        history.push($location.$$path);
//        console.log(history);
    });

    $rootScope.back = function () {
        var prevUrl = history.length > 1 ? history.splice(-2)[0] : "/";
//        console.log(prevUrl);
        $location.path(prevUrl);
    };

});
