# HTML basics Learnings

Semantics HTML should always be kept in mind while writing HTML code.
Though the overall appearance/ UI will look the same but it will differ in meaning.
e.g. bold & strong will make the text look exactly the same, but the difference will be observed when the user tries sppech tools to read it. Maybe a blind person is trying to listen to it, but won't get the correct gist of the content.

Semantics is all about ethical practices.

Decide wisely which tag to use, based on a question "What is the main purpose of the content/data that will be enetered" e.g. some user may use css properties to acheive the height & weight of text like in H1 instead of directly using \<H1>, but it's not at all recommendable. One reason also being "readability/ understanding of the code afterwards".

\<p> should not be used just to achieve the height of text \<h6> unless it's actually a paragraph

No text should be written openly in the html page. It should be within some tag, so that the browser can give them special treatment which they deserve. It helps immensely in SEO. e.g. anything written in \<code> won't be searched for while any such operation is performed on the webpage. Also it won't be made public.

name & value are 2 very important attributes for any tag

Use \<input type = "button"/> instead of \<button>

POST request will not show the passed data in URL
