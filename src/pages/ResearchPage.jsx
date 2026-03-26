import { SectionIntro, Card } from '../components/Layout'
import researchImg from '../assets/research-grid.svg'

export default function ResearchPage() {
  return (
    <>
      <section className="shell page-banner">
        <div className="page-banner-copy">
          <div className="eyebrow light">Research</div>
          <h1 className="page-headline">Research-informed insight for ecological awareness and community learning</h1>
          <p className="page-text">
            Liuli Society of America supports an approach that combines inquiry, education,
            and practical relevance—turning environmental understanding into stronger public value.
          </p>
        </div>
        <div className="page-banner-media panel">
          <img src={researchImg} alt="Research editorial grid visual" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Research direction"
            title="A more thoughtful and accessible knowledge platform"
            text="This section is designed to show seriousness without drifting into technical density. It supports a calm, premium, institution-ready tone."
          />
          <div className="cards-2">
            <Card>
              <h3>Environmental education</h3>
              <p>Research helps communities better understand why sustainable habits and ecological stewardship matter for long-term wellbeing.</p>
            </Card>
            <Card>
              <h3>Strategic learning</h3>
              <p>The site frames knowledge as something that can inform more responsible choices, better public conversations, and stronger partnerships.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
