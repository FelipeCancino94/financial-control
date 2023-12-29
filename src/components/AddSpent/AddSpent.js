import { url, token } from "../../connections/index";
import './AddSpent.css';

function AddSpent() {

  function toggleSpentForm() {
    if (!document.querySelector('.add-spent').classList.contains('open')) {
      document.querySelector('.add-spent').classList.add('open')
    } else {
      document.querySelector('.add-spent').classList.remove('open')
    }
    return;
  };

  function addNewSpent() {
    const descriptionInput = document.querySelector('#description').value;
    const categoryInput = document.querySelector('#category').value;
    const priceInput = document.querySelector('#price').value;
    const date = new Date();

    const data = {
      description: descriptionInput,
      date: `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`,
      value: Number(priceInput),
      category: categoryInput
    }

    fetch(url + 'spends', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'authorization': `Bearer ${ token }`
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
  }

  return (
    <div className="fixed bottom-5 end-5 w-1/3">
      <form className="add-spent p-2 bg-gray-200 rounded-lg">
        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
            Descripcion
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="description"
              id="description"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Hamborguesita"
            />
          </div>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
            Categoria
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <select id="category" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="comida">Comida</option>
              <option value="compras">Compras</option>
              <option value="gasolina">Gasolina</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
            Valor
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button type="button" className="px-5 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-400 transition ease-in-out mt-3" onClick={ () => addNewSpent() }>
            Agregar
          </button>
        </div>
      </form>
      <div className="btn-add-spent flex items-center justify-center text-center text-3xl px-2 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition ease-in-out mt-3 cursor-pointer" onClick={ () => toggleSpentForm() }>
        + <span className="text-lg ms-3">Agregar gasto</span>
      </div>
    </div>
  )
}

export default AddSpent;