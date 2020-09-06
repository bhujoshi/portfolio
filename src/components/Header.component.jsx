import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div({
    padding: '4em',
    'background-image': 'linear-gradient(to right bottom, #6fa1d5, #28b485)',
    '::before': {
        content: " ' '",
        background: "url('https://nishkal.in/images/dots-small.svg')",
        position: 'absolute',
        left: 0,
        'z-index': 0,
        width: '100%',
        height: '100%'
        // border: '1px solid #f30'
    }
})

// https://nishkal.in/images/dots-small.svg
const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: #fff;
`
export default function HeaderComponent(props){
    return<header>
        <Wrapper>
            <Title >Bhuwan Chandra</Title>
            <Title >Joshi</Title>
        </Wrapper>
    </header>
} 
