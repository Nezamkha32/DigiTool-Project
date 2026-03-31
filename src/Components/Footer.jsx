import React from 'react';
const footerLinks = {
  Product: ['Features', 'Pricing', 'Changelog', 'Integrations'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
  'Support': ['FAQ', 'Status', 'Forum', 'Portal'],
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">

          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">

              <span className="font-bold text-xl text-white tracking-tight">DigiTools</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Your all-in-one platform for premium digital tools. Boost productivity, creativity, and efficiency with our curated collection.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { label: '𝕏', title: 'Twitter' },
                { label: 'in', title: 'LinkedIn' },
                { label: 'gh', title: 'GitHub' },
              ].map((social) => (
                <a
                  key={social.title}
                  href="#"
                  title={social.title}
                  className="w-9 h-9 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span className="text-xs font-bold text-gray-300">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 DigiTools. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;