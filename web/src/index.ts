// import "./main.css";
import "./style.css";

const loading: HTMLDivElement = document.querySelector(".contener10")!;
const contaner: HTMLDivElement = document.querySelector(".contener")!;
const malumot: HTMLDivElement = document.querySelector(".malumot")!;
const btn: HTMLButtonElement = document.querySelector(".btn")!;
const input: HTMLInputElement = document.querySelector(".input")!;
const error: HTMLParagraphElement = document.querySelector(".error")!;
const baseURL = "http://localhost:4000/api";
async function getTodos() {
  const res = await fetch(`${baseURL}/todos`);
  if (!res.ok) {
    loading.style.display = "block";
    contaner.style.display = "none";
  }
  const data = await res.json();
  return data;
}
async function init() {
  const todos = await getTodos();

  for (let i = 0; i < todos.length; i++) {
    const div: HTMLDivElement = document.createElement("div")!;
    const p: HTMLParagraphElement = document.createElement("p")!;
    const input: HTMLInputElement = document.createElement("input")!;

    div.className = "data";
    input.className = "radio";
    input.type = "radio";
    input.addEventListener("click", () => {
      deleteItem(todos[i].id);
    });

    p.innerText = todos[i].title;
    div.appendChild(input);
    div.appendChild(p);

    malumot.appendChild(div);
  }

  console.log("todos = ", todos);
}

window.addEventListener("load", init);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
    input.value = "";
  }
});

btn.addEventListener("click", async () => {
  if (!input.value) {
    error.innerText = "Soz kiriting";
    return;
  }

  error.innerText = "";

  // Yozilgan malumotni serverga yuborish
  try {
    const response = await fetch(`${baseURL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: input.value }),
    });

    if (!response.ok) {
      throw new Error("Malumotni yuborishda xatolik");
    }

    const result = await response.json();
    console.log("Yuborilgan malumot:", result);
  } catch (error) {
    console.error("Xatolik yuz berdi:", error.message);
  }
  input.value = "";
  window.location.reload();
});

//  bazani aylanish

const url = "http://localhost:4000/api/todos";

async function deleteItem(itemId: any) {
  console.log(itemId);

  try {
    const response = await fetch(`${url}/${itemId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Malumotni o'chirishda xatolik");
    }

    const result = await response.json();
    console.log("O'chirilgan malumot:", result);
    window.location.reload();
  } catch (error) {
    console.error("Xatolik yuz berdi:", error.message);
  }
}