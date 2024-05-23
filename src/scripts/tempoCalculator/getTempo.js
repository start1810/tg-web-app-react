import { tempoDB } from "./tempoDB.js"

const getTempo = (level, type) => {
    const tempo = tempoDB[type][level];
    return tempo;
}

export default getTempo;