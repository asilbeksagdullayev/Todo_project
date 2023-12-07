const baseURL = 'http://localhost:4000/api';
import "./style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const input:HTMLInputElement=document.querySelector('.input')!;
const btn:HTMLButtonElement=document.querySelector(".tugma")!;
const dates:HTMLDivElement=document.querySelector(".dates")!;
const error:HTMLParagraphElement=document.querySelector(".secret")!;
const icon:HTMLDivElement=document.querySelector(".yitim")!;
const sec:HTMLDivElement=document.createElement("div")!;

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

const param = document.createElement("p");
param.innerText = value;

boxdiv.innerHTML = `
<div class="yitim">
<i class="bi bi-file-earmark-richtext-fill namesss">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-richtext-fill" viewBox="0 0 16 16">
<path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M7 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V9.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V9s1.54-1.274 1.639-1.208M5 11h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
</svg>
</i>
</div>
${value}
<div class="iconsss">
<div>
<i class="bi bi-pencil">
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
		<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg>
</i>
</div>
<div>
<i class="bi bi-trash trash">
	<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
	<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
	<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></i>
</div>
</div>



`;
const trashIcon = boxdiv.querySelector(".trash");

trashIcon.addEventListener("click", () => {
				dates.removeChild(boxdiv);
});


		dates.appendChild(boxdiv);
input.value = "";

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