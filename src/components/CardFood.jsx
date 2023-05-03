import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const CardFood = ({recipe, chef_id}) => {
    // eslint-disable-next-line no-unused-vars
    const {strCategory, strArea, strIngredients, strInstructions, strMeal, strMealThumb, strSource, strTags , idMeal} = recipe || {};
    const strIngredientsLength =Object.keys(strIngredients)
    const ingredientsList = strTags?.split(',')||[]; 
    console.log(ingredientsList);
   
    return (
        <div className="card w-full  bg-base-100 shadow-xl overflow-hidden ">
      <figure className="px-10 pt-10">
        <img src={strMealThumb} alt={strMeal} className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl border-b-2 flex pb-3 justify-center">{strMeal}</h2>
        {
          ingredientsList.length > 0 && <p className=" text-lg flex flex-wrap gap-1">{
            ingredientsList?.map((x, i)=> <span key={i} className="mx-1 text-violet-600 font-normal bg-blue-200 py-1 px-2 rounded-md ">{x}</span>)
          }
        </p>
        }
        
            {/* {
                strTags?.map((x, i)=> <span key={i} className="">{x}</span>)
            } */}

        <p className="my-2 text-lg"><span className="mx-2 text-violet-600 font-bold bg-blue-200 py-1 px-2 rounded-md ">{strIngredientsLength.length} Ingredients</span></p>
      
        <p className="my-2 text-lg"><span className="mx-2 text-violet-600 font-bold bg-blue-200 py-1 px-2 rounded-md ">{strCategory } </span> </p>
        <div className="card-actions justify-center mt-2 py-3">
          <Link to={`/recipe/${chef_id}/${idMeal}`}  className="btn border-0 bg-orange-400 hover:bg-blue-500 ">view chefs Recipes</Link>
        </div>
      </div>
    </div>
      )
}

export default CardFood