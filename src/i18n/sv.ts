import type { TranslationDictionary } from './index'

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
            'Ställföreträdande chef för musikkår inom Hemvärnet med ansvar för operativ ledning vid frånvaro av chef (tjänstgöring 10 dagar/år)',
            'Personalansvar för hemvärnsmusiker i krigsförbandet',
            'Planering, samordning och genomförande av repetitioner och musikinsatser',
            'Medverkan i verksamhetsplanering, budgetunderlag och resursprioritering',
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
            'Kör en gång i månaden för att upprätthålla lokförarlicens',
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
          programme: 'Kandidatprogram i datavetenskap',
          period: '2021 – 2024',
          logo: '/mau.png',
          items: [
            'Kandidatprogram i datavetenskap, 180 hp',
            'Uppsatsarbete inom eco-driving på järnväg i samarbete med Trafikverket',
          ],
        },
        {
          institution: 'Trafikverksskolan',
          programme: 'Lokförarutbildning',
          period: '2015 – 2016',
          logo: '/trv5.png',
          items: [
            'Lokförarutbildning (yrkeshögskoleprogram)',
          ],
        },
      ],
    },
    nonProfit: {
      label: 'Ideellt',
      title: 'Föreningsengagemang',
      entries: [
        { organisation: 'BRF Bergsspånet',            role: 'Sekreterare',    period: '2023 – 2025', logo: '' },
        { organisation: 'Militärmusiksamfundet',      role: 'Ledamot',        period: '2016 – 2026', logo: '' },
        { organisation: 'Seko Klubb SJ Syd',          role: 'Kassör',         period: '2019 – 2022', logo: '' },
        { organisation: 'Hemvärnets musikkår Lund',   role: 'Kassör',         period: '2019 – 2020', logo: '' },
        { organisation: 'Göta Brass Band',            role: 'Sekreterare',    period: '2016 - 2017', logo: '' },
        { organisation: 'Göta Brass Band',            role: 'Vice ordförande', period: '2014 – 2016', logo: '' },
        { organisation: 'Marinens ungdomsmusikkår',   role: 'Ledamot',        period: '2014 – 2016', logo: '' },
        { organisation: 'Marinens ungdomsmusikkår',   role: 'Suppleant',      period: '2013 – 2014', logo: '' },
        { organisation: 'Hemvärnets musikkår Eslöv',  role: 'Suppleant',      period: '2013 – 2014', logo: '' },
        { organisation: 'Sjöbo ungdomsorkester',      role: 'Ledamot',        period: '2006 – 2007', logo: '' },
      ],
    },
  },
}
