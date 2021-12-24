import * as React from "react";
import videojs from "video.js";

// Styles
import "video.js/dist/video-js.css";

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
}

const initialOptions: any = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false
    }
  }
};

const VideoPlayer: React.FC<any> = ({ options }) => {
  const videoNode = React.useRef<any>();
  const player = React.useRef<any>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options
    }).ready(function () {
      var track1 = new videojs.AudioTrack({
        id: "my-spanish-audio-track1",
        kind: "translation",
        label: "Spanish",
        language: "es",
        enabled: true
      });
      var track2 = new videojs.AudioTrack({
        id: "my-spanish-audio-track2",
        kind: "translation",
        label: "Eng",
        language: "en",
        enabled: true
      });
      var track3 = new videojs.AudioTrack({
        id: "my-spanish-audio-track3",
        kind: "translation",
        label: "tamil",
        language: "tr",
        enabled: true
      });
      this.audioTracks().addTrack(track1);
      this.audioTracks().addTrack(track2);
      this.audioTracks().addTrack(track3);
      console.log("onPlayerReady", this.audioTracks());
      var audioTrackList = this.audioTracks();

      // Listen to the "change" event.
      audioTrackList.addEventListener("change", function () {
        // Log the currently enabled AudioTrack label.
        for (var i = 0; i < audioTrackList.length; i++) {
          var track = audioTrackList[i];
          console.log(track);

          if (track.enabled) {
            videojs.log(track.label);
            return;
          }
        }
      });
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return (
    <>
      {/* <video ref={videoNode} className="video-js" /> */}
      <video ref={videoNode} className="video-js" controls>
        <source
          id="my-spanish-audio-track1"
          src="https://www.tunepocket.com/wp-main/uploads/TunePocket-May-The-Fun-Be-With-You-30-Sec-Preview.mp3"
          type="audio/ogg"
        />
        <source
          id="my-spanish-audio-track2"
          src="https://www.tunepocket.com/wp-main/uploads/TunePocket-Middle-East-Journey-30-Sec-Preview.mp3"
          type="audio/ogg"
        />
        <source
          id="my-spanish-audio-track3"
          src="https://www.tunepocket.com/wp-main/uploads/TunePocket-Lucky-30-Sec-Preview.mp3"
          type="audio/ogg"
        />
      </video>
    </>
  );
};

export default VideoPlayer;
