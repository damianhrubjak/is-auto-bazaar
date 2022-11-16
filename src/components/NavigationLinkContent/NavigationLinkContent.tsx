import { NavigationLinkContentProps } from "@/types";

function NavigationLinkContent({
    className = "",
    content,
}: {
    content: NavigationLinkContentProps["content"];
    className?: string;
}) {
    return (
        <div
            className={`w-[calc(100%-4rem)] px-4 text-white text-left group ${className}`}
        >
            {content}
        </div>
    );
}

export default NavigationLinkContent;
