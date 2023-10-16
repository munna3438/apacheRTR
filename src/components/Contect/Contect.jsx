import React from "react";
import logo from "../../images/logo512.png";
import "./contect.css";
const Contect = () => {
  return (
    <div className="contect">
      <h1>Contact Us</h1>
      <img src={logo} alt="" />
      <b>ADDRESS :</b>
      <span> Post Box No. 4 Harita, Hosur - 635 109</span>
      <b>Toll Free : </b>
      <span> 18002587555</span>
      <b>Phone :</b>
      <span> 04344-276780</span>
      <b>Fax :</b>
      <span> 04344-276878</span>
    </div>
  );
};

export default Contect;
