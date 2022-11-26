import { FormEvent, useRef } from "react";

import axios from "axios";

import Heading from "@/components/Heading";
import StatusBar from "@/components/StatusBar";
import useImages from "@/services/api/imagesAPI";

function Images() {
    const { data, isFetching, refetch } = useImages();
    const inputFileRef = useRef<HTMLInputElement | null>(null);

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        if (inputFileRef.current === null) {
            return;
        }

        Array.from(inputFileRef.current?.files || []).map(async (file) => {
            const fd = new FormData();
            fd.append("BODY", file);

            const axiosConfig = {
                method: "POST",
                url: "https://gd6c764d654bbac-autobazar.adb.eu-frankfurt-1.oraclecloudapps.com/ords/autobazar/images/api",
                params: { NAZOV: file.name, MIME_TYPE: file.type },
                headers: {
                    accept: "application/json",
                    "Content-Type": file.type,
                },
                data: fd,
            };

            try {
                const result = await axios(axiosConfig);
                console.log({ result });
            } catch (error) {
                console.warn({ error });
            }
        });

        const resetForm = event.target as HTMLFormElement;
        resetForm.reset();

        event.preventDefault();
    };

    return (
        <>
            <Heading>
                <span>Všetky nahrané obrázky</span>
                <div className="mt-2 h-2 w-24 items-end rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500"></div>
            </Heading>

            <form method="post" onSubmit={submitForm}>
                <div className="mt-16 flex justify-start gap-4">
                    <input
                        className=" block rounded-md bg-slate-600 py-3 px-4"
                        type="file"
                        name="files"
                        multiple
                        accept="image/*"
                        ref={inputFileRef}
                    />
                    <button
                        type="submit"
                        className="block rounded-md bg-purple-500 py-3 px-4 font-bold transition duration-300 hover:bg-purple-700"
                    >
                        Odoslat
                    </button>
                </div>
            </form>

            <div className="mt-16">
                <StatusBar
                    isFetching={isFetching}
                    onRefetchClick={() => refetch()}
                />
            </div>

            <div className="grid grid-cols-3 gap-8">
                {data !== undefined &&
                    !isFetching &&
                    data?.map(({ id, name, image, mime_type }) => (
                        <div key={id} className="w-full">
                            <div className="flex h-24 items-center rounded-t-md bg-slate-800 p-2">
                                <h2 className="text-lg font-bold text-fuchsia-500">
                                    {name}
                                </h2>
                            </div>
                            <img
                                className="h-96 w-full rounded-b-md object-cover"
                                src={`data:${mime_type};base64,${image}`}
                                alt={name}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}
export default Images;
