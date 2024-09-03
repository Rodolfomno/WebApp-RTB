import Select from "react-select"
import { FilterContainer } from "./style"

const customStyles = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: (provided: any) => ({
        ...provided,
        width: '220px',
        borderRadius: '8px',
        boxShadow: 'none',
        textAlign: 'left'
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    option: (provided: any) => ({
        ...provided,
    })

}

export type typeOptions = {
    value: string, label: string
}

type Params = {
    options: { value: string, label: string }[],
    title: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFilter: any
}

export function Filter ({ options, title, setFilter }: Params) {
    

    return (
        <FilterContainer>
            { title }
            <Select 
              options={options} 
              styles={customStyles}
              isMulti
              onChange={(item) => setFilter(item)}
            />
        </FilterContainer>
    )
}