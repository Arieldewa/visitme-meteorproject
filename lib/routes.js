import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

 
FlowRouter.route('/', {
  name: 'home',
  action() {
  	BlazeLayout.setRoot('body');
    BlazeLayout.render('MainLayout', {main: 'home'});
  },
});


FlowRouter.route('/home', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  },
});

FlowRouter.route('/wisata', {
  name: 'home',
  action() {
    BlazeLayout.render('pagewisata', {mainwisata: "datawisata"});
  },
});
FlowRouter.route('/wisata/tambah', {  
  action () {  	
    BlazeLayout.render("pagewisata", {mainwisata: "tambahwisata"});
  }
});
FlowRouter.route('/wisata/:postId', {  
  action : function (params) {  	
    BlazeLayout.render("pagewisata", {mainwisata: "updatewisata"});
  }
});
FlowRouter.route('/detailwisata', {
  name: 'home',
  action() {
    BlazeLayout.render('komentar');
  },
});

FlowRouter.route('/detailwisata/:postId', {
    action: function(params) {
        BlazeLayout.render("detailwisata", {wisata: "wisatadetail"});
    }
});
FlowRouter.route('/user/', {
    action: function(params) {
        BlazeLayout.render("listuser");
    }
});