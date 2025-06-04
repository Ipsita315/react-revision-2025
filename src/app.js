import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.scss";

const parent = React.createElement("div", { id: "parent", className: "heading" },
    [
        React.createElement("div", { id: "child1", key: "div_1" }, React.createElement("h1", {}, "This is H1 using React")),
        React.createElement("div", { id: "child2", key: "div_2" }, React.createElement("h2", {}, "This is H2"))
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);