const stats = [
  ['3 500+', 'довольных студентов'],
  ['98%', 'сдач работ в срок'],
  ['4.9', 'средняя оценка сервиса'],
  ['5 лет', 'помогаем студентам'],
]

export default function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Student Helper в цифрах">
      {stats.map(([value, label]) => (
        <div className="stat" key={label}>
          <div className="stat__placeholder" aria-hidden="true" />
          <div>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
