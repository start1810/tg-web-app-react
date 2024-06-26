import React, { useState } from "react";
import { nikeSize, standartSize, newBalanceSize, adidasSize, asicsSize } from "./scripts/sneakersSizeData.js";
import finderSize from "./scripts/finderSize.js";

const SneakersSize = () => {
  const [cmSize, setCmSize] = useState();
  const [ruSize, setRuSize] = useState();
  const [usSize, setUsSize] = useState();
  const [ukSize, setUkSize] = useState();
  const [nikeSizes, setNikeSizes] = useState({cm: 25, us: 7,uk: 6, ru: 39},);
  const [newBalanceSizes, setNewBalanceSizes] = useState({cm: 25, us: 7,uk: 6.5, ru: 39.5});
  const [adidasSizes, setAdidasSizes] = useState({cm: 25, us: 7.5,uk: 7, ru: 39});
  const [asicsSizes, setAsicsSizes] = useState({cm: 25, us: 7,uk: 6, ru: 40});
  const [gender, setGender] = useState('men');

  const onChangeCmSize = () => {
    const select = document.querySelector('#cmsize');
    setCmSize(select.value);
    document.querySelector('#rusize').selectedIndex = select.selectedIndex;
    document.querySelector('#ussize').selectedIndex = select.selectedIndex;
    document.querySelector('#uksize').selectedIndex = select.selectedIndex;

    const nikeIndex = finderSize(select.value, 'cm', nikeSize[gender])
    setNikeSizes(nikeSize[gender][nikeIndex]);

    const newBalanceIndex = finderSize(select.value, 'cm', newBalanceSize[gender])
    setNewBalanceSizes(newBalanceSize[gender][newBalanceIndex]);

    const adidasIndex = finderSize(select.value, 'cm', adidasSize[gender])
    setAdidasSizes(adidasSize[gender][adidasIndex]);

    const asicsIndex = finderSize(select.value, 'cm', asicsSize[gender])
    setAsicsSizes(asicsSize[gender][asicsIndex]);
  }

  const onChangeRuSize = (e) => {
    const select = document.querySelector('#rusize');
    setRuSize(select.value);
    document.querySelector('#cmsize').selectedIndex = select.selectedIndex;
    document.querySelector('#ussize').selectedIndex = select.selectedIndex;
    document.querySelector('#uksize').selectedIndex = select.selectedIndex;
    const nikeIndex = finderSize(select.value, 'ru', nikeSize[gender])
    setNikeSizes(nikeSize[gender][nikeIndex]);

    const newBalanceIndex = finderSize(select.value, 'ru', newBalanceSize[gender])
    setNewBalanceSizes(newBalanceSize[gender][newBalanceIndex]);

    const adidasIndex = finderSize(select.value, 'ru', adidasSize[gender])
    setAdidasSizes(adidasSize[gender][adidasIndex]);

    const asicsIndex = finderSize(select.value, 'ru', asicsSize[gender])
    setAsicsSizes(asicsSize[gender][asicsIndex]);
  }

  const onChangeUsSize = (e) => {
    const select = document.querySelector('#ussize');
    setUsSize(select.value);
    document.querySelector('#rusize').selectedIndex = select.selectedIndex;
    document.querySelector('#cmsize').selectedIndex = select.selectedIndex;
    document.querySelector('#uksize').selectedIndex = select.selectedIndex;
    const nikeIndex = finderSize(select.value, 'us', nikeSize[gender])
    setNikeSizes(nikeSize[gender][nikeIndex]);

    const newBalanceIndex = finderSize(select.value, 'us', newBalanceSize[gender])
    setNewBalanceSizes(newBalanceSize[gender][newBalanceIndex]);

    const adidasIndex = finderSize(select.value, 'us', adidasSize[gender])
    setAdidasSizes(adidasSize[gender][adidasIndex]);

    const asicsIndex = finderSize(select.value, 'us', asicsSize[gender])
    setAsicsSizes(asicsSize[gender][asicsIndex]);
  }

  const onChangeUkSize = (e) => {
    const select = document.querySelector('#uksize');
    setUkSize(select.value);
    document.querySelector('#rusize').selectedIndex = select.selectedIndex;
    document.querySelector('#ussize').selectedIndex = select.selectedIndex;
    document.querySelector('#cmsize').selectedIndex = select.selectedIndex;
    const nikeIndex = finderSize(select.value, 'uk', nikeSize[gender])
    setNikeSizes(nikeSize[gender][nikeIndex]);

    const newBalanceIndex = finderSize(select.value, 'uk', newBalanceSize[gender])
    setNewBalanceSizes(newBalanceSize[gender][newBalanceIndex]);

    const adidasIndex = finderSize(select.value, 'uk', adidasSize[gender])
    setAdidasSizes(adidasSize[gender][adidasIndex]);

    const asicsIndex = finderSize(select.value, 'uk', asicsSize[gender])
    setAsicsSizes(asicsSize[gender][asicsIndex]);
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
          <tr>
            <td>Nike</td>
            <td>{nikeSizes.cm}</td>
            <td>{nikeSizes.ru}</td>
            <td>{nikeSizes.us}</td>
            <td>{nikeSizes.uk}</td>
          </tr>
          <tr>
            <td>New Balance</td>
            <td>{newBalanceSizes.cm}</td>
            <td>{newBalanceSizes.ru}</td>
            <td>{newBalanceSizes.us}</td>
            <td>{newBalanceSizes.uk}</td>
          </tr>
          <tr>
           <td>Adidas</td>
            <td>{adidasSizes.cm}</td>
            <td>{adidasSizes.ru}</td>
            <td>{adidasSizes.us}</td>
            <td>{adidasSizes.uk}</td>
          </tr>
          <tr>
           <td>Asics</td>
            <td>{asicsSizes.cm}</td>
            <td>{asicsSizes.ru}</td>
            <td>{asicsSizes.us}</td>
            <td>{asicsSizes.uk}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SneakersSize;