let avisoUser = document.getElementById('avisoUser');
let user = document.getElementById('user');

user.addEventListener("mouseover", () => {
    avisoUser.classList.add('aviso-user-visible');
});

user.addEventListener("mouseleave", () => {
    avisoUser.classList.remove('aviso-user-visible');
});

