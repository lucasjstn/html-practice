## Maintanable CSS

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












