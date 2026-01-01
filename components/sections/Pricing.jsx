'use client';
import { useState } from 'react';

const plans = [
    {
        name: "Essentials",
        price: "149",
        description: "Perfect voor kleinere boutique hotels",
        features: [
            { text: "500 gasten scans per maand", included: true },
            { text: "Dashboard & gastprofielen", included: true },
            { text: "Gastwaarde-categorieën", included: true },
            { text: "Basis attentie suggesties", included: true },
            { text: "Email support", included: true },
            { text: "1 hotellocatie", included: true },
            { text: "PMS integratie", included: false },
            { text: "Dagelijkse rapportages", included: false },
        ],
        cta: "Start gratis trial",
        popular: false
    },
    {
        name: "Professional",
        price: "299",
        description: "Voor hotels die service serieus nemen",
        features: [
            { text: "1500 gasten scans per maand", included: true },
            { text: "Dashboard & gastprofielen", included: true },
            { text: "Gastwaarde-categorieën", included: true },
            { text: "Geavanceerde attentie suggesties", included: true },
            { text: "Email + telefoon support", included: true },
            { text: "Tot 3 hotellocaties", included: true },
            { text: "PMS integratie", included: true },
            { text: "Dagelijkse rapportages", included: true },
        ],
        cta: "Start gratis trial",
        popular: true
    },
    {
        name: "Enterprise",
        price: "549",
        description: "Voor hotelgroepen en luxury properties",
        features: [
            { text: "Onbeperkt gasten scans", included: true },
            { text: "Dashboard & gastprofielen", included: true },
            { text: "Gastwaarde-categorieën", included: true },
            { text: "Premium + custom suggesties", included: true },
            { text: "Dedicated account manager", included: true },
            { text: "Onbeperkt hotellocaties", included: true },
            { text: "Priority PMS integratie", included: true },
            { text: "Custom rapportages", included: true },
        ],
        cta: "Neem contact op",
        popular: false
    }
];

export default function Pricing() {
    const [annual, setAnnual] = useState(false);

    return (
        <section className="section section-dark" id="pricing">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="badge mb-6">Prijzen</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                        Kies het pakket dat bij{' '}
                        <span className="text-gold-gradient">uw hotel past</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Geen verborgen kosten. Geen setup fees. Maandelijks opzegbaar.
                    </p>

                    {/* Billing Toggle */}
                    <div className="inline-flex items-center gap-4 p-1 rounded-full bg-white/5 border border-white/10">
                        <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${!annual ? 'bg-[#C9A962] text-black' : 'text-gray-400 hover:text-white'
                                }`}
                            onClick={() => setAnnual(false)}
                        >
                            Maandelijks
                        </button>
                        <button
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${annual ? 'bg-[#C9A962] text-black' : 'text-gray-400 hover:text-white'
                                }`}
                            onClick={() => setAnnual(true)}
                        >
                            Jaarlijks
                            <span className={`text-xs px-2 py-0.5 rounded-full ${annual ? 'bg-black/20 text-black' : 'bg-green-500/20 text-green-400'
                                }`}>
                                -20%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`card relative ${plan.popular
                                ? 'border-[#C9A962] md:scale-105 md:-my-4 shadow-xl shadow-[#C9A962]/10'
                                : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#C9A962] to-[#E5D4A1] text-black uppercase tracking-wide">
                                        Meest Gekozen
                                    </span>
                                </div>
                            )}

                            <div className="text-center pb-6 border-b border-white/10">
                                <h3 className="font-heading text-xl font-semibold text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-sm text-gray-500 mb-4">
                                    {plan.description}
                                </p>
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="text-gray-400">€</span>
                                    <span className="font-heading text-5xl font-bold text-white">
                                        {annual ? Math.round(parseInt(plan.price) * 0.8) : plan.price}
                                    </span>
                                    <span className="text-gray-400">/maand</span>
                                </div>
                                {annual && (
                                    <p className="text-sm text-green-400 mt-2">
                                        Bespaar €{Math.round(parseInt(plan.price) * 12 * 0.2)} per jaar
                                    </p>
                                )}
                            </div>

                            <ul className="py-6 space-y-3">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3">
                                        {feature.included ? (
                                            <svg className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`btn w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        Alle pakketten bevatten een 14 dagen gratis trial. Geen creditcard nodig.
                    </p>
                </div>
            </div>
        </section>
    );
}
