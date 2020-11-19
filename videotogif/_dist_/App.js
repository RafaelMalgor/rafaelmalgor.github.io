import React, {useState, useEffect} from "../web_modules/react.js";
import logo2 from "./logo.svg.proxy.js";
import "./App.css.proxy.js";
import {createFFmpeg, fetchFile} from "../web_modules/@ffmpeg/ffmpeg.js";
const ffmpeg2 = createFFmpeg({log: true});
function App2() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const [exporting, setExporting] = useState(false);
  const load = async () => {
    await ffmpeg2.load();
    setReady(true);
  };
  const convertToGif = async () => {
    setExporting(true);
    ffmpeg2.FS("writeFile", "video.mp4", await fetchFile(video));
    await ffmpeg2.run("-i", "video.mp4", "-t", "2.5", "-ss", "2.0", "-f", "gif", "output.gif");
    const data = ffmpeg2.FS("readFile", "output.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "image/gif"}));
    setGif(url);
    setExporting(false);
  };
  useEffect(() => {
    load();
  });
  return ready ? /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement("h1", null, "Video To Gif"), /* @__PURE__ */ React.createElement("p", {
    class: "line-1 anim-typewriter"
  }, "Select a video to convert"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
    type: "file",
    onChange: (e) => setVideo(e.target.files?.item(0))
  })), video && /* @__PURE__ */ React.createElement("video", {
    controls: true,
    width: "500",
    src: URL.createObjectURL(video)
  }), /* @__PURE__ */ React.createElement("div", {
    className: "video-export"
  }, video && /* @__PURE__ */ React.createElement("button", {
    onClick: convertToGif
  }, "Export"), exporting && /* @__PURE__ */ React.createElement("p", null, "Exporting...")), gif && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, "Exported Gif"), /* @__PURE__ */ React.createElement("img", {
    src: gif,
    width: "500"
  }))) : /* @__PURE__ */ React.createElement("p", null, "Loading...");
}
export default App2;
