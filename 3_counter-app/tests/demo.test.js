describe("DemoComponent", ()=>{

    test('This is a test', ()=>{
        //ARRANGE
        const message1 = "Hello World";
    
        //ACT
        const message2 = message1.trim();
    
        //ASSERT
        expect(message1).toBe(message2);
    })
})
