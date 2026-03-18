import React from 'react';
import { Globe, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="logo.png" 
                alt="Terra Sentinel Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="text-2xl font-bold tracking-tighter">
                TERRA<span className="text-emerald-500">SENTINEL</span>
              </div>
            </div>
            <p className="text-slate-400 font-light mb-8 leading-relaxed">
              Empowering global decisions through high-precision geospatial intelligence and advanced data solutions.
            </p>
            <div className="flex gap-4">
              {['twitter', 'linkedin', 'facebook', 'instagram'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition-colors">
                  <span className="sr-only">{social}</span>
                  <Globe className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              {['Home', 'Services', 'Projects', 'About Us', 'Contact', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400 font-light">
              {['Data Collection', 'GIS Mapping', 'Remote Sensing', 'Big Data Solutions', 'Software Dev', 'Data Management'].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-emerald-400 transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-6 text-slate-400 font-light">
              <li className="flex gap-4">
                <MapPin className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>Via Sant'Antonio 9, <br />Trento-38122, Italy</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>+39 328 005 1253</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                <span>info@terrasentinel.it</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} Terra Sentinel. All rights reserved.
          </div>
          <div className="text-slate-500 text-sm font-light">
            Powered by <span className="text-white font-medium">Terra Sentinel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
