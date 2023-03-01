import '../App.css';
import axios from 'axios';
import { Await, Link } from 'react-router-dom';
import ListaMateria from '../components/ListaMateria.jsx';
import { useEffect, useState } from 'react';

export default function Materias() {

    const [materias, setmaterias] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/materia').then((e) => setmaterias(e.data))
    }, [])

    const [getmateriaId, setGetmateriaId] = useState([]);
    useEffect(() => {
       axios.get(`http://localhost:3000/materia/${materiaId}`).then((e) => setGetmateriaId(e.data));
    }, []);
    
    const [busca, setBusca] = useState(false);
    const [materiaId, setmateriaId] = useState('')

    const buscar = (e) => {
        e.preventDefault()
        setBusca(true);
    }

    return (
        <div className='listagem'>
            <h1>Matérias</h1>
            <p>Algumas de nossas matérias:</p>
            <div>
                <button><Link to='/'>Rotas</Link></button>
                <button> <Link to='/cadastrodemateria'>Adicionar matérias</Link></button>
                <form action="" onSubmit={buscar}>
                    <input type='text' name='busca' required placeholder='Digite o ID da matéria...' value={materiaId} onChange={e => setmateriaId(e.target.value)} />
                    <input type="submit" value="Buscar" />
                </form>
            </div>
            <p className='listaMap'>
                {busca === false ? materias.map((e) => (<ListaMateria id={e.id} nome={e.nome} cargaHoraria={e.cargaHoraria} tempos={e.tempos} />)) : <ListaMateria id={getmateriaId.id} nome={getmateriaId.nome} cargaHoraria={getmateriaId.cargaHoraria} tempos={getmateriaId.tempos} />}
            </p>
            
        </div>
    )
}