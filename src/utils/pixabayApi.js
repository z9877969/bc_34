// https://pixabay.com/api/?&q=yellow+flowers&image_type=photo
import axios from "axios";

export const getGalleryImagesApi = async (q, page) => {
  try {
    const { data } = await axios.get("https://pixabay.com/api/", {
      params: {
        q,
        page,
        per_page: 8,
        image_type: "photo",
        key: "13965574-3ae6669f35304ffc6cddc1b72",
      },
    });

    return data; // fulfilledPromiseResult -> data
  } catch (error) {
    console.log(error.message);
    throw error; // rejectedPromiseResult -> error
  }
};
