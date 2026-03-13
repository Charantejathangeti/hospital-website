import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white font-bold text-xl">
              I
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground" style={{ letterSpacing: '-0.01em' }}>
                Ikon Dental Clinic
              </span>
              <span className="text-xs text-muted-foreground">Your Smile, Our Priority</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  isActive(link.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-[1.65rem] left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+91 98765 43210</span>
            </a>
            <Link to="/contact">
              <Button className="btn-primary rounded-lg px-6">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-colors duration-200 py-2 ${
                      isActive(link.path)
                        ? 'text-primary border-l-2 border-primary pl-4'
                        : 'text-foreground hover:text-primary pl-4'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <a href="tel:+919876543210" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-2 pl-4">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">+91 98765 43210</span>
                  </a>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="btn-primary rounded-lg w-full mt-4">
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;