import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;

    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;

    --color-white: #FFFFFF;
    --color-grey-1:  #333333; //grey-100
    --color-grey-2:  #828282; //grey-50
    --color-grey-3:  #E0E0E0; //grey-20
    --color-grey-4:  #F5F5F5; //grey-0

    --font-heading-1: 1.625rem; /* 26px */
    --font-heading-2: 1.375rem; /* 22px */
    --font-heading-3: 1.125rem; /* 18px */
    --font-heading-4: .875rem; /* 14px */
    --font-headline: 1rem; /* 16px */
    --font-caption: .75rem; /* 12px */

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 400;

    --radius-1: .3125rem; /* 5px */
    --radius-2: .5rem; /* 8px */

    --size-1: 3.5rem; /* 56px */
    --size-2: 3rem; /* 48px */
    --size-3: 2.25rem; /* 36px */

    --gap-1: 2rem; /* 32px */
    --gap-2: 1.75rem; /* 28px */
    --gap-3: 1.5rem; /* 24px */
    --gap-4: 1.25rem; /* 20px */
    --gap-5: 1rem; /* 16px */
    --gap-6: .75rem; /* 18px */
    --gap-7: .5rem; /* 8px */
    --gap-8: .25rem; /* 4px */

    --container-1: 75rem; /* 1200px */
    --container-2: 56.25rem; /* 900px */
}

header, body, button{
    font-family: 'Inter', sans-serif;
    line-height: 150%;
}

img {
    max-width: 100%;
}

ul {
    list-style: none;
}

.container {
    max-width: var(--container-1);
    margin: 0 auto;
}

@media (max-width: 900px) {
    .container{
        max-width: 90%;
    }
}




/* ~~~~~~~~ FULL RESET ~~~~~~~~ */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
	line-height: 150%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`