import { useEffect, useState } from "react";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    // const currentUser = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(currentUser);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <>
      <div>
        <>
          <h2>Welcome, {currentUser.username}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      </div>
    </>
  );
};

export default Profile;
