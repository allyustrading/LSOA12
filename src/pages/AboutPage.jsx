import { SectionIntro, Card } from '../components/Layout'
import aboutImg from '../assets/home-collage.svg'
import donorImg from '../assets/donor-panels.svg'

export default function AboutPage() {
  return (
    <>
      <section className="shell page-banner">
        <div className="page-banner-copy">
          <div className="eyebrow light">About</div>
          <h1 className="page-headline">A nonprofit identity centered on ecology, dignity, and public benefit</h1>
          <p className="page-text">
            Liuli Society of America is dedicated to ecological awareness, sustainable thinking,
            and community-centered wellbeing. The organization exists to help people connect
            environmental responsibility with healthier forms of daily living, education, and
            long-term civic value.
          </p>
        </div>
        <div className="page-banner-media panel">
          <img src={aboutImg} alt="About editorial visual" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Institutional identity"
            title="A clearer explanation of purpose, structure, and public value"
            text="This page explains who Liuli Society of America is, why it exists, and why it is intentionally framed as a mission-led nonprofit rather than a commercial initiative."
          />
          <div className="cards-2">
            <Card>
              <h3>Mission</h3>
              <p>We seek to promote environmental stewardship, ecological awareness, and a more responsible way of living through education, thought leadership, and community engagement.</p>
            </Card>
            <Card>
              <h3>Vision</h3>
              <p>We envision a future in which environmental care is treated not as a fringe concern, but as a shared cultural value that shapes healthier and more sustainable communities.</p>
            </Card>
            <Card>
              <h3>Nonprofit structure</h3>
              <p>The nonprofit model helps ensure that public value, educational benefit, and donor trust remain central to the mission.</p>
            </Card>
            <Card>
              <h3>Why support matters</h3>
              <p>Strong support can help environmental awareness become more visible, more accessible, and more durable through long-term programs and public-facing work.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
