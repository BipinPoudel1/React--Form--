import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    hobby: ""
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;

    setFullName((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value
      }

      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted...");
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.phone}</p>
            <p>{fullName.email}</p>
            <input
              type="text"
              placeholder="Enter your first name "
              name="fname"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your last name "
              name="lname"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <br />
            <input
              type="number"
              placeholder="Enter your contact number "
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <br />
            <input
              type="email"
              placeholder="Enter your e-mail address "
              name="email"
              onChange={inputEvent}
              value={fullName.email}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your one hobby "
              name="hobby"
              onChange={inputEvent}
              value={fullName.hobby}
            />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
