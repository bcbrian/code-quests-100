---
path: '/post-two'
cover: './speed.jpg'
date: '2018-10-16'
title: 'Post Number Two'
published: true
tags: ['test', 'webpack', 'other']
---

# HTML Basics

Let's talk about the basic building blocks web, HTML. HTML stands for Hyper Text Markup Language. It's ok if you never remember that for now but you might be asked in an interview.

> HTML stands for Hyper Text Markup Language.

The main aspects of HTML are to:
* Provide structure to our document. 
* Provide visual points for our users to interact with our app.

Here is some HTML.

> We write HTML the way you see it for readability. The new lines tabs do not matter. We could have written it like this `<div>hello world</div>`

```html
<div>
  hello world
</div>
```

We refer to `<div>` as a div element, pronounced as read, not d-i-v. Now let's see it in action.

There are four main parts to HTML we are going to cover three of them today.

Let's look at the first line

```html
<div>
```
This is referred to as the opening tag.

Now we are going to skip the second line for a moment and look at the last line.
```html
</div>
```
This is referred to as the closing tag. The difference is the `/` a the beginning.

Ok, now back to the second line. The stuff in between the opening and closing tag.
This is the children. There could be a lot there but we are keeping it simple.
```html
  hello world
```
---

<iframe height="300" style="width: 100%;" scrolling="no" title="Divs Help Divide Stuff" src="//codepen.io/bcbrian-the-typescripter/embed/preview/WBaojj/?height=300&theme-id=36976&default-tab=html,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bcbrian-the-typescripter/pen/WBaojj/'>Divs Help Divide Stuff</a> by Brian Bartholomew
  (<a href='https://codepen.io/bcbrian-the-typescripter'>@bcbrian-the-typescripter</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

There are dozens of HTML elements. There are ones that help us with text styling like `<h1>hi</h1>` and `<h6>bye</h6>` and the four numbers between, `<h2>`, `<h3>`, `<h4>`, and `<h5>`. Those are all pronounced as h-(say the number) elemnts.

Try changing the `div`s below into `h#`s

---

<iframe height="341" style="width: 100%;" scrolling="no" title="Lets Try Some h1-h6" src="//codepen.io/bcbrian-the-typescripter/embed/preview/LogbLv/?height=341&theme-id=36976&default-tab=html,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bcbrian-the-typescripter/pen/LogbLv/'>Lets Try Some h1-h6</a> by Brian Bartholomew
  (<a href='https://codepen.io/bcbrian-the-typescripter'>@bcbrian-the-typescripter</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

But as I said there are dozens of them and it can take a while to commit them to memory. Luckily you can always use `insert your preferred search engine here`.

There are only three that I want you to try and remember right now. They are:
```html
1. <div> the div </div>
2. <button> the button </button>
3. <input /> <!-- the input -->
```

The `div` will be our structural block for dividing and making divisions, wondering where it got its name?

The `button` will be the way the user tells us they are done.

The `input` will be used to get info from the user, like an email or password

> The input is what we refer to as a self closing element. It does not have a closing tag because it cannot have children. that is why it has a `/` at the end.

Lets try to use them to make simple box that has two inputs with the words email and password above them and button beneath. Like this:

<iframe height="168" style="width: 100%;" scrolling="no" title="A Simple Sign Up Form" src="//codepen.io/bcbrian-the-typescripter/embed/KLGNQZ/?height=168&theme-id=37001&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bcbrian-the-typescripter/pen/KLGNQZ/'>A Simple Sign Up Form</a> by Brian Bartholomew
  (<a href='https://codepen.io/bcbrian-the-typescripter'>@bcbrian-the-typescripter</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Try it from scratch first. _Scroll down if you need a hint. It's ok to get help._

---

<iframe height="300" style="width: 100%;" scrolling="no" title="Blank HTML" src="//codepen.io/bcbrian-the-typescripter/embed/preview/gJBLLa/?height=300&theme-id=36976&default-tab=html,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bcbrian-the-typescripter/pen/gJBLLa/'>Blank HTML</a> by Brian Bartholomew
  (<a href='https://codepen.io/bcbrian-the-typescripter'>@bcbrian-the-typescripter</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

Need a hint?

---

<iframe height="300" style="width: 100%;" scrolling="no" title="A Simple Sign Up Form Head Start" src="//codepen.io/bcbrian-the-typescripter/embed/preview/bymgEL/?height=300&theme-id=36976&default-tab=html,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bcbrian-the-typescripter/pen/bymgEL/'>A Simple Sign Up Form Head Start</a> by Brian Bartholomew
  (<a href='https://codepen.io/bcbrian-the-typescripter'>@bcbrian-the-typescripter</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

Here is the solution if you got stuck or want to check it against what you did.

---

<iframe height="300" style="width: 100%;" scrolling="no" title="A Simple Sign Up Form" src="//codepen.io/bcbrian-the-typescripter/embed/preview/KLGNQZ/?height=300&theme-id=36976&default-tab=html,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/bcbrian-the-typescripter/pen/KLGNQZ/'>A Simple Sign Up Form</a> by Brian Bartholomew
  (<a href='https://codepen.io/bcbrian-the-typescripter'>@bcbrian-the-typescripter</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

Wow! You did it! You learned some code! 
Next time we will focus on making it look a little better...
