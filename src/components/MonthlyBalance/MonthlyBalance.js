import { useEffect } from 'react';
import Chart from 'chart.js/auto';

function MonthlyBalance({ listOfSpents }) {

  let createdChart = false;

  function getAllIncomes() {
    const allInconmes = listOfSpents.filter((spent) => spent.category === 'salario');
    const totalIconmes = allInconmes.reduce((total, spent) => total + spent.value, 0);
    return totalIconmes;
  }

  function getAllBills() {
    const allBills = listOfSpents.filter((spent) => spent.category !== 'salario');
    const totalBills = allBills.reduce((total, spent) => total + spent.value, 0);
    return totalBills;
  }

  function toCurrency(value) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  function showChart() {
    console.log(listOfSpents);

    const comidaAmount = listOfSpents.filter((spent) => spent.category === 'comida').reduce((total, spent) => total + spent.value, 0);
    const comprasAmount = listOfSpents.filter((spent) => spent.category === 'compras').reduce((total, spent) => total + spent.value, 0);
    const antojosAmount = listOfSpents.filter((spent) => spent.category === 'antojo').reduce((total, spent) => total + spent.value, 0);
    const gasolinaAmount = listOfSpents.filter((spent) => spent.category === 'gasolina').reduce((total, spent) => total + spent.value, 0);
    const salarioAmount = listOfSpents.filter((spent) => spent.category === 'salario').reduce((total, spent) => total + spent.value, 0);
    const ahorroAmount = listOfSpents.filter((spent) => spent.category === 'ahorro').reduce((total, spent) => total + spent.value, 0);
    const facturaAmount = listOfSpents.filter((spent) => spent.category === 'factura').reduce((total, spent) => total + spent.value, 0);

    if (createdChart === false) {
      const ctx = document.getElementById('monthly-chart');
      const data = {
        labels: [
          'Comida',
          'Compras',
          'Antojos',
          'Gasolina',
          'Salario',
          'ahorro',
          'factura'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [comidaAmount, comprasAmount, antojosAmount, gasolinaAmount, salarioAmount, ahorroAmount, facturaAmount],
          backgroundColor: [
            'rgb(246, 190, 85)',
            'rgb(118, 192, 214)',
            'rgb(205, 138, 236)',
            'rgb(240, 231, 99)',
            'rgb(59, 241, 42)',
            'rgb(0, 30, 255)',
            'rgb(247, 79, 79)'
          ],
          hoverOffset: 4
        }]
      };
      const chart = new Chart(ctx, {
        type: 'pie',
        data: data
      });
      createdChart = true;
      document.querySelector('.btn-show-chart').style.display = 'none';
    }
  }

  return (
    <>
      <div className="month-balance px-2 py-5">
        <h3 className="incomes text-green-500 text-md flex justify-between">
          <span>Total ingresos: </span>
          <span>+ { toCurrency(getAllIncomes()) }</span>
        </h3>
        <h3 className="bills text-red-700 text-md flex justify-between">
          <span>Total gastos: </span>
          <span> - { toCurrency(getAllBills()) }</span>
        </h3>
        <h3 className={[`total-balance text-2xl flex justify-between ${getAllIncomes() - getAllBills() < 0 ? 'text-red-700' : 'text-green-500'}`]}>
          <span>Total balance del mes: </span>
          <span>{ toCurrency(getAllIncomes() - getAllBills()) }</span>  
        </h3>
      </div>
      <button className="btn-show-chart px-2 py-5 text-blue-600 hover:text-blue-100 transition ease-in-out underline" onClick={() => showChart()}>Mostrar grafico del mes</button>
      <canvas id="monthly-chart"></canvas>
    </>
  )
}

export default MonthlyBalance;