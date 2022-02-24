setTimeout(function() {
  $('#preloader').fadeOut('slow', function() {
    $(this).remove();
  });
}, 20);


//===============
const searchFood=()=>{
    const searchInput=document.getElementById('searchInput');
    const searchText=searchInput.value;
    
    searchInput.value='';
   if(searchText== "" || searchText
   >0||0>searchText){
    alert("hgiuh")
   }
   else{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>dispalyfood(data.meals))
   }
    
}
const dispalyfood=(foods)=>{
    const divContainer=document.getElementById('foodInfo');
    divContainer.textContent='';
    foods.forEach(food => {
        console.log(food);
        const div1=document.createElement('div')
        div1.innerHTML=`
        <div  onclick="youtube(${food.idMeal})" class="col">
        <div class="card">
          <img src="${food.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            
          </div>
        </div>
      </div>

                 `
                 divContainer.appendChild(div1);
    });

}
const youtube=(foodid)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodid}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>dispalyfoodDetails(data.meals))

}
const dispalyfoodDetails=(foodDetails)=>{
    const divContainer=document.getElementById('foodInfo');
    divContainer.textContent='';
    foodDetails.forEach(singlefoodID => {
        console.log(singlefoodID);
        const div1=document.createElement('div')
        div1.innerHTML=`
        <div  onclick="youtube(${singlefoodID.idMeal})" class="col">
        <div class="card">
          <img src="${singlefoodID.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${singlefoodID.strMeal}</h5>
            
            <a href="${singlefoodID.strYoutube}" class="btn btn-primary">youtube link</a>
          </div>
        </div>
      </div>

                 `
                 divContainer.appendChild(div1);
})};
