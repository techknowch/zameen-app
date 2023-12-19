import React from "react";
import Link from "next/link";
import HomeSVG from "../Svgs/homeSvg";

const SinisterComponent = () => {
    return (
        <>
            <ul className="flex text-white">
                <li>
                    <Link href={"#"}> <HomeSVG /> </Link>
                </li>
                <li>
                    <Link href={"#"}></Link>
                </li>
                <li>
                    <Link href={"#"}>Area Guides</Link>
                </li>
                <li>
                    <Link href={"#"}>Blog</Link>
                </li>
                <li>
                    <Link href={"#"}>Maps</Link>
                </li>
                <li>
                    <Link href={"#"}>Tools</Link>
                </li>
                <li>
                    <Link href={"#"}>More</Link>
                </li>
            </ul>
        </>
    )
};

export default SinisterComponent;