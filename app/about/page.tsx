"use client";

import Link from "next/link";
import { Target, Eye, Heart, Users, Check, ArrowRight } from "lucide-react";
import { SocialIcons } from "@/components/SocialIcons";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "5000+", label: "Happy Customers" },
  { value: "1000+", label: "Products Available" },
  { value: "50+", label: "Expert Staff" },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To provide vehicle owners with access to high-quality auto parts and accessories at fair prices, ensuring safety and satisfaction on every journey.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the most trusted auto parts supplier in the region, known for exceptional product quality, expert knowledge, and unmatched customer service.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Integrity, quality, and customer focus guide everything we do. We believe in building lasting relationships through honest dealings and reliable service.",
  },
];

const teamValues = [
  "Quality first - We only stock products we trust",
  "Expert knowledge - Our team knows cars inside out",
  "Fair pricing - Quality doesn't have to break the bank",
  "Customer care - Your satisfaction is our priority",
  "Continuous improvement - We evolve with automotive technology",
];

export default function About() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-300">
              Learn about Mariwan Auto Parts and our commitment to excellence in automotive solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Since 2010
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                A Legacy of Quality & Trust
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2010, Mariwan Auto Parts began as a small family business with a simple mission: to provide vehicle owners with access to quality auto parts at reasonable prices. What started as a single storefront has grown into a trusted name in the automotive industry.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Over the years, we have expanded our inventory to include over 1,000 different parts and accessories, serving customers with vehicles of all makes and models. Our product range includes seat covers, floor mats, car body covers, batteries, wipers, lubricants, body fillers, air fresheners, and much more.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Mariwan Auto Parts, we believe that everyone deserves safe, reliable transportation. That is why we are committed to providing not just parts, but complete solutions backed by expert advice and professional support.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <span className="text-white text-5xl font-bold">M</span>
                  </div>
                  <p className="text-gray-700 text-xl font-bold">Mariwan Auto Parts</p>
                  <p className="text-gray-500">Est. 2010</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5000+</p>
                    <p className="text-gray-600 text-sm">Satisfied Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Mission, Vision & Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
                Our Commitment to You
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                At Mariwan Auto Parts, we are committed to providing the best automotive parts and accessories experience. Here is what you can expect when you shop with us:
              </p>
              <div className="space-y-4">
                {teamValues.map((item, index) => (
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
              <h3 className="text-2xl font-bold mb-6">Ready to Experience the Mariwan Difference?</h3>
              <p className="text-blue-100 mb-8">
                Join thousands of satisfied customers who trust us for their automotive needs.
              </p>
              <div className="space-y-4">
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Browse Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors border-2 border-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join the Mariwan Family
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference of dealing with a team that truly cares about your vehicle and your satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-colors"
              >
                Browse Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
            <div className="pt-8 border-t">
              <p className="text-gray-500 mb-4">Follow us on social media</p>
              <SocialIcons variant="dark" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
