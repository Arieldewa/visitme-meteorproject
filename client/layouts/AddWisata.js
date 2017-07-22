import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './AddWisata.html';

if (Meteor.isClient) {
	Meteor.subscribe('wisata');
	Template.datawisata.helpers({datawisata:Wisata.find()});
	Template.updatewisata.helpers({updatewisata: ()=>{
			var id = FlowRouter.getParam('postId');
			return Wisata.find({_id:id},{limit :1});
		}
	});

	Template.tambahwisata.events({		
		'submit .tambah':function (event) {
			var wisata = event.target.wisata.value;
			var alamat = event.target.wisataalamat.value;
			var deskripsi = event.target.wisatadeskripsi.value;
			var imgwisata = event.target.imagewisata.value;
			var id = Meteor.userId();

			Meteor.call('buatwisata',wisata,alamat,deskripsi,imgwisata,id);
			
			event.target.wisata.value = "";		
			event.target.wisataalamat.value = "";		
			event.target.wisatadeskripsi.value = "";		
			event.target.imagewisata.value = "";		
			return false;
		},
		'click .add':function (event) {
			$('.form-area').css('display','block');
		}
	});
	Template.updatewisata.events({		
		'submit .tambah':function (event) {
			var wisata = event.target.wisata.value;
			var alamat = event.target.wisataalamat.value;
			var deskripsi = event.target.wisatadeskripsi.value;
			var imgwisata = event.target.imagewisata.value;
			var id = FlowRouter.getParam('postId');

			Meteor.call('ubahwisata',id,wisata,alamat,deskripsi,imgwisata);
			
			FlowRouter.go('/wisata');
			return false;
		}
	});
	Template.datawisata.events({
		'click .detailwisata':function (event) {
			FlowRouter.go('/detailwisata/'+this._id );
		},
		'click .hapus':function (event) {
			var id = this._id;
			console.log(id);
			Wisata.remove({_id:id});
		}
	});
}
if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish('wisata',function () {
  	return Wisata.find();
  });
}