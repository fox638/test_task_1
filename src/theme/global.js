import styled from 'styled-components'

export const themeMain = {
    white: '#FFFFFF',
    black: '#333333',
    grey: '#eeeeee',
    darkGrey: '#bbb',
    blue: '#488ED8',
    yellow: 'yellow',
    green: '#52C989',
    red: 'red'
}

//input 
export const Input = styled.input`
    display: block;
    width:100%;
    padding:.375rem .75rem;
    font-size: 1rem;
    line-height:1.5;
    color: ${props => props.theme.black};
    background-color:${props => props.theme.white};
    background-clip:padding-box;
    border: tpx solid ${props => props.theme.darkGrey};
    border-radius: 4px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out; 
`

export const Label = styled.label`
    padding: .3rem 0 .1rem 0;
`

//User

export const UserActionPanel = styled.div`
    background: ${props => props.theme.blue};
    color: ${props => props.theme.white};
    padding: 30px 20px;
    border-radius: 4px;
`