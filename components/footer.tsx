import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  console.log("Footer component rendered");
  
  return (
    <footer className="bg-[#2D3142] text-white py-12 px-4 md:px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-[#3A7CA5] to-[#43AA8B] flex items-center justify-center">
                <span className="text-white font-bold">C</span>
              </div>
              <span className="text-xl font-bold font-inter">Calmify</span>
            </div>
            <p className="text-white/70 mb-4 font-nunito">
              AI-powered mental wellness companion available 24/7. Personalized stress management for everyone.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3A7CA5] transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3A7CA5] transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3A7CA5] transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3A7CA5] transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3A7CA5] transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">Quick Links</h3>
            <ul className="space-y-2 font-nunito">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Our App</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">For Business</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">Contact</h3>
            <ul className="space-y-3 font-nunito">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#43AA8B] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">123 Wellness Way, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#43AA8B] flex-shrink-0" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#43AA8B] flex-shrink-0" />
                <span className="text-white/70">info@calmify.io</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">Subscribe</h3>
            <p className="text-white/70 mb-4 font-nunito">Stay updated with our latest news and announcements.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#43AA8B]"
              />
              <Button className="bg-[#43AA8B] hover:bg-[#43AA8B]/90 transition-colors">
                Send
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm font-nunito">© 2025 Calmify. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors font-nunito">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors font-nunito">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors font-nunito">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
