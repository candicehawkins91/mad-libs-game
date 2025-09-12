onEvent("button1", "click", function () {
  var pluralNoun = getText("plNoun");
  var noun1 = getText("nn1");
  var noun2 = getText("nn2");
  var song = getText("sng");
  var verb = getText("vrb");
  var userMessage =
    "How to take care of your pet Emu.\n" +
    "1. Make sure your Emu eats plenty of \n" +
    pluralNoun +
    ".\n" +
    "2. Also, make sure your pet Emu gets plenty of \n" +
    noun1 +
    "\n as well." +
    "\n" +
    "3. Lastly, make sure your Emu has \n" +
    noun2 +
    "\n while" +
    " \n" +
    song +
    "\n" +
    verb +
    ".";
  setText("plNoun", pluralNoun);
  setText("nn1", noun1);
  setText("nn2", noun2);
  setText("sng", song);
  setText("vrb", verb);
  setText("concat", userMessage);

  setScreen("screen2");
});
onEvent("button2", "click", function () {
  setText("plNoun", "");
  setText("nn1", "");
  setText("nn2", "");
  setText("sng", "");
  setText("vrb", "");
  setText("concat", "");
});
