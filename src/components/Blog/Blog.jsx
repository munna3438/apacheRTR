import React from "react";
import "./blog.css";
const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-item">
          <h2>What is context api?</h2>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. Context API is a
            (kind of) new feature added in version 16.3 of React that allows one
            to share state across the entire app (or part of it) lightly and
            with ease. React.createContext() is all we need.
          </p>
        </div>
        <div className="blog-item">
          <h2>What Sementic tag?</h2>
          <p>
            A semantic element clearly describes its meaning to both the browser
            and the developer. Examples of non-semantic elements: "div" and
            "span" - Tells nothing about its content. Examples of semantic
            elements: "form" , "table" , and "article" - Clearly defines its
            content. HTML5 semantic tags define the purpose of the element. By
            using semantic markup, we help the browser understand the meaning of
            the content instead of just displaying it. By providing this extra
            level of clarity, HTML5 semantic elements also help search engines
            to read the page and find the required information faster.
          </p>
        </div>
        <div className="blog-item">
          <h2>Difference between inline and inline-block element</h2>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux. Context API is a
            (kind of) new feature added in version 16.3 of React that allows one
            to share state across the entire app (or part of it) lightly and
            with ease. React.createContext() is all we need.
          </p>
        </div>
        <div className="blog-item">
          <h2>What is context api?</h2>
          <p>
            inline The element doesn't start on a new line and only occupy just
            the width it requires. we can't set the width or height.
            inline-block It's formatted just like the inline element, where it
            doesn't start on a new line. BUT, we can set width and height
            values.No need to clear floats anymore. Compared to display: inline
            , the major difference is that inline-block allows to set a width
            and height on the element. Also, with display: inline , top and
            bottom margins and paddings are not respected, and with display:
            inline-block they are.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
