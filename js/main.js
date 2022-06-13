
// username

const userName = prompt('Add Name');

document.getElementById('user-name').innerHTML = userName;

// usersurname

const userSurname = prompt('Add Surname');

document.getElementById('user-surname').innerHTML = userSurname;

// preferred-color

const userColor = prompt('Add preferite color');

document.getElementById('user-color').innerHTML = userColor;

// suggested-psw

const userPsw = userName + userSurname + userColor + "22";
document.getElementById('user-psw').innerHTML = userPsw;