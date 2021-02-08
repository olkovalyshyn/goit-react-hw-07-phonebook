import React from "react";
import { useSelector, useDispatch } from "react-redux";

import selectors from "../../redux/contacts-selectors";
import { filterContact } from "../../redux/actions";
import PropTypes from "prop-types";

function Filter() {
  const value = useSelector(selectors.getFilter);
  const dispatch = useDispatch();
  const onChange = ({ target }) => dispatch(filterContact(target.value));
  console.log(value);

  return <input type="text" value={value} onChange={onChange}></input>;
}
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
