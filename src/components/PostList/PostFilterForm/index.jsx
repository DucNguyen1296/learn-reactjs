import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";

PostFilterForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterForm.defaultProps = {
  onSubmit: null,
};

function PostFilterForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeOutRef = useRef(null);

  function handleSearchTermChange(e) {
    e.preventDefault();
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) {
      return;
    }

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };

      onSubmit(formValues);
    }, 300);
  }
  return (
    <form action="">
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFilterForm;
