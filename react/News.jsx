import React from "react"
import { useCssHandles } from "vtex.css-handles"
import './news'

const CSS_HANDLES = [
    "newsContainer",
    "newsForm",
    "newsTextInput",
    "newsButton"
]

const News = () => {
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={`${handles.newsContainer}`}>
            <h3>Fique por dentro de todas as nossas novidades!</h3>
            <div className={`${handles.newsForm}`}>
                <input type="text" placeholder="Seu nome" className={`${handles.newsTextInput}`}/>
                <input type="email" placeholder="Seu e-mail" className={`${handles.newsTextInput}`}/>
                <input type="button" value="CADASTRAR" className={`${handles.newsButton}`}/>
            </div>
        </div>
    )
}

export default News