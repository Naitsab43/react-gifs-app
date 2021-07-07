

export const getGifs = async (category) => {


  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=BQoqrX9ZyofWvXt5UhoExjzD0b19eGlj`;

  const resp = await fetch(url);

  const {data} = await resp.json();

  const gifs = data.map(({id, images, title}) => {
    return {
      
      id: id,
      title: title,
      url: images?.downsized_medium.url // El '?' por lo que entendi sirve para decir que si vienen imagenes siga, algo asi, busca mas info para acordarte
    }
  })

  return gifs

}