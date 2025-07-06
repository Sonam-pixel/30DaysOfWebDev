function createNote() {
  let noteText = prompt("Enter your note:");
  if (!noteText) {
    alert("Note can't be empty!");
    return;
  }

  const notesContainer = document.getElementById("notesContainer");

  const note = document.createElement("div");
  note.classList.add("note");
  note.innerText = noteText;

  note.style.backgroundColor = "#ffffe0";
  note.style.fontSize = "16px";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.setAttribute("title", "Click to delete this note");

  deleteBtn.addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      note.remove();
    }
  });

  note.append(deleteBtn);
  notesContainer.prepend(note);
}