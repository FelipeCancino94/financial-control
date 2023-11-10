import './Spent.css'

function Spent({ spent }) {
  return (
    <div className="spent flex justify-between ">
      <p className="p-5">{ spent.description }</p>
      <p className="p-5">{ spent.date }</p>
      <p className="p-5">{ spent.value }</p>
      <p className="p-5">{ spent.category }</p>
    </div>
  )
}

export default Spent;