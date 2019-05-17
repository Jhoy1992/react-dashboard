import React, { Component } from 'react'
import { listarConsultas } from './../../services/consultasService'

class Consultas extends Component {

    constructor(props){
        super(props)

        this.state = {
            realizadas: [],
            marcadas: []
        }
    }

    componentDidMount(){
        listarConsultas().then(dados => this.setState(dados))
    }

    render() {

        return (
            <div className="ml-3 mr-3">
                <h2 className="mt-2">Consultas</h2>

                <div className="row">
                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header bg-secondary text-white">
                                Realizadas
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidades</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.realizadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card mt-2">
                            <div className="card-header bg-secondary text-white">
                                Marcadas
                            </div>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Especialidades</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.marcadas.map((item, indice) => {
                                            return (
                                                <tr key={indice}>
                                                    <td>{item.especialidade}</td>
                                                    <td>{item.quantidade}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Consultas