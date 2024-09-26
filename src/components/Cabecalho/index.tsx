import { Icon, Logo } from '@bem-lib/designsystem';

import './Cabecalho.scss';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho() {
    const navigate = useNavigate();
    const PagLogin = () => {
        navigate('/');
    };

    return (
        <section className="cabecalho">
            <div className="imagens">
                <Logo className='logo'
                    height="50%"
                    variant="b-bem-promotora-horizontal"
                    width="50%"
                />
                <Icon className='logout' onClick={PagLogin}
                    name="HomeLogout" />
            </div>

        </section>

    );
}