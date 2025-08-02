import React from 'react'
import { Mail, Instagram, Linkedin, Twitter } from 'lucide-react'

interface LinkItem {
  key: string
  label: string
  url: string
}

interface SocialLink extends LinkItem {
  icon: React.ReactNode
}

export const quickLinks: LinkItem[] = [
  { key: 'home', label: 'Home', url: '#' },
  { key: 'about', label: 'About Us', url: '#' },
  { key: 'shop', label: 'Shop', url: '#' },
  { key: 'sale', label: 'Sale', url: '#' },
]

export const exploreMore: LinkItem[] = [
  { key: 'contact', label: 'Contact Us', url: '#' },
  { key: 'returns', label: 'Returns', url: '#' },
  { key: 'policy', label: 'Privacy Policy', url: '#' },
  { key: 'faq', label: 'FAQs', url: '#' },
]

export const socialLinks: SocialLink[] = [
  { key: 'linkedin', label: 'LinkedIn', url: '#', icon: <Linkedin /> },
  { key: 'twitter', label: 'Twitter', url: '#', icon: <Twitter /> },
  { key: 'instagram', label: 'Instagram', url: '#', icon: <Instagram /> },
  { key: 'email', label: 'Email', url: '#', icon: <Mail /> },
]


const Footer = () => {

  return (
    <div
      className="w-full text-third  flex flex-col justify-center relative items-center 
        bg-gradient-background  overflow-hidden"
    >
 

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10 mt-25 relative z-10">
        {/* Brand Section */}
        <div className="sm:col-span-1 flex flex-col items-center sm:items-start">
          <div className="mb-4 text-xl font-extrabold tracking-widest hover:text-[#A4A4A4] transition-colors duration-300">
            <a href="https://www.linkedin.com/in/itzhoman">Homan Hajimohamadi</a>
          </div>
          <p className="font-bold text-lg">&copy; 2025 Game Arena</p>
          <p className="font-bold text-lg">All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.key} className="mb-2">
                <a
                  href={link.url}
                  className="font-bold text-lg hover:text-[#A4A4A4] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore More */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Explore More</h3>
          <ul>
            {exploreMore.map((link) => (
              <li key={link.key} className="mb-2">
                <a
                  href={link.url}
                  className="font-bold text-lg hover:text-[#A4A4A4] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Connect With Us</h3>
          <ul className="flex flex-col items-center sm:items-start gap-3">
            {socialLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.url}
                  className="flex items-center gap-3 font-bold text-lg hover:text-[#A4A4A4] transition-colors duration-300"
                >
                  {link.icon} {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
