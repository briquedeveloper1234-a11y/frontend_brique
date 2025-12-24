import { Building2, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-xl font-bold">BrickConstruct</span>
            </div>
            <p className="text-gray-400">
              Building dreams into reality with quality construction and real estate solutions since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-600 transition-colors">
                  Construction
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Residential Construction</li>
              <li>Commercial Building</li>
              <li>Property Sales</li>
              <li>Property Rentals</li>
              <li>Mortgage Solutions</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                123 Construction Avenue, City Center
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                info@brickconstruct.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BrickConstruct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;