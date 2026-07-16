import { submitQuoteRequest } from "./actions";

const LOGO_URL =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/c77882b5-bc2d-46dc-9dc9-51d86ee095be.png";

export default function Page({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const status = searchParams.status;

  return (
    <>
      <header>
        <nav>
          <a href="#home" className="logo-wrap">
            <img className="logo-icon" src={LOGO_URL} alt="Divine Lawn Care Service logo" />
          </a>
          <input type="checkbox" id="nav-toggle" />
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#quote">Schedule a Quote</a></li>
          </ul>
          <div className="nav-actions">
            <a className="nav-phone" href="tel:+15174556911">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (517) 455-6911
            </a>
            <label htmlFor="nav-toggle" className="nav-toggle-label">&#9776;</label>
          </div>
        </nav>
      </header>

      <section className="hero" id="home">
        <img
          className="hero-bg"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260706_153647_3d0f300d-2266-4ce4-a671-e4b57ddbf062.png"
          alt="Landscaper mowing a lush backyard lawn with natural sun flare"
        />
        <div className="hero-content">
          <span className="hero-badge">Lansing &bull; East Lansing &bull; Okemos, MI</span>
          <h1>Your Lawn, Our Passion.</h1>
          <p>Locally owned, MSU-alumni-run lawn care for homes and businesses across Greater Lansing — mowing, cleanups, and everything in between.</p>
          <div className="hero-ctas">
            <a href="#quote" className="btn btn-primary">Schedule a Free Quote</a>
            <a href="tel:+15174556911" className="btn btn-outline">Call (517) 455-6911</a>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Full-Service Lawn Care</h2>
            <p>From weekly mows to seasonal cleanups, we keep your property looking its best all year round.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 12h18M3 12a9 9 0 0018 0M3 12a9 9 0 0118 0" /></svg></div>
              <h3>Mowing</h3>
              <p>Clean, consistent cuts on a weekly, bi-weekly, or monthly schedule.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 20h16M4 20V10l8-6 8 6v10"/></svg></div>
              <h3>Edging</h3>
              <p>Crisp, defined lines along walkways, driveways, and beds.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2v20M5 9l7-7 7 7"/></svg></div>
              <h3>Weed Whipping</h3>
              <p>Trimming in the tight spots mowers can&apos;t reach.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 22V12M12 12a5 5 0 10-5-5M12 12a5 5 0 105-5"/></svg></div>
              <h3>Tree &amp; Shrub Removal</h3>
              <p>Safe removal of overgrown or unwanted trees and shrubs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11z"/></svg></div>
              <h3>Plant &amp; Tree Pruning</h3>
              <p>Healthy, shapely growth through careful seasonal pruning.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 12l4-8 4 8 4-8 4 8"/></svg></div>
              <h3>Fall &amp; Spring Clean-Ups</h3>
              <p>Leaf removal and bed clean-outs to reset your yard each season.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
              <h3>Lawn Treatments</h3>
              <p>Feeding and care programs that keep grass green and healthy.</p>
            </div>
          </div>

          <div className="price-strip">
            <div>
              <h3>Weekly mows starting at $25</h3>
              <p>Bi-weekly and monthly service plans also available.</p>
            </div>
            <a href="#quote" className="btn btn-primary">Get Your Quote</a>
          </div>
        </div>
      </section>

      <section className="section" id="about" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">About Us</span>
              <h2 style={{ fontSize: "clamp(26px,3.6vw,36px)", color: "var(--green-dark)", marginBottom: "18px" }}>Locally Owned. MSU Proud. Lawn Obsessed.</h2>
              <p>Divine Lawn Care Service is owned and operated by Raul Perez, a Michigan State University alumnus, providing residential and commercial lawn care throughout the Greater Lansing area. What started as a passion for sharp, clean lawns has grown into a full-service crew handling mowing, edging, pruning, cleanups, and lawn treatments for neighbors across the region.</p>
              <p>We show up on time, communicate clearly, and treat every yard like it&apos;s our own.</p>
              <div className="badges">
                <div className="badge">🏡 Locally Owned &amp; Operated</div>
                <div className="badge">🎓 MSU Alumni Owned</div>
                <div className="badge">⚡ 24-Hour Response</div>
                <div className="badge">✅ Satisfaction Guaranteed</div>
              </div>
            </div>
            <div className="about-panel">
              <h4>Areas We Serve</h4>
              <ul className="area-list">
                <li><span className="dot"></span> Lansing, MI</li>
                <li><span className="dot"></span> East Lansing, MI</li>
                <li><span className="dot"></span> Okemos, MI</li>
                <li><span className="dot"></span> Surrounding Greater Lansing Areas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="gallery">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Recent Work</span>
            <h2>See the Difference</h2>
            <p>A few examples of the kind of results we bring to lawns across Greater Lansing.</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260705_195955_d4621026-0dff-4194-a734-32da941d6d1e.png" alt="Freshly mowed lawn with crisp green stripes" loading="lazy" />
              <div className="gallery-caption">Striped Mowing Finish</div>
            </div>
            <div className="gallery-item">
              <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260705_195957_fcccb276-4770-42cf-b4f1-601f3a163c54.png" alt="Close up of precision edging along a sidewalk" loading="lazy" />
              <div className="gallery-caption">Precision Edging</div>
            </div>
            <div className="gallery-item">
              <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260705_201608_3486812b-9d66-4c66-a910-745ea62dd029.png" alt="Neatly trimmed garden shrubs with blooming flowers" loading="lazy" />
              <div className="gallery-caption">Shrub &amp; Garden Pruning</div>
            </div>
            <div className="gallery-item">
              <img src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260705_195959_66796964-b493-4a4c-850e-5812ce4b592c.png" alt="Before and after lawn transformation" loading="lazy" />
              <div className="gallery-caption">Before &amp; After Transformation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight" id="reviews" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="reviews-band">
            <div className="stars">★★★★★</div>
            <h3>Loved by Homeowners Across Lansing</h3>
            <p>See what neighbors are saying about their lawns — and let us know how we did.</p>
            <a href="https://www.facebook.com/467992446388375" target="_blank" rel="noopener" className="btn btn-primary">Read &amp; Leave a Review on Facebook</a>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Get In Touch</span>
            <h2>Contact Divine Lawn Care</h2>
            <p>Reach out any way that&apos;s easiest — we respond fast.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>Contact Info</h3>
              <div className="contact-row">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <div><strong>Phone</strong><a href="tel:+15174556911">(517) 455-6911</a></div>
              </div>
              <div className="contact-row">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg></div>
                <div><strong>Email</strong><a href="mailto:divinelawncareservice@gmail.com">divinelawncareservice@gmail.com</a></div>
              </div>
              <div className="contact-row">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
                <div><strong>Hours</strong><span>8:00 AM – 8:00 PM, Every Day</span></div>
              </div>
              <div className="contact-row">
                <div className="ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg></div>
                <div><strong>Facebook</strong><a href="https://www.facebook.com/467992446388375" target="_blank" rel="noopener">@divinelawncareservice</a></div>
              </div>
            </div>
            <div className="map-frame">
              <iframe src="https://www.google.com/maps?q=Lansing,MI&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Divine Lawn Care Service area map"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section quote-section" id="quote">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Schedule a Quote</span>
            <h2>Getting Your Free Quote Is Easy</h2>
            <p>Here&apos;s what happens when you reach out.</p>
          </div>
          <div className="steps">
            <div className="step-card">
              <div className="step-num">1</div>
              <h4>We Call You Back</h4>
              <p>You&apos;ll hear from one of our service professionals within 24 hours.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h4>We Talk It Through</h4>
              <p>We&apos;ll discuss your lawn care needs and set up an in-person quote if needed.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h4>We Get You Scheduled</h4>
              <p>Once you&apos;re ready, we lock in your service and take care of the rest.</p>
            </div>
          </div>

          <div className="quote-form-card">
            <h3>Request Your Free Quote</h3>
            <p>Fill this out and we&apos;ll call you back within 24 hours — no account needed.</p>

            {status === "success" && (
              <div className="form-status form-status-success">
                Thanks! Your quote request is in — we&apos;ll call you back within 24 hours.
              </div>
            )}
            {status === "missing" && (
              <div className="form-status form-status-missing">
                Please include at least your name and phone number.
              </div>
            )}
            {status === "error" && (
              <div className="form-status form-status-error">
                Something went wrong sending your request. Please try again, or call us at (517) 455-6911.
              </div>
            )}

            <form action={submitQuoteRequest}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="q-name">Name *</label>
                  <input id="q-name" name="name" required maxLength={200} placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label htmlFor="q-phone">Phone *</label>
                  <input id="q-phone" name="phone" type="tel" required maxLength={30} placeholder="(517) 555-0123" />
                </div>
                <div className="form-field">
                  <label htmlFor="q-email">Email</label>
                  <input id="q-email" name="email" type="email" maxLength={320} placeholder="you@example.com" />
                </div>
                <div className="form-field">
                  <label htmlFor="q-service">Service Needed</label>
                  <select id="q-service" name="service" defaultValue="">
                    <option value="">Select a service…</option>
                    <option>Mowing</option>
                    <option>Edging</option>
                    <option>Weed Whipping</option>
                    <option>Tree &amp; Shrub Removal</option>
                    <option>Plant &amp; Tree Pruning</option>
                    <option>Fall &amp; Spring Clean-Ups</option>
                    <option>Lawn Treatments</option>
                    <option>Other / Not Sure</option>
                  </select>
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="q-address">Property Address</label>
                  <input id="q-address" name="address" maxLength={400} placeholder="Street address, city (Lansing, East Lansing, Okemos…)" />
                </div>
                <div className="form-field form-field-full">
                  <label htmlFor="q-message">Anything else we should know?</label>
                  <textarea id="q-message" name="message" rows={4} maxLength={5000} placeholder="Yard size, gate access, how often you'd like service…" />
                </div>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">Request My Free Quote</button>
              </div>
            </form>
          </div>

          <div className="quote-ctas">
            <a href="tel:+15174556911" className="btn btn-primary">Call (517) 455-6911</a>
            <a href="mailto:divinelawncareservice@gmail.com?subject=Quote%20Request" className="btn btn-green">Email Us</a>
            <a href="https://www.facebook.com/467992446388375" target="_blank" rel="noopener" className="btn btn-outline" style={{ borderColor: "var(--green-dark)", color: "var(--green-dark)" }}>Message on Facebook</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo-wrap">
                <img className="logo-icon logo-icon-footer" src={LOGO_URL} alt="Divine Lawn Care Service logo" />
              </div>
              <p>Locally owned lawn care serving Lansing, East Lansing, Okemos, and the surrounding Greater Lansing area.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#quote">Schedule a Quote</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href="tel:+15174556911">(517) 455-6911</a></li>
                <li><a href="mailto:divinelawncareservice@gmail.com">divinelawncareservice@gmail.com</a></li>
                <li><a href="https://www.facebook.com/467992446388375" target="_blank" rel="noopener">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 Divine Lawn Care Service. All Rights Reserved.</span>
            <span>Lansing &bull; East Lansing &bull; Okemos, MI</span>
          </div>
        </div>
      </footer>
    </>
  );
}
