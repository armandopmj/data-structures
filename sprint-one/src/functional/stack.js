var makeStack = function(){
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    count && count--;
    var value = storage[count];
    delete storage[count];
    return value;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};