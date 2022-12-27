## 12 - Web Components

Custom elements, shadow DOM and HTML Templates

### Custom Elements

Custom elements let you create your own element types that you can then use on a web page

To create a custom element, we will need to add it to the custom element registry,  
which we do with JavaScript

We can access the CustomElementRegisty object through a property called  
customElements, which is defined in the global window object

#### The Define Method

allow us to register a new custom element

**customElements.define()** with two main arguments and an optional one, name and javascript class that is an element's constructor. The optional argument is **options object** , with its extends property we can extend a built-in element

#### Naming conventions

for a custom element to be valid, it must have a hyphen somewhere in its name

#### Unique names

A custom element name can only be registered once. For example, we cannot definetwo different main-headline elements.

#### Extends HTMLElement

```EXtending
<sub-headline></sub-headline>
<script>
  customElements.define(
    "sub-headline",
    class SubHeadline extends SVGElement {}
  );
</script>
```

```

```

The constructor can extend a subclass of HTMLElement rather than extend HTMLElement. For example, HTMLParagraphElement extends HTMLElement



#### Custom Element Lifecycle



A custom element has several life cycle methods that can be used to call blocks of code.



we can't guarantee that a custom element has been connected to the web page when the constructor is called.



**connectedCallback**



The **connectedCallback** method is invoked when a custom element is added into the HTML document.



The **disconnectedCallback** method is invoked when the element is disconnected from the HTML document.



The **adoptedCallback** method is invoked if the custom element moves to a new document.
Example: move an element between HTML document and a iframe



The **attributeChangedCallback** method is invoked when an element's attributes change, that is, whether the value changes or the attribute is added or removed.
    this receives three arguments, **name**, **oldValue** and **newValue**;



Not all changes to attributes will trigger **attributeChangedCallback**;
We do this with the static observedAttributes method.



```Example
static get observedAttributes() {
    return ['type'];
}
```

Something else to consider is that oldValue and newValue may not necessarily be different



#### Extending a built-in element



For example, if we want to create a custom h1 element that restricts the size of the text content, we would set the extends property to "h1"



```Example
window.customElements.define("short-headline", ShortHeadline, { extends: "h1"})
```



## 11 -  Maintanable CSS

### Block Element, and Modifier

Bem is a semantic approach to identify elements and applying CSS rules to them.

Semantic CSS means naming elements according to what they are.

#### Block

This is the main entity and is meaningful on its own. This could be a header (.header), navigation (.nav), field (.field), article (.article), and so on.

#### Element

A child of a block.

Wouldn't make sense by itself.

 **Examples**

.header__logo

.nav__item

.field__label

.article__paragraph

#### Modifier

a variation in a block or element

used to change block or element appearance or behavior

.header--blue

.nav__item--highlighted

.field__input--checked

.button--success

**An element only needs to semantically be related to one block to be maintainable.**

### Using BEM markup with SCSS

We can nest BEM elements inside the block with SCSS. For example, if we had the **.nav__list** element, then we could nest it inside a **.nav**

#### Structuring Your SCSS into Maintainable Files

```asdfsdfasdfsdf
/* Layout File */
@import '_header';
@import '_navigation';
@import '_footer';
```

```
      @import "abstracts/_variables";
      @import "abstracts/_mixins";
      @import "base/_reset";
      @import "base/_typography";
      @import "components/_buttons";
      @import "layout/_header";
      @import "layout/_navigation";
      @import "layout/_footer";
```

#### Good Practices for Maintainable CSS

1. We can make use of the extend functionality in SCSS with the %class-name.

2. It's worth making sure you avoid "deep nesting," meaning that it shouldn't be necessary to nest more than three levels

3. We should always remain consistent with using quotation marks in our SCSS (and CSS) and not mixing between single and dark quotation marks.

4. Our SCSS rules should follow a sensible order.

5. It's worth understanding when we should use the !important flag in CSS

6. Avoid using ID CSS selectors with your styling rules. These are mainly used in  
   JavaScript and are too specific and not reusable.


