import { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'

import './jogos.css'


import {lazy, Suspense} from 'react'
import loading from '../../img/icon/loading.png'

const LazyCards = lazy(()=> import('../../components/cards'))


export default function Jogos() {
    const produtosreducer = useSelector(state => state.produtos.dados)
    const [prod, setProd] = useState(produtosreducer)
    const [filtro, setFiltro] = useState(false)
    const dispatch = useDispatch()

    const filtrar = ({target}) => {
        const {value} = target
        setFiltro(value)
    }

    const conn = () => {
        axios.get('http://localhost:4000/prod')
        .then(res => dispatch({type: 'EXIBIR', payload: res.data}))
    }
    useEffect(conn, [produtosreducer])

    return (
        <section>
            <h2>Jogos</h2>
            <div id="jogos">
                <div id="filtros">
                    <ul className="list-group">
                        <button className="list-group-item bg-dark" onClick={filtrar} value="limpar">LIMPAR</button>
                        <button className="list-group-item bg-dark" onClick={filtrar} value="aventura">aventura</button>
                        <button className="list-group-item bg-dark" onClick={filtrar} value="esportes">esportes</button>
                        <button className="list-group-item bg-dark" onClick={filtrar} value="familia">familia</button>
                        <button className="list-group-item bg-dark" onClick={filtrar} value="fps">fps</button>
                    </ul>
                </div>


                <div id="mostruario">
                    {prod.map(item => {
                        if (!filtro) {
                            return <Suspense key={item.id} fallback={<img src={loading} alt="carregando"/>}>
                                        <LazyCards key={item.id} dados={item} />
                                    </Suspense>
                        }
                        else if(filtro === item.categoria) {
                            return <Suspense key={item.id} fallback={<img src={loading} alt="carregando"/>}>
                                        <LazyCards key={item.id} dados={item} />
                                    </Suspense>
                        }
                        else if(filtro === "limpar") {
                            return <Suspense key={item.id} fallback={<img src={loading} alt="carregando"/>}>
                                        <LazyCards key={item.id} dados={item} />
                                    </Suspense>
                        }
                    })}
                </div>
            </div>
        </section>
    )
}