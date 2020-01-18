import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 490px) {
        height: 50vh;
        width: 100%;
    }
`

export const Video = styled.video`
    position: absolute;
    top: 50%; 
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%; 
    min-height: 100%; 
    width: auto; 
    height: auto;
    z-index: -1000; 
    overflow: hidden;
`



export const PlayButton = styled.button`
    position: absolute;
    top: 46%;
    left: 46%;
    @media screen and (max-width: 490px) {
        top: 45%;
        left: 45%;
    }
    z-index: 10;
    flex: 1;
    align-items: center;
    justify-content: center;
    border: solid 0px #ffffff;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
`