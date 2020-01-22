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
        <Container style={{ marginTop: 40 }}>
            {props.list && (
                <Fragment>
                    <Header style={{ marginTop: '5rem' }}><GreenSpan>{props.list.list.title}</GreenSpan></Header>
                    <Description>{props.list.list.description}</Description>
                </Fragment>
            )}
            {props.list && props.list.list.list.map((item, index) => (
                <Fragment>
                    <Title style={{ marginTop: '5rem' }}><GreenSpan>{item.title}</GreenSpan></Title>
                    <Desc>{item.desc}</Desc>
                    <VidContainer>
                        {item.videos.map((video, index) => (
                            <div key={index} style={{ width: '30%', height: '30%' }}>
                                <iframe width="95%" height="95%" src={video.source} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        ))}
                    </VidContainer>
                </Fragment>
            ))}
        </Container>
    )
}

export default Caetgories

