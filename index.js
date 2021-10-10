
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if(addtxt.value==""){
        alert("Add list first!");
        return;
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addtxt.value = "";
    console.log(notesObj)
    showList()
});

function showList() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        alert("Add list first");
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";

    notesObj.forEach(function (element, index) {
        html += ` 
            <div class="listcard">
            <div class="listbody">
                <h3 class="list-title">List  ${index + 1}</h3>
                <p class="list-text">${element}</p>
                <button id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
            </div>
        </div>`
    });

    let notesElem = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {
        notesElem.innerHTML = `<p class="nwork">Yohoo ! No work today 💃</p>`;
    }
}

function deleteNote(index) {
    alert("Sure you wanna delete it?");
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showList();
}
