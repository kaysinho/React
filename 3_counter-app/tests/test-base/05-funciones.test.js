import { getUser, getUsuarioActivo } from "../../src/test-base/05-funciones"

describe('05-funciones Test', ()=>{
   test('getUser() Should return an object', ()=>{
      const user = getUser();

      expect(user).toHaveProperty("uid")
      expect(user).toHaveProperty("username")
   })
   test('getUsuarioActivo() Should return an object with name', ()=>{
      const name = "Jhonatan"
      const user = getUsuarioActivo(name);

      expect(user).toHaveProperty("uid")
      expect(user).toHaveProperty("username")
      expect(user.username).toEqual(name)
   })
})