import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import BlogDetail from "../components/blog-detail/blog-detail"

const BlogsDetailPage = () => (
  <Layout>
    <Seo title="Blog Detail" />
    <BlogDetail/>
  </Layout>
)

export default BlogsDetailPage
