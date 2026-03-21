'use client';
import {memo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@/icons/SendIcon';
import Link from 'next/link';
import {contactItems} from '@/components/data/contact';
import Icon from '@/icons/Icon';
import {sendMessage} from '@/services/Messanger';

const Contact = () => {
  const {
    handleSubmit,
    control,
    formState: {isSubmitted},
  } = useForm<MailData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: MailData) => {
    sendMessage(data);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-r from-blue-50 to-purple-50">
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

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SendIcon
                      height={32}
                      width={32}
                    />
                  </div>
                  <h4 className="text-xl mb-2">Uspešno poslato!</h4>
                  <p className="text-gray-600">Odgovoriću vam u najkraćem mogućem roku.</p>
                </div>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="name"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => (
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2">
                          Ime i prezime *
                        </label>
                        <input
                          {...field}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                          placeholder="Vaše ime"
                        />
                      </div>
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => (
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2">
                          Email adresa *
                        </label>
                        <input
                          {...field}
                          type="email"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                          placeholder="vas@email.com"
                        />
                      </div>
                    )}
                  />

                  <Controller
                    name="message"
                    control={control}
                    rules={{required: true}}
                    render={({field}) => (
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2">
                          Poruka *
                        </label>
                        <textarea
                          {...field}
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition resize-none"
                          placeholder="Opišite vaš projekat..."></textarea>
                      </div>
                    )}
                  />

                  <button
                    type="submit"
                    className="w-full bg-black text-white px-6 py-4 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 group">
                    Pošalji Poruku
                    <SendIcon
                      className="group-hover:translate-x-1 transition"
                      height={20}
                      width={20}
                    />
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
                {contactItems.map((item, index) => (
                  <Link
                    key={'contact-item-' + index}
                    href={item.href}
                    className={item.containerClassName}>
                    <div className={item.iconContainerClassName}>
                      <Icon
                        name={item.icon}
                        height={24}
                        width={24}
                        className={item.iconClassName}
                      />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{item.title}</div>
                      <div className="font-medium">{item?.value}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
