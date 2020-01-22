import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Section,
    Sections,
    GreenSpan,
    Content,
    AboutContainer,
    AboutHeader,
    Categ,
    CategRow,
    Header,
    AboutContent
} from './AboutMe.styles';


// importing image
import BrandBeer from '../../../components/BrandBeer';
import BrandClorox from '../../../components/BrandClorox';
import BrandCoke from '../../../components/BrandCoke';
import BrandGoodnight from '../../../components/BrandGoodnight';

import BrandGoodrej from '../../../components/BrandGoodrej';
import BrandJhonson from '../../../components/BrandJhonson';
import BrandLipton from '../../../components/BrandLipton';
import BrandMtv from '../../../components/BrandMtv';

import BrandNestcafe from '../../../components/BrandNestcafe';
import BrandNestle from '../../../components/BrandNestle';
import BrandNike from '../../../components/BrandNike';

import BrandPepsi from '../../../components/BrandPepsi';
import BrandPhilips from '../../../components/BrandPhilips';
import BrandPizza from '../../../components/BrandPizza';
import BrandSaudi from '../../../components/BrandSaudi';

import BrandStandard from '../../../components/BrandStandard';
import BrandTimes from '../../../components/BrandTimes';
import BrandUnilever from '../../../components/BrandUnilever';
import BrandVip from '../../../components/BrandVip';

import BrandVolkswagen from '../../../components/BrandVolkswagen';

// Advertise

import AdvertiseDdb from '../../../components/AdvertiseDdb';
import AdvertiseMadison from '../../../components/AdvertiseMadison';
import AdvertiseMccan from '../../../components/AdvertiseMccan';
import AdvertiseTribal from '../../../components/AdvertiseTribal';
import AdvertiseWalter from '../../../components/AdvertiseWalter';


// FilmMaker and books
import FilmMaker from '../../../components/FilmMaker';
import Book1 from '../../../components/Book1';
import Book2 from '../../../components/Book2';

// poster
import Poster from '../../../components/Poster';


function AboutMe(props) {
    return (
        <Container>
            <Sections className="row">
                <div className="col-md-4">
                    <GreenSpan style={{ fontSize: 30 }}>THE FOUNDER</GreenSpan>
                </div>
            </Sections>
            <AboutContainer>
                <AboutContent>
                    • SHOUMITRA RAI CHOUDHURI IS THE FOUNDER OF SEED CONTENT DESIGN.<br /><br />
                    • HE HAS 25 YEARS IN THE ADVERTISING BUSINESS.<br /><br />
                    • HE HAS BEEN A NATIONAL CREATIVE DIRECTOR OF THE FOLLOWING AGENCIES IN INDIA, SOUTH EAST ASIA AND THE MIDDLE EAST.<br /><br />
                </AboutContent>
            </AboutContainer>

            <Sections className="row">
                <div className="col-md-12">
                    <GreenSpan style={{ fontSize: 30 }}>The advertising agencies</GreenSpan>
                </div>
            </Sections>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-4 col-2">
                    <AdvertiseMadison />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <AdvertiseMccan />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <AdvertiseTribal />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <AdvertiseWalter />
                </div>
            </CategRow>

            <Sections className="row">
                <div className="col-md-12 col-sm-2">
                    <GreenSpan style={{ fontSize: 30 }}>Brands</GreenSpan>
                </div>
            </Sections>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandBeer />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandClorox />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandLipton />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandNestcafe />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandCoke />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandGoodnight />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandGoodrej />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandJhonson />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandMtv />
                </div>

                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandNike />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandPepsi />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandPhilips />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandPizza />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandSaudi />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandStandard />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandTimes />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandUnilever />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandVip />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-4 col-sm-2">
                    <BrandVolkswagen />
                </div>
            </CategRow>


            <Sections style={{ marginTop: 40 }} className="row">
                <div className="col-12">
                    <GreenSpan style={{ fontSize: 30 }}>Shoumitra is also a Film Maker and an Author </GreenSpan>
                </div>
            </Sections>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-12 col-2">
                    <FilmMaker />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6 col-2">
                    <Book1 />
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6 col-2">
                    <Book2 />
                </div>
            </CategRow>

            <Sections style={{ marginTop: 40 }} className="row">
                <div className="col-12">
                    <GreenSpan style={{ fontSize: 30 }}>Shoumitra has also spoken in public forums about his books.</GreenSpan>
                </div>
            </Sections>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-12 col-2">
                    <Poster />
                </div>
            </CategRow>
        </Container>
    )
}

export default AboutMe

