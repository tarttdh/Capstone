import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5001/user/?email=${user.email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log(data);
        setResponseData(data);
      } catch (error) {
        console.error(error);
        setResponseData(null);
      }
    }; 
  
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, user.email]);

  if (!isAuthenticated) {
    return <div>Please log in to see your profile information.</div>;
  }

  console.log(responseData); 

  return responseData ? (
    <div>
      {/* <img src={responseData.picture} alt="Profile Picture" /> */}
      <p>Email: {responseData.email}</p>
      {responseData.URLs
        ? responseData.URLs.map(URL => (
            <p key={URL}>URL: {URL}</p>
          ))
        : "No saved URLs"}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Profile;
