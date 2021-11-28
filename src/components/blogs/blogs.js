import React from "react"
import "./blogs.scss"
import { Link } from "gatsby"
import Bird from "../../images/bird.jpeg"
import Bird2 from "../../images/bird-2.jpeg"
import Nature from "../../images/nature.jpeg"
import Tech from "../../images/tech.jpeg"


function Blogs() {
  return (
    <section className="blog-teaser__wrapper">
      <div className="blog-teaser">
        <div className="blog-teaser__image">
          <img alt="nature wallpaper" src={Bird}/>
        </div>
        <div className="blog-teaser__content">
          <div className="blog-teaser__text">
            <h2 className="blog-teaser__text--title">
              <Link to="/blog-detail" className="blog-teaser__text--title-link">
                Lorem ipsum dolor
              </Link>
            </h2>
            <div className="blog-teaser__text--copy">
            <p>
              Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue.
            </p>
            </div>
          </div>
          <Link to="/blog-detail" className="blog-teaser__more-link button--primary" aria-label="Read more">
            Read More
          </Link>
        </div>
      </div>

      <div className="blog-teaser">
        <div className="blog-teaser__image">
          <img alt="nature wallpaper" src={Nature}/>
        </div>
        <div className="blog-teaser__content">
          <div className="blog-teaser__text">
            <h2 className="blog-teaser__text--title">
              <Link to="/blog-detail" className="blog-teaser__text--title-link">
                Lorem ipsum
              </Link>
            </h2>
            <div className="blog-teaser__text--copy">
            <p>
              Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.            </p>
            </div>
          </div>
          <Link to="/blog-detail" className="blog-teaser__more-link button--primary" aria-label="Read more">
            Read More
          </Link>
        </div>
      </div>

      <div className="blog-teaser">
        <div className="blog-teaser__image">
          <img alt="nature wallpaper" src={Tech}/>
        </div>
        <div className="blog-teaser__content">
          <div className="blog-teaser__text">
            <h2 className="blog-teaser__text--title">
              <Link to="/blog-detail" className="blog-teaser__text--title-link">
                Lorem ipsum dolor sit amet
              </Link>
            </h2>
            <div className="blog-teaser__text--copy">
            <p>
              Proin eget tortor risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.            </p>
            </div>
          </div>
          <Link to="/blog-detail" className="blog-teaser__more-link button--primary" aria-label="Read more">
            Read More
          </Link>
        </div>
      </div>

      <div className="blog-teaser">
        <div className="blog-teaser__image">
          <img alt="nature wallpaper" src={Bird2}/>
        </div>
        <div className="blog-teaser__content">
          <div className="blog-teaser__text">
            <h2 className="blog-teaser__text--title">
              <Link to="/blog-detail" className="blog-teaser__text--title-link">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Link>
            </h2>
            <div className="blog-teaser__text--copy">
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. </p>
            </div>

          </div>
          <Link to="/blog-detail" className="blog-teaser__more-link button--primary" aria-label="Read more">
            Read More
          </Link>
        </div>
      </div>

      <div className="blog-teaser">
        <div className="blog-teaser__image">
          <img alt="nature wallpaper" src="https://placeimg.com/1030/538/tech" />
        </div>
        <div className="blog-teaser__content">
          <div className="blog-teaser__text">
            <h2 className="blog-teaser__text--title">
              <Link to="/blog-detail" className="blog-teaser__text--title-link">
                Lorem ipsum dolor sit amet
              </Link>
            </h2>
            <div className="blog-teaser__text--copy"><p>
              Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta.            </p>
            </div>
          </div>
          <Link to="/blog-detail" className="blog-teaser__more-link button--primary" aria-label="Read more">
            Read More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs
