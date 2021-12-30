const loginForm = document.getElementById("login-form");
/*querySelector는 ("#login-form") Why? = class, id, tagName 모두 사용 가능하기 때문!*/
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// loginForm 이 상위 tag로 설정 되었기 때문에 querySelector로 바로 사용 가능
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 중복되는 String 경우 관습상 이런식으로 표현
// 비슷한 변수명이 있을때 구별하기 위함, err시 String은 err가 확인이 X 그래서 변수명으로 설정!
function onLoginSubmit(event) {
	const username = loginInput.value;
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, username);
	paintGreeting(username);
}

function paintGreeting(username) {
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.addEventListener("submit", onLoginSubmit);
	loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
	paintGreeting(savedUsername);
}
