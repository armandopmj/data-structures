var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var some_instance = {
    count: 0,
    stack: {}
  }

  _.extend( some_instance, stackMethods );

  return some_instance;
};

var stackMethods = {
  push: function( value ){
    this.stack[ this.count ] = value;
    this.count++;
  },
  pop: function(){
    console.log(this.stack);
    if( this.count ) this.count--;
    var value = this.stack[ this.count ];
    delete this.stack[ this.count ];
    return value;
  },
  size: function(){
    return this.count;
  }
};


