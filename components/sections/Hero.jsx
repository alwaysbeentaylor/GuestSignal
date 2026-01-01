'use client';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="hero-gradient" />
            <div className="grid-pattern opacity-50" />

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-72 h-72 bg-[#C9A962]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#C9A962]/3 rounded-full blur-3xl" />

            <div className="container relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-[#C9A962] animate-pulse" />
                        <span className="text-sm text-gray-400">
                            Vertrouwd door luxury hotels in de Benelux
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Herken uw meest waardevolle gasten{' '}
                        <span className="text-gold-gradient">vóór aankomst</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Transformeer elke check-in in een gepersonaliseerde ervaring.
                        Weet wie er binnenkomt en welke service bij uw gast past.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <a href="#contact" className="btn btn-primary text-base px-8 py-4">
                            <span>Vraag een demo aan</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a href="#how-it-works" className="btn btn-ghost text-base">
                            Bekijk hoe het werkt
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        <div className="trust-badge">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            GDPR Compliant
                        </div>
                        <div className="trust-badge">
                            <svg className="w-4 h-4 text-[#C9A962]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            Beveiligde Data
                        </div>
                        <div className="trust-badge">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Made in NL
                        </div>
                    </div>
                </div>

                {/* Dashboard Preview */}
                <div className="mt-20 relative animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent z-10 pointer-events-none" />
                    <div className="card-glass p-6 mx-auto max-w-4xl animate-float">
                        <div className="bg-[#0A0A0F] rounded-lg p-6">
                            {/* Mock Dashboard Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A962] to-[#E5D4A1] flex items-center justify-center text-black font-semibold">
                                        JV
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">Jan van der Berg</p>
                                        <p className="text-sm text-gray-500">Check-in vandaag • Suite 412</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#C9A962]/20 text-[#C9A962] border border-[#C9A962]/30">
                                        PRIORITEIT
                                    </span>
                                </div>
                            </div>

                            {/* Mock VIP Score */}
                            <div className="grid grid-cols-3 gap-6">
                                <div className="text-center p-4 rounded-lg bg-white/5">
                                    <p className="text-3xl font-heading font-bold text-[#C9A962]">8.7</p>
                                    <p className="text-xs text-gray-500 mt-1">VIP Score</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-white/5">
                                    <p className="text-lg font-semibold text-white">CEO</p>
                                    <p className="text-xs text-gray-500 mt-1">Tech Innovate BV</p>
                                </div>
                                <div className="text-center p-4 rounded-lg bg-white/5">
                                    <p className="text-lg font-semibold text-white">3e bezoek</p>
                                    <p className="text-xs text-gray-500 mt-1">Terugkerende gast</p>
                                </div>
                            </div>

                            {/* Suggestion */}
                            <div className="mt-6 p-4 rounded-lg border border-[#C9A962]/30 bg-[#C9A962]/5">
                                <div className="flex items-start gap-3">
                                    <span className="mt-0.5">💡</span>
                                    <div>
                                        <p className="text-sm font-medium text-white">Attentie Suggestie</p>
                                        <p className="text-sm text-gray-400 mt-1">
                                            Gast is wijnliefhebber (LinkedIn). Overweeg een fles lokale wijn op de kamer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
