// Code your solution in this file!
const drivers = ["Sally", "Bob", "Freddy", "Claudia"];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (int) => (fare) => int*fare;
const fareDoubler = createFareMultiplier(2);
function fareTripler(fare){
    const int = 3;
    return (int*fare);
} 
function selectDifferentDrivers(arrayOfDrivers, x){
    //arrayOfDrivers.slice(0,2);
    return(x(arrayOfDrivers));

    //x(arrayOfDrivers);
   //(drivers);
}