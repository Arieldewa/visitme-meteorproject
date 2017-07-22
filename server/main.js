import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish('wisata',function () {
  	return Wisata.find();
  });

  Meteor.publish('komentar',function () {
  	return Komentar.find();
  });

  Meteor.publish('alluser',function () {
  	return Meteor.users.find({},{fields:{emails:1}});
  });

  Meteor.publish('userData', function () {
		  if (this.userId) {
		    return Meteor.users.find({ _id: this.userId }, {
		      fields: { other: 1, things: 1 }
		    });
		  } else {
		    this.ready();
		  }
	});
}