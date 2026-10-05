import { Link } from 'react-router-dom'

const items = [
  {
    name: 'Portfolio Website Template',
    price: 499,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=90'
  },
  {
    name: 'Minimal Figma UI Kit',
    price: 349,
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=90'
  }
]

function CartPage() {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  const discount = 50
  const total = subtotal - discount

  return (
    <main className="page">
      <div className="catalog-heading">
        <div>
          <span className="section-label">YOUR BAG</span>
          <h1>Ready when you are.</h1>
          <p>Your selected digital resources.</p>
        </div>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map(item => (
            <div className="cart-item" key={item.name}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <span>Digital Resource</span>
                <h3>{item.name}</h3>
                <strong>₹{item.price}</strong>
              </div>
              <button className="remove-button">×</button>
            </div>
          ))}
        </div>

        <aside className="order-summary">
          <span className="section-label">SUMMARY</span>
          <h2>Order total</h2>

          <div className="summary-line">
            <span>Subtotal</span>
            <strong>₹{subtotal}</strong>
          </div>

          <div className="summary-line">
            <span>Discount</span>
            <strong>-₹{discount}</strong>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <strong>₹{total}</strong>
          </div>

          <button className="button button-light full-button">
            Proceed to checkout
          </button>

          <Link to="/products" className="continue-link">
            ← Continue shopping
          </Link>
        </aside>
      </div>
    </main>
  )
}

export default CartPage
