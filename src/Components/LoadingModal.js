import React from "react";

import GifImage from "../loading-gif.gif";

function LoadingModal() {
  return (
    <div className="loading-modal">
      <img src={GifImage} />
      <p>Loading...</p>
    </div>
  );
}

export default LoadingModal;
