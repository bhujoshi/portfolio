import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div({
    padding: '4em',
    'background-image': 'linear-gradient(to right bottom, #6fa1d5, #28b485)',
    // '::before': {
    //     content: " ' '",
    //     background: "url('https://nishkal.in/images/dots-small.svg')",
    //     position: 'absolute',
    //     left: 0,
    //     'z-index': 0,
    //     width: '100%',
    //     height: '100%'
    //     // border: '1px solid #f30'
    // }
})

// https://nishkal.in/images/dots-small.svg
const Title = styled.h1`
    font-size: 5rem;
    text-align: center;
    color: #fff;
`

export default function HeaderComponent(props){
    return<header>
        <Wrapper>
            <Title className={'header-title-firstname'}>Bhuwan Chandra</Title>
            <Title className={'header-title-lastname'}>Joshi</Title>
            <h5 className={'header-profile medium-padding'}>
                Software Engineer (Front-end-developer) with 5+ years
                 of experience. Currently Working in Javascript programming language.
                  I am a good team player, Always eager to learn new things,
                   and believe in simplicity and optimization.
            </h5>
        </Wrapper>
    </header>
} 
