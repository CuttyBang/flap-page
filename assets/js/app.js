!function e(t,r,i){function n(c,a){if(!r[c]){if(!t[c]){var l="function"==typeof require&&require;if(!a&&l)return l(c,!0);if(o)return o(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=r[c]={exports:{}};t[c][0].call(f.exports,function(e){var r=t[c][1][e];return n(r?r:e)},f,f.exports,e,t,r,i)}return r[c].exports}for(var o="function"==typeof require&&require,c=0;c<i.length;c++)n(i[c]);return n}({1:[function(e,t,r){$(document).ready(function(){function e(){$(".menu ul li").velocity("transition.slideRightIn",{stagger:200,drag:!0})}function t(){$("header img").velocity("transition.expandIn",{stagger:800})}e(),t();var r=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:"#trigger1"}).setVelocity(".features",{opacity:1},{duration:1e3}).addTo(r),new ScrollMagic.Scene({triggerElement:"#trigger2"}).setVelocity(".features",{opacity:0},{duration:1e3}).addTo(r);$(".features").velocity({opacity:0}),$(".top-line").velocity({opacity:0}).velocity({opacity:1},{duration:2e3}),$(".call").click(function(){$(".call").velocity({scale:1.3},{duration:200}).velocity({scale:0},{duration:200,visibility:"hidden"})})})},{}]},{},[1]);