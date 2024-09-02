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

export function Filter ({ options, title }: { options: { value: string, label: string }[], title: string}) {

    return (
        <FilterContainer>
            { title }
            <Select 
              options={options} 
              styles={customStyles}
              isMulti
              onChange={(item) => console.log(item)}
            />
        </FilterContainer>
    )
}