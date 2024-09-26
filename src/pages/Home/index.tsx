import './Home.scss';
import Plus from '../../assets/imagens/plus.png'
import Lupa from '../../assets/imagens/lupa.png'
import Card from "../../components/Card";
import Cabecalho from "../../components/Cabecalho";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const PagCadastraDeEpico = () =>  {
        navigate('/CadastroDeEpico');
    }
    const PagVisualizarArt = () =>{
        navigate('/');
    }
    return (

        <div className='area'>

            <Cabecalho />

            <main id='home'>
                <div>
                    <Card
                        imagem={Plus} 
                        onClick={PagCadastraDeEpico}
                        titulo='Cadastrar Épico'
                        subtitulo='Cadastre'
                    />
                </div>

                <div>
                    <Card
                        imagem={Lupa}
                        onClick={PagVisualizarArt}
                        titulo='Visualizar ART'
                        subtitulo='Faça sua consulta aqui'
                    />
                </div>
            </main>
        </div>
    );
}