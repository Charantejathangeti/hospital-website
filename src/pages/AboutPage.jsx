import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield, Microscope, Users, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutPage = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Patient Comfort',
      description: 'We prioritize your comfort and well-being throughout every treatment, ensuring a stress-free experience.',
    },
    {
      icon: Microscope,
      title: 'Accurate Diagnosis',
      description: 'Using advanced diagnostic tools and techniques to identify dental issues with precision.',
    },
    {
      icon: Shield,
      title: 'Modern Procedures',
      description: 'Implementing the latest dental technologies and evidence-based treatment methods.',
    },
    {
      icon: CheckCircle2,
      title: 'High Hygiene Standards',
      description: 'Maintaining strict sterilization protocols and cleanliness to ensure your safety.',
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Dentist',
      specialization: 'Prosthodontics & Implantology',
      image: 'https://images.unsplash.com/photo-1694678459294-da579f249296',
    },
    {
      name: 'Dr. Meera Sharma',
      role: 'Senior Dentist',
      specialization: 'Endodontics & Cosmetic Dentistry',
      image: 'https://images.unsplash.com/photo-1694678459294-da579f249296',
    },
    {
      name: 'Dr. Anil Reddy',
      role: 'Dental Surgeon',
      specialization: 'Oral Surgery & Periodontics',
      image: 'https://images.unsplash.com/photo-1694678459294-da579f249296',
    },
  ];

  return (
    <>
      <Helmet>
        <title>{`About Us - Ikon Dental Clinic Tirupati`}</title>
        <meta name="description" content="Learn about Ikon Dental Clinic's mission, vision, and commitment to providing quality dental care in Tirupati with modern equipment and experienced professionals." />
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
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Committed to your dental health
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-[60ch] mx-auto">
              Providing comprehensive dental care with a focus on quality, safety, and patient satisfaction since our establishment in Tirupati.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Our story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ikon Dental Clinic was founded with a simple yet powerful vision: to make quality dental care accessible to everyone in Tirupati. What started as a small practice has grown into a trusted dental clinic serving thousands of patients.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our journey has been marked by continuous learning, adoption of modern technologies, and an unwavering commitment to patient care. We believe that everyone deserves a healthy smile, and we work tirelessly to make that a reality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we stand as a beacon of dental excellence in Tirupati, combining traditional values of care and compassion with cutting-edge dental technology and techniques.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop"
                alt="Ikon Dental Clinic team providing patient care"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="rounded-2xl shadow-lg border-0 h-full bg-white">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To improve oral health by providing affordable, safe, and modern dental treatments that enhance the quality of life for our patients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="rounded-2xl shadow-lg border-0 h-full bg-white">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <Eye className="h-7 w-7 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To become one of the most trusted dental clinics in Tirupati, known for excellence in patient care, advanced treatments, and compassionate service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Core Values
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              What drives us
            </h2>
            <p className="text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              Our core values guide every decision we make and every treatment we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-xl shadow-md border-0 h-full bg-muted/50">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-base">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Meet our experienced professionals
            </h2>
            <p className="text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              Our team of skilled dentists brings years of expertise and a passion for dental excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-lg border-0 overflow-hidden card-hover">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <CardDescription className="mt-2">
                      {member.specialization}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '2,847+', label: 'Happy Patients' },
              { number: '12+', label: 'Years Experience' },
              { number: '15+', label: 'Dental Services' },
              { number: '4.7★', label: 'Average Rating' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {stat.number}
                </p>
                <p className="text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;