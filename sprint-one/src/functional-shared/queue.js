var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var some_instance = {
    storage: {},
    first: 0,
    last: 0
  };
  _.extend(some_instance, queueMethods);
  return some_instance;
};

var queueMethods = {
  enqueue: function(value){
    this.storage[ this.last ] = value;
    this.last++;
  },
  dequeue: function(){
    var value = this.storage[ this.first ];
    if( this.size() > 0 ){
      this.first++;
    }
    return value;
  },
  size: function(){
    return this.last - this.first;
  }

};



