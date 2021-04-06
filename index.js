// Code your solution in this file!
const BLOCK_LENGTH = 264;
const FLAT_FEE = 25;

function distanceFromHqInBlocks(streetNum)
{
    if(! Number.isInteger(streetNum)) return;

    return Math.abs(streetNum - 42);
}

function distanceFromHqInFeet(streetNum)
{
    if(! Number.isInteger(streetNum)) return;

    let distInBlocks = distanceFromHqInBlocks(streetNum);
    return distInBlocks * BLOCK_LENGTH;
}

function distanceTravelledInFeet(street1, street2)
{
    if(!Number.isInteger(street1) || !Number.isInteger(street2)) return;

    let streetDifference = Math.abs(street1 - street2);
    return streetDifference * BLOCK_LENGTH;
}

function calculatesFarePrice(start, destination)
{
    let dist = distanceTravelledInFeet(start, destination);
    
    if(dist < 400) 
    {
        return 0;
    }

    if(dist < 2000) {
        return (dist - 400) * 0.02;
    }
    
    if(dist < 2500)
    {
        return FLAT_FEE;
    }
    
    return 'cannot travel that far';
}