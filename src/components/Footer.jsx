export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-shell">
        <div className="footer-block large">
          <div className="footer-title">Liuli Society of America</div>
          <p className="footer-text">
            A nonprofit platform dedicated to nature protection, ecological awareness,
            sustainable living, and community-centered wellbeing. This version uses a more
            editorial visual structure to speak clearly to donors, institutions, and mission-aligned partners.
          </p>
        </div>

        <div className="footer-block">
          <h4>Explore</h4>
          <a href="#/about">About</a>
          <a href="#/vision">Vision</a>
          <a href="#/research">Research</a>
        </div>

        <div className="footer-block">
          <h4>Engage</h4>
          <a href="#/community">Community</a>
          <a href="#/support">Support</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© 2026 Liuli Society of America</span>
        <span>Registered U.S. nonprofit organization</span>
        <span>Editorial grid premium version</span>
      </div>
    </footer>
  )
}
