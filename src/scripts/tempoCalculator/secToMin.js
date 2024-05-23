const secToMin = (timeSec) => {
    const min = Math.floor(timeSec / 60);
    const sec = Math.floor(timeSec - min * 60);
    return `${min}.${sec}`;  
}

export default secToMin;