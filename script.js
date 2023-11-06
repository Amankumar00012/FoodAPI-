let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let url ="https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click",()=>{
let userInp = document.getElementById("user-inp").value;

fetch(url + userInp)
.then((response) => response.json())
.then(data =>{
	console.log(data);
	let mymeal = data.meals[0];
	console.log(mymeal);
	console.log(mymeal.strCategory);
	console.log(mymeal.strArea);
	console.log(mymeal.strIngredient1);
	console.log(mymeal.strIngredient2);
	console.log(mymeal.strIngredient3);
	console.log(mymeal.strIngredient4);
	console.log(mymeal.strIngredient5);
	console.log(mymeal.strIngredient6);
	console.log(mymeal.strIngredient7);
	console.log(mymeal.strIngredient8);
	console.log(mymeal.strIngredient9);
	console.log(mymeal.strIngredient10);
	console.log(mymeal.strIngredient11);
	console.log(mymeal.strMeal);
	console.log(mymeal.strMealThumb);
	console.log(mymeal.strMeasure1);
	console.log(mymeal.strMeasure2);
	console.log(mymeal.strMeasure3);
	console.log(mymeal.strMeasure4);
	console.log(mymeal.strMeasure5);
	console.log(mymeal.strMeasure6);
	console.log(mymeal.strMeasure7);
	console.log(mymeal.strMeasure8);
	console.log(mymeal.strMeasure9);
	console.log(mymeal.strMeasure10);
	console.log(mymeal.strMeasure11);
	console.log(mymeal.strSource);
	console.log(mymeal.strInstructions);

	result.innerHTML =`
      <img src="${mymeal.strMealThumb}" class="foodimg">
      <h3>${mymeal.strMeal}</h3>
     <table class="food-data">
		    <tr>
			      <th>Ingredient</th>
			      <th>Measure</th>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient1}</td>
			      <td>${mymeal.strMeasure1}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient2}</td>
			      <td>${mymeal.strMeasure2}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient3}</td>
			      <td>${mymeal.strMeasure3}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient4}</td>
			      <td>${mymeal.strMeasure4}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient5}</td>
			      <td>${mymeal.strMeasure5}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient6}</td>
			      <td>${mymeal.strMeasure6}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient7}</td>
			      <td>${mymeal.strMeasure7}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient8}</td>
			      <td>${mymeal.strMeasure8}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient9}</td>
			      <td>${mymeal.strMeasure9}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient10}</td>
			      <td>${mymeal.strMeasure10}</</td>
		    </tr>
		    <tr>
			      <td>${mymeal.strIngredient11}</td>
			      <td>${mymeal.strMeasure11}</</td>
		    </tr>
	</table>
	      <div class=wrapper>
	      <h4>Instructions</h4>
	      <p>${mymeal.strInstructions}<br></p>
	      </div>    
       

	`;

   })
});