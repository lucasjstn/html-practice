### Shadow DOM

The Shadow DOM is a feature that lets us control access to parts of the DOM.



The Shadow DOM is an HTML fragment or DOM tree that is hidden from the rest of the light DOM. It needs to be attached to a shadow host, which is a node in the visible DOM.



#### Attaching a Shadow DOM

To make use of the Shadow DOM, we need to use the attachShadow method on an element via JavaScript



calling **attachShadow** you can pass an object with mode: "open" or "closed"
