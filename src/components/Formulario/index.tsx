import React from 'react';
import './Formulario.scss'

class Formulario extends React.Component {
    render() {
        return (
            <form>         
                <div className='teste'>
                    <label>

                    </label>
                    <input 
                        className='formulario'
                        type="email"  
                        name="email"
                        id="email"
                        placeholder="Seu Email"
                    />
                </div>
                <div>
                    <label>

                    </label>
                    <input 
                    className='formulario'
                    type="password" 
                    name="senha"
                    id="senha"
                    placeholder="Sua Senha"
                    />
                    
                </div>
            </form>


        );


    }
}

export default Formulario;