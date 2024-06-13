var box = document.querySelector('.box');
var signupBtn = document.querySelector('.signup-btn');
var closeBtn = document.querySelector('.close');
var userLoginBtn = document.querySelector('.user-login-btn');
var adminLoginBtn = document.querySelector('.admin-login-btn');
var userLoginForm = document.querySelector('.user-login-form');
var adminLoginForm = document.querySelector('.admin-login-form');

signupBtn.addEventListener('click', openBox);

closeBtn.addEventListener('click', closeBox);

userLoginBtn.addEventListener('click', function(){
    showForm(userLoginForm)
});

adminLoginBtn.addEventListener('click', function(){
    showForm(adminLoginForm)
});


function openBox(){
    box.style.display = 'block';
}


function closeBox(){
    box.style.display = 'none';
}

function showForm(form){
    hideForms();
    form.style.display = 'block';
}


function hideForms(){
    userLoginForm.style.display = 'none';
    adminLoginForm.style.display = 'none';
}


userLoginForm.addEventListener('submit', function(event){
    event.preventDefault();
    window.location.href = "index.html";
});





