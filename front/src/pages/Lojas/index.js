import Brand from '../../img/prod/star/picture/star.jpg'

import './lojas.css'

export default function Projetos() {
    return (
        <div>
            <h2>Nossas Lojas</h2>

        <section id="locais">
            <div>
                <img src={Brand} alt="Estabelecimento" />
                <p className="estado">Rio de Janeiro</p>
                <p className="simple-text">Avenida Presidente Vargas, 5000</p>
                <p className="simple-text">(21) 3333-3333</p>
            </div>

            <div>
                <img src={Brand} alt="Estabelecimento" />
                <p className="estado">São Paulo</p>
                <p className="simple-text">Avenida Paulista, 1802</p>
                <p className="simple-text">(11) 2222-2222</p>
            </div>

            <div>
                <img src={Brand} alt="Estabelecimento" />
                <p className="estado">Santa Catarina</p>
                <p className="simple-text">Avenida Catarina, 2000</p>
                <p className="simple-text"> (77) 4444-4444</p>
            </div>
            
        </section>
        </div>    
    )
}