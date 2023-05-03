
// eslint-disable-next-line react/prop-types
const TableForIngredients = ({ingredients}) => {
    const ingredientsList = Object.entries(ingredients)
    // console.log(ingredientsList);
  return (
    <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
  <caption className="bg-sky-100 py-2 text-2xl">
    Ingredients
  </caption>

    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name of Ingredients</th>
        <th>quantity </th>       
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        ingredientsList?.map((ingredient, i)=>  <tr key={i}><th>{i+1}</th><td>{[ingredient[0]]}</td><td>{ingredient[1]}</td></tr> )
      }     
    </tbody>
  </table>
</div>
  )
}

export default TableForIngredients