import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { AdvertisementWithImages } from "@/types";

const fetchAdsImages = async (
    id: number
): Promise<AdvertisementWithImages[]> => {
    const { data } = await axios.get(
        `http://localhost:3000/images-of-ads?id=${id}`
    );
    return data.data;
};

function useImagesOfAds(id: number) {
    return useQuery(["images-of-ads", id], async () => fetchAdsImages(id), {
        staleTime: 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}
export default useImagesOfAds;
