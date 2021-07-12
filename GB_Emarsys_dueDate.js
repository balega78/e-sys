function calculateDueDate(start, hoursNeeded) {

    if (start === null || hoursNeeded === null) {
        return "Start and/or turnaround time can not be null!!!"
    } else if (typeof start === "undefined" || typeof hoursNeeded === "undefined") {
        return "Start and/or turnaround time can not be undefined!!!"
    } else if (typeof hoursNeeded != "number") {
        return "Turnaround time must be a number!!"
    }

    const hourInMilliseconds = 3600000

    function skipWeekend(time) {
        if (new Date(time).getDay() === 6) {
            return time += 2 * 24 * hourInMilliseconds
        } else {
            return time
        }
    }

    const submitDate = new Date(start)
    const submitTime = submitDate.getTime()
    const submitHour = submitDate.getHours()
    const hoursToAdd = hoursNeeded % 8
    const daysToAdd = (hoursNeeded - hoursToAdd) / 8

    //adding the number of whole working days needed
    let dueDate = submitTime
    for (let day = 0; day < daysToAdd; day++) {
        dueDate += 24 * hourInMilliseconds
        dueDate = skipWeekend(dueDate)
    }

    //adding the hours 
    if (submitHour + hoursToAdd > 16) {
        dueDate += (16 + hoursToAdd) * hourInMilliseconds
    } else {
        dueDate += hoursToAdd * hourInMilliseconds
    }

    dueDate = skipWeekend(dueDate)
    return new Date(dueDate)
}

module.exports = {
    calculateDueDate
}

//TESTS
//1 day as turnaround time
//should result 2021.05.15 9:00 
console.log(calculateDueDate('may 13, 2021 17:00:00', 8))

//0 turnaround time
//should result today, midday
console.log(calculateDueDate(new Date(Date.now()).setHours(12, 0, 0, 0), 0))

//1 week as turnaround time
//should result 2021.05.20 16:00 
console.log(calculateDueDate('may 13, 2021 16:00:00', 40))

//Invalid Date 
console.log(calculateDueDate("Emarsys", 8))

//null as Date 
console.log(calculateDueDate(null, 8))

//null as turnaround time 
console.log(calculateDueDate('may 13, 2021 17:00:00', null))

//invalid turnaround time
console.log(calculateDueDate('may 13, 2021 17:00:00', "Emarsys"))

//MISSING INPUT
console.log(calculateDueDate("Emarsys"))