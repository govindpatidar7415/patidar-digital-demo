import { ArrowDown, ArrowRight, ArrowUpRight, Code2, ShoppingBag, Layers3, ShieldCheck, CheckCircle2, Send } from 'lucide-react'
import Header from './components/Header'
import SectionHeading from './components/SectionHeading'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { company, projects, testimonials } from './data/siteData'
import { sanityClient } from './sanity/client'
const iconMap = {
  code: Code2,
  shopping: ShoppingBag,
  layers: Layers3,
  shield: ShieldCheck,
  globe: Code2,
}

function App() {
  function handleContact(event) {
    event.preventDefault()
    alert('Thanks! This is a demo form. Connect a backend or form service to receive messages.')
  }

  const [services, setServices] = useState([])
  const [loadingServices, setLoadingServices] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "service" && isActive == true] | order(order asc) {
          _id,
          title,
          description,
          icon,
          order
        }`
      )
      .then((data) => {
        setServices(data)
      })
      .catch((error) => {
        console.error('Error fetching services:', error)
      })
      .finally(() => {
        setLoadingServices(false)
      })
  }, [])

  // Keep the existing return JSX below this line

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-content">
            <span className="eyebrow"><span className="eyebrow-dot" /> Independent digital studio · Indore, India</span>
            <h1>We make digital<br /><span>work for you.</span></h1>
            <p>{company.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#work">Explore our work <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><span className="note-line" /> Strategy · Design · Development</div>
          </div>
          <div className="hero-visual" aria-label="Abstract creative digital artwork">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-core"><span>P</span></div>
            <div className="floating-card card-top"><span className="mini-dot" /> Thoughtful design</div>
            <div className="floating-card card-bottom"><strong>01—04</strong><span>Ideas into impact</span></div>
            <div className="visual-caption">BUILD WITH PURPOSE</div>
          </div>
          <div className="hero-bottom"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="intro-label"><span>01 / WHO WE ARE</span><span className="small-cross">✳</span></div>
          <div className="intro-copy">
            <h2>Good work starts with <em>understanding.</em></h2>
            <p>We are a digital studio focused on helping small and growing businesses show up confidently online. We combine practical thinking, clean design and dependable development to create experiences people enjoy using.</p>
            <a className="text-link dark-link" href="#contact">A little more about us <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="services-section section-pad" id="services">
          <SectionHeading eyebrow="02 / WHAT WE DO" title={<>Useful services.<br /><em>Thoughtful outcomes.</em></>} description="From the first idea to the finished experience, we help turn business needs into useful digital products." />
          <div className="service-grid">
            {loadingServices ? (
              <p>Loading services...</p>
            ) : services.length === 0 ? (
              <p>No services available.</p>
            ) : (
              services.map((service, index) => {
                const Icon = iconMap[service.icon] || Code2

                return (
                  <article className="service-card" key={service._id}>
                    <div className="service-top">
                      <span>
                        {String(service.order ?? index + 1).padStart(2, '0')}
                      </span>
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a href="#contact" aria-label={`Ask about ${service.title}`}>
                      <ArrowUpRight size={18} />
                    </a>
                  </article>
                )
              })
            )}
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="work-heading">
            <SectionHeading eyebrow="03 / SELECTED WORK" title={<>Made to make<br /><em>a difference.</em></>} description="A few concept projects that show the kind of digital experiences we love creating." />
            <span className="work-count">03<br /><small>CONCEPTS</small></span>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <article className="project-card" key={project.title}>
              <a className="project-image" href="#contact">
                <img src={project.image} alt={`${project.title} project concept`} loading="lazy" />
                <span className="image-arrow"><ArrowUpRight size={20} /></span>
              </a>
              <div className="project-meta"><span>{project.category}</span><span>0{index + 1}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>)}
          </div>
        </section>

        <section className="approach-section section-pad">
          <div className="approach-number">04</div>
          <div className="approach-content">
            <span className="eyebrow">A SIMPLE APPROACH</span>
            <h2>Clear thinking.<br /><em>Better making.</em></h2>
            <div className="approach-steps">
              {['Understand your goals', 'Plan the right experience', 'Design and build together', 'Launch, learn and improve'].map((step, i) => (
                <div className="approach-step" key={step}><CheckCircle2 size={18} /><span>0{i + 1}</span><strong>{step}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-section section-pad">
          <SectionHeading eyebrow="KIND WORDS" title={<>Built on good<br /><em>partnerships.</em></>} />
          <div className="testimonial-grid">
            {testimonials.map((item) => <blockquote key={item.name}>
              <div className="quote-mark">“</div><p>{item.quote}</p><footer><strong>{item.name}</strong><span>{item.role}</span></footer>
            </blockquote>)}
          </div>
          <p className="demo-disclaimer">These testimonials are fictional sample content for this demo website.</p>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">05 / GET IN TOUCH</span>
            <h2>Have a good idea?<br /><em>Let's make it real.</em></h2>
            <p>Tell us a little about what you are building. We will get back to you to discuss the next step.</p>
            <div className="contact-details"><span>{company.email}</span><span>{company.phone}</span><span>{company.location}</span></div>
          </div>
          <form className="contact-form" onSubmit={handleContact}>
            <label>Your name<input required name="name" placeholder="Name" /></label>
            <label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label>
            <label>What are you looking to build?<textarea required name="message" rows="4" placeholder="Tell us about your project..." /></label>
            <button className="button button-primary" type="submit">Send enquiry <Send size={16} /></button>
            <small>Demo form only — messages are not stored or sent.</small>
          </form>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
