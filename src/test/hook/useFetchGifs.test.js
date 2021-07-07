const { shallow } = require("enzyme");
import React from "react";
import {useFetchGifs} from "../../hooks/useFetchGifs"
import { renderHook } from "@testing-library/react-hooks"; // Testear custom hooks
import "@testing-library/jest-dom";



describe('Pruebas en el hook useFetchGifs', () => {
  
  test('Debe de retornar el estado inicial', async() => {
    

    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("One Punch"))
    const {data, loading} = result.current;

    await waitForNextUpdate();


    expect(data).toEqual([]);
    expect(loading).toBe(true);

  })

  test('Debe de retornar un arreglo de imagenes y false', async() => {
    
    const {result, waitForNextUpdate} = renderHook(() => useFetchGifs("One Punch"))

    await waitForNextUpdate();

    const {data, loading} = result.current;

    console.log(data, loading);

    expect(data.length).toBe(10);
    expect(loading).toBe(false);

  })
  

})
