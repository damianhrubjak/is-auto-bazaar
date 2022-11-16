import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function AppLayout({ children }: Props) {
    return (
        <div className="p-4 relative top-0 right-0 ml-auto mr-0 min-h-screen w-[calc(100%-4rem)] bg-zinc-900 text-slate-200">
            {children}
        </div>
    );
}
export default AppLayout;
