// Code your solution in this file!
function distanceFromHqInBlocks(address){
    if(address >= 42){
        address = address-42
        return address
    }else {
        return address = 42-address
    }
    
}


console.log(distanceFromHqInBlocks(4))