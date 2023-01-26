const form = document.querySelector('form');
const list = document.querySelector('#list')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const userNames = document.querySelector('#userName');
    const userLastNames = document.querySelector('#userLastName');
    const newLI = document.createElement('LI');
    newLI.innerText = userNames;
    newLI.innerHTML = userLastNames;
    list.append(newLI);
    newLI.innerText = `${userNames.value} ${userLastNames.value}`
    userNames.value = '';
    userLastNames.value = '';




})