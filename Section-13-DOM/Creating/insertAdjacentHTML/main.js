//injetando html na pagina com javascript
const boxWrapper = document.querySelector(".box-wrapper");
const formWrapper = document.querySelector(".form-wrapper");

const colors = ["pink", "yellow", "red", "orange", "blue", "green", "purple"];

colors.forEach((item, index) => {
    let html = `<div class="box" style="background: ${item}"> ${item} </div>`;

    boxWrapper.insertAdjacentHTML("afterbegin", html);
});

//injecting forms
let form = `
<form class="purple">
    <div class="form-control">
        <label for="username1">Username</label>
        <input type="text" id="username1" placeholder="username">
    </div>
    <div class="form-control">
        <label for="password1">Username</label>
        <input type="password" id="password1" placeholder="password">
    </div>
    <button>Submit</button>
</form>

<form class="yellow">
    <div class="form-control">
        <label for="username2">Username</label>
        <input type="text" id="username2" placeholder="username">
    </div>
    <div class="form-control">
        <label for="password2">Username</label>
        <input type="password" id="password2" placeholder="password">
    </div>
    <button>Submit</button>
</form>

<form class="green">
    <div class="form-control">
        <label for="username3">Username</label>
        <input type="text" id="username3" placeholder="username">
    </div>
    <div class="form-control">
        <label for="password3">Username</label>
        <input type="password" id="password3" placeholder="password">
    </div>
    <button>Submit</button>
</form>
`;

formWrapper.insertAdjacentHTML('afterbegin', form)
