// Based on https://github.com/mathjax/MathJax-demos-node/blob/master/direct/tex2svg,
// https://github.com/mathjax/MathJax-demos-node/blob/master/preload/tex2chtml,
// and https://github.com/CharlieMcVicker/mathjax-react/blob/master/src/utils/convert.ts

import {mathjax} from "mathjax-full/js/mathjax"
import {TeX} from "mathjax-full/js/input/tex"
// import {SVG} from "mathjax-full/js/output/svg"
import {CHTML} from "mathjax-full/js/output/chtml"
import {browserAdaptor} from "mathjax-full/js/adaptors/browserAdaptor"
import {RegisterHTMLHandler} from "mathjax-full/js/handlers/html"
import {AssistiveMmlHandler} from "mathjax-full/js/a11y/assistive-mml"
import "mathjax-full/js/input/tex/ams/AmsConfiguration"
import "mathjax-full/js/input/tex/color/ColorConfiguration"
import "mathjax-full/js/input/tex/configmacros/ConfigMacrosConfiguration"

AssistiveMmlHandler(RegisterHTMLHandler(browserAdaptor()))

const chtmlOutput = new CHTML({})

export const svgFromTex = mathjax.document("", {
    InputJax: new TeX({
        packages: [
            "base",
            // NOTE: Using the `ams` package requires importing
            // mathjax-full/js/input/tex/color/AmsConfiguration first!
            // AMS includes the control sequences listed here:
            // https://docs.mathjax.org/en/latest/input/tex/extensions/ams.html#tex-ams-commands
            "ams",
            // NOTE: Using the `color` package requires importing
            // mathjax-full/js/input/tex/color/ColorConfiguration first!
            "color",
            // NOTE: Using the `configmacros` option requires importing
            // mathjax-full/js/input/tex/configmacros/ConfigMacrosConfiguration
            // first!
            "configmacros",
        ],
        // NOTE: Using the `macros` option requires specifying the
        // "configmacros" package in `packages`, above!
        macros: {
            maroonD: ["{\\color{maroon} #1}", 1],
        },
        formatError(jax, err) {
            console.error("Error parsing TeX", jax, err)
            return jax.formatError(err)
        },
    }),
    OutputJax: chtmlOutput,
})

// Since MathJax isn't adding the math elements to the dom itself (we are,
// via React), it doesn't know when to update its stylesheet. We can call
// updateStyles() after rendering new math content to make sure that all
// the elements will display correctly.
export function updateStyles() {
    const styleSheet = chtmlOutput.styleSheet(svgFromTex)
    if (document.getElementById(CHTML.STYLESHEETID) == null) {
        document.head.appendChild(styleSheet)
    }
}
