import React from "react";
import Link from "next/link";

const ResourceComponent = () => {
    return (
        <>
            <ul className="flex items-center gap-4 text-secondary text-sm uppercase">
                <li className="px-4">
                    <Link href={"#"}>Buy</Link>
                </li>
                <li>
                    <Link href={"#"}>Homes</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Plot</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Commercial</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Rent</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>Agents</Link>
                </li>
                <li className="px-4">
                    <Link href={"#"}>New Projects</Link>
                </li>
            </ul>
        </>
    )
};

export default ResourceComponent;