import React from 'react';

function CreateUser({ username, phonenumber, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="input name..."
        onChange={onChange}
        value={username}
      />
      <br />
      <input
        name="phonenumber"
        placeholder="input phonenumber..."
        onChange={onChange}
        value={phonenumber}
      />
      <br />
      <button onClick={onCreate}>submit!!</button>
    </div>
  );
}

export default CreateUser;