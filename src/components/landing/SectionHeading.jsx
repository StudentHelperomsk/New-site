export default function SectionHeading({ eyebrow, title, description, children, id }) {
  return <div className="section-heading">
    <div data-reveal="copy">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
    </div>
    {(description || children) && <div className="section-intro" data-reveal="copy">
      {description && <p>{description}</p>}
      {children}
    </div>}
  </div>
}
