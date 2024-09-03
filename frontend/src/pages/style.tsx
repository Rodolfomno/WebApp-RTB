import styled from "styled-components";

export const HomeContainer = styled.div`
padding-top: 30px;
display: flex;
flex-direction: column;
padding-left: 60px;
padding-right: 60px;
align-items: center;
padding-bottom: 100px;
`

export const FilterButton = styled.div`
width: 50px;
height: 30px;
background-color: blue;
font-size: 13px;
color: #f0f0f0;
padding: 8px;
border-radius: 14px;
    &: hover {
        cursor: pointer;
    }
`

export const ButtonsFilter = styled.div`
padding-top: 25px;
`

export const ClearButton = styled.div`
padding-top: 3px;
text-decoration: underline;
font-size: 12px;
color: red;
text-align: center;
&: hover {
    cursor: pointer;
}
`