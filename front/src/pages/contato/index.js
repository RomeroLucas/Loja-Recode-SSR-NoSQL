

export default function Contato() {
    var assunto = ['Troca de jogos', 'Devolução', 'Reembolso', 'Compra não efetuada', 'Outros']
    const option = assunto.map((item) => <option>{item}</option>)

    return (
        <section id="contato">
            <h2>Contato</h2>

            <form>
                <div class="form-group">
                <label for="assunto">Nome</label>
                <input class="form-control" type="text" placeholder="Insira seu nome" />
                <label for="assunto">E-mail</label>
                <input class="form-control" type="text" placeholder="Insira seu email" />
                <label for="assunto">Assunto</label>
                <select class="form-control form-control-lg" id="assunto">
                    {option}
                </select>
                    <label for="exampleFormControlTextarea1">Descreva seu problema</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="button" class="btn btn-secondary">Enviar</button>
                </div>
            </form>




        </section>
    )
}