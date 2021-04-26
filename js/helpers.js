
let getRandomNumber = (e) /*size*/ => {
    return Math.round(Math.random() * e);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
    
};

let getDistanceHint = distance => {
    if (distance < 30) {
        return "Boiling Hot!";
    } else if(distance < 40) {
        return "Really hot";
    } else if (distance < 60){
        return "Hot";
    } else if (distance < 100) {
        return"Watm";
    } else if (distance < 180) {
        return "Cold";
    } else if (distance < 360) {
        return "Really Cold";
    } else {
        return "Freezing";
    }
};