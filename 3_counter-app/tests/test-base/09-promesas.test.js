import { getHeroeByIdAsync } from "../../src/test-base/09-promesas";

describe('PromesasComponent', () => {
    
    test('It should return an hero', (done)=>{
        const id=1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toBeDefined()
                done();
            })
    });

    test('It should return an error', (done)=>{
        const id=100;
        getHeroeByIdAsync( id )
            .catch( error => {
                expect(error).toBe("No se pudo encontrar el héroe")
                done();
            })
    })
})

describe('AsyncAwaitComponent', () => {
    
    test('It should return an hero', async()=>{
        const id=1;
        const resp = await getHeroeByIdAsync( id );
        expect(resp.name).toBe("Batman");

    });

})

