import React from 'react'
import PropTypes from 'prop-types'
import {
    Container,
    Header,
    GreenSpan,
    CategRow,
    Categ
} from './Categories.styles';

import { navigate } from "gatsby"



// importing image
import Brand1 from '../../../components/Images/Brand1';
import Brand2 from '../../../components/Images/Brand2';
import Brand3 from '../../../components/Images/Brand3';
import Brand4 from '../../../components/Images/Brand4';

const brandAmbassador = {
    title: 'Brand Ambassador',
    description: 'We created a Brand Ambassador, an American lady who was featured in over 15 commercials. We used her because IFB believed they still has a residual image from their International Bosch tie-up which they wanted to take advantage of. These international standard commercials viewed millions of times, were cleverly done and  high-lighted the features of the products. The strategic planning, brand design and creative was also done by SEED, including the film production, editing and music in a unorganized film production eco-system like Goa.',
    list: [
        {
            title: 'Commercials',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/A-vWdy5yV4w' },
                { source: 'https://www.youtube.com/embed/UbU9591qbGg' },
                { source: 'https://www.youtube.com/embed/k3bye0Oy7Zc' },
                { source: 'https://www.youtube.com/embed/zymdbbYnJQk' },
                { source: 'https://www.youtube.com/embed/WWM8wxoEnhY' },
                { source: 'https://www.youtube.com/embed/nd47m1oEeI8' },
                { source: 'https://www.youtube.com/embed/Aukmsq-ZATM' },

                { source: 'https://www.youtube.com/embed/H0OO9-iTIwY' },
                { source: 'https://www.youtube.com/embed/uyVSYMTRF_k' },
                { source: 'https://www.youtube.com/embed/P_DP-KeuQZE' },

                { source: 'https://www.youtube.com/embed/gUdBJ7xrB2M' },
                { source: 'https://www.youtube.com/embed/P_DP-KeuQZE' },
                { source: 'https://www.youtube.com/embed/P_DP-KeuQZE' },
            ]
        },
        {
            title: 'Interviews',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/ywH4g3mUIzs' },
                { source: 'https://www.youtube.com/embed/BFOK-ZzQYY8' },
                { source: 'https://www.youtube.com/embed/xLcgMGSpjHw' },
                { source: 'https://www.youtube.com/embed/A-u3uN2QB9Q' },
                { source: 'https://www.youtube.com/embed/InPZ_F90pqk' }
            ]
        },
        {
            title: 'Short films',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/m48_cz1Vnco' },
                { source: 'https://www.youtube.com/embed/pYwN3vzdsFU' },
                { source: 'https://www.youtube.com/embed/kjEctRTTKNw' },
                { source: 'https://www.youtube.com/embed/orCM_h4PwWo' },
            ]
        },
        {
            title: 'Live Experiments',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/KgqZguIEuxU' },
                { source: 'https://www.youtube.com/embed/IUbBZ1fjbjI' },
                { source: 'https://www.youtube.com/embed/70BbdiySQwk' },
            ]
        }
    ]
}


const stockFootage = {
    title: 'Stock Footage, Computer Graphics and Animation',
    description: 'Was there another way to make short films for digital media without going into a shoot? Stock footage, animation and computer graphics was the way. And that’s exactly what we did for the launch of the new range of detergents IFB wanted to market. The entire campaign was strategically designed in such a way that over 10 digital ads could be created using this method. The results were commendable. We then used this technique for a large portion of the content design. All the aspects of this method was done by the SEED teams. But the messaging was sharp and convincing enough for thousands of people to visit the website and the IFB Points (Exclusive stores)',
    list: [
        {
            title: '',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/iRqqcXdYyOg' },
                { source: 'https://www.youtube.com/embed/xvKcSqSLf-w' },
                { source: 'https://www.youtube.com/embed/FYQL_4ZaLvg' },
                { source: 'https://www.youtube.com/embed/pxtraD6j2M0' },
                { source: 'https://www.youtube.com/embed/P08I2oivc9A' },
                { source: 'https://www.youtube.com/embed/OsHSnxH806A' },
                { source: 'https://www.youtube.com/embed/MmraLgZUVdw' },
                { source: 'https://www.youtube.com/embed/lbgqYKrtv8g' },
                { source: 'https://www.youtube.com/embed/Pibd64nu490' },
                { source: 'https://www.youtube.com/embed/DQU_3hkSwus' },
                { source: 'https://www.youtube.com/embed/FbD7kEcoa_M' },
                { source: 'https://www.youtube.com/embed/mooLkiyHFh0' },
                { source: 'https://www.youtube.com/embed/BqooD6662h0' },
                { source: 'https://www.youtube.com/embed/OScZeRCCs7w' },
                { source: 'https://www.youtube.com/embed/kUVS_RDSScA' },
                { source: 'https://www.youtube.com/embed/1h5szhREne8' },
                { source: 'https://www.youtube.com/embed/jKqM5dMV7ns' },
                { source: 'https://www.youtube.com/embed/vCcXJtgBFms' },
                { source: 'https://www.youtube.com/embed/EJoq7rPcduA' },
                { source: 'https://www.youtube.com/embed/JeTB_Nfc8oY' },
                { source: 'https://www.youtube.com/embed/ZCMR8BxxPS0' },
                { source: 'https://www.youtube.com/embed/j1rYnfMHaRI' },
                { source: 'https://www.youtube.com/embed/bdOE1xoeQyM' },
                { source: 'https://www.youtube.com/embed/9kuABvoEXEw' },
                { source: 'https://www.youtube.com/embed/df8otGY3Qpw' },
                { source: 'https://www.youtube.com/embed/-4u_XN8g1LY' },
                { source: 'https://www.youtube.com/embed/fhX3C3Kxd3Y' },
                { source: 'https://www.youtube.com/embed/VQwfmKgYAlE' },
                { source: 'https://www.youtube.com/embed/UoPByLRS_cw' },
                { source: 'https://www.youtube.com/embed/H0dXI4c63C4' },
                { source: 'https://www.youtube.com/embed/nzVrmB6xlgY' },
                { source: 'https://www.youtube.com/embed/5hDtoiYvHfo' },
                { source: 'https://www.youtube.com/embed/HZfpoKc-XGA' },
                { source: 'https://www.youtube.com/embed/sMEbseaoRxg' },
                { source: 'https://www.youtube.com/embed/HltDV2oC47c' },
                { source: 'https://www.youtube.com/embed/9kuABvoEXEw' },
                { source: 'https://www.youtube.com/embed/T5TEtrmBb1E' },

            ]
        },
    ]
}

const Testimonials = {
    title: 'Testimonials',
    description: 'When the SEED teams travelled across India to understand IFB consumers better, we realized a lot of them were willing to talk very positively about the brand. We created a testimonial campaign spanning 8 cities showcasing IFB customers who had owned the machines for over 15 years and they were still working. SEED also created many more testimonials with real customers only including a testimonial with the first buyers of the IFB Voice Controlled washing machine. What they had to say about the  company and the products was or original and precious for the IFB marketing teams. Again the film production was low cost and high quality and the entire process was managed by SEED until the final product.',
    list: [
        {
            title: '',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/6yDfcP_qDic' },
                { source: 'https://www.youtube.com/embed/vtwu4tfpTe8' },
                { source: 'https://www.youtube.com/embed/VOLtU761jII' },
                { source: 'https://www.youtube.com/embed/hFxyPSF7mAc' },
                { source: 'https://www.youtube.com/embed/dxvHOScnx4w' },
                { source: 'https://www.youtube.com/embed/NXEUpmfVHlA' },
                { source: 'https://www.youtube.com/embed/d06u-Y8Zlo4' },
                { source: 'https://www.youtube.com/embed/8wIX7SNakGw' },
                { source: 'https://www.youtube.com/embed/kBKja4ShQy0' },
                { source: 'https://www.youtube.com/embed/2XwbByB8ry8' },
                { source: 'https://www.youtube.com/embed/XOnjvQK1UF8' },
                { source: 'https://www.youtube.com/embed/wu1o9yowxo0' },
                { source: 'https://www.youtube.com/embed/ozy7SiDr3QE' },
            ]
        }
    ]
}

const Others = {
    title: '',
    description: '',
    list: [
        {
            title: 'Table Top Product',
            desc: 'SEED also created a video campaign for IFB’s small kitchen appliances like beverage makers, toasters and other appliances. These were all table top videos and again done entirely by the SEED team including sourcing props    These were done at very low cost but were very high in quality.',
            videos: [
                { source: 'https://www.youtube.com/embed/RmJ7qafOAUQ' },
                { source: 'https://www.youtube.com/embed/yx5j7KzMAgQ' },
                { source: 'https://www.youtube.com/embed/lnaxuBbJf84' },
                { source: 'https://www.youtube.com/embed/K46hBm68ntE' },
                { source: 'https://www.youtube.com/embed/Nl5AezDiP7I' },
                { source: 'https://www.youtube.com/embed/LppC8dwlN1U' },
                { source: 'https://www.youtube.com/embed/DQHBB9RbGH8' }
            ]
        },
        {
            title: 'Employee Motivational Content',
            desc: 'Leo Francis was a customer service representative working on the shop floor in a small town in Chennai. That was 20 years ago. Currently he is the State Business Head for all of south India. What an inspirational story. This story was spoken about in a casual conversation at an IFB marketing meeting. SEED jumped at the opportunity and headed south. Got the ex Ms Kerela to interview him against the backdrop of Fort Cochin and produced a 7 minute film on him. This film was shown on large screen to offices across the country. The Learning and Development team in charge of training employees was flooded with whatsapp videos of IFBian’s praising Leo’s story and many even cried when they saw the film. It was a roaring success in employee motivation. SEED did many more videos like that one and created an entire program for motivational videos. SEED then shot a music video called ‘Phir Bhi Dil Hai IFB ka’ which again turned into ringtones and went viral in the internal IFB whatsapp groups across the country.',
            videos: [
                { source: 'https://www.youtube.com/embed/R0uArFEUyQA' },
                { source: 'https://www.youtube.com/embed/DoYq3QiBWUA' },
                { source: 'https://www.youtube.com/embed/BSOqIJKkchI' },
                { source: 'https://www.youtube.com/embed/ZkUBuqSR-VY' },
                { source: 'https://www.youtube.com/embed/fUvfJcvbQLw' },
                { source: 'https://www.youtube.com/embed/GXwIKrU_thk' }
            ]
        },
        {
            title: 'Microwave Recipe',
            desc: 'IFB stands at third position when it comes to the market share of microwaves. IFB asked us to find an interesting way to market them on digital media. With IFB’s support we SEED created an in-house set to shoot microwave recipes. The recipe videos were shot very differently from regular recipe videos and we the IFB team and SEED added festival recipes to the mix. These were used very effectively by the microwave marketing team and for internal training of chefs across India via IFB’s Spice Secret Microwave cooking classes. There are over 20 such videos and still an entire year’s calendar with numerous videos has to be created.',
            videos: [
                { source: 'https://www.youtube.com/embed/lffWJcKUIN8' },
                { source: 'https://www.youtube.com/embed/r1k_P_IKHKg' },
                { source: 'https://www.youtube.com/embed/wJXhxDA_f9Y' },
                { source: 'https://www.youtube.com/embed/UogR5bYh5WA' },
                { source: 'https://www.youtube.com/embed/mYx6CaZFvEc' }
            ]
        },
        {
            title: 'Festival and Offer',
            desc: 'SEED used only stock footage and computer graphics to create very emotional festival videos for IFB. Some of these videos were offer based. Some were just IFB greeting customers and some had delicious festive recipes to be cooked in IFB microwaves which had a festive feel and warm greetings of the season. There were multiple videos done on festivals and SEED also created a very emotional video for Independence day by filming what freedom meant to various women who worked at IFB.',
            videos: [
                { source: 'https://www.youtube.com/embed/jtHoqQLeQYg' },
                { source: 'https://www.youtube.com/embed/PwlF0TyuMrg' },
                { source: 'https://www.youtube.com/embed/ClK06v6bQ6Y' },
                { source: 'https://www.youtube.com/embed/H8l3ikPCTWE' },
                { source: 'https://www.youtube.com/embed/1nRBD-hVXPM' },
                { source: 'https://www.youtube.com/embed/hrg3V1Gr1hU' },
                { source: 'https://www.youtube.com/embed/3_rxl6E0qoE' },
                { source: 'https://www.youtube.com/embed/wQDepzasxdQ' },
                { source: 'https://www.youtube.com/embed/cqfZxNfaFqA' },
                { source: 'https://www.youtube.com/embed/SXMwIrl36nQ' },
                { source: 'https://www.youtube.com/embed/YpzDgPCrF_A' },
                { source: 'https://www.youtube.com/embed/f_5Leq3JQqY' },
                { source: 'https://www.youtube.com/embed/GXjEu5H2C9w' },
                { source: 'https://www.youtube.com/embed/rIbNLTRta9A' },
                { source: 'https://www.youtube.com/embed/LtBK304kaHE' },
                { source: 'https://www.youtube.com/embed/2xGYy_D2tbs' },
            ]
        },
        {
            title: 'Events',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/sSjIWcxXig0' },
                { source: 'https://www.youtube.com/embed/M7GB0zW5aH8' },
                { source: 'https://www.youtube.com/embed/Mrkuqy7TmVg' },
                { source: 'https://www.youtube.com/embed/yMuRoTJmmNs' },
            ]
        },
        {
            title: 'IFB',
            desc: '',
            videos: [
                { source: 'https://www.youtube.com/embed/9rRDUHq2BLM' },
                { source: 'https://www.youtube.com/embed/1qB2vH3WHV4' },
                { source: 'https://www.youtube.com/embed/YrQUDO9_OMY' }
            ]
        },


    ]
}

function Caetgories(props) {
    return (
        <Container>
            <Header style={{ marginTop: '10%' }}><GreenSpan>Categories</GreenSpan></Header>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: brandAmbassador }}><Brand1 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Brand ambassador</Header>
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: stockFootage }}><Brand2 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Stock footage, computer graphics and animations</Header>
                </div>
            </CategRow>
            <CategRow className="row">
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: Testimonials }}><Brand3 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Testimonials</Header>
                </div>
                <div style={{ marginTop: 22 }} className="col-md-6">
                    <Categ to={'/brands/brand'} state={{ list: Others }}><Brand4 /></Categ>
                    <Header style={{ fontSize: 15, textAlign: 'center' }}>Others</Header>
                </div>
            </CategRow>
        </Container>
    )
}

export default Caetgories

