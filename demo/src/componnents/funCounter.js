import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('mohammad');
    //1- call when change any state or showCombonnent agane  
    // useEffect(() => {
    //     console.log('i will be called on evrey render');
    // });


    //2- call when show componnent
    // useEffect(() => {
    //     console.log('i will be called only one time');
    // }, []);

    // //3- call when change counter state or showCombonnent agane  
    useEffect(() => {
        console.log('the counter updated');
    }, [counter]);

    //4- call when change counter or name state or showCombonnent agane  
    // useEffect(() => {
    //     console.log('the counter or name updated');
    // }, [counter, name]);


    //5-??
    // useEffect(() => {
    //     return () => {
    //         console.log('Componnent unmountd');
    //         setCounter(0);
    //     }
    // });
    return (
        <div>
            <h1> function based componnet counter loded</h1>
            <p>number od click{counter}</p>
            <p> My name {name} </p>
            <input onChange={(e) => setName(e.target.value)}></input>
            <br />
            <button onClick={() => setCounter(counter + 1)}>
                Click Me !
            </button>
        </div>
    )
}
