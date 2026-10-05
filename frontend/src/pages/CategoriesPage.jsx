import { Link } from 'react-router-dom'

const categories = [
  ['Developer Templates', '24 resources', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=90'],
  ['Design Resources', '31 resources', 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=90'],
  ['Resume & Career', '18 resources', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=90'],
  ['AI Resources', '27 resources', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=90'],
  ['Study Materials', '22 resources', 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=90'],
  ['Presentation Templates', '16 resources', 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=90'],
  ['Business Templates', '14 resources', 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=90'],
  ['Digital Planners', '19 resources', 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=90']
]

function CategoriesPage() {
  return (
    <main className="page">
      <div className="catalog-heading">
        <div>
          <span className="section-label">DISCOVER</span>
          <h1>Choose your world.</h1>
          <p>Start with a category and find something useful.</p>
        </div>
      </div>

      <div className="big-category-grid">
        {categories.map(([name, count, image]) => (
          <Link
            key={name}
            to="/products"
            className="big-category"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="big-category-overlay"></div>
            <div>
              <span>{count}</span>
              <h2>{name}</h2>
              <strong>Explore →</strong>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default CategoriesPage
