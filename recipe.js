let h1=document.querySelector("h1");
let inputtag=document.querySelector(".inputtag");
let btn=document.querySelector(".btn");
let paragraph=document.querySelector("h4");
let recipecontainer=document.querySelector(".recipecontainer");
let showcard=document.querySelector(".showcard");
let submit=document.querySelector(".submit");


async function demo() {
try{
const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=cake`);
const responce = await data.json();
console.log(responce.meals[1]);

responce.meals.forEach(meal=>{
    const recipediv=document.createElement("div");
    recipediv.classList.add("recipedivv");
   recipediv.innerHTML=`<img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea}</p>
    <p>${meal.strCategory}</p>
    `
   const button=document.createElement("button");
   button.innerHTML="Add a card";
   button.classList.add("viewbtn");
   button.addEventListener("click",()=>{
  alert("successfully Added🥳🥳🥳")
});
   recipediv.appendChild(button);
    // paragraph.innerHTML="";
    recipecontainer.appendChild(recipediv);
})
}
catch(err){
    recipecontainer.innerHTML="somthing wrong";
}
}
demo();
    async function fetchrecipi(query){
const data= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
const responce =await data.json();
console.log(responce.meals[1]);

responce.meals.forEach(meal=>{
    const recipediv=document.createElement("div");
    recipediv.classList.add("recipedivv");
   recipediv.innerHTML=`<img src="${meal.strMealThumb}">
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea}</p>
    <p>${meal.strCategory}</p>
//     `
   const button=document.createElement("button");
   button.innerHTML="Add a card";
   button.classList.add("viewbtn");
button.addEventListener("click",()=>{
  alert("successfully Added🥳🥳🥳")
});
recipediv.appendChild(button);
    recipecontainer.appendChild(recipediv);
})
 }
btn.addEventListener("click",()=>{
recipecontainer.innerHTML="";
const search=inputtag.value.trim();
 fetchrecipi(search);
})
submit.addEventListener("click",()=>{
    confirm("submit to press ok");
})
