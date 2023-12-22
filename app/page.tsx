import Image from 'next/image'
import React from 'react';
import HomePageBannerComponent from './components/Home/banner';
import ExploreListings from './components/Home/ExploreListings';

export default function Home() {
  return (
    <>
      <HomePageBannerComponent />
      <ExploreListings />
    </>
  )
}
