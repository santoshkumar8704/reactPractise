import React from 'react'
import ReactDOM from 'react-dom'


const heading = React.createElement("div", {id:'parent'},[React.createElement('div',{id:'child1'},React.createElement('h1',{},'hello'))]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
