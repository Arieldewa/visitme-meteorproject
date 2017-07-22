Wisata = new Mongo.Collection("Wisata");
Komentar = new Mongo.Collection("Komentar");
User = new Mongo.Collection("User");

Wisata.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	},
	remove: function (userId, docs){
    return !!userId;
  }
});

Meteor.methods({
	//komentar
	kasihkomen: function(idwisata,komen,userid) {
		Komentar.insert({
			id_wisata:idwisata,
			komentar: komen,
			user:userid
		});
	}
	
});

Meteor.methods({
	buatwisata: function(wisata,alamat,desc,img,userid) {
		Wisata.insert({
			id_wisata: Random.id([3]),
			wisata: wisata,
			alamat:alamat,
			deskripsi:desc,			
			img: img,
			author: userid
		});
	},
	ubahwisata: function(id,wisata,alamat,desc,img) {
		Wisata.update({_id:id},{
			$set:{	
				wisata: wisata,
				alamat:alamat,
				deskripsi:desc,			
				img: img				
			}
			});
	}

});

Meteor.methods({
	aksesadmin: function (id) {
		User.insert({
			userid:id,
			status:1
		})
	}
})