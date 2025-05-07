import { tool } from "../service/tools.js";

const ul = document.querySelector("ul");

tool.forEach((tool) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = tool.title;

    li.append(p);
    ul.appendChild(li);
});