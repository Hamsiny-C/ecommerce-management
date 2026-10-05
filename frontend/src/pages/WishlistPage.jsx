import { Link } from 'react-router-dom'

const wishlist = [
  {
    id: 2,
    name: 'Minimal Figma UI Kit',
    category: 'Design Resources',
    price: 349,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=90'
  },
  {
    id: 3,
    name: 'AI Prompt Collection',
    category: 'AI Resources',
    price: 299,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=90'
  }
]

function WishlistPage() {
  return (
    <main className="page">
      <div className="catalog-heading">
        <div>
          <span className="section-label">SAVED FOR LATER</span>
          <h1>Your wishlist.</h1>
          <p>Ideas you don't want to lose.</p>
        </div>
      </div>

      <div className="catalog-grid">
        {wishlist.map(product => (
          <Link
            to={`/product/${product.id}`}
            className="catalog-card"
            key={product.id}
          >
            <div className="catalog-image">
              <img src={product.image} alt={product.name} />
              <button className="heart-button">♥</button>
            </div>

            <div className="catalog-info">
              <span>{product.category}</span>
              <h3>{product.name}</h3>
              <div className="catalog-meta">
                <strong>₹{product.price}</strong>
                <small>★ {product.rating}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default WishlistPage
