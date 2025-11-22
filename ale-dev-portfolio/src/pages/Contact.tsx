import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Input } from '../components/input';
import { Textarea } from '../components/textarea';

/**
 * Contact component
 * @author Alessio Giacché
 * @version 1.0.0
 * @since 1.0.0
 */
export function Contact() {
  // Form data for contact me
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Loading status
  const [isLoading, setIsLoading] = useState(false);

  // EmailJs attributes
  const templateId = 'template_nl466f9';
  const serviceId = 'service_gy4lnnl';
  const publicKey = 'pomeuSDolicn8JLtA';

  /**
   * Handle submit the form
   * @param e the form event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ale.giacc.dev@gmail.com',
          reply_to: formData.email,
        },
        publicKey
      );

      // Show the success toast
      toast.success('Message sent successfully! I will get back to you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(
        'Failed to send message. Please try again or contact me directly at ale.giacc.dev@gmail.com'
      );
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle the change event
   * @param e the change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // The contact info
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ale.giacc.dev@gmail.com',
      link: "mailto:ale.giacc.dev@gmail.com?subject=Contact%20from%20Portfolio%20Website&body=Hello,%20I'm%20contacting%20you%20from%20your%20portfolio...",
    },
    {
      icon: MapPin,
      title: 'Position',
      value: 'Marche, Italy',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: 'linear-gradient(135deg, #FFB74D 0%, #FF9933 50%, #FF7043 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Contact Me</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-white max-w-3xl mx-auto">
              I'm always interested in new opportunities for learning and collaboration. If you
              would like to connect or discuss technology, I'd be delighted to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-orange-600" size={24} />
                      </div>
                      <div>
                        <h3 className="mb-1 text-gray-900">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-orange-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}

              <Card className="p-6 bg-gradient-to-br from-orange-600 to-red-600 text-white">
                <h3 className="mb-2">Open to Opportunities</h3>
                <p className="opacity-90">
                  I'm seeking opportunities to grow as a developer. Let's connect and discuss
                  technology!
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      disabled={isLoading}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-gray-700">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    disabled={isLoading}
                  />
                </div>

                <div className="mt-6 flex justify-end">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    style={{ cursor: 'pointer' }}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
