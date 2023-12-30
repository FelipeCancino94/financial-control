import { db } from '../../connections/index';
import { getDocs, collection, addDoc } from 'firebase/firestore';
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

  const spendsCollectionRef = collection(db, 'spends');

  const addNewSpent = async () => {
    const descriptionInput = document.querySelector('#description').value;
    const categoryInput = document.querySelector('#category').value;
    const priceInput = document.querySelector('#price').value;
    const date = new Date();

    const data = {
      description: descriptionInput,
      date: new Date(),
      value: Number(priceInput),
      category: categoryInput
    }

    try {
      await addDoc(spendsCollectionRef, data)
      window.location.reload();
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="ms-4" >
      <div className="btn-add-spent z-10 absolute bottom-0 end-0 px-5 py-3 w-28 flex items-center justify-center text-center text-3xl px-2 py-2 text-white bg-lime-400 rounded-full hover:bg-lime-400 transition ease-in-out mt-3 cursor-pointer" onClick={() => toggleSpentForm()}>
        + <span className="text-lg ms-3 hidden">Agregar gasto</span>
      </div>
      <form className="add-spent absolute bottom-0 end-0 z-10 p-2 mt-3 rounded-lg">
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
              <option value="antojo">Antojos</option>
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
          <button type="button" className="px-5 py-2 bg-lime-400 text-white rounded-lg hover:bg-lime-600 transition ease-in-out mt-3" onClick={() => addNewSpent()}>
            Agregar
          </button>
        </div>
      </form>

    </div>
  )
}

export default AddSpent;