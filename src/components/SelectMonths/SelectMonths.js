function SelectMonths({ option }) {
  return (
    <option value={ option.monthDate }>{ option.monthName } { option.yearName }</option>
  )
}

export default SelectMonths;