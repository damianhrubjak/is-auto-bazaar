import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

function Heading({ children, className }: Props) {
    return <h1 className={`text-5xl font-bold ${className}`}>{children}</h1>;
}
export default Heading;
