const benefits = [
  ['Быстрая оценка', 'задания'],
  ['Бесплатные доработки', 'до полной сдачи'],
  ['Чёткое соблюдение', 'сроков'],
]

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__orbit hero-visual__orbit--one" />
      <div className="hero-visual__orbit hero-visual__orbit--two" />
      <div className="hero-visual__bubble hero-visual__bubble--a" />
      <div className="hero-visual__bubble hero-visual__bubble--b" />
      <div className="hero-visual__bubble hero-visual__bubble--c" />
      <div className="hero-visual__document">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-visual__cap">
        <span className="hero-visual__cap-top" />
        <span className="hero-visual__cap-base" />
        <span className="hero-visual__cap-tail" />
      </div>
      <div className="hero-visual__note hero-visual__note--left">Знания<br />открывают<br />возможности</div>
      <div className="hero-visual__note hero-visual__note--right">Вместе<br />к твоим<br />целям</div>
    </div>
  )
}

function EstimateCard() {
  return (
    <aside className="estimate-card" id="estimate">
      <div className="estimate-card__copy">
        <p className="estimate-card__eyebrow">Быстрая оценка</p>
        <h2>Узнайте стоимость<br />вашей работы</h2>
        <p>Оставьте данные — мы рассчитаем цену и ответим в течение 15 минут</p>
      </div>

      <form className="estimate-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          <span className="sr-only">Тип работы</span>
          <select defaultValue="">
            <option value="" disabled>Выберите тип работы</option>
            <option>Курсовая работа</option>
            <option>Дипломная работа</option>
            <option>Расчётная работа</option>
            <option>Другое</option>
          </select>
        </label>

        <label>
          <span className="sr-only">Описание задания</span>
          <textarea rows="3" placeholder="Краткое описание задания" />
        </label>

        <div className="estimate-form__file-row">
          <button className="file-button" type="button">Прикрепить файл</button>
          <span>Необязательно</span>
        </div>

        <button className="button button--dark estimate-form__submit" type="submit">Получить расчёт</button>
        <p className="estimate-form__privacy">Ваши данные в безопасности</p>
      </form>
    </aside>
  )
}

export default function Hero() {
  return (
    <div className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Надёжная помощь в учёбе</p>
        <h1>
          Профессиональная<br />
          помощь <span>студентам</span>
        </h1>
        <p className="hero-copy__lead">
          Курсовые, дипломные, лабораторные, чертежи, презентации и другие учебные работы — качественно, в срок и по доступным ценам.
        </p>

        <div className="benefits" aria-label="Преимущества">
          {benefits.map(([first, second]) => (
            <div className="benefit" key={first}>
              <span className="benefit__check">✓</span>
              <p><strong>{first}</strong><br />{second}</p>
            </div>
          ))}
        </div>

        <div className="hero-copy__actions">
          <a className="button button--dark button--primary" href="#estimate">Заказать работу <span aria-hidden="true">→</span></a>
          <a className="text-link" href="#services">Узнать больше <span aria-hidden="true">↗</span></a>
        </div>
      </div>

      <HeroVisual />
      <EstimateCard />
    </div>
  )
}
