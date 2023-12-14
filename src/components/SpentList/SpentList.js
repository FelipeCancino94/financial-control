import { useState, useEffect } from "react";
import Spent from "../Spent/Spent";


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

  const url = 'http://localhost:1337/api';
  const token = '3e63c09d9ae6d6360cb6061e6b4bdd78f157e15166ca2491db6f3733e0601fb1d69b6f1d431d1a1242687598500bf8bb7e0c44e9f0d0a302c8b6272c31a0e73133d89e205d13d9489108e9810a53de4c3fc98aebcb5ec52786e2299e747fd338e7833f82316349e9fe2956d380efc6d39490885168d82d1b78f44c5e3108da2b';


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
    <div className="spent-list p-5">
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