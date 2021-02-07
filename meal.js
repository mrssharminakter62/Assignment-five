 fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
.then(res => res.json())
.then(data => displayFoods(data.foods));

 
        const displayFoods = foods =>{
            
        const foodsDiv = document.getElementById('foods');
           
        foods.forEach(meal => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';

         const foodInfo = ` 
        <img src = "${food.strCategoryThumb}">;
        <h3 class="food-name">${food.strCategory}</h3> ;
        `;

        foodDiv.innerHTML =foodInfo;
        foodsDiv.appendChild(foodDiv);
   });
}
         
     
})