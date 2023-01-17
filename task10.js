
var form = document.getElementById('my-form');

form.addEventListener('submit',addLocal);

function addLocal(e){
    e.preventDefault();

    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('email').value;

    localStorage.setItem(userName,userEmail);

}
