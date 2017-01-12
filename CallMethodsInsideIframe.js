
document.getElementById("iframe").contentWindow.postMessage(
      "buy",
      "*",
      frames[0]);

document.getElementById("iframe").contentWindow.postMessage(
      "buy",
      "*");

window.frames[0].postMessage({'action':'buy'}, '*');