import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Stethoscope, Sparkles, Zap, Star, Scissors, Activity, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Dentistry',
      description: 'Comprehensive dental care for the whole family, focusing on prevention and early detection of oral health issues.',
      benefits: [
        'Regular dental checkups and cleanings',
        'Cavity detection and fillings',
        'Oral hygiene education',
        'Preventive care and fluoride treatments',
        'Digital X-rays for accurate diagnosis',
      ],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop',
    },
    {
      icon: Sparkles,
      title: 'Root Canal Treatment',
      description: 'Advanced endodontic therapy to save infected teeth and eliminate pain using modern, pain-free techniques.',
      benefits: [
        'Pain-free treatment with local anesthesia',
        'Single-visit root canal procedures',
        'Advanced rotary endodontics',
        'High success rate with modern equipment',
        'Post-treatment care and follow-up',
      ],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop',
    },
    {
      icon: Zap,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solution that looks, feels, and functions like natural teeth with long-lasting results.',
      benefits: [
        'Titanium implants for durability',
        'Natural-looking aesthetic results',
        'Improved chewing and speaking ability',
        'Prevents bone loss in the jaw',
        'Long-term solution with proper care',
      ],
      image: 'https://images.unsplash.com/photo-1609840114035-3c981960afdd?w=800&auto=format&fit=crop',
    },
    {
      icon: Star,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with professional teeth whitening, veneers, and smile correction treatments.',
      benefits: [
        'Professional teeth whitening treatments',
        'Porcelain veneers for smile makeovers',
        'Tooth-colored composite fillings',
        'Smile design and planning',
        'Immediate visible results',
      ],
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop',
    },
    {
      icon: Scissors,
      title: 'Tooth Extraction',
      description: 'Safe and painless tooth removal procedures performed with care and precision to ensure quick recovery.',
      benefits: [
        'Painless extraction with anesthesia',
        'Wisdom tooth removal',
        'Surgical extractions when needed',
        'Post-extraction care instructions',
        'Quick healing with minimal discomfort',
      ],
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop',
    },
    {
      icon: Activity,
      title: 'Gum Treatments',
      description: 'Comprehensive periodontal care to treat gum disease and maintain healthy gums for overall oral health.',
      benefits: [
        'Deep cleaning and scaling',
        'Treatment for gum inflammation',
        'Periodontal disease management',
        'Gum surgery when necessary',
        'Preventive care and maintenance',
      ],
      image: 'https://images.unsplash.com/photo-1629909615957-be38b9e8e4c4?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{`Dental Services - Ikon Dental Clinic Tirupati`}</title>
        <meta name="description" content="Explore our comprehensive dental services including general dentistry, root canal, dental implants, cosmetic dentistry, tooth extraction, and gum treatments in Tirupati." />
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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Comprehensive dental care for every need
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch] mx-auto">
              From routine checkups to advanced procedures, we offer a complete range of dental services using modern technology and proven techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-lg border-0 overflow-hidden card-hover h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 h-14 w-14 rounded-xl bg-white shadow-lg flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Benefits:</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Link to="/contact" className="w-full">
                      <Button className="btn-primary rounded-lg w-full">
                        Book Appointment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Quality Care
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Why choose our dental services
            </h2>
            <p className="text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              We combine expertise, technology, and compassion to deliver exceptional dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Technology',
                description: 'We use the latest dental equipment and techniques for accurate diagnosis and effective treatment.',
              },
              {
                title: 'Experienced Professionals',
                description: 'Our team of skilled dentists has years of experience in various dental specialties.',
              },
              {
                title: 'Patient-Centered Care',
                description: 'We prioritize your comfort and well-being, ensuring a positive dental experience.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-xl shadow-md border-0 h-full bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to schedule your appointment?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-[55ch] mx-auto">
              Contact us today to book your consultation and take the first step towards a healthier, brighter smile.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg px-8">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;