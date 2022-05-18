// Code your solution in this file!
const drivers = [ 'Antonia', 'Nuru', 'Amari', 'Mo' ]

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(2, 4)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = a => b => a * b

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, selectingDrivers) => {
  return selectingDrivers(drivers)
}