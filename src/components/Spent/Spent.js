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
    return `${ t.getDate() }-${ t.getMonth() + 1 }-${ t.getFullYear() }`;
  }

  function toCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  return (
    <div className="spent p-3 grid mb-2" category={spent.category}>
      <div className="left-column">
        <p className="date leading-none">{ toDateTime(spent.date.seconds) }</p>
        <p className="text-xs pe-4 leading-none">{ spent.description }</p>
      </div>
      <div className="right-column">
        <p className="text-xl text-right leading-none">{ spent.category === 'salario' ? `+ ${ toCurrency(spent.value) }`: `- ${ toCurrency(spent.value) }` }</p>
        <p className="text-right leading-none">{ spent.category }</p>
      </div>
      {/* <button className="bg-red-700 text-white px-4" onClick={ () => deleteSpent(spent.id) }>Borrar</button> */}
    </div>
  )
}



export default Spent;