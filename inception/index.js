import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement("div", {id:'parent'},[React.createElement('div',{id:'child1'},React.createElement('h1',{},'hello'))]);
const Heading1 = () => (<h1>heading bro</h1>)
const Heading = () => {
  return (
    <div>
      <Heading1></Heading1>
      <Heading1 />
      {Heading1()}
      <h1>component composition</h1>
      <Heading2 />
      <h1>head hello bud</h1>
    </div>
  );
};
const Heading2 = () => <h1>This is no return</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
