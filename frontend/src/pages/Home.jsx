import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Portfolio Website Template',
    category: 'Developer Templates',
    price: 499,
    oldPrice: 899,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=90'
  },
  {
    id: 2,
    name: 'Minimal Figma UI Kit',
    category: 'Design Resources',
    price: 349,
    oldPrice: 699,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=90'
  },
  {
    id: 3,
    name: 'AI Prompt Collection',
    category: 'AI Resources',
    price: 299,
    oldPrice: 599,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=90'
  },
  {
    id: 4,
    name: 'Premium Resume Pack',
    category: 'Resume & Career',
    price: 249,
    oldPrice: 499,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=90'
  }
]

const categories = [
  {
    name: 'Developer Templates',
    count: '24 products',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=90'
  },
  {
    name: 'Design Resources',
    count: '31 products',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=90'
  },
  {
    name: 'Resume & Career',
    count: '18 products',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=90'
  },
  {
    name: 'AI Resources',
    count: '27 products',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=90'
  }
]

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="hero-label">THE DIGITAL CREATOR STORE</span>

          <h1>
            Resources that
            <br />
            make <em>ideas happen.</em>
          </h1>

          <p>
            Discover thoughtfully designed templates, tools and resources
            built for developers, creators, students and ambitious minds.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="button button-dark">
              Explore collection
              <span>→</span>
            </Link>

            <Link to="/categories" className="text-button">
              Browse categories
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-card hero-card-back"></div>

          <div className="hero-card hero-card-main">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1100&q=90"
              alt="Creative design workspace"
            />

            <div className="hero-card-caption">
              <span>CURATED FOR CREATORS</span>
              <strong>Build something<br />worth sharing.</strong>
            </div>
          </div>

          <div className="floating-note">
            <span>✦</span>
            <div>
              <strong>4.9 / 5</strong>
              <small>Creator rating</small>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <span className="section-label">EXPLORE</span>
            <h2>Find your corner</h2>
          </div>
          <Link to="/categories" className="view-all">View all →</Link>
        </div>

        <div className="category-grid">
          {categories.map(category => (
            <Link
              to="/products"
              className="category-card"
              key={category.name}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="category-overlay"></div>
              <div className="category-content">
                <span>{category.count}</span>
                <h3>{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <span className="section-label">TRENDING NOW</span>
            <h2>Made for your next idea</h2>
          </div>
          <Link to="/products" className="view-all">See collection →</Link>
        </div>

        <div className="home-product-grid">
          {products.map(product => (
            <Link
              to={`/product/${product.id}`}
              className="home-product-card"
              key={product.id}
            >
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} />
                <span className="product-badge">TRENDING</span>
                <button
                  className="heart-button"
                  onClick={e => e.preventDefault()}
                >
                  ♡
                </button>
              </div>

              <div className="home-product-info">
                <span>{product.category}</span>
                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <strong>₹{product.price}</strong>
                  <div className="rating">
                    ★ {product.rating}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="editorial-banner">
        <div>
          <span className="section-label">BUILD YOUR COLLECTION</span>
          <h2>One idea.<br /><em>Many possibilities.</em></h2>
          <p>
            Combine your favourite resources and create your own digital
            toolkit for work, study or your next big project.
          </p>
          <Link to="/products" className="button button-light">
            Start collecting →
          </Link>
        </div>

        <div className="editorial-stack">
          <div className="stack-card stack-one">UI KIT</div>
          <div className="stack-card stack-two">RESUME</div>
          <div className="stack-card stack-three">AI PROMPTS</div>
        </div>
      </section>
    </main>
  )
}

export default Home
