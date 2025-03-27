export const story = {
    start: {
      id: "start",
      text: "You wake up in a hospital room. A nurse tells you, 'You’re anxious and we’re discharging you now.' You feel confused. What do you do?",
      choices: [
        { text: "Ask to speak to the attending physician", next: "attending" },
        { text: "Insist that you're in severe pain and can't leave yet", next: "refuse_discharge" },
        { text: "Ask for a psych consult to prove you’re not crazy", next: "psych_consult" },
      ],
    },
    attending: {
      id: "attending",
      text: "The attending physician finally shows up, looking rushed. You explain your situation, and they seem dismissive. They mention that they’ll 'check on you later'.",
      choices: [
        { text: "Request a second opinion from another physician", next: "second_opinion" },
        { text: "Write down what happened and wait for their return", next: "waiting" },
      ],
    },
    second_opinion: {
      id: "second_opinion",
      text: "The second opinion you requested arrives, but they seem just as rushed. They tell you that they can't do much unless you have specific tests. Do you push for those tests?",
      choices: [
        { text: "Push for immediate tests to rule out serious conditions", next: "tests" },
        { text: "Agree to wait for further review", next: "waiting" },
      ],
    },
    tests: {
      id: "tests",
      text: "The tests are completed and they reveal an underlying medical issue. You're relieved to know it's not 'just anxiety.' The attending agrees to treat your condition.",
      choices: [
        { text: "Follow through with the treatment plan", next: "treatment" },
        { text: "Request a third opinion from another doctor", next: "third_opinion" },
      ],
    },
    third_opinion: {
      id: "third_opinion",
      text: "The third opinion arrives and recommends additional tests. You feel overwhelmed by the uncertainty and wait to see what they recommend next.",
      choices: [
        { text: "Ask to speak with a patient advocate", next: "advocate" },
        { text: "Return to waiting for answers", next: "waiting" },
      ],
    },
    refuse_discharge: {
      id: "refuse_discharge",
      text: "You refuse to leave, explaining your symptoms in more detail. The nurse becomes frustrated but tells you that you’ll be marked as 'AMA' (Against Medical Advice).",
      choices: [
        { text: "Insist on staying until a doctor agrees to treat you", next: "doctor_agreement" },
        { text: "Leave against medical advice, but feel unsure about your decision", next: "waiting" },
      ],
    },
    doctor_agreement: {
      id: "doctor_agreement",
      text: "After further discussion, a doctor agrees that you're not fit to leave. You’re admitted for treatment. The doctor explains the importance of ensuring your health before discharge.",
      choices: [
        { text: "Accept treatment and feel relieved", next: "treatment" },
        { text: "Request to leave and seek help elsewhere", next: "find_help" },
      ],
    },
    psych_consult: {
      id: "psych_consult",
      text: "The psych consult arrives and reassures you that there’s nothing mentally wrong, but they tell you that they can’t intervene without a formal referral. You feel dismissed.",
      choices: [
        { text: "Request your medical records and leave", next: "records" },
        { text: "Post your situation online for support", next: "social" },
      ],
    },
    social: {
      id: "social",
      text: "You post your story online, hoping someone will listen. The support you get from others helps push the hospital staff to act faster.",
      choices: [
        { text: "Follow up with the people who offered support", next: "follow_up" },
        { text: "Return to your room and wait for them to act", next: "waiting" },
      ],
    },
    waiting: {
      id: "waiting",
      text: "Hours pass and nothing seems to change. You're growing more anxious. Time feels slow as you wait for any resolution.",
      choices: [
        { text: "Keep waiting for something to happen", next: "waiting" },
        { text: "Ask for a second opinion or a new plan", next: "second_opinion" },
      ],
    },
    advocate: {
      id: "advocate",
      text: "You speak with the patient advocate, explaining your situation. They tell you they’ll look into your case. It feels like a small victory, but you're still not sure what's next.",
      choices: [
        { text: "Wait for them to escalate the situation", next: "waiting" },
        { text: "Look for another solution on your own", next: "find_help" },
      ],
    },
    find_help: {
      id: "find_help",
      text: "You try to find someone who will listen, but the hospital bureaucracy keeps getting in your way. You're feeling more isolated, but you haven't given up yet.",
      choices: [
        { text: "Return to your room and keep asking questions", next: "waiting" },
        { text: "Look for another department to help you", next: "department_assist" },
      ],
    },
    department_assist: {
      id: "department_assist",
      text: "You find a department that listens and agrees to help you get the right care. You feel like you're finally being heard.",
      choices: [
        { text: "Wait for their update", next: "waiting" },
        { text: "Request a follow-up to ensure they don’t forget", next: "follow_up" },
      ],
    },
    follow_up: {
      id: "follow_up",
      text: "You follow up with the department, and they confirm everything is in order. You’re relieved to know you’ve got the support you need.",
      choices: [
        { text: "Follow through with the care plan", next: "treatment" },
        { text: "Request a second opinion to be sure", next: "second_opinion" },
      ],
    },
    treatment: {
      id: "treatment",
      text: "You accept the treatment plan, and you start seeing improvements. You’re finally feeling better, and the hospital experience has taught you the importance of being proactive in your care.",
      choices: [
        { text: "Reflect on your experience and feel relieved", next: "end" },
        { text: "Ask for more information about your diagnosis", next: "records" },
      ],
    },
  };
  