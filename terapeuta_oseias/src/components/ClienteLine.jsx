import '../static/ClienteLine.css'

function ClienteLine({ ID, nome, endereco, cidade, email, telefone, profissao }) {

    return (
        <>

            <tr>
                <td>
                    <a className='link-a-cliente' href={`/clientes/${ID}`}>
                        {ID}
                    </a>
                </td>
                <td>{nome}</td>
                <td>{cidade}</td>
                <td>{email}</td>
                <td>{telefone}</td>
                <td>{profissao}</td>
            </tr>
        </>
    )
}

export default ClienteLine;