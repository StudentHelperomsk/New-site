import { reviews } from '../../content/landing'

export default function ReviewsSection() {
  return <section className="landing-section reviews-section" id="reviews" aria-labelledby="reviews-title">
    <div className="reviews-intro"><h2 id="reviews-title">Отзывы<br /> <em>клиентов</em></h2><p>Сообщения из переписки с клиентами.</p></div>
    <div className="reviews-grid">{reviews.map(review => <figure className="review-card" key={review.image}>
      <img src={`/assets/reviews/${review.image}`} alt={review.text} width={review.width} height={review.height} loading="lazy" />
      <blockquote className="review-transcript">{review.text}</blockquote>
    </figure>)}</div>
  </section>
}
