const searchFood=()=>{
    const serchInput=document.getElementById('searchInput');
    const serchText=serchInput.value;
   
    // console.log(serchText);
    serchInput.value="";
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${serchInput.value}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>dispalyfood(data.meals))
    
  
}

const dispalyfood=(foods)=>{
    const div1=document.getElementById('foodInfo');
          for(singlefood of foods) {
        // console.log(singlefood);

    const div2=document.createElement('div')
    div2.innerHTML=`
    <div class="col">
    <div class="card">
      <img style="width: 100%; "  src="${singlefood.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${singlefood.strMeal}</h5>
        <p class="card-text">
        INGRADIENTS:${ singlefood.strIngredient1},${ singlefood.strIngredient2},${ singlefood.strIngredient3},${ singlefood.strIngredient4},${ singlefood.strIngredient5},${ singlefood.strIngredient6},${ singlefood.strIngredient7},${ singlefood.strIngredient8},${ singlefood.strIngredient9},${ singlefood.strIngredient10},${ singlefood.strIngredient11},${ singlefood.strIngredient12},${ singlefood.strIngredient13},${ singlefood.strIngredient14},${ singlefood.strIngredient15}
       
       
        </p>
      </div>
    </div>
  </div>

                 `
                 div1.appendChild(div2)
};
}