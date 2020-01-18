import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import VideoPlayer from '../../components/VideoPlayer';
import "../../../node_modules/video-react/dist/video-react.css";
import {
    Container,
    Header,
    Description,
    GreenSpan,
    ViewButton,
    ViewAll,
    TextContainer,
    Categ,
    TextDesc,
    WatchButton,
    WatchText,
    CatImage,
    CatImageBg,
    Title,
    Desc,
    VidContainer
} from './Category.styles';





function Caetgories(props) {

    return (
        <Container>
            {props.list && (
                <Fragment>
                    <Header><GreenSpan>{props.list.list.title}</GreenSpan></Header>
                    <Description>{props.list.list.description}</Description>
                </Fragment>
            )}
            {props.list && props.list.list.list.map((item, index) => (
                <Fragment>
                    <Title><GreenSpan>{item.title}</GreenSpan></Title>
                    <Desc>{item.desc}</Desc>
                    <VidContainer>
                        {item.videos.map((video, index) => (
                            <div key={index} style={{width: '30%', height: '30%'}}>
                                <VideoPlayer  source={video.source} />
                            </div>
                        ))}     
                    </VidContainer>
                </Fragment>
            ))}
        </Container>
    )
}

export default Caetgories

