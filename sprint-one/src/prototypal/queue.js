var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //?   var newQueue = Object.create( makeQueue.queueMethods );
  var newQueue = Object.create( queueMethods );
  newQueue.last = 0;
  newQueue.first = 0;
  newQueue.storage = {};
  return newQueue;
};

//? makeQueue.queueMethods = {};
var queueMethods = {};
//? makeQueue.queueMethods.enqueue = function(value){
queueMethods.enqueue = function(value){
  this.storage[ this.last ] = value;
  this.last++;
}
queueMethods.dequeue = function(){
  var value = this.storage[ this.first ];
  if( this.size() > 0 ){
    this.first++;
  }
  return value;
}
queueMethods.size = function(){
  return this.last - this.first;
}
