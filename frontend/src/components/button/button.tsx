import { ButtonComponent } from "./styles";

export default function Button ({ title }: { title: string}) {
    return (
        <ButtonComponent
        onClick={() => console.log('SALVE')}>
            <p style={{ color: 'white' }}>
              { title }
            </p>
        </ButtonComponent>
    );
}