import React, { useEffect, useState } from 'react'

export default function People() {
    const [People, setPeople] = useState([]);
    const [name, setName] = useState('');
    // useEffect(() => {
    //     console.log('i will run evry render');
    // });
    // useEffect(() => {
    //     console.log('i will run on name change');
    // }, [name]);
    useEffect(() => {
        console.log('i will run on submit');
    }, [People]);

    const inputHandler = (e) => {
        setName(e.target.value);
    }

    const addPerson = (e) => {
        e.preventDefault();
        e.target.reset();
        //setPeople([name]);//not correct
        //we will solve the problem using spread operators
        setPeople([...People, name]);

        // var part = ['one', 'two'];
        // var total = ['x', 'y', ...part, 'z'];
        // var total2 = [...part, 'x', 'y', 'z'];

        // console.log(total);//  ['x','y','one','two','z']
        // console.log(total2);//  ['one','two','x','y','z']

    }
    return (
        <div>
            <h1> your name </h1>
            <h3>{name}</h3>
            <form onSubmit={addPerson}>
                <input onChange={inputHandler}></input>

            </form>
            <p>list of names</p>
            {
                People.map((item, idx) => {
                    return (
                        <div key={idx}>
                            {item}
                        </div>
                    )
                })
            }

        </div>
    )
}
