let add = document.getElementById("add")

let inputData = document.getElementById("inp")

let root = document.getElementById("root")

let isEdit = false;

document.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
      addElements()
    }
})

function addElements(){
  if(inputData.value == ""){
    alert("Enter something!")
  }
  else{
  let li = document.createElement("li")
  li.innerHTML = `<p id="tsk"> ${inputData.value} </p> <button id="edit" onclick="edit(this)">Edit</button> <button id="del" onclick="deleteTask(this)">Del</button> `

  if(isEdit){
    saveEdit()
    isEdit = false;
    add.innerText = 'Add'
  }
  else{
    root.appendChild(li)
  }
}

}

let tsktoEdit;

function edit(e){
  isEdit = true;
  add.innerText = 'save'
  inputData.value = e.previousElementSibling.innerText;
  tsktoEdit = e.previousElementSibling
}

function saveEdit(){
  tsktoEdit.innerText = inputData.value;
}

function deleteTask(e){
  let remChild=(e.parentElement);
  root.removeChild(remChild)
}