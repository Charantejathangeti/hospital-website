import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.phone || !formData.email || !formData.date) {
      toast({
        title: 'Missing information',
        description: 'Please fill in all required fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    // Store in localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const newAppointment = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString(),
    };
    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Show success message
    toast({
      title: 'Appointment request received',
      description: 'We will contact you shortly to confirm your appointment.',
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>{`Contact Us - Book Appointment at Ikon Dental Clinic`}</title>
        <meta name="description" content="Book your dental appointment at Ikon Dental Clinic in Tirupati. Contact us for general dentistry, root canal, dental implants, and more. Open Monday-Saturday 9:30 AM - 8:00 PM." />
      </Helmet>

      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-muted to-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Schedule your appointment
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch] mx-auto">
              Book your visit today and experience quality dental care in a comfortable, modern environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="rounded-2xl shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Book an Appointment</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will contact you to confirm your appointment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-lg text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="rounded-lg text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-lg text-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-sm font-medium">
                        Preferred Date <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="rounded-lg text-foreground"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your dental concerns or questions"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="rounded-lg resize-none text-foreground"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="btn-primary rounded-lg w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          Submit Appointment Request
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Address */}
              <Card className="rounded-xl shadow-md border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Visit Us</CardTitle>
                      <CardDescription>Our clinic location</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Srinivasa Nagar, Vinayaka Nagar Hari,<br />
                    Harekrishna Road, KT Road,<br />
                    Tirupati – 517507,<br />
                    Andhra Pradesh, India
                  </p>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="rounded-xl shadow-md border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Call Us</CardTitle>
                      <CardDescription>We are here to help</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:+919876543210"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg font-medium"
                  >
                    +91 98765 43210
                  </a>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="rounded-xl shadow-md border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Email Us</CardTitle>
                      <CardDescription>Send us a message</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@ikondentalclinic.com"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    info@ikondentalclinic.com
                  </a>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card className="rounded-xl shadow-md border-0">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Working Hours</CardTitle>
                      <CardDescription>When we are open</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Monday - Saturday</span>
                      <span className="text-sm text-muted-foreground">9:30 AM – 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">Sunday</span>
                      <span className="text-sm text-muted-foreground">9:30 AM – 1:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Find us on the map
            </h2>
            <p className="text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              Located in the heart of Tirupati, easily accessible from all parts of the city.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8736!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQzLjciTiA3OcKwMjUnMDkuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ikon Dental Clinic Location"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;