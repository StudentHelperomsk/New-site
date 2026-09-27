import { useRef } from 'react'
import { reviews } from '../../content/landing'
import { reviewBackdrop } from '../../content/reviewBackdrop'
import useReviewParallax from '../../hooks/useReviewParallax'
import '../../styles/reviews.css'

export default function ReviewsSection() {
  const section = useRef(null)
  useReviewParallax(section)

  return <section className="landing-section reviews-section" id="reviews" ref={section} aria-labelledby="reviews-title">
    <div className="reviews-atmosphere" aria-hidden="true">
      <div className="reviews-halo" />
      {reviewBackdrop.map(review => <img className="review-drift" key={review.image} src={`/assets/reviews/${review.image}`} alt="" width={review.width} height={review.height} loading="lazy" decoding="async" style={{
        left: `${review.x}%`, top: `${review.y}%`, width: `min(${review.size}px, 34%)`, opacity: review.opacity,
        '--travel-x': `${review.travelX}px`, '--travel-y': `${review.travelY}px`, '--review-tilt': `${review.tilt}deg`,
      }} />)}
    </div>
    <div className="reviews-intro"><h2 id="reviews-title">Отзывы<br />{' '}<em>клиентов</em></h2><p>Сообщения из переписки с клиентами.</p></div>
    <div className="reviews-grid">{reviews.map(review => <figure className="review-card" key={review.image}>
      <img src={`/assets/reviews/${review.image}`} alt={review.text} width={review.width} height={review.height} loading="lazy" />
      <blockquote className="review-transcript">{review.text}</blockquote>
    </figure>)}</div>
  </section>
}
