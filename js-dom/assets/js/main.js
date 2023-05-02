function openModal() {
    const modal = document.querySelector(".window");
    modal.classList.remove("d-none")
}
function closeModal(){
    const modal = document.querySelector(".window");
    modal.classList.add("d-none");
}
function createStudent(){
    let nameInp = document.querySelector("input[name='ad']");
    let surnameInp = document.querySelector("input[name='soyad']");

    const tbody = document.querySelector("tbody");
     tbody.innerHTML += `<tr><td>1</td><td>${nameInp.value}</td><td>${surnameInp.value}</td><td onclick="onClick"><p class="p-0" ind=""><button>x</button></p></td><td></td></tr>`;

    console.log([nameInp.value,surnameInp.value]);
    nameInp.value = '';
    surnameInp.value = '';
    closeModal();
}
function onClick(){
    const del=document.querySelector(".p-0");
    del.classList.remove(x[i]);
}
