import Button from "../button/button";
import { ButtonsComponent, HeaderComponent, LogoComponent } from "./styles";


export default function Header () {
    return (
        <HeaderComponent>
            <LogoComponent>
                RTB <span style={{ color: 'white' }}>WebApp</span>
            </LogoComponent>
            <ButtonsComponent>
                <Button title="Orders" />
                <Button title="Info" />
            </ButtonsComponent>
        </HeaderComponent>
    )
}