'use client';

const problems = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "U weet niet wie er binnenkomt",
        description: "Een belangrijke zakenrelatie of influencer checkt in, maar uw team behandelt hem als elke andere gast. Gemiste kans voor een blijvende indruk."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: "Kennis zit in hoofden van medewerkers",
        description: "Die ene receptionist weet alles over de vaste gasten. Maar als hij vrij is, begint uw team weer bij nul. Inconsistente service per shift."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Handmatig research kost teveel tijd",
        description: "Gasten googlen, LinkedIn checken, bedrijven uitzoeken – uw team heeft daar geen tijd voor. Zeker niet tijdens de drukte bij check-in."
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        title: "Gemiste commerciële kansen",
        description: "Die CEO had misschien wel de penthouse suite geboekt, als u had geweten wie hij was. Upsell mogelijkheden die u niet ziet aankomen."
    }
];

export default function Problem() {
    return (
        <section className="section section-dark" id="problem">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="badge mb-6">Het probleem</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                        Herkent u dit in uw hotel?
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Elk hotel worstelt met dezelfde uitdagingen. Het verschil zit in hoe u ermee omgaat.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="card group hover:border-red-500/30"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-red-500/10 text-red-400 group-hover:bg-red-500/20 transition-colors">
                                    {problem.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2 text-white">
                                        {problem.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        {problem.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Transition to solution */}
                <div className="text-center mt-16">
                    <p className="text-xl text-gray-300">
                        Er is een betere manier.
                    </p>
                    <div className="w-px h-16 bg-gradient-to-b from-gray-600 to-[#C9A962] mx-auto mt-6" />
                </div>
            </div>
        </section>
    );
}
