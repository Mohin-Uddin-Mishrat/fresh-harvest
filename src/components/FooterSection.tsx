import React from 'react';
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram,
  Apple,
  Smartphone
} from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fresh Harvests</h3>
            </div>
            
            
            {/* App Download Buttons */}
            <div className="space-y-3 ">
              <button className="flex items-center bg-black text-white px-2 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
                <Apple className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Download on the</div>
                  <div className="font-semibold text-sm">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors w-full sm:w-auto">
                <Smartphone className="w-5 h-5 mr-2" />
                <div className="text-left">
                  <div className="text-xs opacity-75">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Quick LINKS 1 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick links 1</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Detail Blog</a></li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick links 2</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Favorites</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Cart</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Sign in</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">1234 567 890</p>
                  <p className="text-sm text-gray-600">1234 567 890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">Freshharvests@gmail.com</p>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">
                  1234 some street, some city, some state, 1234 567 890 (this would be an address)
                </p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <div className="flex items-center space-x-2">
                <div className="bg-white border border-gray-200 rounded px-2 py-1">
                  <span className="text-xs font-semibold text-blue-600">VISA</span>
                </div>
                <div className="bg-white border border-gray-200 rounded px-2 py-1">
                  <span className="text-xs font-semibold text-blue-600">PayPal</span>
                </div>
                <div className="bg-white border border-gray-200 rounded px-2 py-1">
                  <span className="text-xs font-semibold">Apple Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 sm:mb-0">
              © Copyright 2024, All Rights Reserved by Mahabub
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 bg-black  hover:bg-green-500 rounded-full flex items-center justify-center transition-colors group">
                <Facebook className="w-4 h-4 text-white group-hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-black hover:bg-green-500 rounded-full flex items-center justify-center transition-colors group">
                <Twitter className="w-4 h-4 text-white group-hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-black hover:bg-green-500 rounded-full flex items-center justify-center transition-colors group">
                <Instagram className="w-4 h-4 text-white group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;