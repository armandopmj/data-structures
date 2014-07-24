2014-07-data-structures
=======================
Hack Reactor Blog
Sep
09
JavaScript Instantiation Patterns By HR Student Brett Hoyer

By: Hack Reactor In: General

As I delve deeper into JavaScript, I find many language quirks that might puzzle a novice developer.  One such topic is object instantiation, which comes in many different flavors.  There seems to be much debate regarding the 'proper' way to create a class structure in JavaScript, but it should be noted that pseudo-classical instantiation is significantly optimized by web browsers.  Being that each pattern can be used to achieve a similar result, it is important to familiarize yourself with all four techniques explained below.
In order to to uphold some reasonable consistency, all four examples will revolve around instantiating Chuck Norris objects.
Functional Instantiation:
var makeChuckNorris = function() {   var chuck = {};   chuck.age = 73;   chuck.strength = 200;   chuck.goTanning = function() {     this.age--   };   chuck.useTotalGym = function() {     this.strength++   };   return chuck; }; var newChuck = makeChuckNorris();
The functional pattern requires that all methods are defined within the maker function.  This means that newChuck, and every subsequent object created with this maker function will have the goTanning and useTotalGym methods directly on the object.  What's the problem you ask? Surely, this is intuitive, but this pattern violates the DRY (don't repeat yourself) principle by blatantly repeating method definition on each individual object.  This issue will be evident as we move forward.
Functional Instantiation with shared methods
  var makeChuckNorris = function() {     var chuck = {};     chuck.age = 73;     chuck.strength = 200;     _.extend(chuck, sharedMethods);     return chuck;   };   var sharedMethods = {};   sharedMethdods.goTanning = function() {     this.age--   };   sharedMethods.useTotalGym = function() {     this.strength++   };   var newChuck = makeChuckNorris();
This pattern utilizes the Underscore.js utility library, by extending the sharedMethods object onto the returned object (chuck).  Now, when creating newChuck using the maker function, we not only have access to the strength and age properties, but also the methods defined in sharedMethods.  This subtlety holds weight, in that sharedMethods could be used to extend other objects in a similar manner, thus preventing code replication.
Prototypal Instantiation
  var makeChuckNorris = function() {     var chuck = Object.create(chuckMethods);     chuck.age = 73;     chuck.strength = 200;   };   var chuckMethods = {};   chuckMethods.goTanning = function() {     this.age--   };   chuckMethods.useTotalGym = function() {     this.strength++   };   var newChuck = makeChuckNorris();
At first glance, the prototypal pattern looks quite similar to the functional-shared pattern, and in many ways it is.  The difference lies in the location of the methods being applied to the instantiated object.  In the prototypal pattern, usingObject.create(), the object returned from the maker function delegates to another object.  This means, for instance, that calling the useTotalGym method on newChuck will result in a "failed lookup", causing newChuck to"consult" chuckMethods for access to the method.  Were I to define a different useTotalGym method directly on newChuck, this method would take precedence over the method defined in chuckMethods.  This allows for a great deal of flexibility.  
Pseudo-Classical Instantiation
  var ChuckNorris = function() {     this.age = 73;     this.strength = 200;   };   ChuckNorris.prototype.goTanning = function() {     this.age--   };   ChuckNorris.prototype.useTotalGym = function() {     this.strength++   };
var newChuck = new Chuck()
Understanding the pseudo-classical pattern requires some contextual understanding of what is happening when instantiating an object using the 'new' keyword.  Here's what's happening under the hood:
  var ChuckNorris = function() {   /*this = Object.create(ChuckNorris.prototype)*/     this.age = 73;     this.strength = 200;   /*return this*/   };   ChuckNorris.prototype.goTanning = function() {     this.age--   };   ChuckNorris.prototype.useTotalGym = function() {     this.strength++   };
var newChuck = new Chuck()
The implicit 'this binding' causes a great deal of confusion, and for obvious reasons. When using the 'new' keyword, the object is automatically created and returned from the constructor function. Another potential source of confusion stems from the Object.prototype syntax.  Every function in JavaScript comes with its own prototype property, which can be quite useful when constructing objects.  In this pattern, newChuck has access to the goTanningand useTotalGym methods, by delegating to the prototype of the constructor function (ChuckNorris).
While serving the same purpose, these four techniques employ different means by which objects obtain their methods.  If you would like further clarification, or feel this content could be improved, feel free to reach out!
