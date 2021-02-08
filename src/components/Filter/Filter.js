import React from "react";
import { connect } from "react-redux";

import actions from "../../redux/operations";
import selectors from "../../redux/selectors";
import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return <input type="text" value={value} onChange={onChange}></input>;
}
// console.log("!!!getFilter", selectors.getFilter());

const mapStateToProps = (state) => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(actions.filterContact(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
