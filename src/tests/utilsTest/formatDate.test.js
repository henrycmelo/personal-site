import {formatDateRange, formatDate} from "../../utils/formatDate";
describe("formatDateRange", ()=>{
    it("should return a formatted date range string",()=>{
        const dateInitial = "2021-08";
        const dateFinal = "2021-09";
        const expected="August 2021 - September 2021";
        expect(formatDateRange(dateInitial, dateFinal)).toBe(expected);
    })

    it("should handle different years",()=>{
        const dateInitial = "2021-08";
        const dateFinal = "2022-09";
        const expected="August 2021 - September 2022";
        expect(formatDateRange(dateInitial, dateFinal)).toBe(expected);
    })
})

describe("formatDate", ()=>{
    it("should return a formatted date string",()=>{
        const date = "2021-08";
        const expected="August 2021";
        expect(formatDate(date)).toBe(expected);
    })

    it("should return an error message for invalid input date",()=>{
        const date = "2021,3";
        const expected=new Error("Invalid Date");
        expect(formatDate(date)).toEqual(expected);
    })
})
