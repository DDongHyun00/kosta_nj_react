import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt="cover_image" />
      <h2>
        <a href={`/movie/${id}`}>a : {title}</a> <br />
        <Link to={`/movie/${id}`}>Link : {title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
