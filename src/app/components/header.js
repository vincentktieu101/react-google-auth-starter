import React from "react";

export const Header = (props) => {
  const user = props.user;
  return (
    <div className="border-b-4 border-black flex justify-around">
      <div>react-google-auth-starter</div>
      {user ? (
        <button onClick={user?.signOut}>Logout</button>
      ) : (
        <div id="login-button">Login</div>
      )}
    </div>
  );
};
