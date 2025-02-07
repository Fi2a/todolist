const form = document.querySelector("form");
const input = document.getElementById("input");
const btn = document.querySelector("main > form > button");

let todos = ["설거지하기", "방청소하기", "공부하기"];

const database = localStorage;

const store = (todo) =>
  new Promise((resolve, reject) => {
    if (todo.length <= 0) {
      return reject({ message: "길이가 너무 짧다" });
    }

    // const newTodo = Number(todo);
    // if (newTodo === "Nan" || !newTodo) {
    //   return reject({ message: "숫자가 아닙니다." });
    // }
    // todos.push(newTodo);

    database.setItem("todos", JSON.stringify(todos));

    return resolve({ message: "할일 추가됨" });
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = input.value;
  //   console.log(todo);

  (event) => {
    event.preventDefault();

    const todo = input.value;

    console.log(typeof todo);
    console.log(todo);

    const newTodo = Number(todo);

    console.log(newTodo);
  };

  // 1. 할일 입력되지 않을때 예외처리

  if (todo.length === 0) {
    alert("입력하세요");
    return input.focus();
  }

  // 2. 할일이 1글자일때 예외처리

  if (todo.length === 1) {
    alert("제대로 입력하세요");
    return input.focus();
  }

  // 3. console.log(todo)

  console.log(todo);

  // 4. alert 로 축하메세지 전달하기

  store(todo)
    .then((response) => alert(response.messaage))
    .catch((error) => alert(error.messaage));

  // 5. todo 값 리셋하기

  input.value = "";

  // 6. 입력창으로 focus

  input.focus();
});
