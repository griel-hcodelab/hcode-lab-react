import styled from 'styled-components';

export const Button = styled.button
`
    background-color: ${props => props.color === 'primary' ? '#0070f3' : '#000'};
    color: white;
    padding: 10px 20px;
    border: none;
    &:hover {
        color: black;
    }
`

