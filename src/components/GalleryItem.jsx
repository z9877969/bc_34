import { useEffect, useState } from "react";
import noImage from "../assets/img/no-image.png";

const GalleryItem = ({ webformatURL, tags, id }) => {
  const [isLoadedImg, setIsLoadedImage] = useState(true);

  useEffect(() => {
    setIsLoadedImage(false);
  }, []);

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid green",
      }}
      key={id}
    >
      <img
        onLoad={(e) => setIsLoadedImage(true)}
        // src={isLoadedImg ? webformatURL : noImage}
        src={webformatURL}
        alt={tags}
        height="326"
        style={!isLoadedImg ? { display: "none" } : {}}
      />
      {!isLoadedImg && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "326px",
          }}
        >
          <h1>Loading...</h1>
        </div>
      )}

      <p
        style={{
          padding: "10px 5px",
        }}
      >
        {tags}
      </p>
    </li>
  );
};

export default GalleryItem;
