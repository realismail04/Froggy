import styles from '../Home.module.css';

export default function About() {
    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>
            <h1 className="text-calm">About Froggy’s Law</h1>
            <div style={{ maxWidth: '800px', fontSize: '1.1rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Froggy’s Law CIC is a survivor-led Community Interest Company dedicated to
                    transforming how child abuse disclosures are handled within the UK safeguarding system.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    Our mission is to create safe, structured disclosure pathways and provide
                    emotionally safe resources for survivors, families, and professionals.
                </p>
                <h2 style={{ color: 'var(--safe-green)', marginTop: '2.5rem' }}>Our History</h2>
                <p>
                    Founded by survivors of institutional failure, we advocate for legislative
                    and professional reform to ensure no child is left unheard.
                </p>
            </div>
        </div>
    );
}
