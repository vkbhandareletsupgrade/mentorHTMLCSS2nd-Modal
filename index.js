
let openBtn = document.getElementById('btn');
let cancel = document.getElementById('cancel-btn');
let openModal = document.getElementById('openModal')

cancel.addEventListener('click',()=>{
   document.getElementById('openModal').style.display="none";
})

openBtn.addEventListener('click',()=>{
   document.getElementById('openModal').style.display="flex";
})

document.getElementById('openModal').style.display="flex";