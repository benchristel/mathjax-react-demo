import * as React from "react"
import {svgFromTex} from "./mathjax"

export const Math = React.memo(({tex, inline}) => {
    const containerTag = inline ? "span" : "div"
    return <Mount
        containerTag={containerTag}
        dom={svgFromTex.convert(tex)}
    />
})

function Mount({dom, containerTag}) {
    const containerRef = React.useRef(null)
    React.useEffect(() => {
        console.log("updating dom")
        containerRef.current?.appendChild(dom)
        return () => {
            if (containerRef.current) containerRef.current.innerHTML = ""
        }
    }, [dom])
    return React.createElement(containerTag, {ref: containerRef})
}

