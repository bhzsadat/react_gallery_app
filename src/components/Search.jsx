import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import searchIcon from '../assets/search.png';

const Search = ({ fetchData }) => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData(query);
        navigate(`/search/${query}`);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="search" name="search" placeholder="Search" required value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit" className="search-button">
            <img src={searchIcon} alt="Search" height="24" width="24" />
            </button>
        </form>
    );
};

Search.propTypes = {
    fetchData: PropTypes.func.isRequired
  };

export default Search;