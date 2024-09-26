import React, { ChangeEvent, useState } from 'react';
import './Login.scss';
import LogoBem from '../../assets/imagens/LogoBem.png';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Password, Toast, Toggle, TToastItemProps, useToast } from '@bem-lib/designsystem';
import http from '../../http';

export default function Login() {
    const navigate = useNavigate();
    const [formulario, setFormulario] = useState({ usuario: '', senha: '' })
    

    const evento = (evento: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = evento.target;
        console.log(value);
        console.log(name);
        setFormulario({ ...formulario, [name]: value })

    }

    const { toasts, addToasts, closeToast } = useToast();



    const getToast = (
        title: TToastItemProps["title"],
        severity: TToastItemProps["severity"],
        className: string
    ) => ({
        title,
        severity,
        className
    });

    const pagHome = async () => {
        http.post('api/Usuario/Entrar', formulario)
            .then((resposta) => {
                localStorage.setItem('token', resposta.data.token);
                navigate('/home')
            })
            .catch((erro) => {
                const mensagem = erro.response.data.message;
                console.log(mensagem)
                 if(mensagem === "Usuário não existe.") {
                    addToasts([getToast(mensagem, "error", "toast-alerta")]);
                 }
                 if(mensagem === "Senha incorreta") {
                    addToasts([getToast(mensagem, "error", "toast-alerta")]);
                 }
                 if(mensagem === "Senha fora da validade") {
                    addToasts([getToast(mensagem, "warning", "toast-alerta")]);
                 }
                
            })
    }

    return (
        <section className='container'>
            <img className='LogoBem' src={LogoBem} />
            <div className='Formulario'>
                <p><strong>Para acessar</strong>, faça seu login: </p>
                <form>
                    <div className='InputEmail'>
                        <Input
                            onChangeCapture={evento}
                            fieldProps={{
                                name: 'usuario'
                            }}
                            label="Usuario"
                            size="large"
                        />
                    </div>
                    <div>
                        <Password
                            onChangeCapture={evento}
                            fieldProps={{
                                name: 'senha'
                            }}
                            label="Sua Senha"
                            size="large"
                        />
                    </div>
                    <Toggle id='toggle'
                        fieldProps={{
                            name: 'toggle'
                        }}
                    >
                        Lembrar-me
                    </Toggle>

                </form>
            </div>
            <Button className='button' onClick={pagHome}
                icon="ArrowRightOne"
                iconPosition="right"
                size="large"
            >
                Entrar
            </Button>
            <div>
                <Toast 
                    horizontalAlignment="right"
                    onClose={function ia() { }}
                    toasts={toasts} 
                    verticalAlignment="top"
                />
            </div>
        </section>

    );

}