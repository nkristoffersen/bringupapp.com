'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$ionicModal) {
	$scope.posts = [
		{'name':'Picked Up Child On Time',
		 'number':1,
		 'displayName':'Fullscreen Image',
		 'icon':'ion-ios7-person',
		 'iconColor':'post-icon-blue',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'reply','class':'default'},
			 {'name':'get help','class':'default'}
		 ]},
		{'name':'Requested Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'ion-ios7-calendar',
		 'iconColor':'post-icon-red',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'approve','class':'balanced'},
			 {'name':'deny','class':'assertive'},
		 ]},
		];
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  });
