import React from "react";
import SearchComponent from "./search";
const HomePageBannerComponent = () => {
    return (
        <>
            <div className="bg-cover bg-center h-custom" style={{ backgroundImage: "url('/toronto.jpg')" }}>
                <SearchComponent />
            </div>
        </>
    )
};

export default HomePageBannerComponent;