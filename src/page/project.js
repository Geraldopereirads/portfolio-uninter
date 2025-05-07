import { projects } from "../service/projects.js";

const ul = document.querySelector("ul");

projects.forEach((project) => {
  const li = document.createElement("li");

  const title = document.createElement("h3");
  title.textContent = project.title;

  const img = document.createElement("img");
  img.src = project.image;
  img.alt = project.title;

  const link = document.createElement("a");
  link.href = project.github;
  link.target = "_blank";

  const icon = document.createElement("i");
  icon.classList.add("fab", "fa-github", "icon"); // Substitua o id por classe

  link.appendChild(icon);
  li.append(title, img, link);
  ul.appendChild(li);
});
