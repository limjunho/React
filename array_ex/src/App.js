import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function countUsers(users) {
  console.log("counting users...");

  return users.length;
}

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: '임준호',
      phonenumber: '010-0000-0000'
    },
    {
      id: 2,
      username: 'testuser1',
      phonenumber: '010-1234-1234'
    },
    {
      id: 3,
      username: 'testuser2',
      phonenumber: '010-2222-4444'
    }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    phonenumber: ''
  });
  const { username, phonenumber } = inputs;

  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    },
    [inputs]
  );

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      phonenumber
    };
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      phonenumber: ''
    });

    nextId.current += 1;
  }, [username, phonenumber]);

  const onRemove = useCallback(
    id => {
      setUsers(users => users.filter(user => user.id !== id));
    },
    []
  );

  const onUpdate = useCallback(
    id => {
      setUsers(
        users => users.map(user =>
          user.id === id ?
            { id: id, username: username, phonenumber: phonenumber }
            : user
        )
      );

      setInputs({
        username: '',
        phonenumber: ''
      });

    },
    [username, phonenumber]
  );

  const count = useMemo(() => countUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        phonenumber={phonenumber}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onUpdate={onUpdate} />
      <div>사용자 수 : {count}</div>
    </>
  );
};

export default App;