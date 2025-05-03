import axios from "axios";
import { Image, ApiResponse } from "./interfaces";

const API_KEY = "C2m1TcTe09Cy4e8Po9lUpCohnUotnUS9ynI2h754Dyg";

export const fetchImages = async (
  query: string,
  page: number,
  per_page: number
): Promise<Image[]> => {
  try {
    const response = await axios.get<ApiResponse>(
      "https://api.unsplash.com/search/photos",
      {
        params: {
          client_id: API_KEY,
          query: query,
          page,
          per_page,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
