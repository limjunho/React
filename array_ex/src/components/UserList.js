import React from 'react';

function User({ user, onRemove, onUpdate }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.phonenumber})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <button onClick={() => onUpdate(user.id)}>수정</button>
        </div>
    )
}

function UserList({ users, onRemove, onUpdate }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} 
                key={user.id} 
                onRemove={onRemove} 
                onUpdate={onUpdate} />
            ))}
        </div>
    );
}

export default UserList;