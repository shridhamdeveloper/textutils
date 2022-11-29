import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props){
    const handleUpClick = () => {
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!!', 'success');
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase!!', 'success');
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
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
            </div>
            <div className='container my-3' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Peview</h2>
                <p>{text.length > 0 ? text:"Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}