import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Blogs from "../components/blogs/blogs"
import Pagination from "../components/pagination/pagination"

const BlogsPage = () => (
  <Layout>
    <Seo title="Blogs" />
    <div className="page__title-intro">
      <h1 className="page-title">Our Blogs</h1>
      <p  className="intro-text">Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
    </div>
    <Blogs/>
    <Pagination/>
  </Layout>
)

export default BlogsPage
