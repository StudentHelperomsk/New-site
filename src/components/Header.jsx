const navItems = ['Услуги', 'Примеры работ', 'Как мы работаем', 'Отзывы', 'О нас', 'Контакты']

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Student Helper">
          <span className="brand__mark" aria-hidden="true">
            <span className="brand__cap" />
            <span className="brand__stem" />
          </span>
          <span className="brand__name">Student <strong>Helper</strong></span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>
              {item}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="header-phone" href="tel:+79991234567">+7 (999) 123-45-67</a>
          <a className="button button--dark button--header" href="#estimate">Заказать работу</a>
        </div>
      </div>
    </header>
  )
}
