const dueDate = require('./GB_Emarsys_dueDate');

describe('calculateDueDate', () => {
    it("it should return 'Turnaround time must be a number!!'", () => {
        expect(dueDate.calculateDueDate('may 13, 2021 17:00:00', "Emarsys")).toBe("Turnaround time must be a number!!")
    });

    it("it should return invalid turnaround time", () => {
        expect(dueDate.calculateDueDate("Emarsys")).toBe("Start and/or turnaround time can not be undefined!!!")
    });

    it("it should return Start and/or turnaround time can not be null!!!", () => {
        expect(dueDate.calculateDueDate('may 13, 2021 17:00:00', null)).toBe("Start and/or turnaround time can not be null!!!")
    });
})
