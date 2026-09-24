import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { reviews } from '../../content/landing'
import SectionHeading from './SectionHeading'

export default function ReviewsSection() {
  return <section className="landing-section reviews-section" id="reviews" aria-labelledby="reviews-title">
    <SectionHeading id="reviews-title" eyebrow="ОТЗЫВЫ" title="После сдачи — на связи" description="Сообщения клиентов после проверки работ. Оставили их такими, какими они пришли." />
    <div className="reviews-grid">{reviews.map(review => <a className="review-card" key={review.image} href={`/assets/reviews/${review.image}`} target="_blank" rel="noreferrer" aria-label={`Увеличить отзыв: ${review.caption}`}>
      <div className="review-card-heading"><MessageCircle size={20} /><span>{review.caption}</span><ArrowUpRight size={17} /></div>
      <img src={`/assets/reviews/${review.image}`} alt={review.alt} width="946" height="189" loading="lazy" />
      <span className="review-zoom">Нажмите, чтобы прочитать</span>
    </a>)}</div>
  </section>
}
