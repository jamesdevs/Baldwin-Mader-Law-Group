import Layout from '@/components/layout/Layout'
import SEO from '@/components/seo'
import { INFO } from '@/constants'
import BlogPage from '@/sections/blogPage'
import React from 'react'

const blog = () => {
  return (
    <Layout>
    <SEO title={`Blog | ${INFO.companyName}`} />
    <BlogPage />
  </Layout>
  )
}

export default blog