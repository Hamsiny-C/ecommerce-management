const orders = [
  {
    id: 'HH-1024',
    product: 'Portfolio Website Template',
    date: '03 Oct 2026',
    price: 499,
    status: 'Delivered'
  },
  {
    id: 'HH-1019',
    product: 'AI Prompt Collection',
    date: '29 Sep 2026',
    price: 299,
    status: 'Delivered'
  }
]

function OrdersPage() {
  return (
    <main className="page">
      <div className="catalog-heading">
        <div>
          <span className="section-label">YOUR PURCHASES</span>
          <h1>Order history.</h1>
          <p>Everything you've picked up from HamsiHub.</p>
        </div>
      </div>

      <div className="orders-list">
        {orders.map(order => (
          <article className="order-card" key={order.id}>
            <div className="order-number">
              <span>ORDER</span>
              <strong>{order.id}</strong>
            </div>

            <div className="order-info">
              <h3>{order.product}</h3>
              <span>{order.date}</span>
            </div>

            <div className="order-status">
              <span>{order.status}</span>
              <strong>₹{order.price}</strong>
            </div>

            <button className="order-arrow">→</button>
          </article>
        ))}
      </div>
    </main>
  )
}

export default OrdersPage
