loadCountry=() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>addcountry(data))
}
loadCountry();
const divContainer=document.getElementById('flag');
addcountry= (countries)=>{
       countries.forEach(country => {
            
           const div1=document.createElement('div');
           div1.classList.add('flagClass');
           div1.innerHTML=`
                <h3> Name:${country.name.common} </h3>
                <p> Official:${country.name.official} </p>
                
                <p> Capital:${country.capital} </p>
                <img style="width: 200px;" src=" ${country.flags.png}" alt="">

                          ` ;
        
           divContainer.appendChild(div1);
        //    console.log(country);
       });
}