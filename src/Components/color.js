import {useState, use} from 'react'




const ColorComp = () => {

    const [textColor, SetTextColor] = useState("Maroon");
    
    
    
    // TextColor is our Getter (variable)
    //SetTextColor is our Setter (function) that updates TextColor
    
    
    console.log("TextColor ->", textColor);
    
    
    return (
        // only JSX ALLOWED
        <div className="App">
      <header className="App-header">
        <h1 style={{ color: textColor }}>My favorite Color is {textColor}</h1>

        <button onClick={() => SetTextColor("blue")}>Blue</button>
        <br />
        <button onClick={() => SetTextColor("purple")}>Purple</button>
        <br />
        <button onClick={() => SetTextColor("Maroon")}>Maroon</button>
      </header>
    </div>
  );
}

  export default ColorComp