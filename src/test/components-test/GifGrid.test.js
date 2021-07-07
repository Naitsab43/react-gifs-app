const { shallow } = require("enzyme");
import React from "react"
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";
jest.mock("../../hooks/useFetchGifs");


describe('Pruebas en <GifGrid />', () => {
  
  const category = "Naruto";

  test('Debe de mostrar el componente correctamente', () => {
    
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category}/>);
    expect(wrapper).toMatchSnapshot();

  })
  
  test('Debe de mostrar items cuando se cargan imagen con nuestro useFetchGifs', () => {
    
    const gifs = [{
      id: "ABC",
      title: "Caulqifwf",
      url: "https://localhost/dnjncj.jpg",
    },
    {
      id: "E",
      title: "Caulqifwf",
      url: "https://localhost/dnjncj.jpg",
    },
    {
      id: "OH",
      title: "Caulqifwf",
      url: "https://localhost/dnjncj.jpg",
    }];
    

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length)

  })

})
