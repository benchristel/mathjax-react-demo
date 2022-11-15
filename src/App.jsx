import * as React from "react"
import {Math} from "./Math"
import "./mml.css"

export function App() {
    // Use a timer to rerender this component periodically,
    // to verify that math content isn't re-rendered unnecessarily.
    const [ticks, setTicks] = React.useState(0)
    // Turns the timer on and off
    const [ticking, setTicking] = React.useState(true)
    // Shows and hides a line of math content when the user clicks
    // a button. This lets us test what happens when math content
    // is unmounted and remounted.
    const [shown, setShown] = React.useState(false)
    const [scale, setScale] = React.useState(1.1)

    return <>
        {/* Inputs */}
        <label htmlFor="scale-input">Font scaling</label>:
        <input id="scale-input" type="range" value={scale} min="0.5" max="2.5" step="0.1" onInput={(e) => setScale(e.target.value)}></input>
        <span>{scale}</span>
        <br/>
        <button onClick={() => setShown(!shown)}>
            {shown ? "Hide" : "Show"} equation
        </button>
        <button onClick={() => setTicking(!ticking)}>
            {ticking ? "Stop" : "Start"} timer
        </button>
        {ticking && <Timer ms={1000} onTick={() => setTicks(ticks + 1)}/>}
        
        {/* Outputs */}
        <div style={{fontSize: scale + "em"}}>
            <p>Euler said <Math inline tex="e^{i \pi} = -1"/>, and you know, he was right!</p>
            <p>
                Here, "x" should be maroon, and "15" should be teal:
                {" "}<Math inline tex="\maroonD x = {\color{teal} 15}"/>.
            </p>
            <Math tex="x = {-b \pm \sqrt{b^2-4ac} \over 2a}"/>
            <Math tex={`${ticks} \\times 1000`}/>
            {shown && <Math tex="2 + 2 = 4"/>}
        </div>        
    </>
}

class Timer extends React.Component {
    componentDidMount() {
        this.interval = setInterval(() => this.props.onTick(), this.props.ms)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return null
    }
}
