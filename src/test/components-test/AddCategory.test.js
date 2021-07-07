const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");
import React from "react"
import "@testing-library/jest-dom";


describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories}/>); // Esto puede estra let wrapper pero perderia la ayuda del jest-dom 
  
  beforeEach(() => {
    jest.clearAllMocks(); // limpia todos los mocks o simulaciones
    wrapper = shallow(<AddCategory setCategories={setCategories}/>);

  });
  
  test('Debe de mostrarse correctamente', () => {
  
    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de cambiar la caja de texto', () => {
    
    const input = wrapper.find("input");
    const value = "Hola mundo"

    input.simulate("change", {target: {value}}); // simulacion de un cambio del campo de texto, {target: {value}} hace referencia a e.target.value

    expect(wrapper.find("p").text().trim()).toBe(value)

  });

  test('No debe de postear la informacion onSubmit', () => {
    
    wrapper.find("form").simulate("submit", { preventDefault(){} });


    expect(setCategories).not.toHaveBeenCalled();

  });

  test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
    
    const input = wrapper.find("input");
    const value = "Hola mundo"

    input.simulate("change", {target: {value}})

    wrapper.find("form").simulate("submit", {preventDefault(){}})

    expect(setCategories).toHaveBeenCalled(); // se espera que setCategories haya sido llamado

    expect(input.prop("value")).toBe("");

    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Se espera que sea llamada como cualquier tipo de funcion

  });


})
