import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './User.html';

if (Meteor.isClient) {
	Meteor.subscribe('userData');

	Template.listuser.helpers({listuser: ()=>{
		console.log(Meteor.users.find().fetch());
		return Meteor.users.find({}).fetch()}
	});
	Template.listuser.helpers({email: ()=>{
		console.log(Meteor.users.find().fetch());
		return Meteor.user().emails[0].address}
	});
	
}

if (Meteor.isServer) {
	Meteor.publish('userData',function () {
  	return Meteor.users.find({}).fetch();
  });
}