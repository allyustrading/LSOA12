import { SectionIntro, Card } from '../components/Layout'
import natureImg from '../assets/nature-ribbon.svg'

export default function VisionPage() {
  return (
    <>
      <section className="shell page-banner">
        <div className="page-banner-copy">
          <div className="eyebrow light">Vision</div>
          <h1 className="page-headline">A vision of nature protection that feels cultural, educational, and long-term</h1>
          <p className="page-text">
            Liuli Society of America presents environmental responsibility as a shared civic and
            cultural commitment—something that should inform how communities learn, live, and grow.
          </p>
        </div>
        <div className="page-banner-media panel">
          <img src={natureImg} alt="Vision page nature landscape" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Vision themes"
            title="An environmental mission with broader social and philanthropic relevance"
            text="This page communicates why ecological awareness matters not only to nature, but to community wellbeing, education, and long-term public resilience."
          />
          <div className="cards-3">
            <Card>
              <h3>Stewardship</h3>
              <p>Supporting a cultural ethic of care for land, ecosystems, and the shared environmental future.</p>
            </Card>
            <Card>
              <h3>Sustainable habits</h3>
              <p>Encouraging people to embrace more thoughtful, lower-impact, and more responsible forms of daily living.</p>
            </Card>
            <Card>
              <h3>Public leadership</h3>
              <p>Helping communities and institutions understand environmental care as part of public responsibility and civic progress.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
