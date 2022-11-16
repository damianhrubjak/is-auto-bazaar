import { NavigationLinkContentProps } from "@/types";

function NavigationLinkIcon({
    className = "",
    icon,
}: {
    icon: NavigationLinkContentProps["icon"];
    className?: string;
}) {
    return (
        <div
            className={`w-12 m-2 h-12 rounded-md flex items-center justify-center group ${className}`}
        >
            {icon}
        </div>
    );
}

export default NavigationLinkIcon;
