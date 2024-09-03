import { Card } from "../cardRanking/card";
import { RankingContainer, RankingRow } from "./style";

export function OrdersRanking ({ data  }: { data: { id: number, name: string, totalSales: number }[]}) {
    return (
        <RankingContainer>
            <h1 style={{ color: 'grey' }}>
                Ranking
            </h1>
            <RankingRow> 
                <Card place={1} data={data} />
                <Card place={2} data={data} />
                <Card place={3} data={data} />
            </RankingRow>
        </RankingContainer>
    );
}