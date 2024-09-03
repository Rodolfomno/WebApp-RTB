import DataTable from "react-data-table-component"
import { TableContainer } from "./style"
import { formatToCurrency } from "../../helpers/helpers"

export type DataType = {
  price: number,
  orderId: number,
  seller: number,
  country: string,
  product: string,
  sellerName: string,
}

function Title ({ title }: { title: string }) {
    return (
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{ title }</p>
    )
}

export function Table ({ data }: { data: DataType[] }) {
    const columns = [
        {
            name: <Title title="Orders" />,
            selector: (row: { orderId: number }) => row.orderId,
            sortable: true,
        },
        {
            name: <Title title="Product" />,
            selector: (row : { product: string }) => row.product,
            sortable: true,
        },
        {
            name: <Title title="Price" />,
            selector: (row: { price: number }) => formatToCurrency(row.price),
            sortable: true,
        },
        {
            name: <Title title="Seller" />,
            selector: (row: { sellerName: string }) => row.sellerName,
            sortable: true,

        },
        {
            name: <Title title="Country" />,
            selector: (row: { country: string }) => row.country,
            sortable: true,

        }
    ]

    return (
        <TableContainer>
            <DataTable
            columns={columns}
            data={data} 
            pagination
            />   
        </TableContainer>
    )
}
