import { useState } from "react";
import { FileText, CheckCircle2, XCircle } from "lucide-react";
import IconButton from "../../src/Components/Common/Button";
import Input from "../../src/Components/Common/Input";
import DropdownSelect from "../../src/Components/Common/Dropdown";
import { motion, AnimatePresence } from "framer-motion";
import { countryList } from "../../src/utils/countrycodes";
import DebouncedSearchDropdown from "../../src/Components/Common/Debounce";

const ApplyNowForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobNo, setMobNo] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [email, setEmail] = useState("");
  const [track, setTrack] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [profileFile, setProfileFile] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const WEB3FORMS_ACCESS_KEY = "2901d84b-5a50-43c2-bf60-8c8276c62725";

  const validateForm = () => {
    if (!fullName.trim()) return "Full name is required";
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

    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Application Form Submission");
    formData.append("from_name", "DMIF Website");
    formData.append("fullName", fullName.trim());
    formData.append("mobNo", `${countryCode} ${mobNo.trim()}`);
    formData.append("email", email.trim().toLowerCase());
    formData.append("track", track);
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
        setFullName("");
        setMobNo("");
        setCountryCode("+91");
        setEmail("");
        setTrack("");
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

  const handleStatusClose = () => {
    setStatus(null);
  };

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
        Apply Now
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
            Begin your journey with us by applying today. Once you submit this
            form, our admissions team will review your details and get back to
            you with the next steps.
          </p>
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
            Application Form
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
            Fill in your details to apply
          </p>

          <form className="flex flex-col gap-3 sm:gap-4" onSubmit={handleSubmit}>
            <Input
              label="Full Name"
              placeholder="Enter your full name..."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            {/* Mobile Number */}
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
                        value = "+" + value;
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
                          let dial = c.dialCode.startsWith("+")
                            ? c.dialCode
                            : `+${c.dialCode}`;
                          return {
                            id: dial,
                            label: `${dial} (${c.label})`,
                          };
                        });

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
                  onChange={(e) =>
                    setMobNo(e.target.value.replace(/[^\d\s-]/g, ""))
                  }
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

            <DropdownSelect
              label="Choose a Track"
              name="track"
              required
              value={track}
              onChange={setTrack}
              options={[
                { label: "Entrepreneurship Track", value: "Entrepreneurship-Track" },
                { label: "Patent Track", value: "Patent-Track" },
                { label: "Research Track", value: "Research-Track" },
                { label: "All", value: "All" },
              ]}
            />

            <Input
              label="LinkedIn Profile"
              placeholder="https://linkedin.com/in/username"
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />

            <div className="flex flex-col gap-2">
              <label className="text-gray-800 text-sm font-medium">
                Profile Summary
              </label>
              <textarea
                placeholder="Write about your background, skills, or experience..."
                value={profileFile}
                onChange={(e) => setProfileFile(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                rows={4}
                maxLength={1000}
              />
              <p className="text-xs text-gray-400 text-right">
                {profileFile.length}/1000 characters
              </p>
            </div>

        
            <motion.div whileTap={{ scale: 0.95 }}>
              <IconButton
                type="submit"
                label={loading ? "Submitting..." : "Apply Now"}
                icon={<FileText size={18} />}
                iconPosition="right"
              />
            </motion.div>
          </form>

          {/* ✅ Status Popup */}
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
                      Application Submitted!
                    </p>
                    <p className="text-gray-600 text-sm mt-1 text-center px-4">
                      Our admissions team will contact you soon.
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

export default ApplyNowForm;
