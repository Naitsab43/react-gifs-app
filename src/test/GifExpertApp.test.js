const { shallow } = require("enzyme");
import { GifExpertApp } from "../GifExpertApp";
import React from "react";
import "@testing-library/jest-dom";


describe('Pruebas a <GifExpertApp />', () => {
  
  test('Debe de crear el componente', () => {
    
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();

  })

  test('Debe de mostrar una lista de categorias', () => {
    
    const categories = ["Naruto", "Nanatsu no taizai"]

    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);


  })
  
  

})
