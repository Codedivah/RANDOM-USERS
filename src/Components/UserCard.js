import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserCard = ({ user, id }) => {
  const {
    gender,
    picture,
    email,
    name: { first, last }
  } = user;
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid Goldenrod",
        margin: 10,
        borderRadius: 10,
        padding: 10
      }}
    >
      <img src={picture.large} alt={first} />
      <div>
        <div>
          <h3>
            {first} {last}
          </h3>
        </div>
        <div>
          <h4>{gender}</h4>
          <h4>{email}</h4>
        </div>
      </div>
      <Link to={`${id + 1}`} state={user}>
        View User Details
      </Link>
    </div>
  );
};

export default UserCard;
