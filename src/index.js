import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
import MySection from "./MySection";
import MyButton from "./MyButton";
import MyComponent from "./MyComponent";
import MyList from "./MyList";


//const array = ["First", "Second", "Third"];

/*const object = {
  first: 1,
  second: 2,
  third: 3,
}; */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />
// Ex 0.
  /*<p>
    Hello, <strong>JXS</strong>
  </p>*/
// Ex 0.1
  /*<div>
    <button />
    <code />
    <input />
    <label />
    <p />
    <pre />
    <select />
    <table />
    <ul />
  </div>*/
//Ex 0.2
/*  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <small>&coppy; 2021</small>
    </footer>
  </section>
*/
// Ex 0.3
/*<MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
*/
//Ex 0.4
/*<section>
<h1>
  Array
</h1>
<ul>
  {array.map((i) => (
    <li key={i}>{i}</li>
  ))}
</ul>

<h1>Object</h1>
<ul>
  {Object.keys(object).map((i) => (
    <li key={i}>
      <strong>(i): </strong>
      {object[i]}
    </li>
  ))}
</ul>
</section>
*/
//Ex 1.2
);
/*const appState = {
  text: "My Button",
  disable: true,
  items: ["First", "Second", "Third"],
};

function render(props) {
  root.render(
    <main>
      <MyButton text={props.text} disable={props.disable} />
      <MyList items={props.items} />
    </main>
  );
}

render(appState);

setTimeout(() => {
  appState.disable = false;
  appState.items.push("Fourth");

  render(appState);
}, 1000);
*/
//Ex 1,3
/*function render({ second }) {
  root.render(
    <main>
      <MyButton />
      <MyButton text={second.text} disble={second.disable} />
    </main>
  );
}

render({
  second: {
    text: "Second Button",
    disable: true,
  },
}) */

//Ex 2.1
//root.render(<App />);
//Ex 2.2
root.render(<App />);


reportWebVitals();
