const allQuestions = [
  {
    question: "What is cyanosis an indicator of?",
    options: ["Hypercapnia", "Hypoxia", "Apnea", "Respiratory alkalosis"],
    correctIndex: 1
  },
  {
    question: "What causes a barrel chest?",
    options: ["Depression in the lower sternum", "Overinflation of the lungs", "Lung collapse", "Rib fracture"],
    correctIndex: 1
  },
  {
    question: "What best describes funnel chest?",
    options: ["Overgrowth of rib cartilage", "Protruding sternum", "Depression in the lower sternum", "Elevated scapula"],
    correctIndex: 2
  },
  {
    question: "What condition is characterized by an S-shaped spine and elevated scapula?",
    options: ["Barrel chest", "Pigeon chest", "Funnel chest", "Kyphoscoliosis"],
    correctIndex: 3
  },
  {
    question: "What is the normal range for PaO₂?",
    options: ["75–85 mmHg", "60–80 mmHg", "80–100 mmHg", "100–120 mmHg"],
    correctIndex: 2
  },
  {
    question: "A PaCO₂ value greater than 45 mmHg suggests:",
    options: ["Metabolic acidosis", "Respiratory alkalosis", "Respiratory acidosis", "Metabolic alkalosis"],
    correctIndex: 2
  },
  {
    question: "What defines respiratory failure?",
    options: ["Brain stem dysfunction", "Failure of the lungs to provide oxygenation or ventilation", "Heart failure", "Lung cancer"],
    correctIndex: 1
  },
  {
    question: "Which of the following is an example of hypoxemic respiratory failure?",
    options: ["Pulmonary edema", "COPD", "Drug overdose", "Myasthenia gravis"],
    correctIndex: 0
  },
  {
    question: "Which ABG value reflects acidosis?",
    options: ["pH 7.50", "pH 7.42", "pH 7.28", "pH 7.40"],
    correctIndex: 2
  },
  {
    question: "What is the normal range of bicarbonate (HCO₃)?",
    options: ["15–20 mEq/L", "30–35 mEq/L", "22–26 mEq/L", "10–15 mEq/L"],
    correctIndex: 2
  },
  {
    question: "What is the normal range of oxygen saturation (O₂ Sat)?",
    options: ["70–85%", "85–93%", "94–100%", "50–70%"],
    correctIndex: 2
  },
  {
    question: "What type of respiratory failure occurs after surgery due to anesthesia?",
    options: ["Type 1", "Type 2", "Type 3", "Type 4"],
    correctIndex: 2
  },
  {
    question: "What is the most appropriate position for a dyspneic patient?",
    options: ["Supine", "Prone", "High Fowler’s", "Trendelenburg"],
    correctIndex: 2
  },
  {
    question: "What is a key nursing intervention for impaired gas exchange?",
    options: ["Encourage bed rest", "Limit fluid intake", "Position in semi-Fowler’s", "Withhold oxygen therapy"],
    correctIndex: 2
  },
  {
    question: "Which of the following is a sign of respiratory failure?",
    options: ["Euphoria", "Diaphoresis", "Weight gain", "Low blood glucose"],
    correctIndex: 1
  },
  {
    question: "What is a cause of neuromuscular dysfunction in respiratory failure?",
    options: ["Pneumonia", "Guillain-Barré syndrome", "Atelectasis", "Pleural effusion"],
    correctIndex: 1
  },
  {
    question: "Which value indicates respiratory alkalosis?",
    options: ["PaCO₂ > 45 mmHg", "PaCO₂ = 40 mmHg", "PaCO₂ < 35 mmHg", "PaCO₂ = 50 mmHg"],
    correctIndex: 2
  },
  {
    question: "What is the definition of tachypnea?",
    options: ["Breathing stops temporarily", "Breathing less than 10 breaths/min", "Rapid, shallow breathing over 24 breaths/min", "Deep, slow breathing"],
    correctIndex: 2
  },
  {
    question: "Which drug class is used to relax airway smooth muscles?",
    options: ["Antifungals", "Bronchodilators", "Diuretics", "Antipyretics"],
    correctIndex: 1
  },
  {
    question: "What is a common ABG pattern in respiratory failure?",
    options: ["PaO₂ > 100 mmHg and PaCO₂ < 35 mmHg", "PaO₂ < 60 mmHg and PaCO₂ > 45 mmHg", "PaO₂ > 80 mmHg and PaCO₂ > 50 mmHg", "PaO₂ = 75 mmHg and PaCO₂ = 35 mmHg"],
    correctIndex: 1
  },
  {
    question: "Which of the following is a nursing diagnosis related to respiratory failure?",
    options: ["Chronic fatigue", "Ineffective airway clearance", "Hypertension", "Acute pain"],
    correctIndex: 1
  },
  {
    question: "What should be assessed to monitor signs of pulmonary infarction?",
    options: ["Joint pain and fatigue", "Abdominal tenderness", "Cough, hemoptysis, pleural pain", "Increased appetite and thirst"],
    correctIndex: 2
  },
  {
    question: "Type 1 respiratory failure is also called hypercapnic respiratory failure.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Kyphoscoliosis is associated with an S-shaped curvature of the spine.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Apnea is defined as rapid shallow breathing.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Use of accessory muscles is a sign of respiratory distress.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Ventilatory support may be needed in both type 1 and type 2 respiratory failure.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Overhydration can impair gas exchange in patients with heart failure.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Diuretics are used to reduce pulmonary congestion in respiratory failure.",
    options: ["True", "False"],
    correctIndex: 0
  },
   {
    question: "What is the primary function of a mechanical ventilator?",
    options: ["To treat lung cancer", "To measure oxygen levels", "To take over or assist breathing", "To replace the heart"],
    correctIndex: 2
  },
  {
    question: "Nurses must monitor oxygen saturation hourly and document it.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Which of the following is a common reason for using mechanical ventilation?",
    options: ["High blood pressure", "Low oxygen levels", "Kidney failure", "Skin infection"],
    correctIndex: 1
  },
  {
    question: "What is the normal respiration rate range in adults?",
    options: ["8–12 breaths/min", "10–14 breaths/min", "12–16 breaths/min", "16–20 breaths/min"],
    correctIndex: 2
  },
  {
    question: "Which test measures oxygen and carbon dioxide in arterial blood?",
    options: ["Pulse oximetry", "ABG test", "Chest X-ray", "MRI"],
    correctIndex: 1
  },
  {
    question: "What is the normal range of PaCO₂?",
    options: ["20–30 mm Hg", "34–45 mm Hg", "80–100 mm Hg", "22–26 mm Hg"],
    correctIndex: 1
  },
  {
    question: "Which of the following is a type of non-invasive ventilation?",
    options: ["Tracheostomy", "CPAP", "Endotracheal tube", "Nasal cannula"],
    correctIndex: 3
  },
  {
    question: "Which of the following is NOT a mode of mechanical ventilation?",
    options: ["SIMV", "APRV", "ECG", "A/C"],
    correctIndex: 2
  },
  {
    question: "What does the Assist/Control (A/C) mode provide?",
    options: ["Partial support", "Full ventilator support", "Weaning support only", "No support"],
    correctIndex: 1
  },
  {
    question: "What mode is suitable for partial ventilator support?",
    options: ["SIMV", "A/C", "CMV", "HFOV"],
    correctIndex: 0
  },
  {
    question: "What is the recommended normal inspiratory flow rate?",
    options: ["30 L/min", "60 L/min", "90 L/min", "120 L/min"],
    correctIndex: 1
  },
  {
    question: "Which is a high-pressure ventilator alarm?",
    options: ["Tube disconnection", "Apnea", "Blocked airway", "Low FiO2"],
    correctIndex: 2
  },
  {
    question: "Which drug type is used to reduce anxiety during ventilation?",
    options: ["Antibiotics", "Sedatives", "Antipyretics", "Antihistamines"],
    correctIndex: 1
  },
  {
    question: "Which complication is most related to oxygen toxicity?",
    options: ["Infection", "Cell death and inflammation", "Vomiting", "Muscle spasm"],
    correctIndex: 1
  },
  {
    question: "What is the most frequent cause of airway obstruction?",
    options: ["Lung collapse", "Vomiting", "Secretions blocking the ET tube", "Biting nails"],
    correctIndex: 2
  },
  {
    question: "What is classified as a “prolonged” weaning?",
    options: ["24 hours", "2 days", ">7 days", "<48 hours"],
    correctIndex: 2
  },
  {
    question: "Which of the following is NOT part of weaning criteria?",
    options: ["Adequate respiratory effort", "Presence of excessive secretions", "Stabilized cardiovascular status", "Resolved critical condition"],
    correctIndex: 1
  },
  {
    question: "Which method involves attaching oxygen directly to the ETT without ventilator support?",
    options: ["CPAP", "T-piece", "SIMV", "PSV"],
    correctIndex: 1
  },
  {
    question: "What is a sign of readiness for weaning?",
    options: ["Low oxygen saturation", "Excessive secretions", "Stable metabolic functions", "High fever"],
    correctIndex: 2
  },
  {
    question: "Which nursing diagnosis is related to physical and psychological stressors?",
    options: ["Pain", "Insomnia", "Altered nutrition", "Ineffective airway clearance"],
    correctIndex: 1
  },
  {
    question: "What does a low-pressure ventilator alarm typically indicate?",
    options: ["Blocked airway", "Ventilator disconnection", "High tidal volume", "Apnea"],
    correctIndex: 1
  },
  {
    question: "What is the normal SaO₂ range?",
    options: ["70%–80%", "93%–99%", "85%–90%", "100%–110%"],
    correctIndex: 1
  },
  {
    question: "Which position promotes maximum chest expansion before intubation?",
    options: ["Supine", "High-Fowler’s", "Prone", "Left lateral"],
    correctIndex: 1
  },
  {
    question: "Mechanical ventilation is a form of life support.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "The endotracheal tube is removed during extubation.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Tidal volume is the number of breaths per minute.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Biotrauma can result in increased inflammatory cytokines.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "A DNI order indicates that a patient wishes to receive intubation.",
    options: ["True", "False"],
    correctIndex: 1
  },
  {
    question: "Weaning may be performed abruptly or gradually depending on the case.",
    options: ["True", "False"],
    correctIndex: 0
  },
  {
    question: "Pressure control mode allows the operator to directly set tidal volume.",
    options: ["True", "False"],
    correctIndex: 1
  }
];


  function shuffleArray(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const questions = shuffleArray(allQuestions);

  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');

  // توليد الأسئلة في الصفحة
  questions.forEach((q, index) => {
    const questionBlock = document.createElement('div');
    questionBlock.className = 'question-block';
    questionBlock.id = `q${index}`;

    const questionText = document.createElement('p');
    questionText.innerText = `${index + 1}. ${q.question}`;
    questionBlock.appendChild(questionText);

    q.options.forEach((option, i) => {
      const label = document.createElement('label');
      label.style.display = 'block';
      label.innerHTML = `
        <input type="radio" name="question${index}" value="${i}"> ${option}
      `;
      questionBlock.appendChild(label);
    });

    quizContainer.appendChild(questionBlock);
  });

  function submitQuiz() {
    let score = 0;

    questions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      const questionBlock = document.getElementById(`q${index}`);

      // إزالة التغذية الراجعة القديمة
      questionBlock.classList.remove("correct", "incorrect");
      const oldFeedback = questionBlock.querySelector(".feedback");
      if (oldFeedback) oldFeedback.remove();

      let feedback = document.createElement("div");
      feedback.className = "feedback";

      if (selected) {
        const selectedValue = parseInt(selected.value);
        if (selectedValue === q.correctIndex) {
          score++;
          questionBlock.classList.add("correct");
          feedback.innerHTML = `✅ Correct`;
          feedback.style.color = "green";
        } else {
          questionBlock.classList.add("incorrect");
          feedback.innerHTML = `❌ Wrong – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
          feedback.style.color = "red";
        }
      } else {
        questionBlock.classList.add("incorrect");
        feedback.innerHTML = `⚠️ Not Answered – Correct Answer: <strong>${q.options[q.correctIndex]}</strong>`;
        feedback.style.color = "orange";
      }

      questionBlock.appendChild(feedback);
    });

    resultContainer.classList.add('result-transition');
    resultContainer.innerText = `You scored ${score} out of ${questions.length}`;
  }

  window.onscroll = function () {
    const btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  document.getElementById("scrollToTopBtn").onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

