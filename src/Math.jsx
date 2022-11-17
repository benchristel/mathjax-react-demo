import * as React from "react"
import {svgFromTex, updateStyles} from "./mathjax"

export const Math = React.memo(({tex, inline}) => {
    const containerTag = inline ? "span" : "div"

    React.useEffect(() => {
        updateStyles()
    }, [tex, inline])

    return (
        <Mount
            containerTag={containerTag}
            dom={svgFromTex.convert(tex, {display: !inline})}
        />
    )
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
