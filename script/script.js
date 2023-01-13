showNotes();

let addNoteBtn = document.getElementById("addNoteButton");
addNoteBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("FormControlTextarea1");
  //console.log(addTxt);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div  class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
        </div>
    </div>   
        `;
  });
  let notesElement = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElement.innerHTML = html;
  } else {
    let notesElement = document.getElementById("notes");
    notesElement.innerHTML = `<h3>No Data Found. Add  new notes</h3>`;
  }
}

function deleteNote(index) {
  console.log("deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//search functionality
let search = document.getElementById("searchNotesTxt");
search.addEventListener("input",function(event){
    //console.log(event.target.value);
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
// function searchNotes(){

// }
