import type {TranslationDictionary} from './index'

export const en: TranslationDictionary = {
    appTitle: 'whoami',
    languageLabel: 'Language',
    sections: {
        about: {
            label: 'About me',
            title: 'About me',
            bio: 'Senior Software Engineer with a passion for frontend architecture, clean code, and open-source collaboration. Based in Sweden.',
            portraitAlt: 'Portrait photo',
        },
        career: {
            label: 'Career',
            title: 'Career',
            entries: [
                {
                    employer: 'SJ AB',
                    role: 'Software Engineer',
                    period: 'June 2024 – Present',
                    logo: '/sj2.png',
                    items: [
                        'Backend development in Java and Kotlin/Spring within a DevOps-oriented team',
                        'Product development and maintenance of SJ AB\'s digital onboard tools for train crew (Team Monsoon)',
                        'Scrum Master responsible for coaching the team in ceremonies, requirement management, and team processes',
                        'CI/CD work and cloud operations through IaC (Terraform) in Azure environment',
                        'Agile delivery in enterprise environments',
                        'Ambassador (one of 20 across all of SJ AB) in "Framtidståget", an initiative for developing SJ AB\'s corporate culture',
                    ],
                },
                {
                    employer: 'Swedish Armed Forces',
                    role: 'Deputy Commander',
                    period: 'Jan. 2026 – Present',
                    logo: '/fm.png',
                    items: [
                        'Deputy commander (ensign) of The Home Guard Band of Stockholm',
                        'Staff management for personnel in the unit',
                        'Planning, coordination and execution of rehearsals and musical engagements',
                        'Participation in operational planning, budget documentation and resource prioritisation',
                        'Support to the commander in strategic decisions and long-term development of the band',
                        'Service 10 days a year',
                    ],
                },
                {
                    employer: 'SJ AB',
                    role: 'Train Driver',
                    period: 'Aug. 2018 – Present',
                    logo: '/sj2.png',
                    items: [
                        'Serving once a month to maintain Swedish train driver\'s licence',
                        'Operating X2, X2C (upgraded X2) and X55, stationed first in Malmö and now Stockholm',
                        'Traffic across almost all of Sweden as well as Denmark (Copenhagen, Kastrup, etc.)',
                        'Operational responsibility for traffic safety, punctuality and customer service',
                    ],
                },
                {
                    employer: 'SJ AB',
                    role: 'Software Engineer Intern',
                    period: 'Sept. 2022 – Jan. 2023',
                    logo: '/sj2.png',
                    items: [
                        'Four month internship in Team Monsoon as part of a course in the bachelor\'s programme',
                        'Contributed significantly to efficient onboarding upon subsequent employment (2024)',
                    ],
                },
                {
                    employer: 'Transdev Sverige AB',
                    role: 'Train Driver',
                    period: 'June 2016 – Aug. 2018',
                    logo: '/transdev.jpg',
                    items: [
                        'Operating X31 within the Öresund train traffic',
                        'Drove all routes, including Denmark (Copenhagen, Helsingør, etc.)',
                        'Operational responsibility for traffic safety, punctuality and customer service',
                    ],
                },
            ],
        },
        education: {
            label: 'Education',
            title: 'Education',
            entries: [
                {
                    institution: 'Malmö University',
                    programme: 'Software Development',
                    degree: 'Bachelor of Science in Computer Science with specialization in Computer Systems Development',
                    credits: '180 ECTS',
                    period: '2021 – 2024',
                    logo: '/mau.png',
                    items: [
                        '[Thesis](https://mau.diva-portal.org/smash/record.jsf?pid=diva2%3A1903916&dswid=-8338) on eco-driving tools for train drivers in collaboration with Swedish Transport Administration (Trafikverket)',
                        'Program board representative for TGSYA21H during semesters 1–6. Conducted course evaluations based on ' +
                        'student feedback together with the course and program coordinators after each completed term.',
                    ],
                },
                {
                    institution: 'Trafikverksskolan',
                    programme: 'Train Driver Education',
                    degree: 'Vocational train driver diploma',
                    credits: '220 YH credits',
                    period: '2015 – 2016',
                    logo: '/trv5.png',
                    items: [
                        'Vocational internships at SJ AB (Malmö), Hector Rail (Malmö), and Transdev Sverige AB (Öresundståg, Malmö)',
                    ],
                },
            ],
        },
        nonProfit: {
            label: 'Voluntary',
            title: 'Voluntary Association Work',
            entries: [
                {
                    organisation: 'BRF Bergsspånet',
                    role: 'Secretary',
                    period: '2023 – 2025',
                    logo: '/brf.jpg',
                },
                {
                    organisation: 'Swedish Military Music Society',
                    role: 'Board Member',
                    period: '2016 – 2026',
                    logo: '/mms.png'
                },
                {
                    organisation: 'Seko Klubb SJ Syd',
                    role: 'Treasurer',
                    period: '2019 – 2022',
                    logo: '/seko.png',
                },
                {
                    organisation: 'The Home Guard Band of Lund',
                    role: 'Treasurer',
                    period: '2019 – 2020',
                    logo: '/hvmus.png'
                },
                {
                    organisation: 'Göta Brass Band',
                    role: 'Secretary',
                    period: '2016 - 2017',
                    logo: '/gota.png'
                },
                {
                    organisation: 'Göta Brass Band',
                    role: 'Vice Chairman',
                    period: '2014 – 2016',
                    logo: '/gota.png'
                },
                {
                    organisation: 'Royal Swedish Cadet Band',
                    role: 'Board Member',
                    period: '2014 – 2016',
                    logo: '/muk.png'
                },
                {
                    organisation: 'Royal Swedish Cadet Band',
                    role: 'Alternate Member',
                    period: '2013 – 2014',
                    logo: '/muk.png'
                },
                {
                    organisation: 'The Home Guard  Band of Eslöv',
                    role: 'Alternate Member',
                    period: '2013 – 2014',
                    logo: '/hvmus.png'
                },
                {
                    organisation: 'Sjöbo Youth Orchestra',
                    role: 'Board Member',
                    period: '2006 – 2007',
                    logo: '/suo.png'
                },
            ],
        },
    },
}
