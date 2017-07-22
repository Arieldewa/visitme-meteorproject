import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './MainLayout.html';
import './style.css';
import './font-awesome.css';


var img_data = [
{
  quote : "Visit Me",
	img_src: '/slide-1.jpg',
	img_alt: 'sea'
},
{
	quote : "Visit Me",
  img_src: '/slide-2.jpg',
  img_alt: 'sea'
}
];
if (Meteor.isClient) {
  Meteor.subscribe('wisata');
  Template.swiper.helpers({swiper:img_data});
  Template.recomcity.helpers({recomcity:Wisata.find()});

  Template.swiper.onRendered(function (){
  	$(document).ready(function () {
      //initialize swiper when document ready  
      var mySwiper = new Swiper ('#header-swipe .swiper-container', {
        // Optional parameters
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'horizontal',                
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',	  
  	  autoplay: 10000

      })        
    });
  });

  Template.recomcity.onRendered(function (){
  	 $(document).ready(function () {
  	 	var swiper = new Swiper('.rekomkota .swiper-container', {
          scrollbar: '.rekomkota .swiper-scrollbar',
          scrollbarHide: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          grabCursor: true
      });
     });	
  });	
}