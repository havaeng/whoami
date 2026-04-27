import type {TranslationDictionary} from './index'

export const sv: TranslationDictionary = {
    appTitle: 'whoami',
    languageLabel: 'Språk',
    sections: {
        about: {
            label: 'Om mig',
            title: 'Om mig',
            bio: 'Senior mjukvaruutvecklare med passion för frontend-arkitektur, ren kod och open source-samarbete. Baserad i Sverige.',
            portraitAlt: 'Porträttfoto',
        },
        career: {
            label: 'Karriär',
            title: 'Karriär',
            entries: [
                {
                    employer: 'SJ AB',
                    role: 'Software Engineer',
                    period: 'Juni 2024 – nuvarande',
                    logo: '/sj2.png',
                    items: [
                        'Backendutveckling i Java och Kotlin/Spring inom DevOps-orienterat team',
                        'Produktutveckling och förvaltning av SJ:s digitala ombordverktyg för produktionspersonal (Team Monsoon)',
                        'Scrum Master med ansvar för att coacha teamet i ceremonier, kravhantering och team-processer',
                        'CI/CD-arbete och förvaltning av cloud-infra genom IaC (Terraform) i Azure-miljö',
                        'Agilt arbete och leverans i större organisationer',
                        'Ambassadör (en av 20 på hela SJ AB) inom "Framtidståget", ett initiativ för vidareutveckling av SJ AB:s företagskultur',
                    ],
                },
                {
                    employer: 'Försvarsmakten',
                    role: 'Stf C',
                    period: 'Jan. 2026 – nuvarande',
                    logo: '/fm.png',
                    items: [
                        'Ställföreträdande chef för musikkåren vid 29. hemvärnsbataljonen, Södertörnsgruppen, Militärregion Mitt',
                        'Personalansvar för anställda i förbandet',
                        'Planering, samordning och genomförande av repetitioner och musikinsatser',
                        'Verksamhetsplanering, budgetunderlag och resursprioritering',
                        'Stöd till chef i strategiska beslut och utveckling av musikkårens långsiktiga verksamhet',
                        'Tjänstgöring 10 dagar per år',
                    ],
                },
                {
                    employer: 'SJ AB',
                    role: 'Lokförare',
                    period: 'Aug. 2018 – nuvarande',
                    logo: '/sj2.png',
                    items: [
                        'Tjänstgöring en (1) gång i månaden för att upprätthålla lokförarlicens/kompetens',
                        'Framförande av X2 och X55, stationerad först i Malmö och sedan Stockholm',
                        'Trafik i nästan hela Sverige samt till Danmark (Köpenhamn, Kastrup m.fl.)',
                        'Operativt ansvar för trafiksäkerhet, punktlighet och kundbemötande',
                    ],
                },
                {
                    employer: 'SJ AB',
                    role: 'Software Engineer Intern',
                    period: 'Sept. 2022 – Jan. 2023',
                    logo: '/sj2.png',
                    items: [
                        'Praktik under 4 månader i Team Monsoon som del av kandidatprogram',
                        'Bidrog starkt till effektiv onboarding vid efterföljande anställning (2024)',
                    ],
                },
                {
                    employer: 'Transdev Sverige AB',
                    role: 'Lokförare',
                    period: 'Juni 2016 – Aug. 2018',
                    logo: '/transdev.jpg',
                    items: [
                        'Framförande av X31 inom Öresundstågstrafiken',
                        'Körde samtliga sträckor, inklusive Danmark (Köpenhamn, Helsingör m.fl.)',
                        'Operativt ansvar för trafiksäkerhet, punktlighet och kundbemötande',
                    ],
                },
            ],
        },
        education: {
            label: 'Utbildning',
            title: 'Utbildning',
            entries: [
                {
                    institution: 'Malmö universitet',
                    programme: 'Systemutvecklare',
                    degree: 'Kandidatexamen i Datavetenskap med inriktning mot systemutveckling',
                    credits: '180 hp',
                    period: '2021 – 2024',
                    logo: '/mau.png',
                    items: [
                        '[Uppsatsarbete](https://mau.diva-portal.org/smash/record.jsf?pid=diva2%3A1903916&dswid=-8338) inom eco-driving för lokförare i samarbete med Trafikverket',
                        'Programrådsrepresentant för TGSYA21H under termin 1 - 6. Kursutvärdering tillsammans med kurs- och ' +
                        'programansvarig efter varje avslutad termin.',
                    ],
                },
                {
                    institution: 'Trafikverksskolan',
                    programme: 'Lokförarutbildning',
                    degree: 'Yrkeshögskoleexamen inriktning Lokförare',
                    credits: '220 YH-poäng',
                    period: '2015 – 2016',
                    logo: '/trv5.png',
                    items: [
                        {
                            text: 'LIA-praktik (lärande i arbete):', items: [
                                'SJ AB, 5 veckor, Malmö',
                                'Hector Rail, 10 veckor, Malmö - varav två veckor av bangårdspraktik i Hallsberg',
                                'Transdev Sverige AB (Öresundståg), 5 veckor, Malmö',
                            ]
                        },
                    ],
                },
            ],
        },
        nonProfit: {
            label: 'Ideellt arbete',
            title: 'Förtroendeuppdrag',
            entries: [
                {
                    organisation: 'Militärmusiksamfundet',
                    role: 'Ledamot',
                    period: '2016 – 2026',
                    logo: '/mms.png',
                    items: [
                        'Webbansvarig 2025 - 2026',
                        'Medalj- och utmärkelseansvarig 2018 - 2024',
                        'Social media manager 2016 - 2018 '
                    ]
                },
                {
                    organisation: 'BRF Bergsspånet',
                    role: 'Ledamot',
                    period: '2023 – 2025',
                    logo: '/brf.jpg',
                    items: [
                        'Sekreterare'
                    ]
                },
                {
                    organisation: 'Seko Klubb SJ Syd',
                    role: 'Revisor',
                    period: '2019 – 2022',
                    logo: '/seko.png',
                    items: [
                        'Revisor',
                    ]
                },
                {
                    organisation: 'Seko Klubb SJ Syd',
                    role: 'Ledamot',
                    period: '2019 – 2022',
                    logo: '/seko.png',
                    items: [
                        'Kassör'
                    ]
                },
                {
                    organisation: 'Hemvärnets musikkår Lund',
                    role: 'Ledamot',
                    period: '2019 – 2020',
                    logo: '/hvmus.png',
                    items: [
                        'Kassör'
                    ]
                },
                {
                    organisation: 'Göta Brass Band',
                    role: 'Ledamot',
                    period: '2016 - 2017',
                    logo: '/gota.png',
                    items: [
                        'Sekreterare'
                    ]
                },
                {
                    organisation: 'Göta Brass Band',
                    role: 'Vice ordförande',
                    period: '2014 – 2016',
                    logo: '/gota.png',
                    items: [
                        'Vice ordförande'
                    ]
                },
                {
                    organisation: 'Marinens ungdomsmusikkår',
                    role: 'Ledamot',
                    period: '2014 – 2016',
                    logo: '/muk.png',
                    items: [
                        'Flaggtrumslagare'
                    ]
                },
                {
                    organisation: 'Marinens ungdomsmusikkår',
                    role: 'Suppleant',
                    period: '2013 – 2014',
                    logo: '/muk.png'
                },
                {
                    organisation: 'Hemvärnets musikkår Eslöv',
                    role: 'Suppleant',
                    period: '2013 – 2014',
                    logo: '/hvmus.png'
                },
                {
                    organisation: 'Sjöbo ungdomsorkester',
                    role: 'Ledamot',
                    period: '2006 – 2007',
                    logo: '/suo.png',
                    items: [
                        'Ungdomsrepresentant',
                        'Mitt första förtroendeuppdrag!',
                    ]
                },
            ],
        },
    },
}
