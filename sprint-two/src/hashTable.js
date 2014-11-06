var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  console.log( 'this._storage: ', this._storage );
  var i = getIndexBelowMaxForKey(k, this._limit);
  if( this._storage.get(i)  ) this._storage[ i ].push( k, v );
  else this._storage.set(i, [ k, v ]); 
  console.log( 'this._storage: ', this._storage.storage );
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
