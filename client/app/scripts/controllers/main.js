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
		{'name':'George Picked Up Suzie',
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
		{'name':'Congrats! George agreed to a modification of the schedule. You have earned the Flexible Family Badge and 20 points!',
		 'number':1,
		 'displayName':'Fullscreen Image',
		 'badge':'punctual_award.jpg',
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
		{'name':'Congrats on the smooth drop off! Courtney earned the Happy Transition Badge and 5 points!',
		 'number':1,
		 'details':'',
		 'badge':'punctual_award.jpg',
		 'displayName':'Fullscreen Image',
		 'icon':'',
		 'active':false,
		 'iconColor':'post-avatar-woman',
		 'date':'1288323623006',
		 'buttons':[
		 ]},
		{'name':'Requested Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'',
		 'iconColor':'post-avatar-man',
		 'active':true,
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'approve','class':'balanced'},
			 {'name':'deny','class':'assertive'},
		 ]},
		{'name':'Requested Schedule Change',
		 'number':1,
		 'details':'Requesting pickup time change from 4PM to 5PM on 11/12',
		 'displayName':'Fullscreen Image',
		 'icon':'',
		 'active':true,
		 'approved':false,
		 'iconColor':'post-avatar-man',
		 'date':'1288323623006',
		 'buttons':[
			 {'name':'Approve','class':'balanced','function':'approve()'},
			 {'name':'Reply','class':'energized','function':'modal.show()'}
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
	$scope.loginHide = function(){
		$scope.loginHidden = true;
	};
	$scope.approve = function(){
		$scope.approved = true;
	};
  });
