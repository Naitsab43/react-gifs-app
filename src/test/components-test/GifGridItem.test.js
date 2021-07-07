const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem");
import React from "react";
import "@testing-library/jest-dom";


describe('Pruebas a <GifGridItem />', () => {
  
  // Global 

  const title = "Soy un titulo";
  const url = "https://localhost/naruto.jpg";

  const wrapper = shallow(<GifGridItem title={title} url={url}/>);

  test('Debe de mostrar el componente correctamente', () => {
    
    
    expect(wrapper).toMatchSnapshot();

  })


  test('Debe de tener un parrafo con el title', () => {
    
    const p = wrapper.find("p");

    expect(p.text().trim()).toBe(title);


  });

  test('Debe de tener una imagen igual al src y al alt', () => {
    
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);

    expect(img.prop("alt")).toBe(title);


  });
  
  test('Debe tener la clase animate__fadeIn', () => {
    
    const div = wrapper.find("div");

    expect(div.hasClass("animate__fadeIn")).toBe(true);

  })
  


})
