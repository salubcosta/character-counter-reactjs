import React, { useState } from 'react';

function TextCounter(props){
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    const verificarQtd = (event) => {
        const elemento = event.target
              
        if(elemento.value.length <= props.limit){
            setCount(elemento.value.length)
            setText(elemento.value)
        }

    }
    
    return (
        <div>
            <h1>Meu Contador:</h1>
            <textarea onChange={verificarQtd.bind(this)} value={text}/>
            <div>
                <strong>Total:</strong> {count} / {props.limit}
            </div>
        </div>
    )
}

export default TextCounter;