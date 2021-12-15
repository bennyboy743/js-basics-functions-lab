// Code your solution in this file!
let distanceFromHqInBlocks = (blocks) => {
    let distance = 42 - blocks
    if(distance < 0 ) {
        return distance * -1
    }
    return distance
}

let distanceFromHqInFeet = ( blocks) => {
    return distanceFromHqInBlocks(blocks) * 264
}

let distanceTravelledInFeet = (startingBlock, endingBlock) => {
    let distanceBetweenBlocksInFeet = (startingBlock - endingBlock) * 264
    if(distanceBetweenBlocksInFeet < 0 ) {
        return distanceBetweenBlocksInFeet * -1
    }
    return distanceBetweenBlocksInFeet
}

let calculatesFarePrice = (start, distination) => {
    let distanceBetweenBlocksInFeet = distanceTravelledInFeet(start,distination)
    if(distanceBetweenBlocksInFeet <= 400){
        return 0
    }
    if(distanceBetweenBlocksInFeet <= 2000){
        return 0.02 * (distanceBetweenBlocksInFeet - 400)
    }
    if(distanceBetweenBlocksInFeet > 2000 && distanceBetweenBlocksInFeet <= 2500) {
        return 25
    }
    if(distanceBetweenBlocksInFeet > 2500){
        return 'cannot travel that far'
    }
}
