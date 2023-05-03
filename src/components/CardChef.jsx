
const CardChef = ({chef}) => {
    const {_id, name, recipes,  experience, photoUrl } = chef ||{}
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photoUrl} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{experience} years of experience!!</p>
    <p>{recipes.length } own recipes !!</p>
    <div className="card-actions">
      <button className="btn btn-primary">view chefs profile</button>
    </div>
  </div>
</div>
  )
}

export default CardChef