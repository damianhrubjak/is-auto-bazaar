import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function AppLayout({ children }: Props) {
    return (
        <div className="relative top-0 right-0 ml-auto mr-0 min-h-screen w-[calc(100%-4rem)] bg-zinc-900 p-4 text-slate-200">
            <div className="mx-auto w-full max-w-7xl">{children}</div>
        </div>
    );
}
export default AppLayout;
