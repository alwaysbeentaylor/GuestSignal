'use client';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        hotelName: '',
        name: '',
        role: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send to an API
        console.log('Form submitted:', formData);
        setSubmitted(true);
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Left: Form */}
                    <div>
                        <span className="badge mb-6">Contact</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
                            Vraag een{' '}
                            <span className="text-gold-gradient">demo aan</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Vul het formulier in en we nemen binnen 24 uur contact met u op
                            voor een persoonlijke demo.
                        </p>

                        {submitted ? (
                            <div className="card-glass p-8 text-center">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-heading text-xl font-semibold mb-2 text-white">
                                    Bedankt voor uw interesse!
                                </h3>
                                <p className="text-gray-400">
                                    We nemen binnen 24 uur contact met u op.
                                </p>
                            </div>
                        ) : (
                            <form
                                action="https://formspree.io/f/develop.json@gmail.com"
                                method="POST"
                                className="space-y-4"
                                onSubmit={(e) => {
                                    // Formspree will handle the submission, but we might want to show the success state
                                    // Normally you'd use their AJAX API or just let it redirect.
                                    // For now, let's keep it simple and just set the action.
                                }}
                            >
                                <input type="hidden" name="_subject" value="Nieuwe Demo Aanvraag - Guest Signals" />
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Hotelnaam *
                                    </label>
                                    <input
                                        type="text"
                                        className="input"
                                        placeholder="Bijv. Hotel Krasnapolsky"
                                        required
                                        value={formData.hotelName}
                                        name="hotelName"
                                        onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Uw naam *
                                        </label>
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Volledige naam"
                                            required
                                            value={formData.name}
                                            name="name"
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Functie *
                                        </label>
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Bijv. General Manager"
                                            required
                                            value={formData.role}
                                            name="role"
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            className="input"
                                            placeholder="u@hotel.nl"
                                            required
                                            value={formData.email}
                                            name="email"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Telefoon
                                        </label>
                                        <input
                                            type="tel"
                                            className="input"
                                            placeholder="+31 6 12345678"
                                            value={formData.phone}
                                            name="phone"
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Bericht (optioneel)
                                    </label>
                                    <textarea
                                        className="input min-h-[100px] resize-none"
                                        placeholder="Vertel ons meer over uw hotel of specifieke wensen..."
                                        value={formData.message}
                                        name="message"
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary w-full py-4">
                                    Verstuur aanvraag
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    Door te versturen gaat u akkoord met onze privacyvoorwaarden.
                                </p>
                            </form>
                        )}
                    </div>

                    {/* Right: Contact Info */}
                    <div className="lg:pt-20">
                        <div className="card-glass p-8 mb-6">
                            <h3 className="font-semibold text-white mb-4">Liever bellen?</h3>
                            <a href="tel:+31201234567" className="flex items-center gap-3 text-[#C9A962] hover:underline">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +31 20 123 4567
                            </a>
                            <p className="text-gray-500 text-sm mt-2">
                                Ma-Vr 9:00 - 17:00
                            </p>
                        </div>

                        <div className="card-glass p-8 mb-6">
                            <h3 className="font-semibold text-white mb-4">Email</h3>
                            <a href="mailto:develop.json@gmail.com" className="flex items-center gap-3 text-[#C9A962] hover:underline">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                develop.json@gmail.com
                            </a>
                        </div>

                        {/* Lead Magnet */}
                        <div className="card p-6 border-[#C9A962]/30 bg-[#C9A962]/5">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-[#C9A962]/20">
                                    <svg className="w-6 h-6 text-[#C9A962]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Gratis Download</h4>
                                    <p className="text-sm text-gray-400 mb-3">
                                        10 manieren om VIP gasten te verrassen (PDF)
                                    </p>
                                    <a href="#" className="text-sm font-medium text-[#C9A962] hover:underline">
                                        Download nu →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
