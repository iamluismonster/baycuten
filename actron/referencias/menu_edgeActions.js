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

Symbol.bindElementAction(compId, symbolName, "${_btnbeneficios}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../beneficios/index.html", "_self");

});
//Edge binding end



Symbol.bindElementAction(compId, symbolName, "${_btnpresentaciones}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../presentaciones/index.html", "_self");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_btnprecios}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../precios/index.html", "_self");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_ipp}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../../ipp/ippactron.html", "_self");});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_home}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../../index.html", "_self");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_refresh}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("index.html", "_self");

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_precios}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../precios/index.html", "_self");

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1410, function(e) {
// stop the timeline at the current position
this.stop();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_hidde}", "click", function(e) {
// play the timeline from the given position (ms or label)
this.play(560);

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_hidde2}", "click", function(e) {
// play the timeline in reverse from its current location
this.playReverse();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_btninicio}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../index.html", "_self");
});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_referencias}", "click", function(e) {
// Navigate to a new URL in the current window
// (replace "_self" with another name for a new window)
window.open("../referencias/index.html", "_self");

});
//Edge binding end

})("stage");
//Edge symbol end:'stage'

})(jQuery, jQuery.Edge, "EDGE-14899433");
