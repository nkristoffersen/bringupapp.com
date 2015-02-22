'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope,$ionicModal,$ionicScrollDelegate,$timeout) {
	$scope.posts = [
		{'name':'George Picked Up Child On Time',
		 'number':1,
		 'displayName':'Fullscreen Image',
		 'icon':'',
		 'active':false,
		 'iconColor':'post-avatar-man',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'reply','class':'default'},
			 {'name':'get help','class':'default'}
		 ]},
		{'name':'George Requested Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'',
		 'active':false,
		 'iconColor':'post-avatar-man',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'approve','class':'balanced'},
			 {'name':'deny','class':'assertive'},
		 ]},
		{'name':'Courtney Approved Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'',
		 'active':false,
		 'iconColor':'post-avatar-woman',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'approve','class':'balanced'},
			 {'name':'deny','class':'assertive'},
		 ]},
		{'name':'Requested Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'ion-ios7-calendar',
		 'active':false,
		 'iconColor':'post-icon-red',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'approve','class':'balanced','function':'approved()',},
			 {'name':'deny','class':'assertive','function':'modal.show()',},
		 ]},
		{'name':'Requested Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'ion-ios7-calendar',
		 'active':true,
		 'iconColor':'post-icon-red',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'approve','class':'balanced'},
			 {'name':'deny','class':'assertive'},
		 ]},
		{'name':'Requested Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'ion-ios7-calendar',
		 'active':true,
		 'approved':false,
		 'iconColor':'post-icon-red',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'approve','class':'balanced','function':'approve()'},
			 {'name':'deny','class':'assertive','function':'modal.show()'}
		 ]},
		];
 //modal 
 $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
 
	//scroll to bottom 
	$timeout(function() {
    $ionicScrollDelegate.scrollBottom([true]);
  },3000);
	$scope.approve = function(){
		$scope.approved = true;
	};
  });
