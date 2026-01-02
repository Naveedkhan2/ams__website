function Contact() {
  const contactInfo = [
    {
      label: '📍 Address',
      value: '14-C Main Sehar Commercial, D.H.A Phase VII, Karachi, Pakistan'
    },
    {
      label: '📞 Telephone',
      value: '+92-21-35345581'
    },
    {
      label: '💬 WhatsApp',
      value: '+92-331-4666121'
    }
  ]

  return (
    <section className="contact" id="contact">
      <div>
        <div className="section-subtitle">CONTACT US</div>
        <h2>Let's discuss your challenges</h2>
        <p style={{ marginTop: '1.5rem' }}>
          Ready to explore how AI can transform your business? We are here to help you navigate the possibilities.
        </p>
      </div>
      <div className="contact-info">
        {contactInfo.map((item, index) => (
          <div key={index} className="contact-item">
            <div className="contact-item-label">
              {item.label}
            </div>
            <div className="contact-item-value">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact

