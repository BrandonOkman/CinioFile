var movieSearch = document.querySelector('#movieSearch');
var movieSearchButton = document.querySelector('#movieSearchButton');
var nameEl = document.querySelector('#name');
var email = document.querySelector('#email');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var signupButton = document.querySelector('#signupButton');
var loginButton = document.querySelector('#loginButton');
var emailOrUsername = document.querySelector('#emailOrUsername')
var loginPassword = document.querySelector('#loginPassword')
var supportButton = document.querySelector('#supportButton')
var supportName = document.querySelector('#supportName')
var supportEmail = document.querySelector('#supportEmail')
var supportMessage = document.querySelector('#supportMessage')
var recentSearchText = document.createElement('p');
movieSearchButton.addEventListener('click', function (event) {
    event.preventDefault();
    var lastSearch = movieSearch.value;
    var lastSearchSection = "Most Recent Search Was: ";
    var searchArray = {lastSearchSection, lastSearch};
    localStorage.setItem('search', JSON.stringify(searchArray));
    getLastSearch();
})
signupButton.addEventListener('click', function (event) {
    event.preventDefault();
    var nameElement = nameEl.value;
    var emailEl = email.value;
    var usernameEl = username.value;
    var passwordEl = password.value;
    var signupArray = {nameElement, emailEl, usernameEl, passwordEl};
    localStorage.setItem('signup', JSON.stringify(signupArray));
    getSignUpInfo();
})
supportButton.addEventListener('click', function (event) {
    event.preventDefault();
    var supportNameEl = supportName.value;
    var supportEmailEl = supportEmail.value;
    var supportMessageEl = supportMessage.value;
    var supportArray = {supportNameEl, supportEmailEl, supportMessageEl};
    localStorage.setItem('support', JSON.stringify(supportArray));
    getSupportInfo();
})
loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    var emailOrUsernameEl = emailOrUsername.value;
    var loginPasswordEl = loginPassword.value;
    var loginArray = {emailOrUsernameEl, loginPasswordEl};
    localStorage.setItem('login', JSON.stringify(loginArray));
    getLoginInfo();
})
function getSupportInfo() {
    var localStorageSupport = JSON.parse(localStorage.getItem('support'));
    var supportNameElement = localStorageSupport.supportNameEl;
    var supportEmailElement = localStorageSupport.supportEmailEl;
    var supportMessageElement = localStorageSupport.supportMessageEl;
    console.log(supportNameElement + " - Support Name")
    console.log(supportEmailElement + " - Support Email")
    console.log(supportMessageElement + " - Support Message")
}
function getLoginInfo() {
    var localStorageLogin = JSON.parse(localStorage.getItem('login'));
    var loginEmailOrUsername = localStorageLogin.emailOrUsernameEl;
    var loginPasswordElement = localStorageLogin.loginPasswordEl;
    console.log(loginEmailOrUsername + " - Login UserName or Email")
    console.log(loginPasswordElement + " - Login Password")
}
function getSignUpInfo() {
    var localStorageSignUp = JSON.parse(localStorage.getItem('signup'));
    var signUpName = localStorageSignUp.nameElement;
    var signUpEmail = localStorageSignUp.emailEl;
    var signUpUsername = localStorageSignUp.usernameEl;
    var signUpPassword = localStorageSignUp.passwordEl;
    console.log(signUpName + " - Sign Up Name")
    console.log(signUpEmail + " - Sign Up Email")
    console.log(signUpUsername + " - Sign Up Username")
    console.log(signUpPassword + " - Sign Up Password")
}
function getLastSearch() {
    var localStorageItem = JSON.parse(localStorage.getItem('search'));
    var recentSearch = localStorageItem.lastSearch;
    console.log(recentSearch)
}
getLastSearch();
getSignUpInfo();
getLoginInfo();
getSupportInfo();
