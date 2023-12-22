import React from "react";
import Link from "next/link";

const DexterComponent = () => {
    return (
        <>
            <div className="flex gap-3">
                <input className="rounded-sm px-1" type="text" placeholder="Property ID" />
                <button className="px-1 py-1 text-sm rounded-sm bg-white">Add Property</button>
            </div>
        </>
    )
};

export default DexterComponent;