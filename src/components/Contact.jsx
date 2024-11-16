import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';
import { message } from "antd";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageBody, setMessageBody] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Your email was sent successfully',
    });
  };
  const errorMessage = () => {
    messageApi.open({
      type: 'error',
      content: 'Something went wrong, please try again later',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const templateParams = { name, email, messageBody };
    await emailjs.send(
      "service_tqq2iw2",
      "template_l0cnn0y",
      templateParams, {
        publicKey: 'user_7hiY7EgOGmmB04VGtCfcX',
      }).then(
      () => {
        success();
      },
      (error) => {
        errorMessage();
      }
    );
    setName("");
    setEmail("");
    setMessageBody("");
  };

  return (
    <div
      id="contact"
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-gray-50"
    >
      {contextHolder}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
            Contact Me
          </h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="messageBody"
                        value={messageBody}
                        onChange={(e) => setMessageBody(e.target.value)}
                        required
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      ></textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-indigo-600 mr-2" />
                    <span>info@garssoftwaresolutions.link</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-indigo-600 mr-2" />
                    <span>+1 (786) 362-1021</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-indigo-600 mr-2" />
                    <span>Plantation, FL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
