import React, { useState } from "react";


const standartSize = {
  men: [
    {cm: 25, us: 7,uk: 6.5, ru: 39},
    {cm: 25.5, us: 7.5,uk: 7, ru: 39.5},
    {cm: 26, us: 8,uk: 7.5, ru: 40},
    {cm: 26.5, us: 8.5,uk: 8, ru: 40.5},
    {cm: 27, us: 9,uk: 8.5, ru: 41},
    {cm: 27.5, us: 9.5,uk: 9, ru: 41.5},
    {cm: 28, us: 10,uk: 9.5, ru: 42},
    {cm: 28.5, us: 10.5,uk: 10, ru: 42.5},
    {cm: 29, us: 11,uk: 10.5, ru: 43},
    {cm: 29.5, us: 11.5,uk: 11, ru: 43.5},
    {cm: 30, us: 12,uk: 11.5, ru: 44},
    {cm: 30.5, us: 12.5,uk: 12, ru: 44.5},
    {cm: 31, us: 13,uk: 12.5, ru: 45},
    {cm: 31.5, us: 13.5,uk: 13, ru: 45.5},
    {cm: 32, us: 14,uk: 13.5, ru: 46},
    {cm: 32.5, us: 14.5,uk: 14, ru: 46.5},
    {cm: 33, us: 15,uk: 14.5, ru: 47},
    {cm: 33.5, us: 15.5,uk: 15, ru: 47.5},
    {cm: 34, us: 16,uk: 15.5, ru: 48},
  ],
  women: [
    {cm: 21.5,us: 5,uk: 3,ru: 34},
    {cm: 22,us: 5.5,uk: 3.5,ru: 34.5},
    {cm: 22.5,us: 6,uk: 4,ru: 35},
    {cm: 23,us: 6.5,uk: 4.5,ru: 36},
    {cm: 23.5,us: 7,uk: 5,ru: 36.5},
    {cm: 24,us: 7.5,uk: 5.5,ru: 37},
    {cm: 24.5,us: 8,uk: 6,ru: 37.5},
    {cm: 25,us: 8.5,uk: 6.5,ru: 38},
    {cm: 25.5,us: 9,uk: 7,ru: 39},
    {cm: 26,us: 9.5,uk: 7.5,ru: 39.5},
    {cm: 26.5,us: 10,uk: 8,ru: 40},
    {cm: 27,us: 10.5,uk: 8.5,ru: 41},
    {cm: 27.5,us: 11,uk: 9,ru: 41.5},
    {cm: 28,us: 11.5,uk: 9.5,ru: 42},
    {cm: 28.5,us: 12,uk: 10,ru: 42.5},
    {cm: 29,us: 12.5,uk: 10.5,ru: 43},
    {cm: 29.5,us: 13,uk: 11,ru: 43.5},
    {cm: 30,us: 13.5,uk: 11.5,ru: 44},
    {cm: 30.5,us: 14,uk: 12,ru: 44.5},
  ]
}




const SneakersSize = () => {
  const [cmSize, setCmSize] = useState();
  const [ruSize, setRuSize] = useState();
  const [usSize, setUsSize] = useState();
  const [ukSize, setUkSize] = useState();
  const [gender, setGender] = useState('men');

  const onChangeCmSize = () => {
    const select = document.querySelector('#cmsize');
    setCmSize(select.value);
    document.querySelector('#rusize').selectedIndex = select.selectedIndex;
    document.querySelector('#ussize').selectedIndex = select.selectedIndex;
    document.querySelector('#uksize').selectedIndex = select.selectedIndex;
  }

  const onChangeRuSize = (e) => {
    const select = document.querySelector('#rusize');
    setRuSize(select.value);
    document.querySelector('#cmsize').selectedIndex = select.selectedIndex;
    document.querySelector('#ussize').selectedIndex = select.selectedIndex;
    document.querySelector('#uksize').selectedIndex = select.selectedIndex;
  }

  const onChangeUsSize = (e) => {
    const select = document.querySelector('#ussize');
    setUsSize(select.value);
    document.querySelector('#rusize').selectedIndex = select.selectedIndex;
    document.querySelector('#cmsize').selectedIndex = select.selectedIndex;
    document.querySelector('#uksize').selectedIndex = select.selectedIndex;
  }

  const onChangeUkSize = (e) => {
    const select = document.querySelector('#uksize');
    setUkSize(select.value);
    document.querySelector('#rusize').selectedIndex = select.selectedIndex;
    document.querySelector('#ussize').selectedIndex = select.selectedIndex;
    document.querySelector('#cmsize').selectedIndex = select.selectedIndex;
  }

  const onChangeGender = (e) => {
    const selectedValue = document.querySelector('input[name="gender"]:checked').value;
    setGender(selectedValue)
  }

  const sizeOptions = (sizeSet, type) => {
    let sizes = []
    for (let elem of sizeSet) {
      sizes.push(<option value={elem[type]}>{elem[type]}</option>)
    }
    return sizes; 
  }
  return (
    <div>
      <div id="gender">
        <input onClick={onChangeGender} type="radio" id="men" name="gender" value="men"/>
        <label for="men">Мужчина</label>
        <input onClick={onChangeGender} type="radio" id="women" name="gender" value="women" />
        <label for="women">Женщина</label>
      </div>

      <table>
        <thead>
          <tr>
            <td></td>
            <td>CM</td>
            <td>RUS</td>
            <td>US</td>
            <td>UK</td>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td>Ваш размер</td>
            <td>
              <select name="size" id="cmsize"
              onChange={onChangeCmSize} 
              >
              {sizeOptions(standartSize[gender], 'cm')}
              </select> 
            </td>
            <td>
            <select name="size" id="rusize"
              onChange={onChangeRuSize} 
              >
              {sizeOptions(standartSize[gender], 'ru')}
              </select> 
            </td>
            <td>
            <select name="size" id="ussize"
              onChange={onChangeUsSize} 
              >
              {sizeOptions(standartSize[gender], 'us')}
            </select> 
            </td>
            <td>
            <select name="size" id="uksize"
              onChange={onChangeUkSize} 
              >
              {sizeOptions(standartSize[gender], 'uk')}
              </select> 
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SneakersSize;