import React from "react"
import stary from "../assets/imgs/depoimentos/star-yellow.png"
import starg from "../assets/imgs/depoimentos/star-grey.png"
import celularimg from "../assets/imgs/depoimentos/celular.png"
import tvimg from "../assets/imgs/depoimentos/tv.png"
import foneimg from "../assets/imgs/depoimentos/fone.png"
import { useCssHandles } from "vtex.css-handles"
import './depoimento'

const CSS_HANDLES = [
  "depContainer",
  "depImage",
  "depStars",
  "depText",
  "depUsername",
  "depDate"
]

const Depoimento = (props) => {
  const handles = useCssHandles(CSS_HANDLES)
  const { starNumber, produtoimg } = props
  const tv = tvimg
  const celular = celularimg
  const fone = foneimg

  function showStars(){
    switch(starNumber){
      case 0:
        return(
          <>
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          </>
        )
      break

      case 1:
        return(
          <>
          <img src={stary} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          </>
        )
      break

      case 2:
        return(
          <>
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          </>
        )
      break

      case 3:
        return(
          <>
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          </>
        )
      break

      case 4:
        return(
          <>
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={starg} alt="" />
          </>
        )
      break

      case 5:
        return(
          <>
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          <img src={stary} alt="" />
          </>
        )
      break

      default:
        return(
          <>
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          <img src={starg} alt="" />
          </>
        )
      break
    }
  }

  return (
    <div className={`${handles.depContainer}`}>
      <img src={eval(produtoimg)} alt="" className={`${handles. depImage}`}/>
      <div className={`${handles.depStars}`}>
        {showStars()}
      </div>
      <p className={`${handles.depText}`}>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      </p>
      <div>
        <p className={`${handles.depUsername}`}>Pedro Augusto</p>
        <p className={`${handles.depDate}`}>01/01/2021</p>
      </div>
    </div>
  )
}

Depoimento.schema = {
  title: 'Depoimento',
  description: 'Componente Depoimento',
  type: 'object',
  properties: {
    starNumber: {
      title: 'Star Number',
      description: 'Numero de estrelas na avaliação',
      type: 'integer'
    },
    produtoimg: {
      title: 'Imagem',
      description: 'Imagem do produto',
      type: 'string'
    }
  }
}

export default Depoimento