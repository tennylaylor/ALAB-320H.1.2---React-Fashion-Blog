import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Article
          title="On the Street in Brooklyn"
          image="/blog-image-1.jpg" // Correct path
          alt="A woman in red against a blue wall"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia labore!"
        />
        <Article
          title="Vintage in Vogue"
          image="/blog-image-2.jpg" // Correct path
          alt="Group of well-dressed people at night"
          content="Selfies sunt dolor sit amet consectetur adipisicing elit. Doloribus voluptas."
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
