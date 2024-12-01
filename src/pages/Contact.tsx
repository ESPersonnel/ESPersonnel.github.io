import React from 'react';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:w.espersonnel@gmail.com',
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/ESPersonnel',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/wycliffe-ndiba/',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      href: 'https://instagram.com/espersonnel/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                {link.icon}
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;