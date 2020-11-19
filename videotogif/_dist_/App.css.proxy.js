// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');\n\nbody{\n  background-color: rgb(211, 221, 75);\n}\n\nbody, button, p, h1, h2, h3{\n  font-family: 'Press Start 2P', cursive;\n}\n\n.App {\n  text-align: center;\n  border-color: rgb(88, 88, 170);\n  border-style: groove;\n  border-width: 8px;\n  margin: auto;\n  width: 510px;\n}\n\nbutton{\n  background-color: chartreuse;\n  padding: 5px 10px 5px 10px;\n  font-family: 'Press Start 2P', cursive;\n}\n\n.video-export{\n  margin-top: 10px;\n}\n\n.line-1{\n  position: relative;\n  top: 50%;  \n  width: 25em;\n  margin: 0 auto;\n  border-right: 2px solid rgba(255,255,255,.75);\n  font-size: 100%;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  transform: translateY(-50%);    \n}\n\n.anim-typewriter{\n  animation: typewriter 4s steps(25) 1s 1 normal both,\n             blinkTextCursor 500ms steps(25) infinite normal;\n}\n\n@keyframes typewriter{\n  from{width: 0;}\n  to{width: 25em;}\n}\n\n@keyframes blinkTextCursor{\n  from{border-right-color: rgba(0,0,0,.75);}\n  to{border-right-color: transparent;}\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}