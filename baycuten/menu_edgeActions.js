/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_ocultar}", "click", function(e) {
// play the timeline from the given position (ms or label)
this.play("ocultar");

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_ocultar2}", "click", function(e) {
// play the timeline from the current position
this.play();

});
//Edge binding end


Symbol.bindElementAction(compId, symbolName, "${_home}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../index.html", "_self");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_ipp}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../ipp/ippbaycuten.html", "_self");

});
//Edge binding end



Symbol.bindElementAction(compId, symbolName, "${_referenciaboton2}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("referencias/index.html", "_self");

});
//Edge binding end

})("stage");
//Edge symbol end:'stage'

})(jQuery, jQuery.Edge, "EDGE-15079447");
