import { useEffect, useState } from 'react'
import '../static/ClientesList.css'
import base_clientes from '../base/clientes.json'
import ClienteLine from './ClienteLine.jsx'

function ClienteList ({tamanho_lista}) {

    const [listaExibicao, setListaExibicao] = useState([])

    const carregarLista = () => {
        let novaListaExibicao = []
        for (let i in base_clientes) {
            novaListaExibicao.push(ClienteLine(base_clientes[i]));
            console.log(base_clientes[i]);
        };

        setListaExibicao(novaListaExibicao);
    };

    useEffect ( () => {
        carregarLista();
    }, [base_clientes]);

    return (
        <>
            <div className="div-client-list">
                <table>
                    <thead>
                        <tr>
                            <th className='th-id'>ID</th>
                            <th className='th-nome'>Cliente</th>
                            <th className='th-cidade'>Cidade</th>
                            <th className='th-email'>E-mail</th>
                            <th className='th-telefone'>Telefone</th>
                            <th className='th-profissao'>Profissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaExibicao}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ClienteList