

/**
 * Draws an X piece onto a given canvas
 * @param {string} id 
 */
const drawX = (id) => {
    const cn = document.getElementById(id)
    const ctx = cn.getContext("2d")
    ctx.lineWidth = 3
    ctx.strokeStyle = '#2d4558'
    ctx.beginPath()
    ctx.moveTo(29,29)
    ctx.lineTo(71,71)
    ctx.moveTo(29,71)
    ctx.lineTo(71,29)
    ctx.stroke();
}

/**
 * Draws an O piece onto a given Canvas
 * @param {*} id 
 */

const drawO = (id) => {
    const cn = document.getElementById(id)
    const ctx = cn.getContext("2d")

    ctx.lineWidth = 3
    ctx.strokeStyle = '#2d4558'
    ctx.beginPath()
    ctx.arc(50,50,21,0,2*Math.PI);
    ctx.stroke();

}

/**
 * Removes the drawings on a canvas
 * @param {*} id 
 */
const removePiece = (id) => {
    const cn = document.getElementById(id)
    const ctx = cn.getContext("2d")
    ctx.clearRect(0,0,100,100)
}

