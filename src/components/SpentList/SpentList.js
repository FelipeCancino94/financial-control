import { useState, useEffect } from "react";
import Spent from "../Spent/Spent";
import { url, token } from "../../connections/index";


function SpentList() {
  const [listOfSpents, setSpendsList] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('2023-11')

  const listOfMonthsSpends = [
    {
      id: 0,
      monthName: 'Noviembre',
      yearName: '2023',
      monthDate: '2023-11'
    },
    {
      id: 1,
      monthName: 'Diciembre',
      yearName: '2023',
      monthDate: '2023-12'
    }
  ]

  function getSpends(startDate, endDate) {
    if (startDate === undefined) {
      startDate = '2023-11';
    }
    if (endDate === undefined) {
      endDate = '2023-12';
    }
    fetch(url + `/spends?filters[date][$gte]=${ startDate }-01&filters[date][$lt]=${ endDate }-01`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${ token }`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setSpendsList(data.data);
      })
  }

  // con filtro de fecha '/spends?filters[date][$gte]=2023-11-01&filters[date][$lt]=2023-12-01'
  useEffect(() => {
    getSpends();
  }, []);

  return (
    <div className="spent-list p-5 pb-0 relative md:absolute">
      <select className="mb-5 text-2xl" value={ selectedMonth } onChange={ e => {
        setSelectedMonth(e.target.value);
        getSpends(e.target.value, e.target.value === '2023-12' ? '2024-01' : e.target.value.split('-')[0] + '-' + (parseInt(e.target.value.split('-')[1]) + 1))
      } }>
        {
          listOfMonthsSpends?.map((month) => <option key={ month.id } value={ month.monthDate }>{ month.monthName } { month.yearName }</option>)
        }
      </select>
      {
        listOfSpents?.map((spent) => <Spent key={ spent.id } spent={ spent.attributes }></Spent>)
      }
    </div>
  )
}

export default SpentList;