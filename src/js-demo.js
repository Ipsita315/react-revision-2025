const root = document.createElement("div");
root.id = "root";
const parent = document.createElement("div");
parent.id = "parent";

const child1 = document.createElement("div");
child1.id = "child1";
parent.append(child1);
const child2 = document.createElement("div");
child2.id = "child2";
parent.append(child2);

root.append(parent);

document.querySelector("body").append(root);
