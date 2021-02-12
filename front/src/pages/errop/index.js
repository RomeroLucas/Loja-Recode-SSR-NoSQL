import { Link } from 'react-router-dom'

export default function Errorp() {
    return (
        <section>
            <h1>Erro 404</h1>
            <p>Rota não encontrada</p>
            <Link to="/home">clique aqui para retornar a página inicial</Link>
        </section>
    )
}