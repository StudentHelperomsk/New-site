import { siteUrl } from '../../lib/siteUrl.js'
import { reviews } from '../../content/landing'
import { reviewBackdrop } from '../../content/reviewBackdrop'
import '../../styles/reviews.css'

export default function ReviewsSection() {
  return <section className="landing-section reviews-section" id="reviews" aria-labelledby="reviews-title">
    <div className="reviews-atmosphere" aria-hidden="true" data-reveal="review-backdrop">
      <div className="reviews-halo" />
      {reviewBackdrop.map(review => <img className="review-background-message" key={review.image} src={siteUrl(`/assets/reviews/${review.image}`)} alt="" width={review.width} height={review.height} loading="lazy" decoding="async" style={{
        left: `${review.x}%`, top: `${review.y}%`, width: `min(${review.size}px, 34%)`, opacity: review.opacity,
        '--review-tilt': `${review.tilt}deg`,
      }} />)}
    </div>
    <div className="reviews-intro"><h2 id="reviews-title">Отзывы<br />{' '}<em>клиентов</em></h2></div>
    <div className="reviews-grid">{reviews.map((review, index) => <figure className="review-card" key={review.image}>
      <div data-reveal="review" style={{ '--reveal-delay': `${index * 90}ms` }}>
        <img className="review-original" src={siteUrl(`/assets/reviews/${review.image}`)} alt={review.text} width={review.width} height={review.height} loading="lazy" />
        <div className="review-mobile-message">
          <span className="review-avatar" aria-hidden="true"><img src={siteUrl(`/assets/reviews/${review.image}`)} alt="" loading="lazy" style={{ width: review.width / 2, height: review.height / 2 }} /></span>
          <blockquote className="review-transcript"><p>{review.text}</p><span className="review-message-time">{['14:37', '16:26', '1:06'][index]}</span></blockquote>
        </div>
      </div>
    </figure>)}</div>
  </section>
}
