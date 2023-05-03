import { Link } from "react-router-dom"

const CardChef = ({chef}) => {
    const {_id, name, recipes,  experience, photoUrl, likes } = chef ||{}
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photoUrl} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-2xl border-b-2 flex pb-3 justify-center">{name}</h2>
    <p className="my-2 text-lg"><span className="mx-2 text-violet-600 font-bold bg-blue-200 py-1 px-2 rounded-md ">{experience} </span> years of experience!!</p>
    <p className="my-2 text-lg"><span className="mx-2 text-violet-600 font-bold bg-blue-200 py-1 px-2 rounded-md ">{recipes.length } </span> own recipes !!</p>
    <p className="my-2 text-lg"><span className="mx-2 text-violet-600 font-bold bg-blue-200 py-1 px-2 rounded-md ">{recipes.length } </span> own recipes !!</p>
    <p className="my-2 text-lg"><span className="mx-2 text-violet-600 font-bold bg-blue-200 py-1 px-2 rounded-md ">{likes } </span> people likes chef's recipes !!</p>
    <div className="card-actions justify-center mt-2 py-3">
      <Link to={`/chef/${_id}`}  className="btn border-0 bg-orange-400 hover:bg-blue-500 ">view chefs profile</Link>
    </div>
  </div>
</div>
  )
}

export default CardChef