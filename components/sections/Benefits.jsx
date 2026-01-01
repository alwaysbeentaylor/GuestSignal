'use client';

const benefits = [
    {
        metric: "↑ 35%",
        title: "Hogere guest satisfaction",
        description: "Gasten voelen zich herkend en gewaardeerd vanaf het eerste moment."
    },
    {
        metric: "↑ €200",
        title: "Gemiddeld meer omzet per VIP",
        description: "Door gerichte upsells op het juiste moment: suites, spa, dining."
    },
    {
        metric: "↑ 0.8",
        title: "Punten op review scores",
        description: "Persoonlijke service leidt tot betere online reviews en reputatie."
    },
    {
        metric: "5+ uur",
        title: "Bespaard per week",
        description: "Geen handmatig googlen meer. Uw team focust op waar het om draait: de gast."
    }
];

export default function Benefits() {
    return (
        <section className="section" id="benefits">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Content */}
                    <div>
                        <span className="badge mb-6">Resultaten</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                            De investering die{' '}
                            <span className="text-gold-gradient">zichzelf terugbetaalt</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Eén tevreden VIP-gast die terugkomt of een positieve review achterlaat,
                            betaalt uw jaarabonnement terug. De rest is winst.
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/10">
                                    <p className="font-heading text-2xl font-bold text-[#C9A962] mb-1">
                                        {benefit.metric}
                                    </p>
                                    <p className="text-sm font-medium text-white mb-1">
                                        {benefit.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#C9A962]/5 rounded-3xl blur-3xl" />
                        <div className="relative card-glass p-8">
                            <div className="text-center mb-8">
                                <p className="text-sm text-gray-400 mb-2">Gemiddelde ROI</p>
                                <p className="font-heading text-6xl font-bold text-gold-gradient">12x</p>
                                <p className="text-gray-400 mt-2">binnen 12 maanden</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                                    <span className="text-gray-400">Maandelijkse investering</span>
                                    <span className="font-semibold text-white">€299</span>
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                                    <span className="text-gray-400">Extra omzet per maand</span>
                                    <span className="font-semibold text-[#C9A962]">+€3.500</span>
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-lg bg-[#C9A962]/10 border border-[#C9A962]/30">
                                    <span className="font-medium text-white">Netto rendement</span>
                                    <span className="font-bold text-[#C9A962]">+€3.200/maand</span>
                                </div>
                            </div>

                            <p className="text-center text-xs text-gray-500 mt-6">
                                *Gebaseerd op gemiddelden van hotels met 50+ kamers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
