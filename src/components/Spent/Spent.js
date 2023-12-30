// import { url, token } from "../../connections/index";
import './Spent.css'

function Spent({ spent }) {
  /* function deleteSpent(id) {

    const data = {
      id: id
    };

    fetch(url + 'spends', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
  } */

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return String(t);
  }

  return (
    <div className="spent grid justify-between" category={spent.category}>
      <p className="p-5">{ spent.description }</p>
      {<p className="p-5 hidden date">{ toDateTime(spent.date.seconds) }</p>}
      <p className="p-5">{ spent.value }</p>
      <p className="p-5">{ spent.category }</p>
      {/* <button className="bg-red-700 text-white px-4" onClick={ () => deleteSpent(spent.id) }>Borrar</button> */}
    </div>
  )
}



export default Spent;