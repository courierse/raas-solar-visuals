
import React from 'react';
import { Shield, Award, Users, Lightbulb, Target, Eye, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-yellow-500/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">RAAS Engineers</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Excellence in electrical engineering and sustainable energy solutions since 2009
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                Powering India's <span className="text-yellow-400">Industrial Future</span>
              </h2>
              <div className="space-y-6 text-blue-200 text-lg leading-relaxed">
                <p>
                  RAAS Engineers has been at the forefront of electrical manufacturing excellence for over 15 years. 
                  We specialize in designing and manufacturing high-quality electrical panels, solar products, and 
                  automation systems that power India's industrial growth.
                </p>
                <p>
                  Our commitment to innovation, quality, and customer satisfaction has made us a trusted partner 
                  for industries across sectors. From small-scale installations to large industrial complexes, 
                  we deliver solutions that meet the highest standards of performance and reliability.
                </p>
                <p>
                  With a focus on sustainable energy and advanced automation, we're not just manufacturing products – 
                  we're building the foundation for a more efficient and sustainable industrial future.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-white/10 rounded-xl p-6 mb-4">
                      <Award className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">ISO</div>
                      <div className="text-blue-200 text-sm">Certified Quality</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 rounded-xl p-6 mb-4">
                      <Users className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-blue-200 text-sm">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 rounded-xl p-6 mb-4">
                      <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">15+</div>
                      <div className="text-blue-200 text-sm">Years Experience</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white/10 rounded-xl p-6 mb-4">
                      <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-2">24/7</div>
                      <div className="text-blue-200 text-sm">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-16 h-16" />,
                title: "Our Mission",
                description: "To deliver innovative, reliable, and sustainable electrical solutions that empower industries and contribute to India's energy independence through cutting-edge technology and exceptional service quality."
              },
              {
                icon: <Eye className="w-16 h-16" />,
                title: "Our Vision",
                description: "To be India's leading manufacturer of electrical panels and solar products, recognized for excellence in quality, innovation, and customer satisfaction while contributing to a sustainable energy future."
              },
              {
                icon: <Heart className="w-16 h-16" />,
                title: "Our Values",
                description: "Integrity, Innovation, Excellence, and Sustainability drive everything we do. We believe in building long-term relationships through transparent business practices and unwavering commitment to quality."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 text-center group">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  {React.cloneElement(item.icon, { className: "w-16 h-16 text-white" })}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-blue-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive electrical and solar solutions tailored to your industrial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Electrical Panel Manufacturing</h3>
              <div className="space-y-3 text-blue-200">
                <div>• Main LT Panels & Distribution Panels</div>
                <div>• APFC Panels & Control Panels</div>
                <div>• Feeder Panels & Metering Panels</div>
                <div>• AMF Panels & Motor Control Consoles</div>
                <div>• VFD Panels & PLC-Based Automation</div>
                <div>• Synchronization & System Control Panels</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Solar Products & Services</h3>
              <div className="space-y-3 text-blue-200">
                <div>• Solar ACDB & DCDB Systems</div>
                <div>• Solar Balance of System (BOS)</div>
                <div>• Solar String Monitoring Panels</div>
                <div>• Complete Solar Installation Services</div>
                <div>• Solar System Commissioning</div>
                <div>• Maintenance & Support Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Quality & <span className="text-yellow-400">Certifications</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our certifications and quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "ISO 9001:2015", description: "Quality Management" },
              { name: "ISO 14001:2015", description: "Environmental Management" },
              { name: "OHSAS 18001", description: "Occupational Health & Safety" },
              { name: "BIS Certification", description: "Bureau of Indian Standards" }
            ].map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-blue-200 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
