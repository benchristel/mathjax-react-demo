// Based on https://github.com/mathjax/MathJax-demos-node/blob/master/direct/tex2svg
// and https://github.com/CharlieMcVicker/mathjax-react/blob/master/src/utils/convert.ts

import {mathjax} from "mathjax-full/js/mathjax"
import {TeX} from "mathjax-full/js/input/tex"
import {SVG} from "mathjax-full/js/output/svg"
import {browserAdaptor} from "mathjax-full/js/adaptors/browserAdaptor";
import {RegisterHTMLHandler} from "mathjax-full/js/handlers/html";
import {AssistiveMmlHandler} from "mathjax-full/js/a11y/assistive-mml"
import "mathjax-full/js/input/tex/color/ColorConfiguration";

AssistiveMmlHandler(RegisterHTMLHandler(browserAdaptor()))

export const svgFromTex = mathjax.document("", {
    InputJax: new TeX({
        // NOTE: Using the `color` package requires importing
        // mathjax-full/js/input/tex/color/ColorConfiguration first!
        packages: ["base", "color"],
        formatError(jax, err) {
            console.error("Error parsing TeX", jax, err)
            return jax.formatError(err)
        },
    }),
    OutputJax: new SVG({}),
})
