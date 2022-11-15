// Based on https://github.com/mathjax/MathJax-demos-node/blob/master/direct/tex2svg
// and https://github.com/CharlieMcVicker/mathjax-react/blob/master/src/utils/convert.ts

import {mathjax} from "mathjax-full/js/mathjax"
import {TeX} from "mathjax-full/js/input/tex"
import {SVG} from "mathjax-full/js/output/svg"
import {browserAdaptor} from "mathjax-full/js/adaptors/browserAdaptor";
import {RegisterHTMLHandler} from "mathjax-full/js/handlers/html";
import {AssistiveMmlHandler} from "mathjax-full/js/a11y/assistive-mml"
import "mathjax-full/js/input/tex/color/ColorConfiguration";
import "mathjax-full/js/input/tex/configmacros/ConfigMacrosConfiguration";

AssistiveMmlHandler(RegisterHTMLHandler(browserAdaptor()))

export const svgFromTex = mathjax.document("", {
    InputJax: new TeX({
        packages: [
            "base",
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
            maroonD: ["{\\color{maroon} #1}", 1]
        },
        formatError(jax, err) {
            console.error("Error parsing TeX", jax, err)
            return jax.formatError(err)
        },
    }),
    OutputJax: new SVG({}),
})
