import { Link } from 'react-router-dom'

function ProfilePage() {
  return (
    <main className="page">
      <div className="catalog-heading">
        <div>
          <span className="section-label">ACCOUNT</span>
          <h1>Your profile.</h1>
          <p>Your HamsiHub space.</p>
        </div>
      </div>

      <section className="profile-layout">
        <div className="profile-main">
          <div className="profile-avatar-large">H</div>
          <span className="section-label">CREATOR</span>
          <h2>Hamsiny C</h2>
          <p>Java Full Stack Developer</p>

          <div className="profile-details">
            <div>
              <span>Email</span>
              <strong>hamsiny@example.com</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Chennai, India</strong>
            </div>
          </div>
        </div>

        <div className="profile-links">
          <Link to="/orders">
            <span>My orders</span>
            <strong>→</strong>
          </Link>

          <Link to="/wishlist">
            <span>Wishlist</span>
            <strong>→</strong>
          </Link>

          <Link to="/products">
            <span>Explore products</span>
            <strong>→</strong>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProfilePage
