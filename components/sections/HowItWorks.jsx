'use client';

const steps = [
    {
        number: "01",
        title: "Reservering komt binnen",
        description: "Een gast boekt een kamer via uw website, booking.com of direct. De reservering bevat naam en eventueel e-mail.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        number: "02",
        title: "Automatische verrijking",
        description: "Guest Signals doorzoekt publieke bronnen: LinkedIn profielen, bedrijfsinformatie, nieuwsartikelen. Allemaal legaal en GDPR-proof.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        )
    },
    {
        number: "03",
        title: "Gastprofiel & categorisering",
        description: "Elke gast krijgt een overzichtelijk profiel met waardecategorie: Standaard, Aandacht of Prioriteit. Duidelijk voor iedereen.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        )
    },
    {
        number: "04",
        title: "Actionable insights",
        description: "Uw team ontvangt concrete suggesties: een welkomstattentie, upgrade mogelijkheid, of gewoon 'business as usual'. Geen giswerk meer.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    }
];

export default function HowItWorks() {
    return (
        <section className="section" id="how-it-works">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="badge mb-6">Hoe het werkt</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                        Van reservering naar <span className="text-gold-gradient">gepersonaliseerde service</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        In vier stappen weet uw hele team precies wie er binnenkomt en hoe zij behandeld willen worden.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Connection Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A962]/50 via-[#C9A962]/30 to-transparent hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Step Number Circle */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                                    <div className="w-16 h-16 rounded-full bg-[#0A0A0F] border-2 border-[#C9A962] flex items-center justify-center">
                                        <span className="font-heading text-xl font-bold text-[#C9A962]">{step.number}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-24 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pr-20' : 'md:pl-20'}`}>
                                    <div className="card hover:border-[#C9A962]/50">
                                        <div className="text-[#C9A962] mb-4">
                                            {step.icon}
                                        </div>
                                        <h3 className="font-heading text-xl font-semibold mb-3 text-white">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
