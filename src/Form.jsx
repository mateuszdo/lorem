import React from 'react'
import data from './data'
import {useState} from 'react';
import { nanoid } from 'nanoid';

const Form = () => {

    const [text, setText] = useState([]);
    const [count, setCount] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(text);
        const newText = data.slice(0, count);
        setText(newText);
    }
    return (
        <section className='section-center'>
            <form onSubmit={handleSubmit}>
                <h2 className='form-title'>Tired of boring Lorem Ipsum ?</h2>
                <div className="lorem-form">
                    <label htmlFor='number'>Paragraphs: </label>
                    <input 
                        type='number' 
                        id='number'
                        min={1}
                        max={8}
                        step={1} 
                        className='form-input'
                        value={count}
                        onChange={(e) => setCount(e.target.value)}></input>
                    <button type='submit' className='btn'>generate</button>
                </div>
            </form>
            <div className="lorem-text">
                {text.map((item) => {
                    const id = nanoid();
                    return <p key={id}>{item}</p> 
                })}
            </div>
        </section>
    )
}

export default Form
