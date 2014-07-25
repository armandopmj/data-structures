var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // Create new node with value.
    var newNode = makeNode( value );

    // If no nodes, point head to this node.
    if( list.head === null && list.tail === null ){
      list.head = newNode;
      list.tail = newNode;
    }

    // Point previous node's pointer to new node.
    list.tail.next = newNode; //

    // Point tail to new node.
    list.tail = newNode;
  };

  list.removeHead = function(){
    var value = list.head.value;
    // removing element at head
    // switch head
    return value;
  };

  list.contains = function(target){
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

// var linkedList = makeLinkedList();
// linkedList.addToTail( 12 );
// return linkedList.head; // { value:12, next: null }
