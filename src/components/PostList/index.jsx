import React, { useEffect, useState } from "react";
import queryString from "query-string";
import PostList from "./Post";
import Pagination from "./Pagination";
import PostFilterForm from "./PostFilterForm";

List.propTypes = {};

function List(props) {
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters); //=> to query filters object to _limit=10&_page=1
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log(error.message);
      }
    }

    // console.log("POST LIST useEffect");
    fetchPostList();
  }, [filters]);

  // useEffect(() => {
  //   console.log("TODO LIST useEffect");
  // });

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  function handlePageChange(newPage) {
    console.log("NewPage", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleFilterChange(newFilters) {
    console.log(newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <div className="app">
      <h3>Post List - Use Effect</h3>
      <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default List;
