import { useState, useEffect } from "react";
import Spent from "../Spent/Spent";

import { db } from '../../connections/index';
import { getDocs, collection } from 'firebase/firestore';




function SpentList() {
  const [listOfSpents, setSpendsList] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('2023-11')

  const listOfMonthsSpends = [
    {
      id: 0,
      monthName: 'Enero',
      yearName: '2024',
      monthDate: '2024-01'
    },
    {
      id: 1,
      monthName: 'Febrero',
      yearName: '2024',
      monthDate: '2024-02'
    }
  ]

  /* function getSpends(startDate, endDate) {
    if (startDate === undefined) {
      startDate = '2024-01';
    }
    if (endDate === undefined) {
      endDate = '2024-02';
    }
    fetch(url + `spends`, {
      method: 'GET',
      /* headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'mode': 'no-cors'
        // 'authorization': `Bearer ${ token }`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSpendsList(data);
      })

  } */
  const spendsCollectionRef = collection(db, 'spends');
  // con filtro de fecha '/spends?filters[date][$gte]=2023-11-01&filters[date][$lt]=2023-12-01'
  useEffect(() => {
    // getSpends();
    const getSpends = async () => {
      try {
        const data = await getDocs(spendsCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setSpendsList(filteredData);
        console.log(filteredData);
      }
      catch (error) {
        console.error(error);
      }
    };

    getSpends();
  }, []);

  return (
    <div className="spent-list px-2 pb-0 relative md:absolute">
      <select className="mt-5 mb-5 text-2xl" value={ selectedMonth } onChange={ e => {
        setSelectedMonth(e.target.value);
        // getSpends(e.target.value, e.target.value === '2023-12' ? '2024-01' : e.target.value.split('-')[0] + '-' + (parseInt(e.target.value.split('-')[1]) + 1))
      } }>
        {
          listOfMonthsSpends?.map((month) => <option key={ month.id } value={ month.monthDate }>{ month.monthName } { month.yearName }</option>)
        }
      </select>
      {
        listOfSpents?.map((spent) => <Spent key={ spent.id } spent={ spent }></Spent>)
      }
    </div>
  )
}

export default SpentList;