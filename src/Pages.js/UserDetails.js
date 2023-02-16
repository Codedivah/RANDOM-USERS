import React from "react";
import { useLocation } from "react-router-dom";

const UserDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <h2>{state?.dob}</h2>
      <h2>{state?.location?.city}</h2>
      <h2>{state?.phone}</h2>
    </div>
  );
};

export default UserDetails;
