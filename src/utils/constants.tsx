import figmaSvg from '../images/svg/figma.svg';
import adobeSvg from '../images/svg/adobeXd.svg';
import inVisionSvg from '../images/svg/inVision.svg';
export interface mainNavProps {
    name: string;
}

export const mainNav: mainNavProps[] = [{
    name: 'Home',
}, {
    name: 'About',
}, {
    name: 'My Page',
}, {
    name: 'Contact',
}];

export interface homeInfoCardsProps {
    title: string;
    title_color: string;
    subtitle: string;
    description: string;
}

export const HOME_INFO_CARDS: homeInfoCardsProps[] = [
    {
        title: '100+',
        title_color: 'medium_blue',
        subtitle: 'Total Tools',
        description: 'Lot of tools that offer free and premium features',
    },{
        title: '50+',
        title_color: 'medium_green',
        subtitle: 'Free Tools',
        description: 'Explore free tools that would help you achieve something',
    },{
        title: '40+',
        title_color: 'medium_red',
        subtitle: 'Premium Tools',
        description: 'Need more feature? lets try the premium tools',
    },
];

export interface cardsProps {
    image: string;
    title: string;
    description: string;
    info: string;
    info_color: string;
    button_1: string;
    button_2: string;
}

export const HOME_CARDS: cardsProps[] = [
    {
        image: figmaSvg,
        title: 'Figma',
        description: 'Figma helps the teams to create, test, and ship better designs from start to finish.',
        info: 'Free',
        info_color: 'small_green',
        button_1: 'Design',
        button_2: 'Development',
    },{
        image: adobeSvg,
        title: 'Adobe XD',
        description: 'Adobe XD is your UI/UX design solution platform for website and mobile app creation.',
        info: 'Free',
        info_color: 'small_green',
        button_1: 'Design',
        button_2: 'Development',
    },{
        image: inVisionSvg,
        title: 'InVision',
        description: `InVision is the digital product design platform used to make the world's best customer experiences.`,
        info: 'Premium',
        info_color: 'small_yellow',
        button_1: 'Design',
        button_2: 'Development',
    }
];

export interface FooterLink {
    link: string;
}
export interface FooterLinks {
   title: string;
   links: FooterLink[];
}

export const FOOTER_LINKS: FooterLinks[] = [
    {	title: 'Resource',
        links: [
            { link: 'About Us' },
            { link: 'Blog' },
            { link: 'Contact' },
            { link: 'FAQ' },
        ],
    }, {	
        title: 'Legal Stuff',
        links: [
            { link: 'Disclaimer' },
            { link: 'Financing' },
            { link: 'Privacy Policy' },
            { link: 'Terms of Service' },
        ],
    }, {	
        title: 'Office',
        links: [
            { link: 'gear@gmail.com' },
            { link: 'Jln. Soekarno Hatta No 1A' },
            { link: 'Jakarta, Indonesia' },
        ],
    }
];