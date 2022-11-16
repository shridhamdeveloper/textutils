import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){
    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClClick = () => {
        setText('');
    }

    const handleOnChange = (event) => {
        // console.log("handle onchange");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return(
        <>
            <div className='container'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
            </div>
            <div className='container my-3'>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Peview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}