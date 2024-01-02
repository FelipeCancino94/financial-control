function MonthlyBalance({ listOfSpents }) {

  function getAllIncomes() {
    console.log(listOfSpents);
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

  return (
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
  )
}

export default MonthlyBalance;