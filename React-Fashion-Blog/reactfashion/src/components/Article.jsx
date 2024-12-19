import React from "react";

const Article = ({ title, image, alt, content }) => {
  return (
    <article
      style={{
        borderBottom: "1px solid lightgray",
        marginBottom: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <h2>{title}</h2>
      <img src="/blog-image-1.jpg" alt="description" />

      <p style={{ textAlign: "justify" }}>
        <span
          style={{
            color: "lightgray",
            fontSize: "3rem",
            float: "left",
            marginRight: "0.5rem",
          }}
        >
          {content.charAt(0)}
        </span>
        {content.slice(1)}
      </p>
      <a
        href="#"
        style={{
          display: "block",
          textAlign: "right",
          color: "tomato",
          fontWeight: "bold",
        }}
      >
        Continues ...
      </a>
    </article>
  );
};

export default Article;
