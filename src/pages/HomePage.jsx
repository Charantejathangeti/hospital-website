import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Users, Heart, Award, Star, Stethoscope, Sparkles, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HomePage = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'General Dentistry',
      description: 'Comprehensive dental checkups, cavity fillings, and preventive care to maintain optimal oral health.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&auto=format&fit=crop',
    },
    {
      icon: Sparkles,
      title: 'Root Canal Treatment',
      description: 'Pain-free treatment for infected teeth using modern techniques and advanced equipment.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop',
    },
    {
      icon: Zap,
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth with natural-looking results and long-lasting durability.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981960afdd?w=800&auto=format&fit=crop',
    },
    {
      icon: Star,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments to brighten your smile and boost your confidence.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&auto=format&fit=crop',
    },
  ];

  const reviews = [
    {
      name: 'Priya Reddy',
      rating: 5,
      text: 'The team at Ikon Dental made my root canal treatment completely painless. Their modern equipment and caring approach put me at ease.',
      date: 'February 2026',
    },
    {
      name: 'Vikram Naidu',
      rating: 5,
      text: 'Got my dental implants done here and the results are amazing. The doctors are highly skilled and the clinic is very hygienic.',
      date: 'January 2026',
    },
    {
      name: 'Lakshmi Rao',
      rating: 5,
      text: 'Best dental clinic in Tirupati. The staff is friendly, prices are reasonable, and they truly care about patient comfort.',
      date: 'March 2026',
    },
    {
      name: 'Arun Kumar',
      rating: 4,
      text: 'Professional service and modern facilities. My teeth whitening treatment exceeded my expectations.',
      date: 'February 2026',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Modern Equipment',
      description: 'State-of-the-art dental technology for accurate diagnosis and effective treatment.',
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Skilled dentists with years of experience in various dental procedures.',
    },
    {
      icon: Heart,
      title: 'Patient Comfort',
      description: 'Gentle care and pain-free treatments in a relaxing environment.',
    },
    {
      icon: Award,
      title: 'Affordable Pricing',
      description: 'Quality dental care at competitive prices with transparent billing.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ikon Dental Clinic - Best Dental Care in Tirupati</title>
        <meta name="description" content="Ikon Dental Clinic offers comprehensive dental services in Tirupati including general dentistry, root canal, dental implants, and teeth whitening. Book your appointment today." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a"
            alt="Modern dental clinic with professional equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              Trusted Dental Care in Tirupati
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              Healthy Smiles Start Here
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-[55ch]">
              Experience modern dental care with advanced technology, experienced professionals, and a commitment to your comfort. Your smile deserves the best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="btn-primary rounded-lg px-8 text-base">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-lg px-8 text-base bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                About Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Your trusted partner for complete dental care
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Ikon Dental Clinic, we combine modern technology with compassionate care to deliver exceptional dental services. Our experienced team is dedicated to improving oral health through accurate diagnosis, safe procedures, and patient-centered treatment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Located in the heart of Tirupati, we serve our community with affordable, high-quality dental care in a clean and comfortable environment.
              </p>
              <Link to="/about">
                <Button variant="outline" className="rounded-lg">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop"
                alt="Professional dental team at Ikon Dental Clinic"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-[280px]">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">2,847+</p>
                    <p className="text-sm text-muted-foreground">Happy Patients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Comprehensive dental solutions
            </h2>
            <p className="text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              From routine checkups to advanced procedures, we offer a full range of dental services to keep your smile healthy and bright.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="card-hover h-full overflow-hidden rounded-2xl border-0 shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 h-12 w-12 rounded-xl bg-white shadow-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to="/services">
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-primary rounded-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Patient Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              What our patients say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">4.7</span>
              <span className="text-muted-foreground">out of 5</span>
            </div>
            <p className="text-muted-foreground">Based on 247 reviews</p>
          </div>

          <div className="columns-1 md:columns-2 gap-6 space-y-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid"
              >
                <Card className="rounded-xl shadow-md border-0 bg-muted/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <CardTitle className="text-base font-semibold">{review.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {review.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Experience the Ikon difference
            </h2>
            <p className="text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              We are committed to providing exceptional dental care that combines expertise, technology, and compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-xl shadow-md border-0 h-full">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {benefit.description}
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
              Ready to transform your smile?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-[55ch] mx-auto">
              Schedule your appointment today and experience quality dental care in a comfortable, modern environment.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg px-8">
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;