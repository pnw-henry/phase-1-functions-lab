const hqBlocks = 42;
const blockInFeet = 264;

//Returns the distance from HQ to user, in blocks.
function distanceFromHqInBlocks(distanceInBlocks){
    
    return Math.abs((distanceInBlocks - hqBlocks));
}
//Returns the distance from HQ to user, in feet.
function distanceFromHqInFeet(distanceInBlocks){
    
    return (blockInFeet * distanceFromHqInBlocks(distanceInBlocks));
}
//Returns total distance traveled in feet.
function distanceTravelledInFeet(start, destination){
    
    let totalDistance = Math.abs((start - destination));
    return totalDistance * blockInFeet;
}

function calculatesFarePrice(start, destination){
    
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    
    if (distanceInFeet <= 400){
        return 0;
    }
    else if (distanceInFeet > 400 && distanceInFeet < 2000){
        return Math.abs((distanceInFeet - 400) * 0.02);
    }

    else if (distanceInFeet > 2000){
        if (distanceInFeet > 2500){
            return 'cannot travel that far';
        }
        return 25;
    }
}