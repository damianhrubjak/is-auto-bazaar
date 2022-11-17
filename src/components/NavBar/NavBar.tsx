import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
    ChevronDoubleRightIcon,
    DocumentMagnifyingGlassIcon,
    HomeIcon,
} from "@heroicons/react/24/solid";

import NavigationLinkContent from "../NavigationLinkContent";
import NavigationLinkIcon from "../NavigationLinkIcon";

function NavBar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`${
                isExpanded ? "translate-x-0" : "-translate-x-64"
            } fixed left-0 top-0 z-30 h-screen w-80 bg-black/50 bg-gradient-to-b backdrop-blur-md transition duration-500`}
        >
            <button
                className="flex w-full items-center"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <NavigationLinkContent content={null} />
                <NavigationLinkIcon
                    icon={
                        <ChevronDoubleRightIcon
                            className={`w-8 fill-slate-200 transition duration-200 ${
                                isExpanded ? "-scale-x-100" : "scale-x-100"
                            }`}
                        />
                    }
                />
            </button>
            <div className="mt-16">
                {navLinks.map(({ to, text, icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={`group mt-4 flex w-full items-center bg-transparent transition duration-300 first:mt-0 ${
                            isExpanded ? "hover:bg-fuchsia-500" : ""
                        }`}
                        title={text}
                    >
                        <NavigationLinkContent
                            content={text}
                            className="text-xl font-bold transition duration-300 group-hover:text-black"
                        />
                        <NavigationLinkIcon
                            // \shadow-transparent
                            className="bg-transparent transition duration-300 hover:bg-fuchsia-500"
                            icon={icon}
                        />
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
export default NavBar;

const navLinks = [
    {
        to: "/",
        text: "Domov",
        icon: (
            <HomeIcon className="w-8 fill-fuchsia-500 transition duration-300 group-hover:fill-black" />
        ),
    },
    {
        to: "report",
        text: "Report",
        icon: (
            <DocumentMagnifyingGlassIcon className="w-8 fill-fuchsia-500 transition duration-300 group-hover:fill-black" />
        ),
    },
];
