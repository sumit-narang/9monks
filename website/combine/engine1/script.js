// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-10-27
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(b,a){var c=jQuery;a.each(function(d){if(!d){c(this).show()}else{c(this).hide()}});this.go=function(d,e){c(a.get(d)).fadeIn(b.duration);c(a.get(e)).fadeOut(b.duration);return d}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-10-27
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"fade",prev:"",next:"",duration:20*100,delay:27*100,outWidth:1024,outHeight:500,width:1024,height:500,autoPlay:true,stopOnHover:false,loop:false,bullets:0,caption:false,controls:false});