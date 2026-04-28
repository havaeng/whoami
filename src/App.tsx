import {useEffect, useRef, useState} from 'react'
import {animate, stagger} from 'animejs'
import './App.css'
import {
    DEFAULT_LOCALE,
    isLocale,
    translations,
    type EducationItem,
    type Locale,
    type SectionKey,
} from './i18n'

/** Resolves a public asset path against the Vite base URL. */
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const PARTICLES = Array.from({length: 28}, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 5 + 3,
}))

const LANGUAGE_QUERY_PARAM = 'lang'
const LANGUAGE_STORAGE_KEY = 'whoami.language'
const SECTION_ORDER: SectionKey[] = ['about', 'career', 'education', 'nonProfit', 'techStack']

const TECH_STACK = [
    {name: 'Kotlin (server-side)', logo: '/kotlin.png'},
    {name: 'Spring Boot', logo: '/spring-boot.svg.png'},
    {name: 'Gradle', logo: '/gradle.png'},
    {name: 'Azure', logo: '/azure.png'},
    {name: 'Terraform', logo: '/terraform.png'},
    {name: 'Kubernetes', logo: '/k8s.png'},
    {name: 'Docker', logo: '/docker.png.webp'},
    {name: 'PostgreSQL', logo: '/postgre.svg.png'},
    {name: 'GitHub', logo: '/github.png'},
    {name: 'GitHub Copilot', logo: '/copilot.png'},
    {name: 'Git', logo: '/git.png'},
    {name: 'Home Assistant', logo: '/home-assistant.png'},
    {name: 'Java', logo: '/java.png'},
    {name: 'Azure DevOps', logo: '/azure-devops.jpeg'},
    {name: 'Miro', logo: '/miro.png'},
    {name: 'React', logo: '/react.png'},
    {name: 'Argo CD', logo: '/argo.png'},
    {name: 'Jira', logo: '/jira.jpeg'},
]

/** Flip card for a single tech stack item. */
function TechCard({name, logo, largeLogo}: { name: string; logo: string; largeLogo?: boolean }) {
    const innerRef = useRef<HTMLDivElement>(null)
    const flipped = useRef(false)

    const flip = (toFlipped: boolean) => {
        if (!innerRef.current) return
        flipped.current = toFlipped
        animate(innerRef.current, {
            rotateY: toFlipped ? 180 : 0,
            duration: 420,
            easing: 'easeInOutQuad',
        })
    }

    return (
        <div
            className="tech-card"
            onMouseEnter={() => flip(true)}
            onMouseLeave={() => flip(false)}
        >
            <div className="tech-card-inner" ref={innerRef}>
                <div className="tech-card-front">
                    <img src={asset(logo)} alt={name} className="tech-logo"
                         style={largeLogo ? {width: 78, height: 78} : undefined}/>
                </div>
                <div className="tech-card-back">
                    <span className="tech-name">{name}</span>
                </div>
            </div>
        </div>
    )
}

/** Renders a string that may contain [label](url) markdown links as React nodes. */
function parseInlineLinks(text: string): React.ReactNode {
    const pattern = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts: React.ReactNode[] = []
    let last = 0
    let match: RegExpExecArray | null
    while ((match = pattern.exec(text)) !== null) {
        if (match.index > last) parts.push(text.slice(last, match.index))
        parts.push(
            <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer">
                {match[1]}
            </a>
        )
        last = match.index + match[0].length
    }
    if (last < text.length) parts.push(text.slice(last))
    return parts.length === 1 ? parts[0] : <>{parts}</>
}

/** Renders a single education item — either a plain string or a grouped sub-list. */
function renderEducationItem(item: EducationItem, index: number): React.ReactNode {
    if (typeof item === 'string') {
        return <li key={index}>{parseInlineLinks(item)}</li>
    }
    return (
        <li key={index}>
            {parseInlineLinks(item.text)}
            <ul className="sub-items">
                {item.items.map((sub, i) => (
                    <li key={i}>{parseInlineLinks(sub)}</li>
                ))}
            </ul>
        </li>
    )
}

function getInitialLanguage(): Locale {
    const params = new URLSearchParams(window.location.search)
    const urlLanguage = params.get(LANGUAGE_QUERY_PARAM)
    if (isLocale(urlLanguage)) return urlLanguage
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (isLocale(storedLanguage)) return storedLanguage
    return DEFAULT_LOCALE
}

function App() {
    const [language, setLanguage] = useState<Locale>(getInitialLanguage)
    const [activeSection, setActiveSection] = useState<SectionKey>('about')
    const contentRef = useRef<HTMLDivElement>(null)

    const t = translations[language]

    // URL + localStorage sync
    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
        const params = new URLSearchParams(window.location.search)
        if (params.get(LANGUAGE_QUERY_PARAM) !== language) {
            params.set(LANGUAGE_QUERY_PARAM, language)
            const nextSearch = params.toString()
            const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ''}${window.location.hash}`
            window.history.replaceState(null, '', nextUrl)
        }
    }, [language])

    useEffect(() => {
        const onPopState = () => {
            const urlLanguage = new URLSearchParams(window.location.search).get(LANGUAGE_QUERY_PARAM)
            if (isLocale(urlLanguage)) setLanguage(urlLanguage)
        }
        window.addEventListener('popstate', onPopState)
        return () => window.removeEventListener('popstate', onPopState)
    }, [])

    // Floating particles
    useEffect(() => {
        animate('.particle', {
            translateX: () => Math.random() * 70 - 35,
            translateY: () => Math.random() * 70 - 35,
            opacity: () => 0.15 + Math.random() * 0.45,
            duration: () => 5000 + Math.random() * 6000,
            delay: () => Math.random() * 3000,
            loop: true,
            direction: 'alternate',
            easing: 'easeInOutSine',
        })
    }, [])

    // Topbar entrance on mount
    useEffect(() => {
        animate('.app-title', {
            opacity: [0, 1],
            translateY: [-16, 0],
            duration: 600,
            easing: 'easeOutCubic',
        })
        animate('.topbar nav li', {
            opacity: [0, 1],
            translateY: [-16, 0],
            delay: stagger(60, {start: 80}),
            duration: 500,
            easing: 'easeOutCubic',
        })
        animate('.language-picker', {
            opacity: [0, 1],
            translateY: [-16, 0],
            duration: 500,
            delay: 300,
            easing: 'easeOutCubic',
        })
    }, [])

    // Content transition on section change
    useEffect(() => {
        if (!contentRef.current) return

        animate(contentRef.current, {
            opacity: [0, 1],
            translateY: [18, 0],
            duration: 420,
            easing: 'easeOutCubic',
        })

        if (activeSection === 'about') {
            animate('.portrait', {
                opacity: [0, 1],
                scale: [0.94, 1],
                duration: 700,
                delay: 80,
                easing: 'easeOutCubic',
            })
            animate('.about-text', {
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 500,
                delay: 180,
                easing: 'easeOutCubic',
            })
        } else {
            animate('.content-list li, .entry-card, .tech-card', {
                opacity: [0, 1],
                translateX: [-16, 0],
                delay: stagger(70, {start: 120}),
                duration: 400,
                easing: 'easeOutCubic',
            })
        }
    }, [activeSection])

    const renderContent = () => {
        if (activeSection === 'about') {
            const about = t.sections.about
            return (
                <div className="about-section">
                    <img
                        src={asset('/portrait.jpeg')}
                        alt={about.portraitAlt}
                        className="portrait"
                    />
                    <div className="about-text">
                        <p>{about.bio}</p>
                        <a
                            href="https://www.linkedin.com/in/havaeng/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <img src={asset('/linkedin.png')} alt="LinkedIn" className="contact-link-logo"/>
                            {about.contactLabel}
                        </a>
                    </div>
                </div>
            )
        }

        if (activeSection === 'career') {
            const career = t.sections.career
            return (
                <>
                    <h2>{career.title}</h2>
                    <div className="career-entries">
                        {career.entries.map((entry) => (
                            <div className="entry-card" key={`${entry.employer}-${entry.role}`}>
                                <div className="entry-header">
                                    <img src={asset(entry.logo)} alt={entry.employer} className="entry-logo"/>
                                    <div className="entry-meta">
                                        <h3 className="entry-org">{entry.employer}</h3>
                                        <span className="entry-sub">{entry.role}</span>
                                    </div>
                                    <span className="entry-period">{entry.period}</span>
                                </div>
                                <ul className="content-list">
                                    {entry.items.map((item) => (
                                        <li key={item}>{parseInlineLinks(item)}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )
        }

        if (activeSection === 'education') {
            const education = t.sections.education
            return (
                <>
                    <h2>{education.title}</h2>
                    <div className="career-entries">
                        {education.entries.map((entry) => (
                            <div className="entry-card" key={`${entry.institution}-${entry.programme}`}>
                                <div className="entry-header">
                                    <img src={asset(entry.logo)} alt={entry.institution} className="entry-logo"/>
                                    <div className="entry-meta">
                                        <h3 className="entry-org">{entry.institution}</h3>
                                        <span className="entry-sub">{entry.programme}</span>
                                        <span className="entry-degree">{entry.degree}</span>
                                    </div>
                                    <div className="entry-right">
                                        <span className="entry-period">{entry.period}</span>
                                        <span className="entry-credits">{entry.credits}</span>
                                    </div>
                                </div>
                                <ul className="content-list">
                                    {entry.items.map((item, i) => renderEducationItem(item, i))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </>
            )
        }

        if (activeSection === 'techStack') {
            return (
                <>
                    <h2>{t.sections.techStack.title}</h2>
                    <div className="tech-stack-grid">
                        {TECH_STACK.map((tech) => (
                            <TechCard key={tech.name} name={tech.name} logo={tech.logo}
                                      largeLogo={tech.name === 'Kotlin (server-side)'}/>
                        ))}
                    </div>
                </>
            )
        }

        const _section = t.sections[activeSection]
        if (activeSection === 'nonProfit') {
            const voluntary = t.sections.nonProfit
            return (
                <>
                    <h2>{voluntary.title}</h2>
                    <div className="career-entries">
                        {voluntary.entries.map((entry) => (
                            <div className="entry-card" key={`${entry.organisation}-${entry.role}-${entry.period}`}>
                                <div className="entry-header">
                                    {entry.logo
                                        ? <img src={asset(entry.logo)} alt={entry.organisation} className="entry-logo"/>
                                        : <span className="entry-logo-placeholder" aria-hidden="true"/>
                                    }
                                    <div className="entry-meta">
                                        <h3 className="entry-org">{entry.organisation}</h3>
                                        <span className="entry-sub">{entry.role}</span>
                                    </div>
                                    <span className="entry-period">{entry.period}</span>
                                </div>
                                {entry.items && entry.items.length > 0 && (
                                    <ul className="content-list">
                                        {entry.items.map((item) => (
                                            <li key={item}>{parseInlineLinks(item)}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )
        }

        return null
    }

    return (
        <div className="app-shell">
            <div className="particles-bg" aria-hidden="true">
                {PARTICLES.map((p) => (
                    <span
                        key={p.id}
                        className="particle"
                        style={{left: p.left, top: p.top, width: p.size, height: p.size}}
                    />
                ))}
            </div>
            <header className="topbar">
                <span className="app-title">{t.appTitle}</span>

                <nav aria-label="Sections">
                    <ul>
                        {SECTION_ORDER.map((key) => (
                            <li key={key}>
                                <button
                                    type="button"
                                    className={activeSection === key ? 'active' : ''}
                                    onClick={() => setActiveSection(key)}
                                >
                                    {t.sections[key].label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="language-picker">
                    <label htmlFor="language-select">{t.languageLabel}</label>
                    <select
                        id="language-select"
                        value={language}
                        onChange={(event) => setLanguage(event.target.value as Locale)}
                    >
                        <option value="en">English</option>
                        <option value="sv">Svenska</option>
                    </select>
                </div>
            </header>

            <main className="content" ref={contentRef}>
                {renderContent()}
            </main>
        </div>
    )
}

export default App
