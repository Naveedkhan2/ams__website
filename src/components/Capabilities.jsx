function Capabilities() {
  const capabilities = [
    'Natural Language Processing (NLP)',
    'Computer Vision',
    'Speech Recognition',
    'Predictive Analytics',
    'Generative AI for content creation',
    'Decision intelligence systems'
  ]

  return (
    <section className="capabilities" id="capabilities">
      <h2 className="capabilities-title">Cross-Industry AI Capabilities</h2>
      <div className="capabilities-grid">
        {capabilities.map((capability, index) => (
          <div key={index} className="capability-box">
            {capability}
          </div>
        ))}
      </div>
      <p className="capabilities-description">
        Tresk Artificial Intelligence is a powerful enabler of digital transformation across industries. By leveraging AI-driven solutions, organizations can improve efficiency, enhance customer experiences, reduce operational risks, and unlock new growth opportunities.
      </p>
    </section>
  )
}

export default Capabilities
