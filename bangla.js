// function  getuser(){
//   fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(users =>display(users) )
// }
// function display(users){
//   const addName=document.getElementById('addName')
//     for ( data of users){
//       console.log(data.name);
//      const li= document.createElement("li");
//      li.innerText=`The Name:${data.name},     Email: ${data.email}`;
//      addName.appendChild(li);
      
//     }
// }
// ===========================================
function getuser(){
    fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users =>display(users) )
}
function display(data){
  const addName=document.getElementById('addName');
  for(singleData of data){
    console.log(singleData.name);
    const addLi=document.createElement('li')
    addLi.innerText=`the name:${singleData.name}`
    addName.appendChild(addLi);
  }
}