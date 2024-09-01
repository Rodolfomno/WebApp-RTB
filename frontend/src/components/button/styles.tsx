import styled from 'styled-components';

export const ButtonComponent = styled.div`
    height: 35px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    line-height: 35px;
    width: 120px;
    border: solid 1px #93919d;
    border-radius: 10px; 
    text-align: center;
    &: hover {
        background-color: #0d0b52;
        cursor: pointer;
    }
`