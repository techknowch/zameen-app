import React from "react";
import Link from "next/link";
import HomeSVG from "../Visuals/homeSvg";

const SinisterComponent = () => {
    return (
        <>
            <ul className="flex items-center gap-4 text-white text-sm uppercase">
                <li className="flex items-center justify-center px-4 gap-2">
                    <Link href={"#"}> <HomeSVG /> </Link>
                    <Link href={"#"}>Properties</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Plot Finder</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Area Guides</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Blog</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Maps</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Tools</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>More</Link>
                </li>
            </ul>
        </>
    )
};

export default SinisterComponent;