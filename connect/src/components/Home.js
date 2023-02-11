import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Container from "react-bootstrap/Container"; 

export const Home = () => {
  let [notes, setNotes] = useState([]);
  // let [authTokens, logoutUser] = useContext(AuthContext)

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Authorization':'Bearer ' + String(authTokens.access)
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      // logoutUser()
    }
  };

  return (
      <div>
        <h1>Homepage</h1>
        
    <Container>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.body}</li>
          ))}
        </ul>
    </Container>
      </div>
  );
};
