import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Audiodes = () => {
  const { id } = useParams();
  const [podcast, setSelectedPodcast] = useState(null);
  const [audioError, setAudioError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/podcasts/${id}`)
      .then((response) => setSelectedPodcast(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleAudioError = () => {
    setAudioError(true);
    console.error(`Failed to load audio for podcast `);
    console.log({ audioError });
  };

  if (podcast && podcast.episodes.length > 0) {
    return (
      <div>
        <h2>{podcast.title}</h2>
        {podcast.description}
        {console.log(podcast)}

        <audio controls autoplay onError={handleAudioError}>
          <source src={podcast.episodes[0].audio} type="audio/mpeg" />
        </audio>
      </div>
    );
  }

  return (
    <div>
      {/* <h2>{podcast.title}</h2>
      {podcast.description}
      {console.log(podcast)} */}
      <audio controls autoPlay>
        <source
          src="https://www.listennotes.com/e/p/312c39ca41644e42a35bc12759ad63f1/"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};
