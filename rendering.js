const rendering = (todos) => {
  ul.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const button = document.createElement("button");

    p.innerText = todos[i];
    button.innerText = "삭제";

    div.appendChild(p);
    div.appendChild(button);

    li.appendChild(div);

    ul.appendChild(li);
  }
};

rendering(todos);
