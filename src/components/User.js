import React from "react";

const User = ({ userList, isLoading, isError }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>website</th>
        </tr>
      </thead>
      <tbody>
        {isError === false &&
          isLoading === false &&
          userList &&
          userList.length > 0 &&
          userList.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <th>{user.username}</th>
              <th>{user.email}</th>
              <th>{user.phone}</th>
              <th>{user.website}</th>
            </tr>
          ))}

        {isLoading && (
          <tr>
            <td colSpan={5} style={{ textAlign: "center" }}>
              Loading...
            </td>
          </tr>
        )}

        {isError && (
          <tr>
            <td colSpan={5} style={{ textAlign: "center" }}>
              Something Wrong...
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default User;
