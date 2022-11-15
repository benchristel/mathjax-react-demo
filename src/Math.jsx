import * as React from "react"
import {svgFromTex} from "./mathjax"

export const Math = React.memo(({tex}) => {
    return <Mount dom={svgFromTex.convert(tex)}/>
})

function Mount({dom}) {
    const containerRef = React.useRef(null)
    React.useEffect(() => {
        console.log("updating dom")
        containerRef.current?.appendChild(dom)
        return () => {
            if (containerRef.current) containerRef.current.innerHTML = ""
        }
    }, [dom])
    return <div ref={containerRef} />
}

