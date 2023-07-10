import playerStyles from "@components/player.module.css";

export const AudioPreview = ({ audioUrl }) => (
  <li
    id="audio-controls"
    className={playerStyles.controls}
  >
    <figure
      className={playerStyles.figure}
      title="Play audio track preview from Spotify"
    >
      {" "}
      <audio
        src={audioUrl}
        preload="metadata"
        controls
        className={playerStyles.audioPlayer}
      >
        <p>Play audio preview</p>
      </audio>
    </figure>
  </li>
);
