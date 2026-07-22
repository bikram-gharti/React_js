import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

if (!UNSPLASH_KEY) {
  console.error("Vite failed to load VITE_UNSPLASH_KEY. Check your .env file name and restart your server!");
}

export const fetchPhotos = async (query, page = 1, per_page = 20) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    },
  });

  return res.data
};