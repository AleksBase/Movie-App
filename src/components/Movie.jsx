import React from 'react'
import PropTypes from 'prop-types'

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <div className="movie__up">
        <img src={poster} alt={title} title={title} />
        <div className="movie__text-box">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__list">
                {genre}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="movie__inner">
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  ganres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie
