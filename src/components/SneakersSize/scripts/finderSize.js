const finderSize = (quality, type, sizes) => {
    const sizeArray = [quality]
    for (let elem of sizes) {
        sizeArray.push(elem[type])
    }
    sizeArray.sort((a, b) => a - b)
    console.log(sizeArray)
    const index = sizeArray.indexOf(quality);
    console.log(index)
    return index;
}

export default finderSize;