import { ArrowUpRight } from 'lucide-react'
import { reviews } from '../../content/landing'

export default function ReviewsSection() {
  return <section className="landing-section reviews-section" id="reviews" aria-labelledby="reviews-title">
    <div className="reviews-intro"><span className="support-eyebrow">ОТЗЫВЫ КЛИЕНТОВ</span><h2 id="reviews-title">Что пишут<br /><em>после сдачи</em></h2><p>Реальные сообщения клиентов после проверки и сдачи работ.</p></div>
    <div className="reviews-grid">{reviews.map(review => <a className="review-card" key={review.image} href={`/assets/reviews/${review.image}`} target="_blank" rel="noreferrer" aria-label={`Увеличить отзыв: ${review.caption}`}>
      <div className="review-card-heading"><span>{review.caption}</span><ArrowUpRight size={17} /></div>
      <img src={`/assets/reviews/${review.image}`} alt={review.alt} width="946" height="189" loading="lazy" />
      <span className="review-zoom">Нажмите, чтобы прочитать</span>
    </a>)}</div>
  </section>
}
