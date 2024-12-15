import { sortByDate } from "../../utils/sortByDate";

describe('sortByDate', () => {
    test('should correctly sort date ranges and present dates', () => {
        const input = [
            { date: "2022-2024", name: "Job A" },
            { date: "2020-2022", name: "Job B" },
            { date: "2024-present", name: "Job C" },
            { date: "2018-2020", name: "Job D" },
            { date: "2021-2023", name: "Job E" },
        ];

        const expected = [
            { date: "2024-present", name: "Job C" },
            { date: "2022-2024", name: "Job A" },
            { date: "2021-2023", name: "Job E" },
            { date: "2020-2022", name: "Job B" },
            { date: "2018-2020", name: "Job D" },
        ];

        expect([...input].sort(sortByDate)).toEqual(expected);
    });

    test('should handle mixed date formats', () => {
        const input = [
            { date: "2023", name: "Job F" },
            { date: "2022-2024", name: "Job A" },
            { date: "2024-present", name: "Job C" },
            { date: "2019", name: "Job G" },
        ];

        const expected = [
            { date: "2024-present", name: "Job C" },
            { date: "2022-2024", name: "Job A" },
            { date: "2023", name: "Job F" },
            { date: "2019", name: "Job G" },
        ];

        expect([...input].sort(sortByDate)).toEqual(expected);
    });

    test('should handle present only', () => {
        const input = [
            { date: "present", name: "Job H" },
            { date: "2020-2023", name: "Job I" },
        ];

        const expected = [
            { date: "present", name: "Job H" },
            { date: "2020-2023", name: "Job I" },
        ];

        expect([...input].sort(sortByDate)).toEqual(expected);
    });

    test('should handle multiple present dates', () => {
        const input = [
            { date: "2022-present", name: "Job A" },
            { date: "2024-present", name: "Job B" },
        ];

        const expected = [
            { date: "2024-present", name: "Job B" },
            { date: "2022-present", name: "Job A" },
        ];

        expect([...input].sort(sortByDate)).toEqual(expected);
    });
});