var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create( stackMethods );
  newStack.count = 0;
  newStack.storage = {};

  return newStack;

};

var stackMethods = {
  push: function( value ) {
    this.storage[ this.count ] = value;
    this.count++;
  },
  pop: function() {
    if( this.size() ) this.count--;
    var value = this.storage[this.count];
    delete this.storage[ this.count ];
    return value;
  },
  size: function() {
    return this.count;
  }
};
