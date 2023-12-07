const baseURL = 'http://localhost:4000/api';
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const input:HTMLInputElement=document.querySelector('.input')!;
const btn:HTMLButtonElement=document.querySelector(".tugma")!;
const dates:HTMLDivElement=document.querySelector(".dates")!;
const error:HTMLParagraphElement=document.querySelector(".secret")!;

async function init() {
	const todos = await getTodos();
	console.log('todos = ', todos);
}

window.addEventListener('load', init);

async function getTodos() {
	const res = await fetch(`${baseURL}/todos`);
	const data = await res.json();

	return data;
}

input.addEventListener("keydown", (e)=>{
	if (e.key==="Enter") {
		btn.click();

	}
})


function displayUserData() {
	const value = input.value;
const boxdiv = document.createElement("div");
boxdiv.className= "boxdiv";
boxdiv.innerText = value;
		dates.appendChild(boxdiv);
input.value = "";
		// Add click event listener to the boxdiv
		// boxdiv.addEventListener("click", () => handleProductClick(elem));

}

btn.addEventListener("click", (e)=>{
	// console.log(value)
	if (input.value !== "") {

		displayUserData();

	} else {

		error.style.display = "block";
		setTimeout(() => {
			error.style.display = "none";
		}, 3000);
		// console.log("error");
	}
});