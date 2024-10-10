import { formatToCurrency } from "../../helpers/helpers";
import { CardContainer, Title, SellerContainer } from "./styles";


export function Card ({ data, place }: { data: { id: number, name: string, totalSales: number }[], place: number }) {
    return(
        <CardContainer>
            <Title>
                {  `${place}º place ` }
            </Title>
            <SellerContainer>
                <div style={{ color: '#383838', fontWeight: 'bold' }}>
                    { data[place -1].name}
                </div>
                <div style={{ textAlign: 'end', color: '#38383ss8', fontWeight: 'bold' }}>
                    { `Total: ${formatToCurrency(data[place -1].totalSales)}` }
                </div>
            </SellerContainer>
        </CardContainer>
    )
}