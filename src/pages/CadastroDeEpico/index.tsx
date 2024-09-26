import { Autocomplete, Breadcrumb, Button, DatePicker, Input, Multiselect, Textarea, Text, Select, TSelectChangeValueData } from "@bem-lib/designsystem";
import Cabecalho from "../../components/Cabecalho";
import "../../components/Cabecalho/Cabecalho.scss"
import "./CadastroDeEpico.scss"
import { useEffect, useState } from "react";
import http from "../../http";
import IPitch from "../../interfaces/IPitch";


export default function CadastroDeEpico() {

    const [nomePitch, setNomePitch] = useState<IPitch[]>([])
    const [nomeTime, setNomeTime] = useState('');
    const [situacao, setSituacao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [pitchSelecionado, setPitchSelecionado] = useState<IPitch | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        http.get('Pitch/ConsultaPitchUsuario', {
            headers: {
                Authorization: `Bearer ${token}`,
                withCredentials: true
            }
        })
            .then(resposta => {
                console.log(resposta.data);
                setNomePitch(resposta.data);
            })
            .catch(error => {
                console.error('Erro ao buscar os dados:', error);
            })
    }, [])

    
    const handleSelectChange = (data: TSelectChangeValueData) =>{
        const selecionado = nomePitch.find(pitch => pitch.idPitch === data.value) || null;
         setPitchSelecionado(selecionado);
     }

    const consultarPitch = () => {
        if(pitchSelecionado){
            setNomeTime(pitchSelecionado.nomeTime);
            setSituacao(pitchSelecionado.situacaoDescricao);
            setDescricao(pitchSelecionado.descricao)
            
        } else {
            console.log("Nenhum pitch foi selecionado");
        }
    }
    return (

        <div className='area'>

            <Cabecalho />

            <main>
                <section>
                    <Breadcrumb
                        data={[
                            {
                                element: 'Serviços',
                                href: '/',
                            },
                            {
                                element: 'Épico'
                            }
                        ]}
                        size="small"
                    />
                    <Text id="Titulo"
                        as="p"
                        size={24}
                    >
                        Cadastro de Épico
                    </Text>
                    <Text id="Subtitulo"
                        as="p"
                        color="grey-700"
                        size={14}
                        weight="regular"
                    >
                        Dados do pitch
                    </Text>
                </section>

                <div id="DadosDoPitch" >
                    <Select
                        className="InputPitch"
                        fieldProps={{
                            name: 'campo',
                            placeholder: 'Selecioner/Digite o nome',
                            value: pitchSelecionado?.idPitch ||''
                        }}
                        label="Nome do pitch"
                        onChangeValue={handleSelectChange}
                        size="large"
                        topLabel
                    >
                        {nomePitch.map((pitch) => (
                            <Select.Option
                                key={pitch.idPitch}
                                value={pitch.idPitch}
                            >
                                {pitch.nomePitch}
                            </Select.Option>
                        ))}
                    </Select>

                    <Input className="InputPitch"
                        fieldProps={{
                            name: 'Time',
                            readOnly:true,
                            value: nomeTime
                          
                        }}
                        helperText=""
                        label="Time"
                        size="large"
                        topLabel
                        
                    />

                    <Input className="InputPitch"
                        fieldProps={{
                            name: 'Situação',
                            readOnly:true,
                            value: situacao
                        }}
                        helperText=""
                        label="Situação"
                        size="large"
                        topLabel
                    />


                </div>


                <Textarea id="Descrição"
                    fieldProps={{
                        name: 'Descrição',
                        readOnly: true,
                        value: descricao
                    }}
                    label="Descrição"
                    size="large"
                    topLabel
                />


                <div id="DadosDoEpico">
                    <Text id="Subtitulo"
                        as="p"
                        color="grey-700"
                        size={14}
                        weight="regular"
                    >
                        Dados do épico
                    </Text>

                    <div id="InputDados">
                        <Input id="InputIdEpico"
                            fieldProps={{
                                name: 'IdEpico'
                            }}
                            helperText=""
                            label="Id Épico"
                            size="large"
                            topLabel
                        />

                        <Autocomplete id="InputNomeDoEpico"
                            fieldProps={{
                                name: 'campo',
                                placeholder: 'Selecionar/Digite o nome'
                            }}
                            label="Nome do Épico"
                            onChangeValue={function ia() { }}
                            selectedValues={[]}
                            size="large"
                            topLabel
                        >
                            <Autocomplete.Option value={1}>
                                um
                            </Autocomplete.Option>
                        </Autocomplete>
                    </div>
                    <div id="InputData">
                        <DatePicker id="InputDataInicio"
                            fieldProps={{
                                name: 'date'
                            }}
                            label="Data Ínicio"
                            size="large"
                            topLabel
                        />

                        <DatePicker id="InputDataFim"
                            fieldProps={{
                                name: 'date'
                            }}
                            label="Data Ínicio"
                            size="large"
                            topLabel
                        />
                        <Autocomplete id="SelectSituacao"
                            fieldProps={{
                                name: 'campo',
                                placeholder: 'Selecione a situação'
                            }}
                            label="Situação"
                            onChangeValue={function ia() { }}
                            selectedValues={[]}
                            size="large"
                            topLabel
                        >
                            <Autocomplete.Option value={1}>
                                Um
                            </Autocomplete.Option>
                        </Autocomplete>

                        <Button
                            icon="Search"
                            iconPosition="left"
                            size="large"
                            onClick={consultarPitch}
                        >
                            Consultar
                        </Button>

                        <Button
                            icon="Erase"
                            iconPosition="left"
                            size="large"
                            variant="outline-primary"
                        >
                            Limpar
                        </Button>

                    </div>
                </div>

                <div id="DadosAtualizacao">
                    <Input id="InputUsuarioAtualizacao"
                        fieldProps={{
                            name: 'campo'
                        }}
                        label="Usuário Atualização"
                        size="large"
                        topLabel
                    />

                    <Input id="InputDataAtualizacao"
                        fieldProps={{
                            name: 'campo',
                        }}
                        label="Data Atualização"
                        size="large"
                        topLabel
                    />

                    <section id="BotaoGravarExcluir">
                        <Button
                            icon="Gravar"
                            iconPosition="left"
                            size="large"
                            variant="primary"
                        >
                            Gravar
                        </Button>

                        <Button
                            icon="ActionTrash"
                            iconPosition="left"
                            size="large"
                            variant="outline-primary"
                        >
                            Excluir
                        </Button>
                    </section>
                </div>


            </main>

        </div>

    );

}