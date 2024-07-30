import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import base_clientes from '../base/clientes.json';
import { useEffect, useState } from "react";
import '../static/Cliente.css';

function Cliente() {
    const { id } = useParams();
    const [cliente, setCliente] = useState({});

    // Localizar o cliente com base no ID
    const localizar_cliente = () => {
        const clienteEncontrado = base_clientes.find(c => c.ID == id);
        if (clienteEncontrado) {
            setCliente(clienteEncontrado);
        }
    };

    const handleChange = (event) => {
        setCliente({...cliente, [event.target.name]: event.target.value});
    }

    useEffect ( () => {
        localizar_cliente();
    }, [base_clientes]);
    
    return (
        <>
            <Header />
            <div className="div-detalhamento-cliente">
                <h1>Detalhes do Cliente {id}</h1>
                <form>
                    <div className="div-lbtinput-nome d-flex flex-column">
                        <label className="lb-nome-cliente">Nome Completo: </label>
                        <input type="text" value={cliente.nome} name="nome" className="input-nome" onChange={handleChange}></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cliente;