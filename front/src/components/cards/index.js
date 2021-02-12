import './cards.css'

export default function Card(props) {
    return(
        <div className="card" id={props.dados.categoria}>
            <img src={require(`../../img/prod/${props.dados.localimg}/picture/${props.dados.img}`).default} alt="..." />
            <p className="card-titulo">{props.dados.nome}</p>
            <p className="card-valor">R$ {props.dados.valor}</p>
            <p className='card-categoria'>categoria: {props.dados.categoria}</p>
        </div>
    )
}