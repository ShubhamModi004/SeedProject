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
            title: '',
            desc: '',
            videos: [
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb01.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb02.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb03.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb04.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb05.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb06.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb07.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb08.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb09.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb10.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb11.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb12.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb13.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb14.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb15.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb16.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb17.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb18.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb19.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb20.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb21.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Brand/BrandAmb22.mp4' },
            ]
        },
        {
            title: '',
            desc: '',
            videos: [
                { source: 'https://www.coppercodes.com/seed/assets/Interview/Interview3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Interview/Interview4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Interview/Interview5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Interview/Interview6.mp4' }
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
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock1.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock2.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock6.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock7.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock8.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock9.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock10.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock11.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock12.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock13.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock14.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock15.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock16.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock17.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock18.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock19.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock20.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock21.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock22.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock23.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock24.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock25.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock26.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock27.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock28.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock29.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock30.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock31.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock32.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock33.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock34.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock35.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock36.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Graphics/stock37.mp4' },

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
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial1.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial2.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial6.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial7.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial8.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial9.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial10.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial11.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial12.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Testimonial/Testimonial13.mp4' },
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
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb1.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb2.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb6.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb7.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb9.mp4' },
            ]
        },
        {
            title: 'Employee Motivational Content',
            desc: 'Leo Francis was a customer service representative working on the shop floor in a small town in Chennai. That was 20 years ago. Currently he is the State Business Head for all of south India. What an inspirational story. This story was spoken about in a casual conversation at an IFB marketing meeting. SEED jumped at the opportunity and headed south. Got the ex Ms Kerela to interview him against the backdrop of Fort Cochin and produced a 7 minute film on him. This film was shown on large screen to offices across the country. The Learning and Development team in charge of training employees was flooded with whatsapp videos of IFBian’s praising Leo’s story and many even cried when they saw the film. It was a roaring success in employee motivation. SEED did many more videos like that one and created an entire program for motivational videos. SEED then shot a music video called ‘Phir Bhi Dil Hai IFB ka’ which again turned into ringtones and went viral in the internal IFB whatsapp groups across the country.',
            videos: [
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb1.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb2.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb6.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb7.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb9.mp4' },
            ]
        },
        {
            title: 'Microwave Recipe',
            desc: 'IFB stands at third position when it comes to the market share of microwaves. IFB asked us to find an interesting way to market them on digital media. With IFB’s support we SEED created an in-house set to shoot microwave recipes. The recipe videos were shot very differently from regular recipe videos and we the IFB team and SEED added festival recipes to the mix. These were used very effectively by the microwave marketing team and for internal training of chefs across India via IFB’s Spice Secret Microwave cooking classes. There are over 20 such videos and still an entire year’s calendar with numerous videos has to be created.',
            videos: [
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb1.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb2.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb6.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb7.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb9.mp4' },
            ]
        },
        {
            title: 'Festival and Offer',
            desc: 'SEED used only stock footage and computer graphics to create very emotional festival videos for IFB. Some of these videos were offer based. Some were just IFB greeting customers and some had delicious festive recipes to be cooked in IFB microwaves which had a festive feel and warm greetings of the season. There were multiple videos done on festivals and SEED also created a very emotional video for Independence day by filming what freedom meant to various women who worked at IFB.',
            videos: [
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb1.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb2.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb6.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb7.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb9.mp4' },
            ]
        },
        {
            title: 'IFB',
            desc: '',
            videos: [
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb1.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb2.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb3.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb4.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb5.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb6.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb7.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb9.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb10.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb11.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb12.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb13.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb14.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb16.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb17.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb18.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb19.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb20.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb21.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb22.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb23.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb24.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb25.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb26.mp4' },
                { source: 'https://www.coppercodes.com/seed/assets/Ifb/Ifb27.mp4' },
            ]
        },


    ]
}

function Caetgories(props) {
    return (
        <Container>
            <Header><GreenSpan>Categories</GreenSpan></Header>
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

