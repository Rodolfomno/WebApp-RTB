import { useLocation, useNavigate } from "react-router-dom";
import { ButtonComponent } from "./styles";

export default function Button ({ title }: { title: string}) {
    const path = useLocation().pathname
    const navigate = useNavigate()
    function onButtonClick () {

        if (path === '/devInfo' && title === 'Orders') {
            navigate('/')
        }
        if (path === '/' && title === 'Info') {
            navigate('/devInfo')
        }
    }

    return (
        <ButtonComponent
        onClick={onButtonClick}>
            <p style={{ color: 'white' }}>
              { title }
            </p>
        </ButtonComponent>
    );
}