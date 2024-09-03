import Select from "react-select"
import { FilterContainer } from "./style"

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        width: '220px',
        borderRadius: '8px',
        boxShadow: 'none',
        textAlign: 'left'
    }),
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