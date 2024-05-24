const secToMin = (timeSec) => {
    const min = `${Math.floor(timeSec / 60)}`;
    const sec = `${Math.floor(timeSec - min * 60)}`;
    const secText = sec.length === 2? sec: '0' + sec;
    return min + '.' + secText;  
}

export default secToMin;