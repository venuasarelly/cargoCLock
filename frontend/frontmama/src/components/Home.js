import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation} from "react-router-dom"

function Home() {
  const location = useLocation();
  const { id } = location.state;
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/allusers");
        setAllUsers(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="homepage">
      <h1>Hello {id} welcome to the home</h1>
      <h2>All Users:</h2>
      <ul>
        {allUsers.map((user, index) => (
          <li key={index}>
            <p>Username: {user.username}</p>
            <p>Surname: {user.email}</p>
            <p>UserType: {user.usertype}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
