const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Vision', 'vision'],
  ['Research', 'research'],
  ['Community', 'community'],
  ['Support', 'support'],
  ['Contact', 'contact'],
]

export default function Header({ route }) {
  return (
    <header className="header">
      <div className="shell header-shell">
        <a href="#/home" className="brand">
          <div className="brand-kicker">Liuli Society of America</div>
          <div className="brand-sub">Environmental stewardship, eco-conscious culture, and public value</div>
        </a>

        <nav className="nav">
          {navItems.map(([label, key]) => (
            <a key={key} href={`#/${key}`} className={route === key ? 'nav-link active' : 'nav-link'}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#/support" className="button button-dark">Support</a>
      </div>
    </header>
  )
}
