
import React from "react";
import SinisterComponent from "./sinister";
import DexterComponent from "./dexter";
import ResourceComponent from "./resource";

const NavbarComponent = () => {
    return (
        <>
            <header>
                <div className="flex justify-between w-full bg-primary-color py-2 px-5">
                    <SinisterComponent />
                    <DexterComponent />
                </div>
                <div className="flex items-center gap-4 w-full bg-light-grey py-2 px-5">
                    <div className="logo text-secondary font-italic">NextEstate</div>
                    <div className="list"><ResourceComponent /></div>
                </div>
            </header>
        </>
    );
};

export default NavbarComponent;