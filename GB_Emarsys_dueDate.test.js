const dueDate = require('./GB_Emarsys_dueDate');

describe('calculateDueDate', () => {
    it("it should return 'Turnaround time must be a number!!'", () => {
        expect(dueDate.calculateDueDate('may 13, 2021 17:00:00', "fgnb")).toBe("Turnaround time must be a number!!")
    });
})
