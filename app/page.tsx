import { submitQuoteRequest } from "./actions";
import ScrollFX from "@/components/ScrollFX";

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
      <ScrollFX />

      <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />

      <header id="site-header">
        <nav>
          <a href="#home" className="logo-wrap">
            <img className="logo-icon" src={LOGO_URL} alt="Divine Lawn Care Service logo" />
            <span className="logo-word">
              DIVINE LAWN
              <span>Care Service &middot; Lansing MI</span>
            </span>
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <a className="nav-phone" href="tel:+15174556911">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              (517) 455-6911
            </a>
            <a className="btn btn-gold" href="#quote" style={{ padding: "11px 22px", fontSize: "13.5px" }}>Free Quote</a>
            <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </label>
          </div>
        </nav>
      </header>

      <div className="mobile-panel">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
        <a className="btn btn-gold" href="#quote">Free Quote</a>
      </div>

      <section className="hero" id="home">
        <img
          className="hero-bg"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_3FdzYgmo0qvTQJN8FfzUEpsu1zB/hf_20260706_153647_3d0f300d-2266-4ce4-a671-e4b57ddbf062.png"
          alt="Landscaper mowing crisp stripes into a lush backyard lawn"
        />
        <div className="hero-content">
          <span className="hero-badge reveal">Lansing &bull; East Lansing &bull; Okemos, MI</span>
          <h1 className="reveal">Sharp lines.<br />Showing up.<br /><em>Every time.</em></h1>
          <p className="reveal">Locally owned, MSU-alumni-run lawn care for homes and businesses across Greater Lansing: mowing, cleanups, and everything in between.</p>
          <div className="hero-ctas reveal">
            <a href="#quote" className="btn btn-gold">Schedule a Free Quote</a>
            <a href="tel:+15174556911" className="btn btn-outline-light">Call (517) 455-6911</a>
          </div>
        </div>
        <div className="scroll-cue">
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M6 13l6 6 6-6"/></svg>
        </div>
      </section>

      <div className="mow-divider" aria-hidden="true"></div>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-title reveal">
            <h2>What We Do</h2>
            <p className="section-kicker">From weekly mows to seasonal cleanups, we keep your property looking its best all year round.</p>
          </div>
        </div>

        <div className="stripe-row reveal">
          <div className="stripe-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 12h18M3 12a9 9 0 0018 0M3 12a9 9 0 0118 0"/></svg></div>
          <div className="stripe-body"><h3>Mowing</h3><p>Clean, consistent cuts on a weekly, bi-weekly, or monthly schedule.</p></div>
          <a href="#quote" className="stripe-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="stripe-row reveal">
          <div className="stripe-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M4 20h16M4 20V10l8-6 8 6v10"/></svg></div>
          <div className="stripe-body"><h3>Edging</h3><p>Crisp, defined lines along walkways, driveways, and beds.</p></div>
          <a href="#quote" className="stripe-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="stripe-row reveal">
          <div className="stripe-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2v20M5 9l7-7 7 7"/></svg></div>
          <div className="stripe-body"><h3>Weed Whipping</h3><p>Trimming in the tight spots mowers can&apos;t reach.</p></div>
          <a href="#quote" className="stripe-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="stripe-row reveal">
          <div className="stripe-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 22V12M12 12a5 5 0 10-5-5M12 12a5 5 0 105-5"/></svg></div>
          <div className="stripe-body"><h3>Tree &amp; Shrub Removal</h3><p>Safe removal of overgrown or unwanted trees and shrubs.</p></div>
          <a href="#quote" className="stripe-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="stripe-row reveal">
          <div className="stripe-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2c-4 4-6 8-6 11a6 6 0 0012 0c0-3-2-7-6-11z"/></svg></div>
          <div className="stripe-body"><h3>Plant &amp; Tree Pruning</h3><p>Healthy, shapely growth through careful seasonal pruning.</p></div>
          <a href="#quote" className="stripe-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="stripe-row reveal">
          <div className="stripe-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M3 12l4-8 4 8 4-8 4 8"/></svg></div>
          <div className="stripe-body"><h3>Fall &amp; Spring Clean-Ups</h3><p>Leaf removal and bed clean-outs to reset your yard each season.</p></div>
          <a href="#quote" className="stripe-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="stripe-row reveal">
          <div className="stripe-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></div>
          <div className="stripe-body"><h3>Lawn Treatments</h3><p>Feeding and care programs that keep grass green and healthy.</p></div>
          <a href="#quote" className="stripe-arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>

        <div className="container">
          <div className="price-band reveal">
            <div>
              <h3>Weekly mows starting at $25</h3>
              <p>Bi-weekly and monthly service plans also available.</p>
            </div>
            <a href="#quote" className="btn btn-line">Get Your Quote</a>
          </div>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="container">
          <div className="section-title on-dark reveal">
            <h2>Locally Owned.<br />MSU Proud.</h2>
            <p className="section-kicker">Owned and operated by an MSU alumnus, serving neighbors across Greater Lansing.</p>
          </div>
          <div className="about-grid">
            <div className="about-copy reveal">
              <p>Divine Lawn Care Service is owned and operated by Raul Perez, a Michigan State University alumnus, providing residential and commercial lawn care throughout the Greater Lansing area.</p>
              <p>What started as a passion for sharp, clean lawns has grown into a full-service crew handling mowing, edging, pruning, cleanups, and lawn treatments for neighbors across the region. We show up on time, communicate clearly, and treat every yard like it&apos;s our own.</p>
              <div className="stamp-row">
                <div className="stamp">LOCALLY<br />OWNED</div>
                <div className="stamp">MSU<br />ALUMNI</div>
                <div className="stamp">24-HR<br />RESPONSE</div>
                <div className="stamp">SATISFACTION<br />GUARANTEED</div>
              </div>
            </div>
            <div className="about-panel reveal">
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

      <section className="section gallery" id="gallery">
        <div className="container">
          <div className="section-title reveal">
            <h2>See the Difference</h2>
            <p className="section-kicker">A few examples of the kind of results we bring to lawns across Greater Lansing.</p>
          </div>
          <div className="gallery-grid reveal">
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
              <div className="gallery-caption">Before &amp; After</div>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews" id="reviews">
        <div className="container">
          <div className="reviews-inner reveal">
            <div className="quote-mark">&ldquo;</div>
            <div className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <h3>They showed up exactly when they said they would, and our lawn hasn&apos;t looked this good since we moved in. Straight lines every single time.</h3>
            <p className="byline">&mdash; A Lansing homeowner, via Facebook</p>
            <a href="https://www.facebook.com/467992446388375" target="_blank" rel="noopener" className="btn btn-gold">Read &amp; Leave a Review on Facebook</a>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container">
          <div className="section-title reveal">
            <h2>Get In Touch</h2>
            <p className="section-kicker">Reach out any way that&apos;s easiest. We respond fast.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card reveal">
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
            <div className="map-frame reveal">
              <iframe src="https://www.google.com/maps?q=Lansing,MI&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Divine Lawn Care Service area map"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="section quote" id="quote">
        <div className="container">
          <div className="section-title on-dark reveal">
            <h2>Getting Your Free<br />Quote Is Easy</h2>
            <p className="section-kicker">Here&apos;s what happens when you reach out.</p>
          </div>

          <div className="steps reveal">
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

          <div className="ticket reveal">
            <div className="ticket-head">
              <h3>Request Your Free Quote</h3>
              <div className="ticket-tag">FREE<br />QUOTE</div>
            </div>
            <div className="ticket-perf"></div>
            <div className="ticket-body">
              <p>Fill this out and we&apos;ll call you back within 24 hours. No account needed.</p>

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
                  <button type="submit" className="btn btn-line">Request My Free Quote</button>
                </div>
              </form>
            </div>
          </div>

          <div className="quote-ctas reveal">
            <a href="tel:+15174556911" className="btn btn-gold">Call (517) 455-6911</a>
            <a href="mailto:divinelawncareservice@gmail.com?subject=Quote%20Request" className="btn btn-outline-light">Email Us</a>
            <a href="https://www.facebook.com/467992446388375" target="_blank" rel="noopener" className="btn btn-outline-light">Message on Facebook</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo-wrap">
                <img className="logo-icon" style={{ width: "52px", height: "52px" }} src={LOGO_URL} alt="Divine Lawn Care Service logo" />
                <span className="logo-word" style={{ color: "var(--white)" }}>
                  DIVINE LAWN
                  <span style={{ color: "oklch(90% 0.01 150 / 0.5)" }}>Care Service</span>
                </span>
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
