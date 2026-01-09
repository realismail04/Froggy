export default function Reform() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 className="text-calm">The Reform</h1>
            <div style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Froggy’s Law is the proposed safeguarding reform that aims to mandate
                    specific response protocols for child abuse disclosures.
                </p>
                <h2 style={{ color: 'var(--safe-green)', marginTop: '2.5rem' }}>Why the Reform is Needed</h2>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li style={{ marginBottom: '1rem' }}>Inconsistent response to child disclosures across different sectors.</li>
                    <li style={{ marginBottom: '1rem' }}>Lack of specialized trauma-informed training for many frontline professionals.</li>
                    <li style={{ marginBottom: '1rem' }}>Need for a unified national standard for safeguarding responses.</li>
                </ul>
            </div>
        </div>
    );
}
