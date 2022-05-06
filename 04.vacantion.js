function solve(groupOfPeople, typeOfPeople, dayOfTheWeek) {

    let peopleCount = Number(groupOfPeople);
    let peopleType = typeOfPeople;
    let day = dayOfTheWeek;

    let price = 0;
    let priceForOnePerson = 0;

    if (peopleType === "Students") {
        if (day === "Friday") {
            price = peopleCount * 8.45;
        } else if (day === "Saturday") {
            price = peopleCount * 9.80;
        } else if (day === "Sunday") {
            price = peopleCount * 10.46;
        }
    } else if (peopleType === "Business") {
        if (day === "Friday") {
            price = peopleCount * 10.90;
            priceForOnePerson = 10.90;
        } else if (day === "Saturday") {
            price = peopleCount * 15.60;
            priceForOnePerson = 15.60;
        } else if (day === "Sunday") {
            price = peopleCount * 16;
            priceForOnePerson = 16;
        }
    } else if (peopleType === "Regular") {
        if (day === "Friday") {
            price = peopleCount * 15;
        } else if (day === "Saturday") {
            price = peopleCount * 20;
        } else if (day === "Sunday") {
            price = peopleCount * 22.50;
        }
    }

    if (peopleType === "Students" && peopleCount >= 30) {
        price *= 0.85;
    } else if (peopleType === "Business" && peopleCount >= 100) {
        peopleCount -= 10;
        price = peopleCount * priceForOnePerson;
    } else if (peopleType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        price *= 0.95;
    }

   console.log(`Total price: ${price.toFixed(2)}`);
}
solve(40,
    "Regular",
    "Saturday")