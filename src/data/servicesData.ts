export interface ServiceDetailType {
  title: string;
  slug: string;
  description: string;
  content: string;
  faqs: { question: string; answer: string }[];
}

export const servicesDetails: Record<string, ServiceDetailType> = {
  "spine-alignment": {
    title: "Spine Alignment",
    slug: "spine-alignment",
    description: "Expert spine alignment in Jaipur to restore your body's natural balance and relieve nerve pressure.",
    content: "Spine alignment, or chiropractic adjustment, is the core of our practice. Misalignments (subluxations) can cause pain, reduced mobility, and interfere with your nervous system. At Dr. Harshvardhan Chiropractic Clinic, we use precise, gentle techniques to realign your vertebrae, promoting natural healing without surgery or medicine.",
    faqs: [
      { question: "What is spine alignment?", answer: "It is a procedure where a chiropractor uses their hands or a small instrument to apply a controlled, sudden force to a spinal joint." },
      { question: "Is spine alignment painful?", answer: "Most patients feel immediate relief. Some may experience minor soreness for a day or two, similar to after a workout." }
    ]
  },
  "back-pain": {
    title: "Back Pain Treatment",
    slug: "back-pain",
    description: "Relieve chronic and acute back pain with specialized chiropractic care in Jaipur.",
    content: "Whether it's lower back pain, upper back discomfort, or mid-back stiffness, our team specializes in identifying the root cause. We look beyond symptoms to find mechanical issues in the spine or muscles that lead to chronic pain.",
    faqs: [
      { question: "How many sessions do I need for back pain?", answer: "This depends on the severity and duration of your pain. Many patients see significant improvement within 3-5 sessions." }
    ]
  },
  "neck-pain": {
    title: "Neck Pain Treatment",
    slug: "neck-pain",
    description: "Specialized care for neck pain, stiffness, and reduced range of motion in Jaipur.",
    content: "Neck pain is often caused by poor posture, long hours at a desk, or sudden injuries like whiplash. Our chiropractic adjustments help restore the natural curve of your neck and relieve tension in the surrounding muscles.",
    faqs: [
      { question: "Can chiropractic help with chronic neck stiffness?", answer: "Yes, by realigning the cervical vertebrae, we can reduce muscle tension and restore full range of motion." }
    ]
  },
  "cervical-pain": {
    title: "Cervical Pain Expert",
    slug: "cervical-pain",
    description: "Expert treatment for cervical spondylosis and neck-related pain in Jaipur.",
    content: "Cervical pain can lead to headaches, dizziness, and numbness in the arms. Our clinic is renowned for treating cervical issues through non-invasive spine correction methods.",
    faqs: [
      { question: "Is cervical adjustment safe?", answer: "When performed by a licensed professional like Dr. Harshvardhan Chaturvedi, it is extremely safe and effective." }
    ]
  },
  "sciatica": {
    title: "Sciatica Treatment",
    slug: "sciatica",
    description: "Get relief from sciatic nerve pain radiating from your back to your legs without surgery.",
    content: "Sciatica occurs when the sciatic nerve is compressed, often by a herniated disc or spinal misalignment. We focus on decompressing the nerve and realigning the lower spine to eliminate the radiating pain.",
    faqs: [
      { question: "Can sciatica be cured without surgery?", answer: "In most cases, yes. Chiropractic care and spine correction are highly effective for sciatic nerve decompression." }
    ]
  },
  "osteopathy": {
    title: "Osteopathy",
    slug: "osteopathy",
    description: "Holistic osteopathic treatment in Jaipur focusing on the whole body's health and wellness.",
    content: "Osteopathy emphasizes the physical manipulation of muscle tissue and bones. We combine it with chiropractic care to provide a more holistic approach to healing and pain management.",
    faqs: [
      { question: "What is the difference between chiropractic and osteopathy?", answer: "Chiropractors focus primarily on the spine and nervous system, while osteopaths look at the body's overall structure, including muscles and joints." }
    ]
  },
  "herniated-disc": {
    title: "Herniated Disc Relief",
    slug: "herniated-disc",
    description: "Non-surgical treatment for herniated, slipped, or bulging discs in Jaipur.",
    content: "A herniated disc can be debilitating. Our treatment involves gentle spinal decompression and adjustments to reduce the pressure on the affected disc and nerves.",
    faqs: [
      { question: "Can a herniated disc heal on its own?", answer: "With the right professional care and decompression techniques, the body can often resorb the disc material and heal without surgery." }
    ]
  },
  "joint-pain": {
    title: "Joint Pain Relief",
    slug: "joint-pain",
    description: "Effective care for knee, hip, and shoulder joint pain through precise adjustments.",
    content: "Joint pain isn't always about the joint itself; it can be caused by misalignments elsewhere in the body. We assess your entire kinetic chain to provide lasting relief.",
    faqs: [
      { question: "Does chiropractic work for knee pain?", answer: "Yes, by ensuring proper alignment of the hips, pelvis, and spine, we can reduce the stress on your knees." }
    ]
  },
  "migraine": {
    title: "Migraine & Headache relief",
    slug: "migraine",
    description: "Natural relief from chronic migraines and tension headaches in Jaipur.",
    content: "Many migraines are triggered by tension in the neck and upper spine. By correcting these cervical misalignments, we can significantly reduce the frequency and intensity of headaches.",
    faqs: [
      { question: "How does the spine affect migraines?", answer: "Misalignments in the neck can cause nerve irritation and muscle tension that are primary triggers for migraines." }
    ]
  },
  "pinching-nerve": {
    title: "Pinching Nerve Treatment",
    slug: "pinching-nerve",
    description: "Release compressed nerves and restore normal function with expert care.",
    content: "A pinched nerve can cause sharp pain, tingling, and weakness. We identify the site of compression and use adjustments to create space and relieve the pressure.",
    faqs: [
      { question: "What are the symptoms of a pinched nerve?", answer: "Numbness, tingling (pins and needles), sharp or burning pain, and muscle weakness." }
    ]
  },
  "posture-correction": {
    title: "Posture Correction",
    slug: "posture-correction",
    description: "Fix slouching, tech-neck, and spinal imbalances with advanced posture therapy.",
    content: "In the digital age, poor posture is a leading cause of back and neck issues. We provide corrective exercises and adjustments to help you stand taller and feel better.",
    faqs: [
      { question: "Can long-term poor posture be fixed?", answer: "Yes, with consistent chiropractic care and dedicated corrective exercises, your posture can be significantly improved." }
    ]
  },
  "acid-reflux-acidity": {
    title: "Acid Reflux (Acidity) Relief",
    slug: "acid-reflux-acidity",
    description: "A holistic chiropractic approach to help manage digestive issues naturally.",
    content: "The nervous system controls every function of the body, including digestion. Spinal misalignments can sometimes interfere with the nerves that regulate the digestive tract.",
    faqs: [
      { question: "How can a chiropractor help with acid reflux?", answer: "By ensuring the nerves connecting to the stomach and esophagus are free from interference, we can support better digestive function." }
    ]
  }
};
