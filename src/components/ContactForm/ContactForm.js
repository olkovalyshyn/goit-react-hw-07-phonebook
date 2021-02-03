import { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import * as actions from "../../redux/actions";
import addContact from "../../redux/actions";
import s from "./ContactForm.module.css";

function ContactForm({ contactsItem }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // console.log(
  //   "!!!addContact",
  //   addContact({
  //     name: "ert",
  //     number: 1,
  //   })
  // );

  // console.log(
  //   "!!!addData",
  //   actions.addData({
  //     name: "2",
  //     number: 2,
  //   })
  // );

  const handleChange = (event) => {
    switch (event.currentTarget.name) {
      case "name":
        setName(event.currentTarget.value);
        break;

      case "number":
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   contactsItem.find((item) => item.name.toLowerCase() === name.toLowerCase())
  //     ? alert(`${name} is already in contacts.`)
  //     : onAdd(name, number);
  //   setName("");
  //   setNumber("");
  // };

  // console.log("!!!contactsItem123", contactsItem);

  const handleSubmit = ({ event }) => {
    event.preventDefault();
    contactsItem.find((item) => item.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : addContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          className={s.input}
          value={name}
          onChange={handleChange}
        ></input>
      </label>

      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          className={s.input}
          value={number}
          onChange={handleChange}
        ></input>
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    contactsItem: state.contacts.item,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (name, number) => dispatch(actions.addData(name, number)),
//   };
// };

export default connect(mapStateToProps)(ContactForm);

// class OldContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   handleChange = (event) => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({ name: "", number: "" });
//     this.props.onAdd(this.state.name, this.state.number);
//   };

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           Name
//           <input
//             type="text"
//             name="name"
//             className={s.input}
//             value={this.state.name}
//             onChange={this.handleChange}
//           ></input>
//         </label>

//         <label className={s.label}>
//           Number
//           <input
//             type="tel"
//             name="number"
//             className={s.input}
//             value={this.state.number}
//             onChange={this.handleChange}
//           ></input>
//         </label>

//         <button type="submit" className={s.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};
