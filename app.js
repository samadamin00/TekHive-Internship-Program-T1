let inp = document.querySelector('input');
let ol= document.querySelector('ol');
let addTodo = () => {
if(!inp.value){
    alert('please Enter Your Task')
}
else{
let createLi = document.createElement('li');
let liText = document.createTextNode(inp.value);
createLi.appendChild(liText);
let btn1 = document.createElement('button');
let btn1Text = document.createTextNode('Edit');
btn1.setAttribute('class', 'edit')
btn1.addEventListener('click',edit);
btn1.appendChild(btn1Text);
createLi.appendChild(btn1)
let btn2 = document.createElement('button');
let btn2Text = document.createTextNode('\u00d7');
btn2.setAttribute('class', 'delete');
btn2.addEventListener('click',deletee);
btn2.appendChild(btn2Text)
createLi.appendChild(btn2)
ol.appendChild(createLi)
inp.value = ""
}
}

let edit = (e) =>{
    let promp = prompt('Enter Your Task Edit',e.target.parentNode.firstChild.nodeValue);
    e.target.parentNode.firstChild.nodeValue = promp;
    console.log(e.target.tagName)
}

let deletee = (e)=>{
 e.target.parentNode.remove()
}

ol.addEventListener('click', function(e){
     e.target.classList.toggle('checked')
    console.log(e.target.tagName)

})