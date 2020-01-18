import React, { Component, Fragment } from 'react'
import VideoPlayer from '../../../components/VideoPlayer';
import "../../../../node_modules/video-react/dist/video-react.css";
import {
    Container,
    Header,
    GreenSpan,
    ViewButton,
    ViewAll,
    TextContainer,
    Categ,
    TextDesc,
    WatchButton,
    WatchText,
    CatImage,
    CatImageBg
} from './Categories.styles';


import { navigate } from "gatsby"



// importing image
import Research from '../../../components/Research';
import Training from '../../../components/Training';
import Branding from '../../../components/Branding';
import Innovative from '../../../components/Innovative';





class Caetgories extends Component {
    state = {
        brandVisible: false,
        researchVisible: false,
        trainigVisible: false,
        innovativeVisible: false
    }
    render() {
        const { brandVisible, researchVisible, trainigVisible, innovativeVisible } = this.state;
        return (
            <Container>
                <Categ mobile={false} reverse={true} className="row">
                    <div className="col-md-6 ">
                        <TextContainer>
                            <Header><GreenSpan>Brand</GreenSpan> Design</Header>
                            <TextDesc>
                                Brand design using multiple strategies
                        </TextDesc>
                            <WatchButton onClick={() => this.setState({ brandVisible: !brandVisible })}>
                                {brandVisible ? (
                                    <WatchText>Close</WatchText>
                                ) : (
                                        <WatchText>watch</WatchText>
                                    )}
                            </WatchButton>
                        </TextContainer>
                    </div>
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        {brandVisible ? (
                            <VideoPlayer source={'https://www.coppercodes.com/seed/assets/BrandDesign.mp4'} />

                        ) : (
                                <Fragment>
                                    <CatImage><Branding /></CatImage>
                                    <CatImageBg />
                                </Fragment>
                            )
                        }
                    </div>
                </Categ>
                <Categ mobile={true} desktopUnVisible={true} reverse={true} className="row">
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        {brandVisible ? (
                            <VideoPlayer source={'https://www.coppercodes.com/seed/assets/BrandDesign.mp4'} />

                        ) : (
                                <Fragment>
                                    <CatImage><Branding /></CatImage>
                                    <CatImageBg />
                                </Fragment>
                            )
                        }
                    </div>
                    <div className="col-md-6 ">
                        <TextContainer>
                            <Header mobileHeader={true}><GreenSpan>Brand</GreenSpan> Design</Header>
                            <TextDesc>
                                Brand design using multiple strategies
                        </TextDesc>
                            <WatchButton onClick={() => this.setState({ brandVisible: !brandVisible })}>
                                {brandVisible ? (
                                    <WatchText>Close</WatchText>
                                ) : (
                                        <WatchText>watch</WatchText>
                                    )}
                            </WatchButton>
                        </TextContainer>
                    </div>

                </Categ>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ViewButton to="/brand"><ViewAll>View all</ViewAll></ViewButton>
                </div>
                <Categ mobile={true} className="row">
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        {researchVisible ? (
                            <VideoPlayer source={'https://www.coppercodes.com/seed/assets/Research.mp4'} />

                        ) : (
                                <Fragment>
                                    <CatImage ><Research /></CatImage>
                                    <CatImageBg style={{ left: '-1.4rem', backgroundImage: 'linear-gradient(to bottom, #d600d6, #a455cb)' }} />
                                </Fragment>
                            )
                        }

                    </div>
                    <div className="col-md-6">
                        <TextContainer>
                            <Header mobileHeader={true}><GreenSpan>Research</GreenSpan></Header>
                            <TextDesc>
                                Research for top management action
                        </TextDesc>
                            <WatchButton purple={true} onClick={() => this.setState({ researchVisible: !researchVisible })}>
                                {researchVisible ? (
                                    <WatchText>Close</WatchText>
                                ) : (
                                        <WatchText>watch</WatchText>
                                    )}
                            </WatchButton>
                        </TextContainer>

                    </div>
                </Categ>
                <Categ mobile={false} reverse={true} className="row">
                    <div className="col-md-6 ">
                        <TextContainer>
                            <Header><GreenSpan>Training </GreenSpan></Header>
                            <TextDesc>
                                Video training for over 6600 employees
                        </TextDesc>
                            <WatchButton onClick={() => this.setState({ trainigVisible: !trainigVisible })}>
                                {trainigVisible ? (
                                    <WatchText>Close</WatchText>
                                ) : (
                                        <WatchText>watch</WatchText>
                                    )}
                            </WatchButton>
                        </TextContainer>

                    </div>
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        {trainigVisible ? (
                            <VideoPlayer source={'https://www.coppercodes.com/seed/assets/Training.mp4'} />

                        ) : (
                                <Fragment>
                                    <CatImage><Training /></CatImage>
                                    <CatImageBg />
                                </Fragment>
                            )
                        }

                    </div>
                </Categ>
                <Categ mobile={true} desktopUnVisible={true} reverse={true} className="row">
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        {trainigVisible ? (
                            <VideoPlayer source={'https://www.coppercodes.com/seed/assets/Training.mp4'} />

                        ) : (
                                <Fragment>
                                    <CatImage><Training /></CatImage>
                                    <CatImageBg />
                                </Fragment>
                            )
                        }
                    </div>
                    <div className="col-md-6 ">
                        <TextContainer>
                            <Header mobileHeader={true}><GreenSpan>Training </GreenSpan></Header>
                            <TextDesc>
                                Video training for over 6600 employees
                        </TextDesc>
                            <WatchButton onClick={() => this.setState({ trainigVisible: !trainigVisible })}>
                                {trainigVisible ? (
                                    <WatchText>Close</WatchText>
                                ) : (
                                        <WatchText>watch</WatchText>
                                    )}
                            </WatchButton>
                        </TextContainer>
                    </div>
                </Categ>
                <Categ mobile={true} className="row">
                    <div className="col-md-6" style={{ position: 'relative' }}>
                        {innovativeVisible ? (
                            <VideoPlayer source={'https://www.coppercodes.com/seed/assets/Marketting.mp4'} />

                        ) : (
                                <Fragment>
                                    <CatImage ><Innovative /></CatImage>
                                    <CatImageBg style={{ left: '-1.4rem', backgroundImage: 'linear-gradient(to bottom, #d600d6, #a455cb)' }} />
                                </Fragment>
                            )
                        }
                    </div>
                    <div className="col-md-6">
                        <TextContainer>
                            <Header mobileHeader={true}><GreenSpan>Innovative</GreenSpan> Marketting Ideas</Header>
                            <TextDesc>
                                Sales generating marketting program.
                        </TextDesc>
                            <WatchButton purple={true} onClick={() => this.setState({ innovativeVisible: !innovativeVisible })}>
                                {innovativeVisible ? (
                                    <WatchText>Close</WatchText>
                                ) : (
                                        <WatchText>watch</WatchText>
                                    )}
                            </WatchButton>
                        </TextContainer>
                    </div>
                </Categ>
            </Container>
        )
    }

}

export default Caetgories

