import React from 'react'
import BlogCard from '../../components/blogs/BlogsCard'
import CommonHero from '../../components/common/CommonHero'

const Blogs = () => {
  return (
    <>
        <CommonHero heading={'Our Blogs'}/>
        <BlogCard/>   
    </>
  )
}

export default Blogs