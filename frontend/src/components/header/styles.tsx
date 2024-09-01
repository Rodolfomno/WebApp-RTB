import styled from "styled-components";

export const HeaderComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 120px;
    border: solid 1px black;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,14,43,1) 4%, rgba(7,6,47,1) 63%, rgba(49,26,133,1) 100%);
    padding: 0px 300px 23px 200px;
`

export const ButtonsComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 260px;
`

export const LogoComponent = styled.div`
    font-size: 27px;
    color: red;
    text-align: center;
    line-height: 120px;
`
