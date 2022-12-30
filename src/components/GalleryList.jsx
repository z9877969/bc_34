import GalleryItem from "./GalleryItem";

const GalleryList = ({ gallery }) => {
  return (
    <ul
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "15px",
      }}
    >
      {gallery.map((el) => (
        <GalleryItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

export default GalleryList;
