import React, { useState, useEffect } from "react";

function UseEffectExample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("alok ");

    useEffect(() => {
        console.log("useEffect called");
    }, [name,count]);

    
    const changeName = () => {
        setName("vinay sir");
    };

    return (
        <>
            <h1>Teacher Use Effect</h1>

            <h2>{name}</h2>

            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase Count
            </button>

            <button onClick={changeName}>
                Change Name
            </button>
        </>
    );
}

export default UseEffectExample;