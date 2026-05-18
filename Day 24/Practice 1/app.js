let input = document.querySelector('input');

let addBtn = document.querySelector('#addBtn');

let resetBtn = document.querySelector('#resetBtn');

let list = document.querySelector('ul');

addBtn.addEventListener('click', function () {

    let listItem = document.createElement('li');

    listItem.innerText = input.value;

    list.append(listItem);

    input.value = "";
});


resetBtn.addEventListener('click', function () {

    list.innerHTML = "";

});