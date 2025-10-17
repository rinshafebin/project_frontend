import React from 'react'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="bg-white text-black py-16 px-6 border-t border-gray-200">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Scale className="w-8 h-8 text-black" />
                                <span className="text-xl font-bold text-black">CaseBridge</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">Connecting clients and advocates for seamless legal case management.</p>
                        </div>

                        <div>
                            <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                            <div className="space-y-3">
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">About Us</a>
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">How It Works</a>
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">Pricing</a>
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">FAQ</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
                            <div className="space-y-3">
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">Privacy Policy</a>
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">Terms of Service</a>
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">Security</a>
                                <a href="#" className="block text-gray-600 hover:text-gray-700 transition-colors">Compliance</a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-black font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
                            <div className="space-y-3 text-gray-600">
                                <p>support@casebridge.com</p>
                                <p>+1 (555) 123-4567</p>
                                <p>123 Legal Street, Suite 100</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-200 text-center text-gray-500">
                        <p>&copy; 2025 CaseBridge. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer