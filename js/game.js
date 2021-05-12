

const MINWIDTH = 5;
const MINHEIGTH = 5;
const MAXWIDTH = 350;
const MAXHEIGTH = 350;

let target = {
    x: getRandomNumber( MAXWIDTH),
    y: getRandomNumber( MAXHEIGTH)
};

let $map = document.getElementById('map');
let $distance = document.getElementById('distance');
let clicks = 0;

$map.addEventListener('click', function (e)  {
    clicks++;
    let distance = getDistance(e, target);

    let distanceHint = getDistanceHint(distance);

    $distance.innerHTML = `${distanceHint}`

    if (distance < 30) {
        alert(`Found the Treasure in ${clicks} clicks!`);
        location.reload();
    };

});

