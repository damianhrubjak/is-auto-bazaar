import { ChangeEvent, InputHTMLAttributes, useRef } from "react";

import { debounce } from "lodash-es";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    onDebouncedChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ onDebouncedChange = () => undefined, ...rest }: Props) {
    const debouncedHandler = useRef(
        debounce(async (e) => {
            onDebouncedChange(e);
        }, 300)
    ).current;

    return (
        <input
            {...rest}
            onChange={debouncedHandler}
            className={`"w-full rounded-md border-none bg-slate-700 px-4 py-2 text-lg placeholder-slate-300 outline-none ring-2 ring-transparent transition duration-300 focus:ring-fuchsia-500 ${rest.className}`}
        />
    );
}
export default Input;
