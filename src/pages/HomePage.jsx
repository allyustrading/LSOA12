import { SectionIntro, Card } from '../components/Layout'
import homeImg from '../assets/home-collage.svg'
import natureImg from '../assets/nature-ribbon.svg'
import donorImg from '../assets/donor-panels.svg'

export default function HomePage() {
  return (
    <>
      <section className="shell hero-grid">
        <div className="panel hero-copy">
          <div className="eyebrow">Liuli Society of America</div>
          <h1 className="hero-headline">A new environmental nonprofit design built around image, culture, and public value</h1>
          <p className="hero-text">
            Liuli Society of America is a nonprofit organization dedicated to nature protection,
            eco-conscious thinking, and community-centered wellbeing. This version uses a fully
            different editorial grid layout to create a stronger visual identity, a more premium
            donor-facing tone, and a clearer environmental mission.
          </p>
          <div className="hero-actions">
            <a href="#/about" className="button button-dark">Read the mission</a>
            <a href="#/support" className="button button-gold">Support the vision</a>
          </div>

          <div className="mini-grid">
            <div className="mini">
              <strong>Nature protection</strong>
              <span>Promoting environmental care, ecological awareness, and long-term stewardship.</span>
            </div>
            <div className="mini">
              <strong>Eco-friendly thinking</strong>
              <span>Encouraging sustainable habits, reduced waste, and more thoughtful ways of living.</span>
            </div>
            <div className="mini">
              <strong>Community value</strong>
              <span>Linking environmental responsibility with public learning and social wellbeing.</span>
            </div>
            <div className="mini">
              <strong>Donor clarity</strong>
              <span>Presenting the mission with a more polished, philanthropic, and institution-ready structure.</span>
            </div>
          </div>
        </div>

        <div className="panel hero-media-lg">
          <img src={homeImg} alt="Editorial collage style hero visual" />
        </div>

        <div className="panel panel-dark hero-copy">
          <div className="eyebrow light">A more distinctive visual language</div>
          <p className="hero-text">
            Instead of repeating the earlier full-screen alignment, this layout uses a staggered
            editorial composition with large image blocks, dark feature panels, and asymmetrical
            rhythm across the page.
          </p>
        </div>

        <div className="panel hero-media-sm">
          <img src={natureImg} alt="Nature stewardship ribbon visual" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Mission and positioning"
            title="A more expressive and more differentiated premium website direction"
            text="This design is intended to feel less like a standard nonprofit template and more like a carefully art-directed environmental foundation website."
          />

          <div className="editorial-grid">
            <div className="split-media panel">
              <img src={donorImg} alt="Donor-facing premium support visual" />
            </div>

            <div className="split-stack">
              <Card tall>
                <h3>Environmental stewardship as a public mission</h3>
                <p>
                  Liuli Society of America promotes a long-term culture of ecological respect,
                  sustainability, and thoughtful human responsibility toward the natural world.
                </p>
              </Card>

              <Card>
                <h3>Eco-conscious living as a civic value</h3>
                <p>
                  The mission extends beyond awareness. It encourages habits, education, and
                  community practices that make environmentally responsible living more visible,
                  more practical, and more aspirational.
                </p>
              </Card>

              <Card>
                <h3>A stronger donor-facing presence</h3>
                <p>
                  The language, spacing, and visual emphasis in this version are designed to
                  better support philanthropic credibility, institutional trust, and premium
                  nonprofit storytelling.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
