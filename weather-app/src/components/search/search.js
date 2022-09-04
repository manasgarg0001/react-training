import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import axios from "axios";
import {GEO_API_URL}
const Search = (onSearchChange) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="search for the city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
