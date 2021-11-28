import React from "react"
import "./pagination.scss"

function Pagination() {
  return (
    <nav role="navigation" aria-label="Pagination Navigation" className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item"> <a href="/"  className="pagination__link active" aria-label="Current Page, Page 1" aria-current="true">1</a>
        </li>
        <li className="pagination__item"><a href="/" className="pagination__link" aria-label="Goto Page 2">2</a></li>
        <li className="pagination__item"><a href="/" className="pagination__link" aria-label="Goto Page 3">3</a></li>
        <li className="pagination__item"><a href="/" className="pagination__link" aria-label="Goto Page 4">4</a></li>
        <li className="pagination__item"><a href="/" className="pagination__link" aria-label="Goto Page 5">5</a></li>
      </ul>
    </nav>
  )
}

export default Pagination
