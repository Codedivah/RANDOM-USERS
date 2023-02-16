import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserCard from "../Components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await fetch("https://randomuser.me/api/?results=50");
      const allUsers = await response.json();
      //console.log(allUsers.results);

      setUsers(allUsers.results);
      setLoading(false);
    };
    getAllUsers();
  }, []);

  const PER_PAGE = 10;

  const nextPage = (page - 1) * PER_PAGE;

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <h2 className="users-list">List of Users</h2>
      <div className="users">
        {users.slice(nextPage, page * PER_PAGE).map((person, index) => {
          return (
            <div key={index} className="list-item">
              <UserCard user={person} id={index} />
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => setPage((page) => page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
      </div>

      <div>
        <button
          onClick={() => setPage((page) => page + 1)}
          disabled={page >= users.length / PER_PAGE}
        >
          Next
        </button>
        <Outlet />
      </div>
    </div>
  );
};
//(
// // <div>
// //   {user.name.first} {user.name.last}
// //   <img src={user.picture.medium} alt='user'/>
// // </div>
// )

// .map((person, index) => {
//   const name = `${person.name.title} ${person.name.first} ${person.name.last}`;

export default Users;
