import { useState, useEffect } from "react";
import SelectMonths from "../SelectMonths/SelectMonths";
import Spent from "../Spent/Spent";

const url = 'https://financial-control-app-b3538-default-rtdb.firebaseio.com/'

function SpentList() {
  const listOfMonthsSpends = [
    {
      id: 0,
      monthName: 'Noviembre',
      yearName: '2023',
      monthDate: '11-2023'
    },
    {
      id: 1,
      monthName: 'Diciembre',
      yearName: '2023',
      monthDate: '12-2023'
    }
  ]

  const [listOfSpents, setSpendsList] = useState([])
  useEffect(() => {
    fetch(`${url}/spends`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSpendsList(data)
      })
  }, [])

  /* const listOfSpents = [
    {
      id: 0,
      description: "Hamburguesa A&W",
      date: "09-11-2023",
      value: 37.99,
      category: "Comida"
    },
    {
      id: 1,
      description: "Arbolito de navidad",
      date: "09-11-2023",
      value: 119.99,
      category: "Navidad"
    },
    {
      id: 2,
      description: "Luces de navidad",
      date: "09-11-2023",
      value: 39.98,
      category: "Navidad"
    }
  ] */

  return (
    <div className="spent-list p-5">
      <select className="mb-5 text-2xl">
        {
          listOfMonthsSpends?.map((month) => <SelectMonths key={ month.id } option={ month }></SelectMonths>)
        }
      </select>
      {
        listOfSpents?.map((spent) => <Spent key={ spent.id } spent={ spent }></Spent>)
      }
    </div>
  )
}

export default SpentList;