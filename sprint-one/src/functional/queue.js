var makeQueue = function(){
  var someInstance = {};
  var first_i = last_i = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[ last_i ] = value;
    last_i++;
  };

  someInstance.dequeue = function(){
    var value = storage[first_i];
    if( first_i < last_i ){
      first_i++;
    }
    return value;
  };

  someInstance.size = function(){
    return last_i - first_i;
  };

  return someInstance;
};
