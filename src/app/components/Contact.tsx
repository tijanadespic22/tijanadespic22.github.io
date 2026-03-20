import { Mail, Phone, Calendar, Send } from "lucide-react";
import {FormEvent, useState} from "react";
import {sendMessage} from "../Services/Messanger";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulacija slanja forme
    sendMessage(formData)
    setSubmitted(() =>true);
    setTimeout(() => {
      setSubmitted(() =>false);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4">Započnimo Projekat</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Imate ideju? Razgovarajmo o tome kako mogu pomoći da je oživite
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="text-2xl mb-6">Pošaljite Upit</h3>

              {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={32} />
                    </div>
                    <h4 className="text-xl mb-2">Uspešno poslato!</h4>
                    <p className="text-gray-600">Odgovoriću vam u najkraćem mogućem roku.</p>
                  </div>
              ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ime i prezime *
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                          placeholder="Vaše ime"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email adresa *
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                          placeholder="vas@email.com"
                      />
                    </div>



                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Poruka *
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                          placeholder="Opišite vaš projekat..."
                      ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white px-6 py-4 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 group"
                    >
                      Pošalji Poruku
                      <Send className="group-hover:translate-x-1 transition" size={20} />
                    </button>
                  </form>
              )}
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Kontakt Informacije</h3>
              <div className="space-y-4">
                <a
                  href="mailto:tijanadespic24@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition">
                    <Mail className="group-hover:text-white transition" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Email</div>
                    <div className="font-medium">tijanadespic24@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+381601533727"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 transition group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition">
                    <Phone className="group-hover:text-white transition" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Telefon</div>
                    <div className="font-medium">+381 60 153 3727</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Radno vreme</div>
                    <div className="font-medium">Pon - Pet, 9:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
