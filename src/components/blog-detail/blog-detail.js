import React from "react"
import "./blog-details.scss"
import BlogImage from "../../images/blog-detail.jpeg"
import Author from "../../images/people.jpeg"

function BlogDetail() {
  return (
    <article className="blog-detail">
      <div className="blog-detail__image">
        <img src={BlogImage} alt="Blog detail" />
      </div>

      <h1 className="blog-detail__title">
        Lorem Ipsum
      </h1>

      <div className="blog-detail__content">
        <p>
          Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. <strong>Curabitur non <em>nulla sit amet </em>nisl tempus convallis </strong> quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.
        </p>
        <p>
          <a href="/">Vivamus suscipit tortor </a> eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.
        </p>
        <blockquote cite="Some Author">
          Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
        </blockquote>
        <p>
          <a href="/">Vivamus suscipit tortor </a> eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.
        </p>
        <ul>
          <li>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</li>
          <li>Cras ultricies ligula sed magna dictum porta.</li>
          <li>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</li>
          <li>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</li>
        </ul>
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus. Pellentesque in ipsum id orci porta dapibus.
        <p>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        </p>

        <ol>
          <li>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</li>
          <li>Cras ultricies ligula sed magna dictum porta.</li>
          <li>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</li>
          <li>Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</li>
        </ol>

        <p>
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        </p>
        <h2>
          This is Headling level 2.
        </h2>

        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.
        </p>

        <h3>
          This is Headling level 3.
        </h3>
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Sed porttitor lectus nibh. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.
        </p>
        <p>
          Praesent <strong>sapien</strong> massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        </p>
      </div>

      <div className="author">
        <h2 className="author__section-title"> Know about the author</h2>
          <img className="author__image" src={Author} alt="author" />
        <h3 className="author__name">Lorem Ipsum</h3>
        <p className="author__intro">
          Sed porttitor lectus nibh. Sed porttitor lectus nibh. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
        </p>
      </div>
    </article>
  )
}

export default BlogDetail
