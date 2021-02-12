import {useState, useEffect} from 'react'
import axios from 'axios'

export default function Cadastroj() {
    var categorias = [{value: 'aventura', text: 'AVENTURA'}, {value: 'esportes', text: 'ESPORTES'}, {value: 'familia', text: 'FAMILIA'}, {value: 'fps', text: 'FPS'}]
    var imgs = [
    {value: 'cyberpunk', text: 'CYBERPUNK'},
    {value: 'fifa', text: 'FIFA'},
    {value: 'fall', text: 'FALL GUYS'},
    {value: 'squad', text: 'SQUAD'}]

    const [formData, setFormData] = useState({id: 20})
    const handleChange = ({target}) => {
        const {name, value} = target
        setFormData({...formData, [name]: value})
        
        console.log(formData)
    }
    const handleImg = () => {
        if(formData.localimg) {
            const value = formData.localimg
            setFormData({...formData, ['img']: value + ".jpg"})
        }
    } 
    useEffect(handleImg, [formData])
    const handleSubmit =  async (e) => {
        e.preventDefault()
        await (axios.post('http://localhost:4000/cadprod', formData, {headers: {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        }}))
        console.log(formData)
    }


    return (
        <section id="contato">
            <h2>Cadastrar jogo</h2>

            <form>
            <div className="mb-3" style={{maxWidth: '400px', margin: 'auto'}}>
                <label className="form-label">Nome</label>
                <input onChange={handleChange} name="nome" type='text' className="form-control" placeholder="Nomde do jogo" required />

                <label className="form-label">Valor</label>
                <input onChange={handleChange} name="valor" type='number' className="form-control" placeholder="Nomde do jogo" required />

                <label className="form-label" htmlFor="categoria">Categoria </label>
                <select onChange={handleChange} name="categoria" id="categoria">
                    <option>SELECIONE</option>
                    {categorias.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
                </select>

                <label className="form-label" htmlFor="imagem">Imagem </label>
                <select onChange={handleChange} name="localimg" id="imagem">
                    <option>SELECIONE</option>
                    {imgs.map(item => <option key={item.value} value={item.value}>{item.text}</option>)}
                </select>
                <button onClick={handleSubmit} className="btn btn-light">Enviar</button>
            </div>
            </form>
        </section>
    )
}