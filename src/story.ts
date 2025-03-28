export interface Choice {
    text: string;
    next: string;
  }
  
  export interface Scene {
    id: string;
    text: string;
    choices: Choice[];
  }
  
  export interface Story {
    [key: string]: Scene;
  }
  
export const story = {
    // Your previous stories here...
  
    pain_management_intro: {
      id: "pain_management_intro",
      text: "You're curled up in an uncomfortable plastic chair at the ER, your abdomen stabbing you repeatedly from the inside out. The pain feels like a thousand tiny ninjas wielding samurai swords inside your stomach. After three hours of waiting, a bored triage nurse finally calls your name with the enthusiasm typically reserved for doing taxes.",
      choices: [
        { text: "Politely explain your chronic condition and severe pain", next: "polite_explain" },
        { text: "Sarcastically offer to trade your left kidney for immediate attention", next: "kidney_trade" },
      ],
    },
  
    polite_explain: {
      id: "polite_explain",
      text: "The nurse types slowly, painfully slowly, and mumbles without making eye contact: 'Rate your pain from one to ten.' You whisper-shout, 'Eleven!' She sighs, unmoved.",
      choices: [
        { text: "Quietly insist on seeing the attending physician", next: "attending_physician" },
        { text: "Suggest she read your 200-page medical record", next: "medical_record" },
      ],
    },
  
    kidney_trade: {
      id: "kidney_trade",
      text: "You sarcastically offer your left kidney. The nurse looks confused and writes something down—probably 'Patient combative'—and sends you back to the waiting room.",
      choices: [
        { text: "Retreat to waiting room and sob quietly", next: "waiting_sob" },
        { text: "Politely request a patient advocate", next: "patient_advocate" },
      ],
    },
  
    attending_physician: {
      id: "attending_physician",
      text: "The attending breezes by, suggesting mindfulness or meditation. You're momentarily speechless, counting backwards from ten.",
      choices: [
        { text: "Patiently explain meditation doesn't help", next: "meditation_reply" },
        { text: "Suggest the doctor meditate on better solutions", next: "meditation_sarcastic" },
      ],
    },
  
    patient_advocate: {
      id: "patient_advocate",
      text: "The advocate listens sympathetically, promising help. You feel momentarily hopeful but skeptical.",
      choices: [
        { text: "Accept promises gratefully", next: "advocate_success" },
        { text: "Cynically thank her for nothing", next: "advocate_fail" },
      ],
    },
  
    meditation_reply: {
      id: "meditation_reply",
      text: "Frustrated, the doctor orders Tylenol. You know this won't help.",
      choices: [
        { text: "Request a consult from pain management", next: "pain_consult" },
        { text: "Inform them loudly that Tylenol is useless", next: "useless_tylenol" },
      ],
    },
  
    pain_consult: {
      id: "pain_consult",
      text: "The pain specialist genuinely listens and offers compassionate care and actual treatments. You're amazed and relieved.",
      choices: [
        { text: "Thank them profusely", next: "good_ending" },
        { text: "Invite them to your imaginary TED Talk", next: "good_ending" },
      ],
    },
  
    good_ending: {
      id: "good_ending",
      text: "Finally, validated and cared for, you leave wiser, realizing advocating for yourself clearly matters.",
      choices: [],
    },
  
    advocate_success: {
      id: "advocate_success",
      text: "Surprisingly, the advocate brings in an attentive doctor who provides immediate help. Miracle achieved.",
      choices: [
        { text: "Express gratitude", next: "good_ending" },
        { text: "Ask if this is a hidden-camera show", next: "good_ending" },
      ],
    },
  
    // Other endings (simplified for now)
    medical_record: {
      id: "medical_record",
      text: "The nurse ignores your sarcasm, leaving you stranded. You eventually leave untreated, frustrated and still in pain.",
      choices: [],
    },
  
    meditation_sarcastic: {
      id: "meditation_sarcastic",
      text: "The doctor labels you 'difficult' and leaves. No help given. Lesson learned about ER diplomacy.",
      choices: [],
    },
  
    waiting_sob: {
      id: "waiting_sob",
      text: "You give up, leave untreated, and cry quietly at home, vowing better advocacy next time.",
      choices: [],
    },
  
    advocate_fail: {
      id: "advocate_fail",
      text: "The advocate never returns. You leave the ER frustrated, but with newfound determination to self-advocate next time.",
      choices: [],
    },
  
    useless_tylenol: {
      id: "useless_tylenol",
      text: "You're labeled as 'drug-seeking' despite not asking for drugs. You leave untreated, angry but determined to report your experience.",
      choices: [],
    },
  };
  