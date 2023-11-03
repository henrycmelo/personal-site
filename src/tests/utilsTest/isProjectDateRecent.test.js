import { isProjectDateRecent } from "../../utils/recent";


describe("isProjectDateRecent", ()=>{

    it("should return true when projectDate is within the last 9 months",()=>{
        const projectDate = new Date("2023-08-1");
        expect(isProjectDateRecent(projectDate)).toBe(true);
    })

    it("should return false when projectDate is not within the last 9 months",()=>{
        const projectDate = new Date("2022-08-1");
        expect(isProjectDateRecent(projectDate)).toBe(false);
    })

    it("should return false when projectDate is null",()=>{
        const projectDate = null;
        expect(isProjectDateRecent(projectDate)).toBe(false);
    })
})