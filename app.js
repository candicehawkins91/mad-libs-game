console.log("Hello from app js");

onEvent("button2", "click", function () {
  var pluralNoun = getValue("plural");
  var noun1 = getValue("nn1");
  var noun2 = getValue("nn2");
  var enterASong = getValue("sng");
  var enterAVerb = getValue("vrb");
  var concat = getValue("usermessage");
  console.log(pluralNoun);
  console.log(noun1);
});
var userMessage =
  "How to take care of your pet Emu.\n" +
  "1. Make sure your Emu eats plenty of \n" +
  plural +
  ".\n" +
  "2. Also, make sure your pet Emu gets plenty of \n" +
  nn1 +
  "\n as well." +
  "\n" +
  "3. Lastly, make sure your Emu has \n" +
  nn2 +
  "\n while" +
  " \n" +
  sng +
  "\n" +
  vrb +
  ".";
setText("plural", plural);
setText("nn1", nn1);
setText("nn2", nn2);
setText("sng", sng);
setText("vrb", vrb);
setText("concat", userMessage);

onEvent("button2", "click", function () {
  setText("plNoun", "");
  setText("nn1", "");
  setText("nn2", "");
  setText("sng", "");
  setText("vrb", "");
  setText("concat", "");
});
