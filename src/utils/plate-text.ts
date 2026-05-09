export const plateText = (car_plate: { first: string, letter: string, second: string, state: string }) => {
    return `${car_plate.state} | ${car_plate.second} ${car_plate.letter} ${car_plate.first}`
}