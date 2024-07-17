import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
      console.log("LowerCase was Clicked");
      let newText = text.toLowerCase();
      setText(newText);
  }

  const handleClearClick = () => {
    console.log("Clear Text was clicked");
    let newText = '';
    setText(newText);
}

  const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
  
  const handleCopy = () => {
    console.log ("I'm Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
}

    const [text, setText] = useState('');

  return (
    <>
    <div className="container">
        <h3>{props.heading}</h3>
       <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
         <br/>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To upperCase</button>
         <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To lowerCase</button>
         <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
         <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
         <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Delete Extra Space</button>
       </div>
    </div>
    <div className="container my-2">
      <h3>Your Text Summary</h3>
      <p>Words: {text.split(" ").length - 1} Characters: {text.length} </p>
      <p>Approx you will take {0.008 * text.split(" ").length} minutes to read.</p>
      <h4>Preview</h4>
      <p>{text.length>0? text: "Enter something in the text box to preview"}</p>
    </div>
    </>
  )
}
