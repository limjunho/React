import React, { useState } from 'react';

function PhoneBook(){
    const [name, Setname] = useState('');
    const [number, Setnumber] = useState('');

    const handleChangeName = e => {
        Setname(e.target.value);
    }

    const handleChangeNumber = e => {
        Setnumber(e.target.value);
    }

    const handleUpdateLog = e => {
        console.log(name,number);
    }
    
    return(
        <div>
        <h1>PhoneBook!</h1>
        <form>
            <input
            placeholder="input name..."
            value={name}
            onChange={handleChangeName}
            />
            <br />
            <input
            placeholder="input number..."
            value={number}
            onChange={handleChangeNumber}
            />
            <div>{name} {number}</div>
            <button onClick={handleUpdateLog} type="button">Submit!!</button>
        </form>
        </div>
    );
};

export default PhoneBook;