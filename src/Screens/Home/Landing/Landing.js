

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Video, Container } from './Landing.styles';
import video from "../../../assets/Home.mp4"

import { PlayButton } from './Landing.styles';
import { MdPlayCircleOutline, MdPauseCircleOutline } from "react-icons/md";

class Landing extends Component {
    state = {
        played: false
    }
    render() {
        const { played } = this.state;
        return (
            <Container>
                <Video
                    ref={player => { this.player = player; }}
                    src={video}
                    type="video/mp4"
                    loop
                    playsinline="true"
                    disablePictureInPicture="true"
                />
                {!played ? (
                    <PlayButton onClick={() => {
                        this.setState({ played: true })
                        this.player.play()
                    }}>
                        <MdPlayCircleOutline color='#fff' size={42} />
                    </PlayButton>
                ) : (
                        <PlayButton onClick={() => {
                            this.setState({ played: false })
                            this.player.pause()
                        }}>
                            <MdPauseCircleOutline color='#fff' size={42} />
                        </PlayButton>
                    )}
            </Container>
        )
    }

}

export default Landing



