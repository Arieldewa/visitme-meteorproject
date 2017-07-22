import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './Komentar.html';

if (Meteor.isClient) {
	Meteor.subscribe('komentar');
	Template.komentarlist.helpers({komentarlist: ()=>{
				var wisataid = FlowRouter.getParam('postId');				
				return Komentar.find({id_wisata:wisataid});
			}
		});	
	Template.komentar.events({
		'submit .komentar':function (event) {
			var wisataid = FlowRouter.getParam('postId');
			var wisata = Wisata.findOne({_id:wisataid})
			var v = event.target.komentar.value;
			var id= Meteor.userId();
			Meteor.call('kasihkomen',wisata._id,v,id);
			
			event.target.komentar.value = "";		
			return false;
		}
	});
	Template.wisatadetail.helpers({wisatadetail: ()=> {
					var wisataid = FlowRouter.getParam('postId');
					return Wisata.find({_id: wisataid});
			}
	});
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish('komentar',function () {
  	return Komentar.find();
  });
}