import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Blogs from "../components/blogs/blogs"
import Pagination from "../components/pagination/pagination"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="page__title-intro">
      <h1 className="page-title">Lorem Ipsum</h1>
      <p className="intro-text">Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <Blogs/>
      <Pagination/>

  </Layout>
)

export default IndexPage
