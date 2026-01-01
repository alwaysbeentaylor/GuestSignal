'use client';
import { useState } from 'react';

const faqs = [
    {
        question: "Welke informatiebronnen worden gebruikt?",
        answer: "Guest Signals doorzoekt uitsluitend publiek beschikbare bronnen: LinkedIn profielen, bedrijfswebsites, nieuwsartikelen, en open social media profielen. We hebben geen toegang tot privéaccounts of beveiligde informatie."
    },
    {
        question: "Is dit legaal en GDPR-proof?",
        answer: "Ja, volledig. We verzamelen alleen informatie die de gast zelf openbaar heeft gemaakt. Dit valt onder 'legitimate interest' in de GDPR-wetgeving. We slaan geen bijzondere persoonsgegevens op en gasten kunnen altijd verzoeken om verwijdering van hun data."
    },
    {
        question: "Hoe accuraat is de gastwaarde-categorisering?",
        answer: "Onze categorisering is gebaseerd op objectieve criteria: functieniveau, bedrijfsgrootte, terugkerend bezoek, en andere meetbare factoren. We geven altijd inzicht in waarom iemand een bepaalde categorie krijgt, zodat uw team zelf kan beslissen hoe te handelen."
    },
    {
        question: "Kan Guest Signals integreren met ons PMS?",
        answer: "Ja, we integreren met de meeste gangbare Property Management Systemen zoals Opera, Mews, Apaleo, en Clock PMS. De integratie zorgt ervoor dat gastprofielen automatisch beschikbaar zijn bij de reservering. Custom integraties zijn mogelijk in het Enterprise pakket."
    },
    {
        question: "Hoeveel gasten kunnen we per maand scannen?",
        answer: "Dit hangt af van uw pakket: Essentials bevat 100 scans, Professional 500 scans, en Enterprise is onbeperkt. Een 'scan' is het verrijken van één gastprofiel. Terugkerende gasten worden automatisch bijgewerkt zonder extra scan te kosten."
    },
    {
        question: "Wat als een gast niet gevonden wordt?",
        answer: "Niet elke gast heeft een actief LinkedIn profiel of online aanwezigheid. In dat geval krijgt de gast automatisch de 'Standaard' categorie. U kunt handmatig notities toevoegen op basis van interne informatie of eerdere bezoeken."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="section section-dark" id="faq">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="badge mb-6">FAQ</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                        Veelgestelde{' '}
                        <span className="text-gold-gradient">vragen</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Alles wat u wilt weten over Guest Signals, in het kort.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Still have questions */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        Nog vragen? We beantwoorden ze graag persoonlijk.
                    </p>
                    <a href="#contact" className="btn btn-secondary">
                        Neem contact op
                    </a>
                </div>
            </div>
        </section>
    );
}
