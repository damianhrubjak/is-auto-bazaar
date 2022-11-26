import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { Image } from "@/types";

const fetchImages = async (): Promise<Image[]> => {
    const { data } = await axios.get("http://localhost:3000/files");
    return data.data;
};

function useImages() {
    return useQuery(["files"], fetchImages, {
        staleTime: 60 * 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}
export default useImages;
