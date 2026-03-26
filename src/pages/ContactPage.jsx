import { SectionIntro, Card } from '../components/Layout'
import contactImg from '../assets/contact-warm.svg'

export default function ContactPage() {
  return (
    <>
      <section className="shell page-banner">
        <div className="page-banner-copy">
          <div className="eyebrow light">Contact</div>
          <h1 className="page-headline">Open a conversation about support, collaboration, or environmental partnership</h1>
          <p className="page-text">
            We welcome inquiries from donors, foundations, educators, environmental advocates,
            and institutions interested in a more thoughtful, better designed nonprofit mission.
          </p>
        </div>
        <div className="page-banner-media panel">
          <img src={contactImg} alt="Contact editorial visual" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Connect"
            title="A contact page designed for serious, mission-aligned conversations"
            text="This page is structured to invite institutional, philanthropic, and collaborative dialogue in a calmer and more premium format."
          />
          <div className="cards-2">
            <Card>
              <h3>Inquiry areas</h3>
              <p>Donor partnership, foundation support, environmental education, research collaboration, community programming, and strategic mission alignment.</p>
            </Card>
            <Card>
              <h3>Contact form preview</h3>
              <div className="form-grid">
                <input className="field" placeholder="Your name" />
                <input className="field" placeholder="Email address" />
                <input className="field" placeholder="Subject" />
                <textarea className="field" rows="6" placeholder="How would you like to connect with Liuli Society of America?" />
                <button className="button button-dark" style={{ width: 'fit-content' }}>Send inquiry</button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
