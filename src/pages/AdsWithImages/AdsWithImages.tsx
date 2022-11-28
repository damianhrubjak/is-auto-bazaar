import { useState } from "react";

import Heading from "@/components/Heading";
import Input from "@/components/Input";
import StatusBar from "@/components/StatusBar";
import useImagesOfAds from "@/services/api/imagesOfAdsAPI";

function AdsWithImages() {
    const [id, setId] = useState(0);
    const { data, isFetching, refetch } = useImagesOfAds(id);

    return (
        <>
            <Heading>
                <span>Inzeráty s obrázkami</span>
                <div className="mt-2 h-2 w-24 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />

                <Input
                    type="number"
                    step="1"
                    placeholder="Číslo inzerátu"
                    onDebouncedChange={(event) => {
                        setId(Number(event.target.value));
                    }}
                />
            </div>
            {data !== undefined &&
                !isFetching &&
                data?.map(({ advertisement, image, mime_type, name }) => (
                    <div
                        key={`${advertisement.vin}`}
                        className="relative mt-16 w-full overflow-hidden rounded-md bg-slate-700 p-4"
                    >
                        <div className="">
                            <p className="text-2xl font-bold text-fuchsia-500">
                                {advertisement.brand} {advertisement.model}
                            </p>
                            <p className="mt-2 text-lg">
                                Farba: {advertisement.color}
                            </p>
                        </div>
                        <h3 className="mt-4 mb-2 text-xl">Obrázok:</h3>
                        <div
                            key={`${advertisement.vin}--${name}`}
                            className="rounded-md bg-slate-800 p-4"
                        >
                            <img
                                className=" w-full rounded-b-md object-cover"
                                src={`data:${mime_type};base64,${image}`}
                                alt={name}
                            />
                            <h4 className="mt-2">{name}</h4>
                        </div>
                    </div>
                ))}
        </>
    );
}
export default AdsWithImages;
