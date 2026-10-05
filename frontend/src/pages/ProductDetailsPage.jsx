import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../api/productApi'

const demo = {
  id: 1,
  name: 'Portfolio Website Template',
  category: { name: 'Developer Templates' },
  price: 499,
  description:
    'A polished portfolio template designed for developers and creative professionals. Clean layouts, modern sections and a premium visual system help you present your work with confidence.',
  image:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90',
  rating: 4.9
}

function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(demo)

  useEffect(() => {
    getProduct(id)
      .then(data => {
        setProduct({
          ...data,
          image: demo.image,
          rating: 4.9
        })
      })
      .catch(() => {})
  }, [id])

  return (
    <main className="page">
      <Link to="/products" className="back-link">
        ← Back to collection
      </Link>

      <section className="detail">
        <div className="detail-visual">
          <img src={product.image} alt={product.name} />
          <span className="detail-badge">BEST SELLER</span>
        </div>

        <div className="detail-content">
          <span className="section-label">
            {product.category?.name || 'DIGITAL RESOURCE'}
          </span>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            <span>★★★★★</span>
            <strong>{product.rating}</strong>
            <small> 128 reviews</small>
          </div>

          <p className="detail-description">
            {product.description || demo.description}
          </p>

          <div className="detail-price">
            ₹{product.price}
            <span>one-time purchase</span>
          </div>

          <div className="detail-actions">
            <button className="button button-dark">
              Add to cart
            </button>

            <button className="wishlist-large">
              ♡
            </button>
          </div>

          <div className="feature-list">
            <div>
              <strong>Instant access</strong>
              <span>Download immediately after purchase</span>
            </div>
            <div>
              <strong>Creator friendly</strong>
              <span>Easy to customise and use</span>
            </div>
            <div>
              <strong>One-time payment</strong>
              <span>No recurring subscription</span>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="section-header">
          <div>
            <span className="section-label">COMMUNITY</span>
            <h2>What creators say</h2>
          </div>
        </div>

        <div className="review-grid">
          <article className="review">
            <div className="review-top">
              <strong>★★★★★</strong>
              <span>Verified purchase</span>
            </div>
            <p>
              “The design is clean and extremely easy to customise.
              It saved me a lot of time.”
            </p>
            <small>Priya R.</small>
          </article>

          <article className="review">
            <div className="review-top">
              <strong>★★★★★</strong>
              <span>Verified purchase</span>
            </div>
            <p>
              “Exactly the kind of polished resource I was looking for
              for my portfolio.”
            </p>
            <small>Arun K.</small>
          </article>

          <article className="review">
            <div className="review-top">
              <strong>★★★★☆</strong>
              <span>Verified purchase</span>
            </div>
            <p>
              “Beautiful layout and very good value for the price.”
            </p>
            <small>Meera S.</small>
          </article>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailsPage
