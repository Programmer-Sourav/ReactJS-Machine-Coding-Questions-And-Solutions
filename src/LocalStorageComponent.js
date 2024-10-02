import useLocalstorage from "./useLocalstorage"
import React from 'react';


function LocalStorageComponent() {
    const [name, setName] = useLocalstorage('name', 'John Doe');

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Name in localStorage: {name}</p>
        </div>
    );
}

export default LocalStorageComponent;
