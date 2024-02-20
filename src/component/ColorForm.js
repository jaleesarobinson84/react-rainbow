import React, { useState } from 'react';

function ColorForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addColor(input);
        setInput(''); // Clear input after submission
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={input}
                    onChange={handleChange}
                    placeholder="Hey!!! Color Goes Here!!!..."
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ColorForm;
