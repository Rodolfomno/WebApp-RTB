import styled from 'styled-components'

export const Title = styled.div`
border: 1px solid rgba(0, 0, 0, .2);
width: 90px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom: none;
background-color: white;    
height: 25px;
line-height: 25px;
font-size: 14px;
text-align: center;
font-weight: bold;
color: #383838;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 260px;
    height: 100px;
`

export const SellerContainer = styled.div`
    padding: 7px 14px 7px 14px;
    border: 1px solid rgba(0, 0, 0, .2);
    text-align: start;
    background-color: white;
    height: 50px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`