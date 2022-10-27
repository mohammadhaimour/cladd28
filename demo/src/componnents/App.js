import React, { useState } from 'react'
//import Counter from './ClassCounter';
import Counter from './funCounter';

export default function App() {
    const [hide, setHide] = useState(false);
    return (
        <div>
            <h2>Heloo mohammad</h2>
            <button onClick={() => setHide(!hide)}>
                Hide Counter
            </button>
            {/* conditional render */}
            {
                !hide && (
                    <>
                        <Counter />
                    </>
                )
            }


        </div>
    )
}
