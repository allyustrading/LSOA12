import { SectionIntro, Card } from '../components/Layout'
import communityImg from '../assets/community-steps.svg'

export default function CommunityPage() {
  return (
    <>
      <section className="shell page-banner">
        <div className="page-banner-copy">
          <div className="eyebrow light">Community</div>
          <h1 className="page-headline">Community engagement that makes ecological care visible, shared, and human</h1>
          <p className="page-text">
            Liuli Society of America aims to build a culture of participation through environmental
            education, volunteer opportunities, public dialogue, and mission-aligned local action.
          </p>
        </div>
        <div className="page-banner-media panel">
          <img src={communityImg} alt="Community editorial visual" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Public engagement"
            title="A more participatory and more grounded environmental mission"
            text="This section shows how the organization can move beyond abstract values and toward community presence, public-facing initiatives, and local relevance."
          />
          <div className="cards-3">
            <Card>
              <h3>Educational events</h3>
              <p>Programs that help make environmental responsibility easier to discuss, understand, and apply.</p>
            </Card>
            <Card>
              <h3>Volunteer pathways</h3>
              <p>Mission-aligned opportunities for people who want to contribute their time, voice, and care.</p>
            </Card>
            <Card>
              <h3>Partnership building</h3>
              <p>Collaborations with schools, communities, nonprofits, and institutions who share the mission.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
