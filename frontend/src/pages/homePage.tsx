import { Table } from "../components/table/dataTable";
import { useEffect, useState } from "react"
import { HomeContainer } from "./style";
import { Filter } from "../components/filters/filter";
import { FilterRow, FiltersContainer } from "../components/filters/style";


export function HomePage () {
    const [data, setData] = useState([])
    const [topSellers, setTopSellers] = useState();
    const [countriesOptions, setCountriesOptions] = useState();
    const [sellersOptions, setSellerOptions] = useState();
    // const [filteredCountries, setFilteredCountries] = useState();
    // const [filteredSellers, setFilteredSellers] = useState();


    useEffect(() => {

      fetch('http://localhost:3001/get-all-orders')
        .then(response => response.json())
        .then((json) => setData(json))
        .catch(error => console.error(error));

      fetch('http://localhost:3001/get-filters-options')
        .then(response => response.json())
        .then((json) => {
            setCountriesOptions(json.countriesOptions);
            setSellerOptions(json.sellersOptions);

        })
        .catch(error => console.error(error));
      
      fetch('http://localhost:3001/get-top-sellers')
        .then(response => response.json())
        .then((json) => setTopSellers(json))
        .catch(error => console.error(error));

    }, []);

    console.log(topSellers);
    return (
        <HomeContainer> 
        <h1 style={{ color: 'grey' }}>
            Orders Table
        </h1>
        <FilterRow>
            <FiltersContainer>
                <div style={{ textAlign: 'center', lineHeight: '60px' }}>
                    Filters
                </div>
                { countriesOptions &&  <Filter title="Countries" options={countriesOptions} />}
                { sellersOptions &&      <Filter title="Sellers" options={sellersOptions} />}
            </FiltersContainer>
        </FilterRow>
        { data && <Table data={data} /> }
        </HomeContainer>
    );
}