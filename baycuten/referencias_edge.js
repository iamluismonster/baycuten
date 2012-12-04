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
            id:'bg',
            className:'stage_bg_id',
            type:'image',
            tag:'div',
            rect:[0,0,1024,768],
            fill:['rgba(0,0,0,0)','images/bg.jpg']
        }
        
        
        ],
      symbolInstances: [
      ]
   },
   states: {
      "Base State": {
         
         "${_stage}": [
            ["style", "height", '768px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '1024px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         labels: {

         },
         timeline: [
           
            { id: "eid1", tween: [ "style", "${_stage}", "height", '768px', { fromValue: '768px'}], position: 0, duration: 0 }
            ]
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
})(jQuery, jQuery.Edge, "EDGE-56250589");
