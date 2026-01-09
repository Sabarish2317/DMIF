import { useState } from "react";
import { Mail, CheckCircle2, XCircle } from "lucide-react";
import IconButton from "../../Components/Common/Button";
import Input from "../../Components/Common/Input";
import { motion, AnimatePresence } from "framer-motion";
import { countryList } from "../../utils/countrycodes";
import DebouncedSearchDropdown from "../../Components/Common/Debounce";

const ContactForm = () => {
  const [firstname, setFirstName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [track, setTrack] = useState("");
  const [message, setMessage] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [profileFile, setProfileFile] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const WEB3FORMS_ACCESS_KEY = "2901d84b-5a50-43c2-bf60-8c8276c62725";

  // Input validation
  const validateForm = () => {
    if (!firstname.trim()) return "First name is required";
    if (!mobNo.trim()) return "Mobile number is required";
    if (!/^\d{10,15}$/.test(mobNo.replace(/\s|-/g, "")))
      return "Please enter a valid mobile number";
    if (!email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address";
    if (!track) return "Please select a track";
    if (
      linkedin &&
      !/^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/.test(linkedin)
    ) {
      return "Please enter a valid LinkedIn profile URL";
    }
    return null;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      alert(validationError); // You can replace this with a toast notification
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Contact Form Submission");
    formData.append("from_name", "DMIF Website");
    formData.append("firstname", firstname.trim());
    formData.append("mobNo", `${countryCode} ${mobNo.trim()}`);
    formData.append("email", email.trim().toLowerCase());
    formData.append("track", track);
    formData.append("message", message.trim());
    if (linkedin.trim()) formData.append("linkedin", linkedin.trim());
    if (profileFile.trim())
      formData.append("profileDetails", profileFile.trim());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        // Reset form
        setFirstName("");
        setMobNo("");
        setCountryCode("+91");
        setEmail("");
        setTrack("");
        setMessage("");
        setLinkedin("");
        setProfileFile("");
      } else {
        console.error("Form submission failed:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Auto-dismiss status after 5 seconds
  const handleStatusClose = () => {
    setStatus(null);
  };

  // Auto-close success message after 5 seconds
  useState(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.h2
        className="heading text-center mb-6 sm:mb-8 md:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {/* Left Section */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
     <p className="text-gray-600 text-base leading-relaxed">
  Have questions or need assistance? Fill out this contact form and our team
  will get back to you as soon as possible with the information or support
  you’re looking for.
</p>


          <div className="pt-4 border-t flex items-center gap-2">
            <p className="text-sm font-semibold text-[#003579] uppercase">
              Email Address :
            </p>
            <div
              className="flex flex-col cursor-pointer text-gray-700 hover:text-[#003579] transition-colors"
              onClick={() =>
                (window.location.href = "mailto:reach@drmadhan.in")
              }
            >
              <p>reach@drmadhan.in</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div
          className="bg-white shadow-sm rounded-lg p-4 sm:p-6 md:p-8 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Get In Touch
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            Feel free to contact us, we love to make new partners & friends
          </p>

          <form
            className="flex flex-col gap-3 sm:gap-4"
            onSubmit={handleSubmit}
          >
            <Input
              label="First Name"
              placeholder="First name..."
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            {/* Mobile Number with Country Code */}
            <div className="flex flex-col gap-1 w-full">
              <label className="text-gray-800 text-sm font-medium">
                Mobile No <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="w-32 flex-shrink-0 relative">
                  <DebouncedSearchDropdown
                    required
                    className="top-28"
                    delay={0}
                    direction="down"
                    isLoading={false}
                    selected={
                      countryCode
                        ? { id: countryCode, label: countryCode }
                        : undefined
                    }
                    onChange={(option) => {
                      let value = option.id.toString();
                      if (!value.startsWith("+")) {
                        value = "+" + value; // always enforce "+"
                      }
                      setCountryCode(value);
                    }}
                    fetchOptions={async (query?: string) => {
  const filtered = countryList
    .filter((c) => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        c.label.toLowerCase().includes(q) ||
        c.value.toLowerCase().includes(q) ||
        c.dialCode.toLowerCase().includes(q)
      );
    })
    .map((c) => {
  let dial = c.dialCode.startsWith("+") ? c.dialCode : `+${c.dialCode}`;
  return { id: dial + "-" + c.dialCode, label: `${dial} (${c.label})` };
});


  // remove duplicates by dial code
  const unique = Array.from(
    new Map(filtered.map((item) => [item.id, item])).values()
  );

  return unique;
}}

                    placeholder="Code"
                  />
                </div>

                <Input
                  placeholder="Enter number"
                  value={mobNo}
                  className="flex-1"
                  onChange={(e) => {
                    // Only allow numbers and basic formatting
                    const value = e.target.value.replace(/[^\d\s-]/g, "");
                    setMobNo(value);
                  }}
                  required
                />
              </div>
            </div>

            <Input
              label="Email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />


            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-medium">
                Message
              </label>
              <textarea
                placeholder="Message Subject"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
                rows={4}
                maxLength={500}
              />
              <p className="text-xs text-gray-400 text-right">
                {message.length}/500 characters
              </p>
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <IconButton
                type="submit"
                label={loading ? "Sending..." : "Send Message"}
                icon={<Mail size={18} />}
                iconPosition="right"
              />
            </motion.div>
          </form>

          {/* ✅ Success / Error Popup */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-lg shadow-md z-10"
              >
                {status === "success" ? (
                  <>
                    <CheckCircle2 className="text-green-600 w-12 h-12 mb-2" />
                    <p className="text-lg font-semibold text-green-700">
                      Thank you for contacting us!
                    </p>
                    <p className="text-gray-600 text-sm mt-1 text-center px-4">
                      Our team will get back to you soon.
                    </p>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-600 w-12 h-12 mb-2" />
                    <p className="text-lg font-semibold text-red-700">
                      Oops! Something went wrong.
                    </p>
                    <p className="text-gray-600 text-sm mt-1 text-center px-4">
                      Please try again later.
                    </p>
                  </>
                )}
                <button
                  onClick={handleStatusClose}
                  className="mt-4 px-4 py-2 text-sm bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
