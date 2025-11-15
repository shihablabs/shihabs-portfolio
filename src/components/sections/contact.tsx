"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "@/data/site-data";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your project
            and create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Project Discussion" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={fadeIn}>
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">
                        {contactInfo.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="border-0 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">
                        {contactInfo.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
