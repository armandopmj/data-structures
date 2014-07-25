var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode( value );
    if( list.head === null && list.tail === null ){
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;
  };

  list.removeHead = function(){
    var value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target){
    var node = arguments.length === 2 ? arguments[1] : list.head;
    if( node.value === target ) return true;
    if( node.next === null ) return false;
    return list.contains( target, node.next )
  };
  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
