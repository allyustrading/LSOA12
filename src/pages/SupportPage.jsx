import { SectionIntro, Card } from '../components/Layout'
import donorImg from '../assets/donor-panels.svg'

export default function SupportPage() {
  return (
    <>
      <section className="shell page-banner">
        <div className="page-banner-copy">
          <div className="eyebrow light">Support</div>
          <h1 className="page-headline">A more elegant and more persuasive invitation to support environmental public good</h1>
          <p className="page-text">
            Liuli Society of America welcomes support from donors, foundations, and partners who
            believe ecological stewardship, public learning, and cultural responsibility deserve long-term investment.
          </p>
        </div>
        <div className="page-banner-media panel">
          <img src={donorImg} alt="Support editorial visual" />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionIntro
            eyebrow="Philanthropic case"
            title="Support that strengthens mission, trust, and long-term impact"
            text="This page is structured to speak more directly to donors and institutions who want a premium, well-positioned environmental nonprofit presence."
          />
          <div className="cards-2">
            <Card>
              <h3>Why give</h3>
              <p>Support can help expand public education, environmental awareness programs, community partnerships, and mission-aligned growth.</p>
            </Card>
            <Card>
              <h3>Giving readiness</h3>
              <p>Liuli Society of America is a registered U.S. nonprofit organization. Contributions may be tax-deductible to the extent permitted by law.</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
