const dueDate = require('./GB_Emarsys_dueDate');

describe('calculateDueDate', () => {
    it("it should return 'Turnaround time must be a number!!'", () => {
        expect(dueDate.calculateDueDate('may 13, 2021 17:00:00', "Emarsys")).toBe("Turnaround time must be a number!!")
    });

    it("it should return invalid input message", () => {
        expect(dueDate.calculateDueDate("Emarsys")).toBe("Start and/or turnaround time can not be undefined!!!")
    });

    it("it should return Start and/or turnaround time can not be null!!!", () => {
        expect(dueDate.calculateDueDate('may 13, 2021 17:00:00', null)).toBe("Start and/or turnaround time can not be null!!!")
    });

    it("it should return zero", () => {
        expect(dueDate.calculateDueDate(new Date(0), 0).getTime()).toBe(0)
    });

    it("it should return one day in milliseconds", () => {
        expect(dueDate.calculateDueDate(new Date(0), 8).getTime()).toBe(24 * 3600000)
    });
})
