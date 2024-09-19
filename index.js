let signupBtn = document.getElementById('signUpBtn');
let signInBtn = document.getElementById('signInBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

signInBtn.onclick = function(){
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign in';
    signupBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign up';
    signupBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
}