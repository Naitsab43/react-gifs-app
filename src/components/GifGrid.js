import React from 'react'
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {


/*   const [images, setImages] = useState([]) */

  const {data: images, loading} = useFetchGifs(category); // Custom Hook


  //?============================================================================================
  //  El useEffect es llamado despues de cada renderizado, en este caso con el segundo argumento '[]' le estamos diciendo que lo renderice una sola vez
  //?============================================================================================

/*   useEffect(() => {
    getGifs(category)
      .then(setImages) // ?Pasa por defecto la respuesta como argumento a una funcion
      .catch(console.log)
  }, [category]) // ? Se ejecuta cada vez que category cambie */

  return (
    <>
      <h3 className= "animate__animated animate__zoomIn">{category}:</h3>

      {loading && <p>Loading...</p>}

      <div className = "card-grid">
        {images.map(imagen => <GifGridItem key={imagen.id} {...imagen} />)}
        
      </div>
    </>
  )
}



GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}