import React, {useEffect} from 'react';

const User = React.memo(function User({ user, onRemove, onUpdate }) {
    useEffect(() => {
        console.log("컴포넌트 등장!");
        console.log(user);
        return () =>{
            console.log("컴포넌트 퇴장..");
            console.log(user);
        }
    }, [user]);
    return (
        <div>
            <b>{user.username}</b> <span>({user.phonenumber})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <button onClick={() => onUpdate(user.id)}>수정</button>
        </div>
    )
});

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

export default React.memo(UserList);