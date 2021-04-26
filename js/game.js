
const WIDTH = 400;
const HEIGTH = 400;

let target = {
    x: getRandomNumber(200, WIDTH),
    y: getRandomNumber(200 , HEIGTH)
};


let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (e)  {
    let distance = getDistance(e, target);

    let distanceHint = getDistanceHint(distance);

    $distance.innerHTML = `<h1>${distanceHint}</h1>`

    if (distance < 30) {
        alert(`Found the Treasure in ${clicks} clicks!`);
        location.reload();
    };

});

