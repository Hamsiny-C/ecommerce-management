import { Link } from 'react-router-dom'

const deals = [
  {
    title: 'Creator Starter Pack',
    text: 'Save 40% on essential creator resources.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=90'
  },
  {
    title: 'Career Upgrade Week',
    text: 'Resume and interview resources from ₹199.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=90'
  },
  {
    title: 'AI Toolkit',
    text: 'Build faster with our curated AI collection.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=90'
  }
]

function DealsPage() {
  return (
    <main className="page">
      <div className="catalog-heading">
        <div>
          <span className="section-label">LIMITED OFFERS</span>
          <h1>Good things,<br />better prices.</h1>
          <p>Fresh deals on resources worth adding to your toolkit.</p>
        </div>
      </div>

      <div className="deals-grid">
        {deals.map(deal => (
          <Link
            to="/products"
            className="deal"
            key={deal.title}
            style={{ backgroundImage: `url(${deal.image})` }}
          >
            <div className="deal-overlay"></div>
            <div className="deal-content">
              <span>UP TO 40% OFF</span>
              <h2>{deal.title}</h2>
              <p>{deal.text}</p>
              <strong>Shop deal →</strong>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default DealsPage
