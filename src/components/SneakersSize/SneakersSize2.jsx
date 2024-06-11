import React, { useState } from "react";
import { brandSizes } from "./scripts/sneakersSizeData.js";




const tableView = (sizeArray) => {
  console.log(sizeArray)
  const tableData = sizeArray.map((e) => 
  <tr>
    <td>{e.cm}</td>
    <td>{e.us}</td>
    <td>{e.uk}</td>
    <td>{e.ru}</td>
  </tr>
  )
  return tableData;
}

const SneakersSize2 = () => {
  const [brand, setBrand] = useState('nike');
  const [gender, setGender] = useState('men');
  
  


  const onChangeGender = (e) => {
    const selectedValue = document.querySelector('input[name="gender"]:checked').value;
    setGender(selectedValue)
  }

  const onChangeBrand = () => {
    const select = document.querySelector('#brandselect');
    setBrand(select.value);
  }
  return (
    <div>
      <div id="gender">
        <input onClick={onChangeGender} type="radio" id="men" name="gender" value="men"/>
        <label for="men">Мужчина</label>
        <input onClick={onChangeGender} type="radio" id="women" name="gender" value="women" />
        <label for="women">Женщина</label>
      </div>  
      <select name='brand' id='brandselect' onChange={onChangeBrand}>
        <option value={'nike'}>Nike</option>
        <option value={'newBalance'}>New Balance</option>
        <option value={'adidas'}>Adidas</option>
        <option value={'asics'}>Asics</option>
      </select>
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>CM</td>
              <td>RUS</td>
              <td>US</td>
              <td>UK</td>
            </tr>
          </thead>
          <tbody>
            { 
              tableView(brandSizes[brand][gender])
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SneakersSize2;