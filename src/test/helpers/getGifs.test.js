const { shallow } = require("enzyme")
import React from "react";
import "@testing-library/jest-dom";
import { getGifs } from "../../helpers/getGifs";



describe('Pruebas al helper getGifs', () => {
  
  test('Debe de traer 10 elementos', async() => {
    
    const gifs =  await getGifs("Naruto");

    expect(gifs.length).toBe(10);

  })
  

  test('Debe de tener argumentos', async() => {
    
    
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);


  })
  

})



