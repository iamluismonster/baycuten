/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var symbols = {
"stage": {
   version: "0.1.3",
   baseState: "Base State",
   initialState: "Base State",
   content: {
      dom: [
        {
            id:'bgmenu',
            className:'stage_bgmenu_id',
            type:'image',
            tag:'div',
            rect:[0,0,1024,63],
            fill:['rgba(0,0,0,0)','images/bgmenu.jpg']
        },
        {
            id:'menubg',
            className:'stage_menubg_id',
            type:'image',
            tag:'div',
            rect:[0,0,1024,63],
            fill:['rgba(0,0,0,0)','images/menubg.png']
        },
        {
            id:'ipp',
            className:'stage_ipp_id',
            type:'image',
            tag:'div',
            rect:[0,0,36,22],
            fill:['rgba(0,0,0,0)','images/ipp.jpg']
        },
        
        {
            id:'refresh',
            className:'stage_refresh_id',
            type:'image',
            tag:'div',
            rect:[0,0,37,22],
            fill:['rgba(0,0,0,0)','images/refresh.jpg']
        },
        {
            id:'home',
            className:'stage_home_id',
            type:'image',
            tag:'div',
            rect:[0,0,30,22],
            fill:['rgba(0,0,0,0)','images/home.jpg']
        },
        {
            id:'hidde',
            className:'stage_hidde_id',
            type:'image',
            tag:'div',
            rect:[0,0,30,22],
            fill:['rgba(0,0,0,0)','images/hidde.jpg']
        },
      
   
 
        {
            id:'hidde2',
            className:'stage_hidde2_id',
            type:'image',
            tag:'div',
            rect:[0,0,30,22],
            fill:['rgba(0,0,0,0)','images/hidde.jpg']
        },
        {
            id:'btninicio',
            className:'stage_btninicio_id',
            type:'image',
            tag:'div',
            rect:[0,0,154,27],
            fill:['rgba(0,0,0,0)','images/botonnegreo.jpg']
        },
        {
            id:'referencias',
            className:'stage_referencias_id',
            type:'image',
            tag:'div',
            rect:[0,0,81,22],
            fill:['rgba(0,0,0,0)','images/referencias.png']
        }],
      symbolInstances: [
      ]
   },
   states: {
      "Base State": {
         "${_btninicio}": [
            ["transform", "translateX", '3.99999px'],
            ["transform", "translateY", '2px']
         ],
         "${_btnprecios}": [
            ["transform", "translateX", '424.80003px'],
            ["transform", "translateY", '3px']
         ],
         "${_home}": [
            ["transform", "translateX", '947.83998px'],
            ["transform", "translateY", '34.00001px']
         ],
         "${_stage}": [
            ["style", "height", '63px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '1024px']
         ],
         "${_hidde}": [
            ["transform", "translateX", '986.12811px'],
            ["transform", "translateY", '34.00001px']
         ],
         "${_precios}": [
            ["transform", "translateX", '866.71201px'],
            ["transform", "translateY", '34.00001px']
         ],
         "${_btnpresentaciones}": [
            ["transform", "translateX", '279.36px'],
            ["transform", "translateY", '3px']
         ],
         "${_hidde2}": [
            ["transform", "translateX", '986.00002px'],
            ["transform", "translateY", '78px'],
            ["transform", "rotateZ", '0']
         ],
         "${_refresh}": [
            ["transform", "translateX", '906.64002px'],
            ["transform", "translateY", '34.99998px']
         ],
         "${_referencias}": [
            ["transform", "translateX", '781px'],
            ["transform", "translateY", '35px']
         ],
         "${_menubg}": [
            ["transform", "translateX", '0'],
            ["transform", "translateY", '0px']
         ],
         "${_btnbeneficios}": [
            ["transform", "translateX", '135.99999px'],
            ["transform", "translateY", '3px']
         ],
         "${_ipp}": [
            ["transform", "translateX", '866.71201px'],
            ["transform", "translateY", '34.00001px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1410,
         labels: {

         },
         timeline: [
            { id: "eid201", tween: [ "transform", "${_btnbeneficios}", "translateY", '73.00001px', { fromValue: '3px'}], position: 750, duration: 250 },
            { id: "eid1", tween: [ "style", "${_stage}", "width", '1024px', { fromValue: '1024px'}], position: 0, duration: 0 },
            { id: "eid52", tween: [ "transform", "${_btnbeneficios}", "translateX", '135.99999px', { fromValue: '135.99999px'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "transform", "${_btnbeneficios}", "translateX", '135.99999px', { fromValue: '135.99999px'}], position: 750, duration: 0 },
            { id: "eid180", tween: [ "transform", "${_btnbeneficios}", "translateX", '135.99999px', { fromValue: '135.99999px'}], position: 1000, duration: 0 },
            { id: "eid198", tween: [ "transform", "${_btnpresentaciones}", "translateY", '73.00001px', { fromValue: '3px'}], position: 750, duration: 250 },
            { id: "eid237", tween: [ "transform", "${_referencias}", "translateY", '35px', { fromValue: '35px'}], position: 0, duration: 0 },
            { id: "eid241", tween: [ "transform", "${_referencias}", "translateY", '73px', { fromValue: '35px'}], position: 750, duration: 250 },
            { id: "eid108", tween: [ "transform", "${_refresh}", "translateY", '34.99998px', { fromValue: '34.99998px'}], position: 0, duration: 0 },
            { id: "eid205", tween: [ "transform", "${_refresh}", "translateY", '73.00002px', { fromValue: '34.99998px'}], position: 750, duration: 250 },
            { id: "eid200", tween: [ "transform", "${_menubg}", "translateY", '73.00001px', { fromValue: '0px'}], position: 750, duration: 250 },
            { id: "eid230", tween: [ "transform", "${_btninicio}", "translateX", '3.99999px', { fromValue: '3.99999px'}], position: 0, duration: 0 },
            { id: "eid107", tween: [ "transform", "${_home}", "translateY", '34.00001px', { fromValue: '34.00001px'}], position: 0, duration: 0 },
            { id: "eid204", tween: [ "transform", "${_home}", "translateY", '73.00002px', { fromValue: '34.00001px'}], position: 750, duration: 250 },
            { id: "eid115", tween: [ "transform", "${_ipp}", "translateY", '34.00001px', { fromValue: '34.00001px'}], position: 0, duration: 0 },
            { id: "eid199", tween: [ "transform", "${_ipp}", "translateY", '73.00002px', { fromValue: '34.00001px'}], position: 750, duration: 250 },
            { id: "eid109", tween: [ "transform", "${_precios}", "translateY", '34.00001px', { fromValue: '34.00001px'}], position: 0, duration: 0 },
            { id: "eid203", tween: [ "transform", "${_precios}", "translateY", '73.00002px', { fromValue: '34.00001px'}], position: 750, duration: 250 },
            { id: "eid113", tween: [ "transform", "${_precios}", "translateX", '866.71201px', { fromValue: '866.71201px'}], position: 0, duration: 0 },
            { id: "eid160", tween: [ "transform", "${_precios}", "translateX", '866.71201px', { fromValue: '866.71201px'}], position: 750, duration: 0 },
            { id: "eid190", tween: [ "transform", "${_precios}", "translateX", '866.71201px', { fromValue: '866.71201px'}], position: 1000, duration: 0 },
            { id: "eid110", tween: [ "transform", "${_hidde}", "translateY", '34.00001px', { fromValue: '34.00001px'}], position: 0, duration: 0 },
            { id: "eid197", tween: [ "transform", "${_hidde}", "translateY", '73.00002px', { fromValue: '34.00001px'}], position: 750, duration: 250 },
            { id: "eid212", tween: [ "transform", "${_hidde2}", "translateY", '42.00001px', { fromValue: '78px'}], position: 935, duration: 260 },
            { id: "eid114", tween: [ "transform", "${_ipp}", "translateX", '825.69594px', { fromValue: '825.69594px'}], position: 0, duration: 0 },
            { id: "eid162", tween: [ "transform", "${_ipp}", "translateX", '825.69594px', { fromValue: '825.69594px'}], position: 750, duration: 0 },
            { id: "eid192", tween: [ "transform", "${_ipp}", "translateX", '825.69594px', { fromValue: '825.69594px'}], position: 1000, duration: 0 },
            { id: "eid213", tween: [ "transform", "${_hidde2}", "rotateZ", '180deg', { fromValue: '0deg'}], position: 935, duration: 260 },
            { id: "eid164", tween: [ "transform", "${_menubg}", "translateX", '0', { fromValue: '0'}], position: 750, duration: 0 },
            { id: "eid194", tween: [ "transform", "${_menubg}", "translateX", '0', { fromValue: '0'}], position: 1000, duration: 0 },
            { id: "eid111", tween: [ "transform", "${_refresh}", "translateX", '906.64002px', { fromValue: '906.64002px'}], position: 0, duration: 0 },
            { id: "eid158", tween: [ "transform", "${_refresh}", "translateX", '906.64002px', { fromValue: '906.64002px'}], position: 750, duration: 0 },
            { id: "eid188", tween: [ "transform", "${_refresh}", "translateX", '906.64002px', { fromValue: '906.64002px'}], position: 1000, duration: 0 },
            { id: "eid233", tween: [ "transform", "${_btninicio}", "translateY", '2px', { fromValue: '2px'}], position: 0, duration: 0 },
            { id: "eid243", tween: [ "transform", "${_btninicio}", "translateY", '73px', { fromValue: '2px'}], position: 750, duration: 250 },
            { id: "eid238", tween: [ "transform", "${_referencias}", "translateX", '742px', { fromValue: '742px'}], position: 0, duration: 0 },
            { id: "eid56", tween: [ "transform", "${_btnprecios}", "translateX", '424.80003px', { fromValue: '424.80003px'}], position: 0, duration: 0 },
            { id: "eid146", tween: [ "transform", "${_btnprecios}", "translateX", '424.80003px', { fromValue: '424.80003px'}], position: 750, duration: 0 },
            { id: "eid176", tween: [ "transform", "${_btnprecios}", "translateX", '424.80003px', { fromValue: '424.80003px'}], position: 1000, duration: 0 },
            { id: "eid92", tween: [ "transform", "${_hidde}", "translateX", '986.12811px', { fromValue: '986.12811px'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "transform", "${_hidde}", "translateX", '986.12811px', { fromValue: '986.12811px'}], position: 750, duration: 0 },
            { id: "eid184", tween: [ "transform", "${_hidde}", "translateX", '986.12811px', { fromValue: '986.12811px'}], position: 1000, duration: 0 },
            { id: "eid93", tween: [ "transform", "${_home}", "translateX", '947.83998px', { fromValue: '947.83998px'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "transform", "${_home}", "translateX", '947.83998px', { fromValue: '947.83998px'}], position: 750, duration: 0 },
            { id: "eid186", tween: [ "transform", "${_home}", "translateX", '947.83998px', { fromValue: '947.83998px'}], position: 1000, duration: 0 },
            { id: "eid2", tween: [ "style", "${_stage}", "height", '63px', { fromValue: '63px'}], position: 0, duration: 0 },
            { id: "eid202", tween: [ "transform", "${_btnprecios}", "translateY", '73.00001px', { fromValue: '3px'}], position: 750, duration: 250 },
            { id: "eid59", tween: [ "transform", "${_btnpresentaciones}", "translateX", '279.36px', { fromValue: '279.36px'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "transform", "${_btnpresentaciones}", "translateX", '279.36px', { fromValue: '279.36px'}], position: 750, duration: 0 },
            { id: "eid178", tween: [ "transform", "${_btnpresentaciones}", "translateX", '279.36px', { fromValue: '279.36px'}], position: 1000, duration: 0 },
            { id: "eid209", tween: [ "transform", "${_hidde2}", "translateX", '986.00002px', { fromValue: '986.00002px'}], position: 935, duration: 0 },
            { id: "eid206", tween: [ "transform", "${_hidde2}", "translateX", '986.00002px', { fromValue: '986.00002px'}], position: 1195, duration: 0 }]
      }
   }
}};

var comp;
Edge.registerCompositionDefn(compId, symbols);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     comp = new Edge.Composition(compId, {stage: "." + compId}, {});
	   /**
 * Adobe Edge Timeline Launch
 */
     comp.ready(function() {
         comp.play();
     });
});
})(jQuery, jQuery.Edge, "EDGE-14899433");
