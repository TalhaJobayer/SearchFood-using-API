function loadpost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(post => displayPost(post))
  
}
function displayPost(posts){
    const div1=document.getElementById('post');
   for( singlePost of posts){
    const div2=document.createElement('div');
    div2.classList.add('post')
    div2.innerHTML=
              `
              <h3>${singlePost.title}</h3>
              <h2>${singlePost.body}</h2>
    
               `;
    
       div1.appendChild(div2)
       console.log(singlePost);
   };
}