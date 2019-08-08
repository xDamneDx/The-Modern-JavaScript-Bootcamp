// let restaurant = {
//     name: 'ASB',
//     guestCapacity: 75,
//     guestCount: 70,
//     checkAvailability: function (partySize) {
//         let seatsLeft = this.guestCapacity - this.guestCount;
//         return partySize <= seatsLeft;
//     }
// }

// Challenge:

let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    seatParty: function (partySize) {
        this.guestCount += partySize;
    },
    removeParty: function (partySize) {
        this.guestCount -= partySize;
    },
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    }
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
