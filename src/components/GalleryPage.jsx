import GalleryList from "./GalleryList";
import { gallery as galleryList } from "../data/gallery";
import { useEffect, useState } from "react";
import { getGalleryImagesApi } from "../utils/pixabayApi";
import { useSearchParams } from "react-router-dom";
import Paginator from "./Paginator";

const GalleryPage = () => {
  const [search, setSearch] = useSearchParams();
  const [gallery, setGallery] = useState([]);

  const q = search.get("q");
  const page = Number(search.get("page"));

  useEffect(() => {
    if (!q) return;
    const getGalleryImages = async () => {
      try {
        const { hits } = await getGalleryImagesApi(q, page);
        setGallery(hits);
      } catch (error) {
        console.log(error.message);
      }
    };
    getGalleryImages();
  }, [q, page]);

  useEffect(() => {
    gallery.length &&
      window.scrollTo({
        top: 0,
      });
  }, [gallery]);

  return (
    <>
      <GalleryList gallery={gallery} />
      <Paginator setSearch={setSearch} search={search} />
    </>
  );
};

export default GalleryPage;
