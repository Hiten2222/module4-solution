// Define helloSpeaker and byeSpeaker functions
var helloSpeaker = {
    speak: function(name) {
      console.log("Hello " + name);
    }
  };
  
  var byeSpeaker = {
    speak: function(name) {
      console.log("Goodbye " + name);
    }
  };
  
  // Your code to loop over names and call the appropriate function
  (function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
  
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })();
  