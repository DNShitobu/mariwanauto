"use client";

import Link from "next/link";
import { Wrench, Package, Headphones, Truck, Shield, Phone, Calendar, Check, ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/ServiceCard";

const mainServices = [
  {
    title: "Product Consultation",
    description: "Not sure what part you need? Our knowledgeable team provides free expert consultation to help you find the right solution for your vehicle. We match parts to your specific make, model, and year.",
    icon: Headphones,
  },
  {
    title: "Bulk Orders",
    description: "Need parts for a fleet or multiple vehicles? We offer special pricing and dedicated support for bulk orders. Contact us for custom quotes on larger purchases.",
    icon: Package,
  },
  {
    title: "Delivery Services",
    description: "Convenient delivery options to suit your needs. Same-day delivery available for orders placed before noon. Track your order in real-time and get it delivered to your doorstep.",
    icon: Truck,
  },
  {
    title: "Technical Support",
    description: "Our expert technicians can provide installation guidance and technical advice. Get step-by-step assistance for your DIY projects or professional installation referrals.",
    icon: Wrench,
  },
];

const additionalServices = [
  { icon: Calendar, title: "Order Tracking", description: "Real-time order status updates and tracking" },
  { icon: Truck, title: "Flexible Delivery", description: "Multiple delivery options to fit your schedule" },
  { icon: Shield, title: "Quality Warranty", description: "Full warranty coverage on all products" },
  { icon: Phone, title: "Expert Support", description: "Free technical support via phone or chat" },
];

const whyChooseUs = [
  "15+ years of industry experience",
  "Wide selection of quality products",
  "Competitive pricing guaranteed",
  "Expert advice from certified staff",
  "Fast and reliable delivery",
  "Satisfaction guaranteed on all purchases",
];

export default function Services() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How We Can Help You
            </h1>
            <p className="text-xl text-gray-300">
              Beyond selling parts, we provide comprehensive automotive solutions to keep your vehicle running at its best.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From quality parts to professional support, we provide complete solutions for all your automotive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Benefits
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              When you choose Mariwan Auto Parts, you get more than just parts and services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Mariwan Auto Parts?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We are committed to providing not just parts, but complete automotive solutions backed by expert advice and professional support.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-8">
                Whether you need a specific part, expert advice, or bulk pricing, our team is here to help.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors border-2 border-white/20"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have Questions About Our Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is ready to help. Contact us today for expert advice and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors border-2 border-white/20"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
