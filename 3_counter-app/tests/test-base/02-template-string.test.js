import { getSaludo } from "../../src/test-base/02-template-string";

describe("02-template-string Test", ()=>{
    test("getSaludo should return a name", ()=>{
        const name = "Jhonatan";
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    })
})