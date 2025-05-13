import React from 'react'
import Hero from '../../components/home/Hero'
import OurProperties from '../../components/home/OurProperties'
import Faq from '../../components/common/Faq'
import LatestBlogs from '../../components/home/LatestBlogs'
import ClientReview from '../../components/home/ClientReview'
import ExploreLatest from '../../components/home/ExploreLatest'

const HomeHero = () => {
  return (
    <>
      <Hero />
      <OurProperties />
      <ExploreLatest/>
      <ClientReview/>
      <LatestBlogs/>
      <Faq />
      
    </>
  )
}

export default HomeHero