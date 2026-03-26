export function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className="section-intro">
      <div className={light ? 'eyebrow light' : 'eyebrow'}>{eyebrow}</div>
      <h2 className={light ? 'section-title light' : 'section-title'}>{title}</h2>
      {text ? <p className={light ? 'section-text light' : 'section-text'}>{text}</p> : null}
    </div>
  )
}

export function Card({ children, dark = false, tall = false }) {
  return <div className={`${dark ? 'card card-dark' : 'card'} ${tall ? 'card-tall' : ''}`}>{children}</div>
}
