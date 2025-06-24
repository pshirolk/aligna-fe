import React, { useState, useEffect, useRef } from 'react';

const AlignaLanding = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        householdType: '',
        biggestChallenge: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const observerRef = useRef();

    // Intersection Observer for animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    if (observerRef.current) {
                        observerRef.current.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            if (observerRef.current) {
                observerRef.current.observe(el);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Beta signup data:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                email: '',
                firstName: '',
                lastName: '',
                householdType: '',
                biggestChallenge: ''
            });
        }, 3000);
    };

    const smoothScroll = (targetId) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const problemCards = [
        {
            icon: '🧠',
            title: 'Mental Load Overload',
            description: 'Constantly juggling schedules, tasks, and family needs in your head. The mental calendar never stops running.'
        },
        {
            icon: '⚖️',
            title: 'Unfair Distribution',
            description: 'One person carries the emotional weight of household management while others remain unaware of what needs doing.'
        },
        {
            icon: '😰',
            title: 'Daily Chaos',
            description: 'Morning rushes, forgotten appointments, and constant coordination struggles that steal joy from family time.'
        }
    ];

    const frameworkSteps = [
        { number: 1, title: 'Align', description: 'Set shared household goals and values together' },
        { number: 2, title: 'Plan', description: 'Create weekly overviews that work for everyone' },
        { number: 3, title: 'Manage', description: 'Smart dashboards and gentle reminders' },
        { number: 4, title: 'Delegate', description: 'Fair task assignment with one tap' },
        { number: 5, title: 'Care', description: 'Regular check-ins and family reflections' }
    ];

    const aboutCards = [
        {
            title: 'Our Purpose',
            content: 'To transform the invisible mental and emotional load of household life into empathetic, visible flows—freeing families to live more intentionally.'
        },
        {
            title: 'Our Vision',
            content: 'A future where every household operates like a well-aligned team—with care, balance, and shared responsibility, enabled by AI-powered clarity.'
        },
        {
            title: 'Our Values',
            content: ['Empathy', 'Harmony', 'Clarity', 'Inclusion', 'Empowerment']
        }
    ];

    const styles = {
        container: {
            width: '100vw',
            maxWidth: '100vw',
            margin: 0,
            padding: 0,
            overflowX: 'hidden',
            backgroundColor: 'white',
            color: '#1a1a1a',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
            lineHeight: '1.6',
            minHeight: '100vh'
        },
        header: {
            position: 'sticky',
            top: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #e5e5e5',
            zIndex: 50,
            padding: '1rem 0',
            width: '100vw',
            left: 0,
            right: 0
        },
        nav: {
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1a1a1a'
        },
        navList: {
            display: 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
        },
        navButton: {
            background: 'none',
            border: 'none',
            color: '#666',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontSize: '1rem'
        },
        hero: {
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            padding: '6rem 1.25rem 4rem',
            textAlign: 'center',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
        },
        heroContainer: {
            maxWidth: '1200px',
            margin: '0 auto'
        },
        heroTitle: {
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            color: '#1a1a1a',
            lineHeight: '1.2'
        },
        heroTagline: {
            fontSize: '1.5rem',
            color: '#666',
            marginBottom: '2rem',
            fontWeight: '400'
        },
        heroSubtitle: {
            fontSize: '1.25rem',
            color: '#444',
            marginBottom: '3rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        btnPrimary: {
            background: '#1a1a1a',
            color: 'white',
            padding: '1rem 2.5rem',
            borderRadius: '50px',
            border: '2px solid #1a1a1a',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        },
        section: {
            padding: '5rem 1.25rem',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
        },
        sectionGray: {
            padding: '5rem 1.25rem',
            backgroundColor: '#f8f9fa',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
        },
        contentContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%'
        },
        sectionTitle: {
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1a1a1a'
        },
        grid3: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
        },
        grid5: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
        },
        card: {
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid #e5e5e5',
            textAlign: 'center',
            transition: 'transform 0.3s ease'
        },
        cardIcon: {
            fontSize: '3rem',
            marginBottom: '1rem'
        },
        cardTitle: {
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#1a1a1a'
        },
        cardText: {
            color: '#666',
            lineHeight: '1.6'
        },
        frameworkCard: {
            padding: '2rem 1rem',
            border: '2px solid #e5e5e5',
            borderRadius: '12px',
            textAlign: 'center',
            transition: 'all 0.3s ease'
        },
        stepCircle: {
            width: '40px',
            height: '40px',
            background: '#1a1a1a',
            color: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '700',
            margin: '0 auto 1rem'
        },
        aboutCard: {
            backgroundColor: 'white',
            padding: '2.5rem',
            borderRadius: '12px',
            border: '1px solid #e5e5e5'
        },
        valuesList: {
            listStyle: 'none',
            padding: 0,
            margin: 0
        },
        valuesItem: {
            padding: '0.5rem 0',
            borderBottom: '1px solid #e5e5e5',
            color: '#666',
            fontWeight: '500'
        },
        betaSection: {
            padding: '5rem 1.25rem',
            backgroundColor: '#1a1a1a',
            color: 'white',
            textAlign: 'center',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
        },
        betaContainer: {
            maxWidth: '600px',
            margin: '0 auto'
        },
        betaTitle: {
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem'
        },
        betaIntro: {
            fontSize: '1.25rem',
            opacity: '0.8',
            marginBottom: '3rem'
        },
        formGroup: {
            marginBottom: '1.5rem',
            textAlign: 'left'
        },
        label: {
            display: 'block',
            marginBottom: '0.5rem',
            fontWeight: '500',
            color: '#f0f0f0'
        },
        input: {
            width: '100%',
            padding: '1rem',
            border: '1px solid #444',
            borderRadius: '8px',
            background: '#2a2a2a',
            color: 'white',
            fontSize: '1rem',
            boxSizing: 'border-box'
        },
        gridRow: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginBottom: '1.5rem'
        },
        submitBtn: {
            background: 'white',
            color: '#1a1a1a',
            padding: '1rem 2.5rem',
            border: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            width: '100%',
            marginTop: '1rem'
        },
        successCard: {
            background: '#16a34a',
            padding: '2rem',
            borderRadius: '12px'
        },
        footer: {
            padding: '3rem 1.25rem',
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            borderTop: '1px solid #e5e5e5',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw'
        },
        footerLinks: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            listStyle: 'none',
            margin: '1rem 0 0 0',
            padding: 0
        },
        link: {
            color: '#666',
            textDecoration: 'none',
            transition: 'color 0.3s ease'
        }
    };

    return (
        <div style={styles.container}>
            <style dangerouslySetInnerHTML={{
                __html: `
          * {
            box-sizing: border-box;
          }
          
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }

          #root {
            width: 100%;
            overflow-x: hidden;
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease;
          }

          .animate-fade-in {
            opacity: 1;
            transform: translateY(0);
          }

          .hover-lift:hover {
            transform: translateY(-2px);
          }

          .nav-button:hover {
            color: #1a1a1a !important;
          }

          .btn-primary:hover {
            background: transparent !important;
            color: #1a1a1a !important;
            transform: translateY(-2px);
          }

          .framework-card:hover {
            border-color: #1a1a1a;
            transform: translateY(-2px);
          }

          .card:hover {
            transform: translateY(-2px);
          }

          .submit-btn:hover {
            background: #f0f0f0 !important;
            transform: translateY(-2px);
          }

          .link:hover {
            color: #1a1a1a !important;
          }

          .input:focus {
            outline: none;
            border-color: #666;
          }

          html {
            scroll-behavior: smooth;
          }

          @media (max-width: 768px) {
            .nav-list {
              display: none !important;
            }
            .hero-title {
              font-size: 2.5rem !important;
            }
            .hero-tagline {
              font-size: 1.25rem !important;
            }
            .hero-subtitle {
              font-size: 1.1rem !important;
            }
            .grid-row {
              grid-template-columns: 1fr !important;
            }
            .grid5 {
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important;
            }
            .grid3 {
              grid-template-columns: 1fr !important;
            }
            .section-title {
              font-size: 2rem !important;
            }
          }

          @media (max-width: 480px) {
            .grid5 {
              grid-template-columns: 1fr !important;
            }
          }
        `
            }} />

            {/* Header */}
            <header style={styles.header}>
                <nav style={styles.nav}>
                    <div style={styles.logo}>Aligna</div>
                    <ul style={styles.navList} className="nav-list">
                        <li>
                            <button
                                onClick={() => smoothScroll('about')}
                                style={styles.navButton}
                                className="nav-button"
                            >
                                About
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => smoothScroll('how-it-works')}
                                style={styles.navButton}
                                className="nav-button"
                            >
                                How It Works
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => smoothScroll('beta')}
                                style={styles.navButton}
                                className="nav-button"
                            >
                                Join Beta
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section style={styles.hero}>
                <div style={styles.heroContainer}>
                    <h1 style={styles.heroTitle} className="fade-in hero-title">
                        Clarity at Home.<br />Harmony for All.
                    </h1>
                    <p style={styles.heroTagline} className="fade-in hero-tagline">Less Juggling. More Living.</p>
                    <p style={styles.heroSubtitle} className="fade-in hero-subtitle">
                        Transform the invisible mental load of household life into empathetic, visible flows—freeing families to live more intentionally.
                    </p>
                    <button
                        onClick={() => smoothScroll('beta')}
                        style={styles.btnPrimary}
                        className="btn-primary hover-lift fade-in"
                    >
                        Join the Beta
                    </button>
                </div>
            </section>

            {/* Problem Section */}
            <section style={styles.sectionGray}>
                <div style={styles.contentContainer}>
                    <h2 style={styles.sectionTitle} className="section-title">
                        You're Not Alone in Feeling Overwhelmed
                    </h2>
                    <div style={styles.grid3} className="grid3">
                        {problemCards.map((card, index) => (
                            <div key={index} style={styles.card} className="card hover-lift fade-in">
                                <div style={styles.cardIcon}>{card.icon}</div>
                                <h3 style={styles.cardTitle}>{card.title}</h3>
                                <p style={styles.cardText}>{card.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section id="how-it-works" style={styles.section}>
                <div style={styles.contentContainer}>
                    <h2 style={styles.sectionTitle} className="section-title">Our APMDC Framework</h2>
                    <p style={{ ...styles.cardText, textAlign: 'center', fontSize: '1.25rem', marginBottom: '4rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
                        A proven approach that transforms household chaos into harmonious flow through five simple steps.
                    </p>

                    <div style={styles.grid5} className="grid5">
                        {frameworkSteps.map((step, index) => (
                            <div key={index} style={styles.frameworkCard} className="framework-card fade-in">
                                <div style={styles.stepCircle}>
                                    {step.number}
                                </div>
                                <h3 style={{ ...styles.cardTitle, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                                <p style={{ ...styles.cardText, fontSize: '0.95rem' }}>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" style={styles.sectionGray}>
                <div style={styles.contentContainer}>
                    <h2 style={styles.sectionTitle} className="section-title">About Aligna</h2>
                    <div style={styles.grid3} className="grid3">
                        {aboutCards.map((card, index) => (
                            <div key={index} style={styles.aboutCard} className="fade-in">
                                <h3 style={styles.cardTitle}>{card.title}</h3>
                                {Array.isArray(card.content) ? (
                                    <ul style={styles.valuesList}>
                                        {card.content.map((value, i) => (
                                            <li key={i} style={{ ...styles.valuesItem, borderBottom: i === card.content.length - 1 ? 'none' : '1px solid #e5e5e5' }}>
                                                {value}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p style={{ ...styles.cardText, lineHeight: '1.7' }}>{card.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Beta Signup Section */}
            <section id="beta" style={styles.betaSection}>
                <div style={styles.betaContainer}>
                    <h2 style={styles.betaTitle}>Join Our Beta Community</h2>
                    <p style={styles.betaIntro}>
                        Be among the first families to experience household harmony. Help us build something beautiful together.
                    </p>

                    {isSubmitted ? (
                        <div style={styles.successCard}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Thank You!</h3>
                            <p style={{ fontSize: '1.125rem' }}>We'll be in touch soon with early access details.</p>
                        </div>
                    ) : (
                        <div>
                            <div style={styles.formGroup}>
                                <label htmlFor="email" style={styles.label}>
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    style={styles.input}
                                    className="input"
                                />
                            </div>

                            <div style={styles.gridRow} className="grid-row">
                                <div style={styles.formGroup}>
                                    <label htmlFor="firstName" style={styles.label}>
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        style={styles.input}
                                        className="input"
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label htmlFor="lastName" style={styles.label}>
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        style={styles.input}
                                        className="input"
                                    />
                                </div>
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="householdType" style={styles.label}>
                                    Household Type
                                </label>
                                <select
                                    id="householdType"
                                    name="householdType"
                                    value={formData.householdType}
                                    onChange={handleInputChange}
                                    required
                                    style={styles.input}
                                    className="input"
                                >
                                    <option value="">Select your household type</option>
                                    <option value="family-young-kids">Family with young children</option>
                                    <option value="family-school-age">Family with school-age children</option>
                                    <option value="family-teens">Family with teenagers</option>
                                    <option value="single-parent">Single parent household</option>
                                    <option value="couple-no-kids">Couple without children</option>
                                    <option value="roommates">Roommates/Housemates</option>
                                    <option value="multigenerational">Multi-generational household</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div style={styles.formGroup}>
                                <label htmlFor="biggestChallenge" style={styles.label}>
                                    What's your biggest household management challenge?
                                </label>
                                <select
                                    id="biggestChallenge"
                                    name="biggestChallenge"
                                    value={formData.biggestChallenge}
                                    onChange={handleInputChange}
                                    required
                                    style={styles.input}
                                    className="input"
                                >
                                    <option value="">Select your main challenge</option>
                                    <option value="mental-load">Carrying the mental load alone</option>
                                    <option value="task-distribution">Unfair task distribution</option>
                                    <option value="schedule-coordination">Schedule coordination chaos</option>
                                    <option value="morning-routine">Morning routine struggles</option>
                                    <option value="communication">Family communication gaps</option>
                                    <option value="time-management">Time management issues</option>
                                    <option value="meal-planning">Meal planning and prep</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button
                                onClick={handleSubmit}
                                style={styles.submitBtn}
                                className="submit-btn"
                            >
                                Count Me In!
                            </button>

                            <p style={{ fontSize: '0.875rem', opacity: '0.7', marginTop: '1rem' }}>
                                We respect your privacy. No spam, just updates on our beta launch and household harmony tips.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer style={styles.footer}>
                <div style={styles.contentContainer}>
                    <p style={{ color: '#666', marginBottom: '1rem' }}>
                        &copy; 2025 Aligna. Making the invisible visible, one household at a time.
                    </p>
                    <ul style={styles.footerLinks}>
                        <li><a href="#" style={styles.link} className="link">Privacy Policy</a></li>
                        <li><a href="#" style={styles.link} className="link">Terms of Service</a></li>
                        <li><a href="#" style={styles.link} className="link">Contact</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default AlignaLanding;