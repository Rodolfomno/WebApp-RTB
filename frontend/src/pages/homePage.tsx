import { DataType, Table } from "../components/table/dataTable";
import { useEffect, useState } from "react"
import { ButtonsFilter, ClearButton, FilterButton, HomeContainer } from "./style";
import { Filter } from "../components/filters/filter";
import { FilterRow, FiltersContainer } from "../components/filters/style";
import { OrdersRanking } from "../components/ordersRanking/ordersRanking";
import Header from "../components/header/header";


export function HomePage () {
    const [data, setData] = useState<DataType[]>([])
    const [filteredData, setFilteredData] = useState<DataType[]>([])
    const [topSellers, setTopSellers] = useState();
    const [countriesOptions, setCountriesOptions] = useState();
    const [sellersOptions, setSellerOptions] = useState();
    const [filteredCountries, setFilteredCountries] = useState<{ value: string, label: string }[]>();
    const [filteredSellers, setFilteredSellers] = useState<{ value: string, label: string }[]>();

    function getData(){
      fetch('http://localhost:3001/get-all-orders')
        .then(response => response.json())
        .then((json) => {
          setData(json);
          setFilteredData(json);
        })
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
    }

    useEffect(() => {
      getData();
    }, []);

  
    function handleFilter () {
      let hasFiltered = false;
      if (filteredCountries && data) {
        const filtered = data.filter(item => filteredCountries.some((option) => option.label === item.country));

        setFilteredData(filtered)
        hasFiltered = true
      }
      if (filteredSellers && data) {
        const filtered = data.filter(item => filteredSellers.some((option) => option.label === item.sellerName));
        if (hasFiltered) {
          const alreadyFiltered = filteredData.filter(item => filteredSellers.some((option) => option.label === item.sellerName));
          setFilteredData(alreadyFiltered)
        } else {
          setFilteredData(filtered)
        }
      }

    }

    function clearFilters () {
      setFilteredData(data);
    }

    

    return (
        <>
          <Header />
            <HomeContainer> 
              { topSellers && <OrdersRanking data={topSellers} />}
            <FilterRow>
                <FiltersContainer>

                    { countriesOptions && (
                    <ButtonsFilter>
                      <FilterButton onClick={() => handleFilter()}>
                        Apply
                      </FilterButton>
                      <ClearButton onClick={() => clearFilters()}>
                        Cancel
                      </ClearButton>
                    </ButtonsFilter>
                    ) }
                    { countriesOptions && <Filter title="Countries" options={countriesOptions} setFilter={setFilteredCountries} />}
                    { sellersOptions && <Filter title="Sellers" options={sellersOptions} setFilter={setFilteredSellers} />}
                </FiltersContainer>
            </FilterRow>
            <Table  data={filteredData}/>
          </HomeContainer>
        </>
    );
}