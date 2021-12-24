import * as React from "react";
import { render } from "react-dom";

import VideoPlayer from "./video";

import "./styles.css";

const videoJsOptions = {
  muted: true,
  sources: [
    // {
    //   src:
    //     "https://demo.unified-streaming.com/k8s/vod2live/stable/unified-learning.isml/.m3u8",
    //   type: "application/x-mpegURL"
    // },
    {
      src: "https://vjs.zencdn.net/v/oceans.mp4"
      // type: "application/x-mpegURL"
    }
    // {
    //   src:
    //     "https://www.tunepocket.com/wp-main/uploads/TunePocket-Middle-East-Journey-30-Sec-Preview.mp3"
    //   // type: "audio/mp3"
    // }
    // {
    //   src:
    //     "https://dash.akamaized.net/dash264/TestCases/10a/1/iis_forest_short_poem_multi_lang_480p_single_adapt_aaclc_sidx.mpd",
    //   type: "application/dash+xml"
    // }
  ],
  tracks: [
    // {
    //   kind: "subtitles",
    //   srclang: "en",
    //   src:
    //     "https://kot-politiken.s3-eu-west-1.amazonaws.com/2019/114_en.vtt.txt",
    //   default: true
    // },
    // {
    //   kind: "captions",
    //   srclang: "ja",
    //   src:
    //     "http://solutions.brightcove.com/bcls/assets/captions/intro-vcs-jp.vtt",
    //   default: false
    // }
    // {
    //   id: "my-spanish-audio-track",
    //   kind: "translation",
    //   // label: "Spanish",
    //   // language: "es",
    //   src:
    //     "https://www.tunepocket.com/wp-main/uploads/TunePocket-Middle-East-Journey-30-Sec-Preview.mp3"
    // }
  ]
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
