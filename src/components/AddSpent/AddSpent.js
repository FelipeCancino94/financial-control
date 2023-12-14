import './AddSpent.css';

function AddSpent() {

  const url = 'http://localhost:1337/api';
  const token = '3e63c09d9ae6d6360cb6061e6b4bdd78f157e15166ca2491db6f3733e0601fb1d69b6f1d431d1a1242687598500bf8bb7e0c44e9f0d0a302c8b6272c31a0e73133d89e205d13d9489108e9810a53de4c3fc98aebcb5ec52786e2299e747fd338e7833f82316349e9fe2956d380efc6d39490885168d82d1b78f44c5e3108da2b';

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

    const data = {
      data: {
        description: descriptionInput,
        category: categoryInput,
        value: Number(priceInput),
        date: new Date()
      }
    }

    fetch(url + '/spends', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${ token }`
      },
      body: JSON.stringify(data)
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