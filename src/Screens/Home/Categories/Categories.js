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
    CatImageBg,
    AboutContainer,
    AboutHeader,
    AboutContent
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
                <AboutContainer>
                    <AboutHeader>
                        About us
                </AboutHeader>
                    <AboutContent>
                        SEED has done over 240 videos for IFB Industries in 9 product categories and also for internal training and research among other videos over two years. All the videos are strategized, scripted, produced, directed and edited in house by the SEED teams in Goa, for IFB Industries. There is no out sourcing of any kind except for equipment. Thus cutting costs drastically in the making of the video content for IFB Industries.
                    The SEED teams have expertise in all the computer software and film production experience required to make any kind of video content.The creative capital of each SEED member is equal to mulple creative industries that are conventionally put together to create the kind of video content you will see on this site. Which translates into prolific savings for any company using our services.
                </AboutContent>
                </AboutContainer>
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
                                Research Video Documentation
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
                                Training for over 6000 employees via video content
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
                                Training for over 6000 employees via video content
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
                                Sales generating marketing programs
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

