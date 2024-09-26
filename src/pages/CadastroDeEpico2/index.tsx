import { Breadcrumb, Grid } from '@bem-lib/designsystem';
import Cabecalho from '../../components/Cabecalho';
import './CadastroDeEpico2.scss';

export default function CadastroDeEpico2() {
    return (

        <div className='area'>

            <Cabecalho />
            <div id='conteudoPrincipal'>
                <Grid>
                    <Grid.Col>
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
                            <p>Cadastro de Épico</p>
                            <p className="Subtitulo">Dados do pitch</p>
                        </section>

                        <h1>
                            Offsets
                        </h1>

                        <Grid.Col sm={1}>
                            <div className='sm2'>
                                sm 1
                            </div>
                        </Grid.Col>
                        <Grid.Col sm={1}>
                            <div className='sm1'>
                                sm 1
                            </div>
                        </Grid.Col>


                    </Grid.Col>
                    <h1>
                        Alinhamento vertical
                    </h1>
                    <Grid.Row
                        columnGapY="10px"
                        style={{
                            height: 170
                        }}
                    >
                        <Grid.Col sm={4}>
                            <div
                                style={{
                                    padding: '0 10px',
                                    width: 'fit-content'
                                }}
                            >
                                Cima
                            </div>
                        </Grid.Col>
                        <Grid.Col
                            alignItems="center"
                            sm={4}
                        >
                            <div
                                style={{
                                    padding: '0 10px',
                                    width: 'fit-content'
                                }}
                            >
                                Centro
                            </div>
                        </Grid.Col>
                        <Grid.Col
                            alignItems="end"
                            sm={4}
                        >
                            <div
                                style={{
                                    padding: '0 10px',
                                    width: 'fit-content'
                                }}
                            >
                                Baixo
                            </div>
                        </Grid.Col>
                    </Grid.Row>
                </Grid>

            </div>


        </div>






    );

}