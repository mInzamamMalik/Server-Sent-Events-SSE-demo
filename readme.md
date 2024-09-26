Websockets and SSE (Server Sent Events) are both capable of pushing data to browsers, however they are not competing technologies.

Websockets connections can both send data to the browser and receive data from the browser. A good example of an application that could use websockets is a chat application.

SSE connections can only push data to the browser. Online stock quotes, or twitters updating timeline or feed are good examples of an application that could benefit from SSE.

In practice since everything that can be done with SSE can also be done with Websockets, Websockets is getting a lot more attention and love, and many more browsers support Websockets than SSE.

However, it can be overkill for some types of application, and the backend could be easier to implement with a protocol such as SSE.

Furthermore SSE can be polyfilled into older browsers that do not support it natively using just JavaScript. Some implementations of SSE polyfills can be found on the [Modernizr](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills) github page

Source: https://stackoverflow.com/a/5326159

<hr>

SSE is supported in almost all major browsers in 2024.
Unlike WebSockets, server-sent events are unidirectional; data can be sent from server to client in the form real time events vise versa is not possible (however one can still use post request)
Warning: When not used over HTTP/2, SSE suffers from a limitation to the maximum number of open connections 6 per browser
source: https://developer.mozilla.org/en-US/docs/Web/API/EventSource

<hr>
