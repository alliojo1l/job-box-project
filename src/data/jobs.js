export const categories = [
  {
    name: "Technology",
    slug: "technology",
    jobs: [
      {
        id: 1,
        title: "Frontend Developer",
        jobTitle: "Frontend Developer",
        slug: "frontend-developer",
        jobSummary: "Work with modern JavaScript frameworks like React/Next.js to build beautiful, high-performance user interfaces.",
        jobDescription: "As a Frontend Developer, you'll collaborate closely with designers and backend engineers to build fast, responsive, and user-friendly interfaces. You will be responsible for the translation of UI/UX designs to actual code that will produce visual elements of the application.",
        jobRequirements: [
          "Strong proficiency in JavaScript/TypeScript and ES6+",
          "Extensive experience with React.js and Next.js framework",
          "Knowledge of state management libraries (e.g., Redux, Zustand)",
          "Proficiency in HTML5, CSS3, and modern web layout techniques",
          "Experience with version control systems (Git)"
        ],
        salary: "₦500k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 2,
        title: "Backend Developer",
        jobTitle: "Backend Developer",
        slug: "backend-developer",
        jobSummary: "Design, build, and maintain scalable and secure APIs and backend services using Node.js.",
        jobDescription: "You'll work on creating reliable, high-performance, and secure APIs that power the entire platform. This role involves database design, server-side logic implementation, and ensuring system stability.",
        jobRequirements: [
          "Expertise in Node.js and frameworks like Express.js or NestJS",
          "Experience with relational and/or NoSQL databases (e.g., PostgreSQL, MongoDB)",
          "Strong understanding of API design principles (REST, GraphQL)",
          "Knowledge of user authentication and authorization protocols (OAuth, JWT)",
          "Familiarity with cloud services (AWS, Azure, or GCP)"
        ],
        salary: "₦450k / month",
        location: "Abuja, Nigeria",
        type: "Contract"
      },
      {
        id: 3,
        title: "Fullstack Developer",
        jobTitle: "Fullstack Developer",
        slug: "fullstack-developer",
        jobSummary: "Handle end-to-end development, managing both frontend user interfaces and backend systems.",
        jobDescription: "As a Fullstack Developer, you will handle complete features end-to-end, from implementing UI designs and frontend logic to developing backend APIs, database integration, and deployment pipelines.",
        jobRequirements: [
          "Proficiency in at least one frontend framework (React, Vue, or Angular)",
          "Proficiency in at least one backend language/framework (Node.js, Python/Django, or Java/Spring)",
          "Ability to design and interact with databases (SQL and NoSQL)",
          "Understanding of web security and performance optimization",
          "Experience with containerization (Docker) is a plus"
        ],
        salary: "₦600k / month",
        location: "Lekki, Lagos",
        type: "Contract"
      },
      {
        id: 4,
        title: "UI/UX Designer",
        jobTitle: "UI/UX Designer",
        slug: "ui-ux-designer",
        jobSummary: "Design intuitive, engaging, and modern user interfaces (UI) and user experiences (UX).",
        jobDescription: "You will be responsible for conducting user research, creating wireframes, building interactive prototypes, and producing final, high-fidelity UI designs. A strong focus on user-centered design principles is required.",
        jobRequirements: [
          "Expert proficiency in design tools like Figma or Adobe XD",
          "Proven experience creating wireframes, storyboards, user flows, and site maps",
          "Solid understanding of typography, color theory, and accessibility standards",
          "Ability to conduct user interviews and analyze qualitative data",
          "A strong portfolio showcasing previous UI/UX design work"
        ],
        salary: "₦400k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 5,
        title: "Mobile App Developer",
        jobTitle: "Mobile App Developer",
        slug: "mobile-app-developer",
        jobSummary: "Develop, test, and deploy cross-platform mobile applications for iOS and Android.",
        jobDescription: "Build and maintain high-quality cross-platform applications using modern frameworks like React Native or Flutter. This role requires understanding mobile architecture, performance tuning, and integration with platform-specific features.",
        jobRequirements: [
          "Proven experience with React Native or Flutter/Dart",
          "Solid understanding of the full mobile development lifecycle",
          "Experience integrating with RESTful APIs and third-party libraries",
          "Familiarity with mobile app deployment processes (App Store, Google Play)",
          "Knowledge of mobile UI/UX best practices"
        ],
        salary: "₦550k / month",
        location: "Ikotun, Lagos",
        type: "Full-Time"
      },
      {
        id: 6,
        title: "DevOps Engineer",
        jobTitle: "DevOps Engineer",
        slug: "devops-engineer",
        jobSummary: "Implement and manage Continuous Integration/Continuous Deployment (CI/CD) pipelines and cloud infrastructure.",
        jobDescription: "You will be responsible for setting up and managing cloud environments (AWS/Azure/GCP), automating deployment workflows, and ensuring the reliability, scalability, and security of the production systems.",
        jobRequirements: [
          "Strong experience with CI/CD tools (e.g., Jenkins, GitLab CI, GitHub Actions)",
          "Expertise in cloud platforms (AWS, Azure, or GCP)",
          "Proficiency with Infrastructure as Code (IaC) tools like Terraform or CloudFormation",
          "Solid understanding of containerization and orchestration (Docker, Kubernetes)",
          "Scripting skills in Bash or Python for automation"
        ],
        salary: "₦650k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 7,
        title: "Data Scientist",
        jobTitle: "Data Scientist",
        slug: "data-scientist",
        jobSummary: "Analyze complex datasets, build machine learning models, and extract meaningful business insights.",
        jobDescription: "Work with large datasets using Python, R, and SQL to analyze trends, develop predictive models, and create data visualizations. You will translate complex data findings into actionable business strategies.",
        jobRequirements: [
          "Proficiency in Python or R for data analysis and modeling",
          "Strong skills in SQL and working with large-scale databases",
          "Experience developing and deploying Machine Learning (ML) models",
          "Familiarity with data visualization tools (e.g., Tableau, Power BI, Matplotlib)",
          "A degree in a quantitative field (Statistics, Computer Science, Engineering)"
        ],
        salary: "₦700k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 8,
        title: "Cybersecurity Analyst",
        jobTitle: "Cybersecurity Analyst",
        slug: "cybersecurity-analyst",
        jobSummary: "Protect organizational systems and data by monitoring for, detecting, and responding to security threats.",
        jobDescription: "Monitor systems for breaches, conduct vulnerability assessments, implement and manage security protocols, and ensure company compliance with global and local security standards and regulations.",
        jobRequirements: [
          "Experience with Security Information and Event Management (SIEM) systems",
          "Knowledge of intrusion detection systems (IDS) and firewalls",
          "Understanding of network security protocols and best practices",
          "Ability to perform penetration testing and vulnerability scanning",
          "Relevant industry certifications (e.g., CompTIA Security+, CISSP) are highly desirable"
        ],
        salary: "₦600k / month",
        location: "Yaba, Lagos",
        type: "Contract"
      },
      {
        id: 9,
        title: "AI Engineer",
        jobTitle: "AI Engineer",
        slug: "ai-engineer",
        jobSummary: "Design, develop, and deploy machine learning and Artificial Intelligence (AI) models and applications.",
        jobDescription: "You will be responsible for taking AI projects from ideation to production. This involves data preprocessing, model training, performance optimization, and integrating AI services into larger applications.",
        jobRequirements: [
          "Strong programming skills in Python and its ML ecosystem (NumPy, Pandas, Scikit-learn)",
          "Expertise in deep learning frameworks like TensorFlow or PyTorch",
          "Experience with Natural Language Processing (NLP) or Computer Vision techniques",
          "Familiarity with MLOps principles and tools",
          "Proven ability to deploy models in a production environment"
        ],
        salary: "₦800k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 10,
        title: "Software Tester",
        jobTitle: "Software Tester",
        slug: "software-tester",
        jobSummary: "Ensure the quality and reliability of software applications through rigorous testing and bug reporting.",
        jobDescription: "You will create detailed test plans and test cases, execute manual and automated testing, identify software defects, and work with development teams to ensure software quality before official releases.",
        jobRequirements: [
          "Proven experience in manual and automated software testing",
          "Familiarity with bug tracking tools (e.g., Jira, Bugzilla)",
          "Ability to write clear, concise, and comprehensive test plans and test cases",
          "Knowledge of testing methodologies (functional, regression, performance)",
          "Experience with test automation frameworks (e.g., Selenium, Cypress) is a plus"
        ],
        salary: "₦350k / month",
        location: "Port Harcourt, Nigeria",
        type: "Full-Time"
      }
    ]
  },
  
  
  
  
  {
    name: "Healthcare",
    slug: "healthcare",
    jobs: [
      {
        id: 1,
        title: "Nurse",
        jobTitle: "Nurse",
        slug: "nurse",
        jobSummary: "Provide direct patient care, support, and education across various medical settings.",
        jobDescription: "Assist doctors during procedures, monitor patient vital signs, administer medications, manage patient records, and ensure proper medical treatment and emotional support are administered.",
        jobRequirements: [
          "Bachelor of Science in Nursing (B.N.Sc) or equivalent",
          "Current and valid nursing license from the appropriate regulatory body",
          "Proven ability to respond quickly and effectively to medical emergencies",
          "Excellent communication and interpersonal skills",
          "Minimum of 2 years of clinical experience is preferred"
        ],
        salary: "₦300k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 2,
        title: "Doctor",
        jobTitle: "Doctor (General Practitioner)",
        slug: "doctor",
        jobSummary: "Diagnose, treat, and manage a wide range of patient illnesses and health conditions.",
        jobDescription: "Work in hospitals or private practice to conduct comprehensive patient examinations, order and interpret diagnostic tests, provide accurate diagnoses, and develop effective treatment plans.",
        jobRequirements: [
          "Medical Degree (MBBS, MBBCh, or equivalent)",
          "Valid license to practice medicine in Nigeria (MDCN registration)",
          "Strong diagnostic and decision-making skills",
          "Commitment to continuous medical education",
          "Excellent bedside manner and empathy"
        ],
        salary: "₦1m / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 3,
        title: "Pharmacist",
        jobTitle: "Pharmacist",
        slug: "pharmacist",
        jobSummary: "Dispense prescription medications and provide expert advice on drug usage and safety.",
        jobDescription: "Review and dispense prescriptions, counsel patients on the correct use, dosage, and side effects of medications, and ensure compliance with pharmaceutical regulations and standards.",
        jobRequirements: [
          "Doctor of Pharmacy (Pharm.D) or Bachelor of Pharmacy (B.Pharm)",
          "Current registration with the Pharmacists Council of Nigeria (PCN)",
          "Deep knowledge of pharmacology and drug interactions",
          "Attention to detail and accuracy in dispensing medications",
          "Ability to communicate complex medical information clearly"
        ],
        salary: "₦400k / month",
        location: "Ibadan, Nigeria",
        type: "Full-Time"
      },
      {
        id: 4,
        title: "Medical Lab Scientist",
        jobTitle: "Medical Laboratory Scientist",
        slug: "medical-lab-scientist",
        jobSummary: "Perform complex laboratory tests and analyses to aid in disease diagnosis and treatment.",
        jobDescription: "Conduct various clinical, chemical, hematological, immunological, and microbiological tests. You will ensure the accuracy of results and report findings to physicians for diagnostic and treatment purposes.",
        jobRequirements: [
          "Bachelor of Medical Laboratory Science (BMLS)",
          "Current practicing license from the Medical Laboratory Science Council of Nigeria (MLSCN)",
          "Proficiency in operating and maintaining laboratory equipment",
          "Understanding of quality control procedures and laboratory safety standards",
          "Ability to work accurately under pressure"
        ],
        salary: "₦450k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 5,
        title: "Surgeon",
        jobTitle: "Surgeon",
        slug: "surgeon",
        jobSummary: "Perform surgical operations to treat diseases, injuries, or deformities.",
        jobDescription: "Specializing in fields like orthopedics or general surgery, you will perform pre-operative diagnosis, operate on patients, and provide post-operative care and follow-up.",
        jobRequirements: [
          "Post-graduate specialist training (e.g., Fellowship of the West African College of Surgeons or equivalent)",
          "Extensive experience in the specific surgical specialization",
          "Excellent manual dexterity and precision",
          "Ability to remain calm and decisive under high-pressure conditions",
          "Current medical license and malpractice insurance"
        ],
        salary: "₦1.2m / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 6,
        title: "Radiologist",
        jobTitle: "Radiologist",
        slug: "radiologist",
        jobSummary: "Use medical imaging (X-rays, MRIs, CT scans) to diagnose and treat diseases.",
        jobDescription: "You will interpret diagnostic images, perform image-guided procedures, and consult with other physicians to help determine the best course of treatment for patients.",
        jobRequirements: [
          "Post-graduate residency in Radiology",
          "Certification/Registration with the Medical and Dental Council of Nigeria (MDCN)",
          "Expert knowledge of imaging technologies and radiation safety",
          "Strong analytical and pattern recognition skills",
          "Commitment to accurate and timely reporting"
        ],
        salary: "₦700k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 7,
        title: "Physiotherapist",
        jobTitle: "Physiotherapist",
        slug: "physiotherapist",
        jobSummary: "Help patients recover, improve, and maintain physical mobility and function.",
        jobDescription: "Assess patients' physical condition, develop and implement personalized treatment plans using physical therapy techniques, and aid in rehabilitation from injury, illness, or disability.",
        jobRequirements: [
          "Degree in Physiotherapy (B.PT or DPT)",
          "Current registration with the Medical Rehabilitation Therapists Board of Nigeria (MRTB)",
          "Practical experience in a clinical or hospital setting",
          "Knowledge of therapeutic exercise and manual therapy techniques",
          "Strong motivational and patient education skills"
        ],
        salary: "₦350k / month",
        location: "Abuja, Nigeria",
        type: "Contract"
      },
      {
        id: 8,
        title: "Dentist",
        jobTitle: "Dentist",
        slug: "dentist",
        jobSummary: "Provide comprehensive dental treatments, care, and preventative services for oral health.",
        jobDescription: "Diagnose and treat oral issues, perform procedures such as fillings, extractions, and root canals, and educate patients on proper oral hygiene and preventative care.",
        jobRequirements: [
          "Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD)",
          "Valid license from the Medical and Dental Council of Nigeria (MDCN)",
          "Proficiency in general and cosmetic dentistry procedures",
          "Familiarity with dental technology and equipment",
          "Commitment to patient comfort and excellent communication"
        ],
        salary: "₦500k / month",
        location: "Port Harcourt, Nigeria",
        type: "Full-Time"
      },
      {
        id: 9,
        title: "Psychologist",
        jobTitle: "Clinical Psychologist",
        slug: "psychologist",
        jobSummary: "Offer mental health therapy, diagnostic assessments, and emotional support to individuals.",
        jobDescription: "Conduct psychological assessments, provide individual and group counseling, develop evidence-based treatment plans for mental and emotional disorders, and support patients' cognitive and behavioral health.",
        jobRequirements: [
          "Master's or Doctoral degree in Clinical Psychology",
          "Relevant professional registration or license to practice in Nigeria (if applicable)",
          "Proven experience with various therapeutic modalities (e.g., CBT, psychodynamic)",
          "Strong crisis intervention and active listening skills",
          "Commitment to ethical practice and patient confidentiality"
        ],
        salary: "₦450k / month",
        location: "Lagos, Nigeria",
        type: "Part-Time"
      },
      {
        id: 10,
        title: "Midwife",
        jobTitle: "Certified Midwife",
        slug: "midwife",
        jobSummary: "Provide specialized care and support to women during pregnancy, childbirth, and the postnatal period.",
        jobDescription: "Support mothers through all stages of pregnancy, assist with labor and delivery, provide necessary medical checks for mother and baby, and offer postnatal care and breastfeeding guidance.",
        jobRequirements: [
          "Diploma or degree in Midwifery or Nursing/Midwifery",
          "Current practicing license from the Nursing and Midwifery Council of Nigeria (NMCN)",
          "Experience in managing both routine and complex labor/delivery scenarios",
          "Ability to provide compassionate and culturally sensitive care",
          "Strong emergency response skills for maternal and fetal complications"
        ],
        salary: "₦300k / month",
        location: "Ibadan, Nigeria",
        type: "Full-Time"
      }
    ]
  },
  
  
  
  
  {
    name: "Education",
    slug: "education",
    jobs: [
      {
        id: 1,
        title: "Teacher",
        jobTitle: "Primary/Secondary School Teacher",
        slug: "teacher",
        jobSummary: "Educate students, prepare engaging lessons, and manage classroom activities.",
        jobDescription: "Prepare and deliver comprehensive lesson plans according to the curriculum, evaluate student performance through assignments and exams, and maintain a positive and disciplined learning environment.",
        jobRequirements: [
          "Bachelor's degree in Education or a relevant subject area",
          "Teaching certification or qualification (e.g., PGDE, TRCN registration)",
          "Proven classroom management skills",
          "Ability to use diverse teaching methodologies to engage students",
          "Strong knowledge of the relevant curriculum (e.g., NERDC, Cambridge)"
        ],
        salary: "₦250k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 2,
        title: "Lecturer",
        jobTitle: "University Lecturer",
        slug: "lecturer",
        jobSummary: "Deliver specialized lectures, conduct research, and mentor students in higher education.",
        jobDescription: "Engage in advanced teaching at undergraduate and postgraduate levels, conduct independent research leading to publications, and provide academic and career guidance to students in universities and colleges.",
        jobRequirements: [
          "Master's degree or Ph.D. in a relevant academic field",
          "Proven track record of research and academic publications",
          "Experience in delivering lectures and seminars to large groups",
          "Ability to supervise student projects and theses",
          "Excellent presentation and communication skills"
        ],
        salary: "₦400k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 3,
        title: "Tutor",
        jobTitle: "Academic Tutor",
        slug: "tutor",
        jobSummary: "Offer personalized or group academic lessons to help students improve their grades and understanding.",
        jobDescription: "Provide supplementary academic support to students outside of traditional classrooms. This involves assessing student needs, developing individualized learning plans, and focusing on challenging subject areas.",
        jobRequirements: [
          "Bachelor's degree in the subject area of expertise",
          "Prior experience in tutoring or teaching a specific age group",
          "Patience and strong ability to explain complex concepts simply",
          "Flexibility in scheduling and lesson delivery (in-person or online)",
          "Knowledge of test preparation strategies (e.g., WAEC, IGCSE, SAT)"
        ],
        salary: "₦150k / month",
        location: "Ibadan, Nigeria",
        type: "Part-Time"
      },
      {
        id: 4,
        title: "School Administrator",
        jobTitle: "School Administrator/Principal",
        slug: "school-administrator",
        jobSummary: "Lead the strategic and operational management of a school or academic department.",
        jobDescription: "Oversee staff management, coordinate teacher activities, manage admissions and school finances, and ensure the overall academic and ethical performance of the institution is of a high standard.",
        jobRequirements: [
          "Master's degree in Educational Administration or related field",
          "Minimum of 5 years of proven experience in a school leadership role",
          "Strong financial management and budgeting skills",
          "Knowledge of current educational laws, policies, and best practices",
          "Excellent leadership and conflict resolution skills"
        ],
        salary: "₦350k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 5,
        title: "Guidance Counselor",
        jobTitle: "Guidance Counselor",
        slug: "guidance-counselor",
        jobSummary: "Provide students with support for academic, career, and personal/social development.",
        jobDescription: "Counsel students individually and in groups, assist with course selection and career planning, address behavioral and emotional concerns, and act as a liaison between students, parents, and teachers.",
        jobRequirements: [
          "Master's degree in Guidance and Counseling or School Psychology",
          "Relevant professional certification or license",
          "Experience in administering and interpreting psychological and vocational tests",
          "Knowledge of adolescent development and mental health challenges",
          "Exceptional empathy and communication skills"
        ],
        salary: "₦200k / month",
        location: "Kano, Nigeria",
        type: "Full-Time"
      },
      {
        id: 6,
        title: "Librarian",
        jobTitle: "School Librarian",
        slug: "librarian",
        jobSummary: "Manage and curate the school's collection of books and digital learning resources.",
        jobDescription: "Organize and catalog library materials (both physical and digital), assist students and staff with research and information retrieval, and manage reading programs to promote literacy.",
        jobRequirements: [
          "Bachelor's or Master's degree in Library Science or Information Management",
          "Familiarity with library management software (e.g., Koha, Destiny)",
          "Knowledge of cataloging and classification systems (e.g., Dewey Decimal)",
          "Ability to teach information literacy and research skills",
          "Strong organizational and interpersonal skills"
        ],
        salary: "₦180k / month",
        location: "Enugu, Nigeria",
        type: "Full-Time"
      },
      {
        id: 7,
        title: "Education Consultant",
        jobTitle: "Education Consultant",
        slug: "education-consultant",
        jobSummary: "Provide expert advice to educational institutions or families on strategic planning and academic excellence.",
        jobDescription: "Guide institutions on curriculum development, teacher training, and accreditation processes. May also advise individual students on university admissions, exam preparation, and career path alignment.",
        jobRequirements: [
          "Extensive background (5+ years) in educational leadership or policy",
          "Master's degree or higher in Education, Public Policy, or Business Administration",
          "Proven ability to analyze educational data and propose actionable strategies",
          "Excellent report writing and client management skills",
          "Deep knowledge of the Nigerian and international education landscape"
        ],
        salary: "₦300k / month",
        location: "Lagos, Nigeria",
        type: "Contract"
      },
      {
        id: 8,
        title: "Researcher",
        jobTitle: "Academic Researcher",
        slug: "researcher",
        jobSummary: "Conduct and manage academic and field research projects across various disciplines.",
        jobDescription: "Work within institutions or independently to design studies, collect and analyze data, write research proposals, secure funding, and publish findings in peer-reviewed journals to support education and knowledge.",
        jobRequirements: [
          "Ph.D. in a specialized academic field is highly preferred",
          "Demonstrable experience in qualitative and quantitative research methodologies",
          "Proficiency in statistical analysis software (e.g., SPSS, R, Stata)",
          "A strong record of successful grant applications and high-impact publications",
          "Ability to lead research teams and collaborate across departments"
        ],
        salary: "₦500k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 9,
        title: "Head Teacher",
        jobTitle: "Head Teacher/School Principal",
        slug: "head-teacher",
        jobSummary: "Oversee the day-to-day operations and academic vision of a primary or secondary school.",
        jobDescription: "Supervise teaching staff, implement and review the school curriculum, manage student discipline, and work to ensure all students achieve their academic and personal potential.",
        jobRequirements: [
          "Minimum of 7 years of teaching experience with at least 3 years in a supervisory role",
          "Post-graduate qualification in educational leadership is advantageous",
          "Exceptional organizational and strategic planning abilities",
          "Strong community engagement and parental communication skills",
          "Familiarity with school governance and budgeting"
        ],
        salary: "₦400k / month",
        location: "Port Harcourt, Nigeria",
        type: "Full-Time"
      },
      {
        id: 10,
        title: "Special Education Teacher",
        jobTitle: "Special Education Teacher",
        slug: "special-education-teacher",
        jobSummary: "Provide specialized instruction and support to children with diverse learning needs and disabilities.",
        jobDescription: "Develop, implement, and monitor Individualized Education Programs (IEPs), adapt general education lessons to meet student needs, and work collaboratively with parents and specialists.",
        jobRequirements: [
          "Bachelor's degree in Special Education or a related field",
          "Certification or training in specific learning disabilities (e.g., Autism, Dyslexia)",
          "Experience with assistive technology and adaptive instructional materials",
          "Patience, creativity, and a high level of emotional intelligence",
          "Knowledge of assessment tools for identifying learning needs"
        ],
        salary: "₦280k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      }
    ]
  },
  
  
  
  
  {
    name: "Business",
    slug: "business",
    jobs: [
      {
        id: 1,
        title: "Business Analyst",
        jobTitle: "Business Analyst",
        slug: "business-analyst",
        jobSummary: "Analyze organizational needs, identify problems, and propose effective, technology-driven solutions.",
        jobDescription: "Work with stakeholders to gather and document detailed business requirements. You will analyze data, model processes, and recommend strategies to improve business operations, efficiency, and profitability.",
        jobRequirements: [
          "Bachelor's degree in Business, IT, or related field",
          "Proven experience in requirements gathering and business process modeling",
          "Familiarity with analysis tools (e.g., Microsoft Visio, Jira)",
          "Strong data analysis and problem-solving skills",
          "Certification (e.g., CBAP) is a significant advantage"
        ],
        salary: "₦400k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 2,
        title: "Accountant",
        jobTitle: "Accountant",
        slug: "accountant",
        jobSummary: "Manage and maintain a company's financial records, ensuring accuracy and compliance.",
        jobDescription: "Prepare and examine financial statements, manage budgets, process payroll, handle tax compliance, and ensure all financial transactions are accurately recorded and reported according to legal standards.",
        jobRequirements: [
          "Bachelor's degree in Accounting, Finance, or a related field",
          "Professional certification (ICAN, ACCA, or equivalent) is required",
          "Proficiency in accounting software (e.g., QuickBooks, Sage, SAP)",
          "Deep knowledge of financial regulations and tax laws in Nigeria",
          "Excellent attention to detail and quantitative skills"
        ],
        salary: "₦350k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 3,
        title: "Project Manager",
        jobTitle: "Project Manager",
        slug: "project-manager",
        jobSummary: "Lead and manage business projects from inception to completion, ensuring goals are met on time and within budget.",
        jobDescription: "Define project scope, plan timelines and resources, lead cross-functional teams, track progress against milestones, manage risks, and ensure all project deliverables meet stakeholder expectations.",
        jobRequirements: [
          "Proven working experience as a project administrator or manager (3+ years)",
          "Project Management Professional (PMP) or PRINCE2 certification is highly desired",
          "Expertise in project management software (e.g., Microsoft Project, Asana, Trello)",
          "Strong leadership, negotiation, and communication skills",
          "Ability to manage multiple concurrent projects"
        ],
        salary: "₦500k / month",
        location: "Lagos, Nigeria",
        type: "Contract"
      },
      {
        id: 4,
        title: "Sales Executive",
        jobTitle: "Sales Executive",
        slug: "sales-executive",
        jobSummary: "Drive revenue growth by identifying, pursuing, and closing new product and service sales opportunities.",
        jobDescription: "Develop sales strategies, identify new customers and market segments, maintain strong relationships with existing clients, and consistently work towards achieving and exceeding quarterly sales targets.",
        jobRequirements: [
          "Proven track record of success in a sales-driven role (minimum 2 years)",
          "Excellent persuasive communication and negotiation skills",
          "Ability to understand and articulate complex product/service offerings",
          "Familiarity with CRM software (e.g., Salesforce, HubSpot)",
          "Strong business acumen and market awareness"
        ],
        salary: "₦300k / month",
        location: "Ibadan, Nigeria",
        type: "Full-Time"
      },
      {
        id: 5,
        title: "Human Resource Manager",
        jobTitle: "Human Resource Manager",
        slug: "human-resource-manager",
        jobSummary: "Oversee all aspects of staff recruitment, training, development, and employee welfare.",
        jobDescription: "Handle the full employee lifecycle, including talent acquisition, performance management, benefits administration, employee relations, and ensuring compliance with all national labor laws.",
        jobRequirements: [
          "Bachelor's degree in Human Resources or Business Administration",
          "Professional HR certification (CIPM, SHRM, or equivalent) is preferred",
          "Minimum of 5 years of progressive experience in HR roles",
          "In-depth knowledge of Nigerian labor law and HR best practices",
          "Exceptional conflict resolution and interpersonal skills"
        ],
        salary: "₦450k / month",
        location: "Port Harcourt, Nigeria",
        type: "Full-Time"
      },
      {
        id: 6,
        title: "Marketing Specialist",
        jobTitle: "Digital Marketing Specialist",
        slug: "marketing-specialist",
        jobSummary: "Develop, execute, and measure integrated marketing campaigns across digital and traditional channels.",
        jobDescription: "Create engaging content, manage social media campaigns, run paid advertising (PPC/SEM), analyze performance metrics using tools like Google Analytics, and report on ROI to drive brand awareness and lead generation.",
        jobRequirements: [
          "Proven experience in developing and executing digital marketing campaigns",
          "Proficiency with Google Ads, social media advertising platforms, and SEO/SEM principles",
          "Strong analytical skills and experience with marketing analytics tools",
          "Excellent content creation and copywriting abilities",
          "Familiarity with email marketing platforms"
        ],
        salary: "₦380k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 7,
        title: "Customer Service Officer",
        jobTitle: "Customer Service Officer",
        slug: "customer-service-officer",
        jobSummary: "Serve as the primary point of contact for customers, addressing inquiries and resolving issues to ensure satisfaction.",
        jobDescription: "Handle customer inquiries via phone, email, and chat, process orders and returns, investigate and resolve complaints efficiently, and provide detailed information about products and services.",
        jobRequirements: [
          "Minimum of OND/HND/B.Sc in any related discipline",
          "Proven experience in a customer-facing role",
          "Exceptional verbal and written communication skills",
          "Proficiency with CRM systems and ticketing software",
          "A high degree of patience and a professional, empathetic demeanor"
        ],
        salary: "₦200k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 8,
        title: "Entrepreneur",
        jobTitle: "Entrepreneur/Startup Founder",
        slug: "entrepreneur",
        jobSummary: "Conceive, launch, and manage a new, innovative business venture from the ground up.",
        jobDescription: "Identify market opportunities, create a comprehensive business plan, secure funding (bootstrapping or external), manage all aspects of operations (product, marketing, finance), and drive the company's long-term growth.",
        jobRequirements: [
          "Highly innovative and visionary mindset",
          "Demonstrable experience in business planning and strategy",
          "Resilience, adaptability, and high tolerance for risk",
          "Strong network-building and fundraising capabilities",
          "Proficiency in basic financial modeling and pitch deck creation"
        ],
        salary: "Variable",
        location: "Nationwide, Nigeria",
        type: "Self-Employed"
      },
      {
        id: 9,
        title: "Financial Analyst",
        jobTitle: "Financial Analyst",
        slug: "financial-analyst",
        jobSummary: "Analyze financial data and reports to guide strategic business investments and budgeting decisions.",
        jobDescription: "Evaluate investment opportunities, analyze market trends, perform variance analysis, create complex financial models (DCF, sensitivity analysis), and present findings to senior management for decision-making.",
        jobRequirements: [
          "Bachelor's degree in Finance, Economics, or Mathematics",
          "Progress towards a professional certification (CFA, ACA, or similar) is highly valued",
          "Expert proficiency in Microsoft Excel for financial modeling and data manipulation",
          "Strong understanding of accounting principles and financial statement analysis",
          "Excellent presentation skills to communicate complex data clearly"
        ],
        salary: "₦420k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 10,
        title: "Consultant",
        jobTitle: "Management Consultant",
        slug: "consultant",
        jobSummary: "Provide expert, objective advice to organizations to solve management problems and improve performance.",
        jobDescription: "Analyze a client's organizational structure and performance, identify areas for improvement, develop strategic recommendations (e.g., in operations, IT, or strategy), and assist with the implementation of changes.",
        jobRequirements: [
          "Master's degree in Business Administration (MBA) or a related field",
          "Minimum of 5 years of experience in a top-tier consulting firm or related industry",
          "Exceptional analytical and problem-solving capabilities",
          "Proven experience leading large-scale projects and change initiatives",
          "Willingness to travel frequently for client engagements"
        ],
        salary: "₦600k / month",
        location: "Abuja, Nigeria",
        type: "Contract"
      }
    ]
  },
  
  
  
  
  {
    name: "Engineering",
    slug: "engineering",
    jobs: [
      {
        id: 1,
        title: "Civil Engineer",
        jobTitle: "Civil Engineer",
        slug: "civil-engineer",
        jobSummary: "Design, plan, and oversee the construction of public and private infrastructure projects.",
        jobDescription: "Plan, design, and supervise infrastructure projects such as roads, bridges, water systems, and buildings. You will manage project budgets, ensure structural integrity, and adhere to safety and regulatory standards.",
        jobRequirements: [
          "Bachelor's degree in Civil Engineering",
          "Registration with COREN (Council for the Regulation of Engineering in Nigeria)",
          "Proficiency in CAD software (e.g., AutoCAD, Civil 3D)",
          "Proven experience in site management and construction supervision",
          "Strong knowledge of building codes and safety regulations"
        ],
        salary: "₦500k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 2,
        title: "Mechanical Engineer",
        jobTitle: "Mechanical Engineer",
        slug: "mechanical-engineer",
        jobSummary: "Design, develop, and maintain mechanical systems and thermal devices.",
        jobDescription: "Work on machines, engines, HVAC systems, and manufacturing equipment to ensure optimal functionality, efficiency, and reliability. This involves design, testing, and maintenance of mechanical components.",
        jobRequirements: [
          "Bachelor's degree in Mechanical Engineering",
          "Registration with COREN is highly preferred",
          "Proficiency in 3D modeling software (e.g., SolidWorks, Inventor)",
          "Strong understanding of thermodynamics, mechanics, and material science",
          "Experience in a manufacturing or industrial environment"
        ],
        salary: "₦480k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 3,
        title: "Electrical Engineer",
        jobTitle: "Electrical Engineer",
        slug: "electrical-engineer",
        jobSummary: "Design, develop, and manage electrical power and electronic control systems.",
        jobDescription: "Design, develop, and maintain electrical equipment, power generation, distribution systems, and complex electronic circuits. You will ensure systems are efficient, safe, and compliant with all standards.",
        jobRequirements: [
          "Bachelor's degree in Electrical or Electronic Engineering",
          "Experience with power system analysis and design tools (e.g., ETAP, MATLAB)",
          "Knowledge of electrical wiring standards and safety protocols",
          "Familiarity with Programmable Logic Controllers (PLCs) and industrial control systems",
          "COREN registration is a plus"
        ],
        salary: "₦470k / month",
        location: "Port Harcourt, Nigeria",
        type: "Contract"
      },
      {
        id: 4,
        title: "Chemical Engineer",
        jobTitle: "Chemical Engineer",
        slug: "chemical-engineer",
        jobSummary: "Design and manage industrial processes that convert raw materials into commercial products.",
        jobDescription: "Develop and optimize processes for producing fuels, pharmaceuticals, food, and chemicals. You will work to improve efficiency, reduce waste, and ensure process safety and environmental compliance.",
        jobRequirements: [
          "Bachelor's degree in Chemical Engineering",
          "Experience with process simulation software (e.g., Aspen HYSYS)",
          "Strong background in fluid dynamics, heat transfer, and reaction kinetics",
          "Knowledge of industrial safety standards and environmental regulations",
          "Experience in a refinery, food processing, or pharmaceutical plant is ideal"
        ],
        salary: "₦550k / month",
        location: "Ibadan, Nigeria",
        type: "Full-Time"
      },
      {
        id: 5,
        title: "Petroleum Engineer",
        jobTitle: "Petroleum Engineer",
        slug: "petroleum-engineer",
        jobSummary: "Develop and implement methods for the safe and efficient extraction of oil and natural gas.",
        jobDescription: "Design drilling and completion plans, optimize reservoir performance to maximize yield, and manage oil and gas field operations, all while adhering to environmental and safety best practices.",
        jobRequirements: [
          "Bachelor's degree in Petroleum Engineering or a closely related field",
          "Knowledge of reservoir engineering, well logging, and drilling technology",
          "Experience with industry-standard simulation software (e.g., PETREL)",
          "Strong understanding of health, safety, and environmental (HSE) standards",
          "Willingness to work on-site at rigs or remote locations"
        ],
        salary: "₦650k / month",
        location: "Warri, Nigeria",
        type: "Full-Time"
      },
      {
        id: 6,
        title: "Aerospace Engineer",
        jobTitle: "Aerospace Engineer",
        slug: "aerospace-engineer",
        jobSummary: "Design and test aircraft, spacecraft, missiles, and related equipment.",
        jobDescription: "Work on the development of airplanes, satellites, and rockets. You will focus on aerodynamic design, structural integrity, propulsion systems, and ensuring safety and performance specifications are met.",
        jobRequirements: [
          "Bachelor's or Master's degree in Aerospace or Aeronautical Engineering",
          "Experience with computational fluid dynamics (CFD) and finite element analysis (FEA)",
          "Knowledge of flight dynamics and control systems",
          "Familiarity with industry-specific design software",
          "Ability to pass relevant security clearance checks"
        ],
        salary: "₦700k / month",
        location: "Lagos, Nigeria",
        type: "Contract"
      },
      {
        id: 7,
        title: "Environmental Engineer",
        jobTitle: "Environmental Engineer",
        slug: "environmental-engineer",
        jobSummary: "Develop technical solutions to mitigate and manage environmental problems like pollution and waste.",
        jobDescription: "Design systems for water treatment, air pollution control, and waste management. You will conduct environmental impact assessments (EIAs) and ensure projects comply with national environmental regulations.",
        jobRequirements: [
          "Bachelor's degree in Environmental, Civil, or Chemical Engineering",
          "Knowledge of environmental modeling software",
          "Experience with regulatory compliance and permitting processes (e.g., NESREA)",
          "Strong data collection and interpretation skills for pollution monitoring",
          "Commitment to sustainability and green engineering practices"
        ],
        salary: "₦420k / month",
        location: "Abuja, Nigeria",
        type: "Full-Time"
      },
      {
        id: 8,
        title: "Structural Engineer",
        jobTitle: "Structural Engineer",
        slug: "structural-engineer",
        jobSummary: "Design and analyze the structural integrity of buildings, bridges, and other large structures.",
        jobDescription: "Calculate loads and stresses, select appropriate construction materials, and create blueprints to ensure buildings, bridges, and other structures are safe, stable, and meet all relevant safety codes.",
        jobRequirements: [
          "Bachelor's degree in Civil or Structural Engineering",
          "Proven experience using structural analysis software (e.g., STAAD Pro, SAP2000)",
          "Deep knowledge of concrete, steel, and timber design codes (e.g., Eurocode, BS)",
          "COREN registration or pursuit of professional status is mandatory",
          "Experience collaborating with architects and construction teams"
        ],
        salary: "₦500k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      },
      {
        id: 9,
        title: "Mining Engineer",
        jobTitle: "Mining Engineer",
        slug: "mining-engineer",
        jobSummary: "Plan and manage the safe and efficient extraction of valuable minerals and resources from the earth.",
        jobDescription: "Design both surface and underground mine layouts, select extraction techniques, manage heavy equipment, and ensure adherence to stringent safety and environmental regulations in the mining sector.",
        jobRequirements: [
          "Bachelor's degree in Mining Engineering",
          "Experience with mine planning software (e.g., Surpac, Vulcan)",
          "Strong understanding of geology and mineralogy",
          "Knowledge of health and safety standards for mining operations",
          "Ability to work in remote, sometimes challenging, environments"
        ],
        salary: "₦550k / month",
        location: "Jos, Nigeria",
        type: "Contract"
      },
      {
        id: 10,
        title: "Industrial Engineer",
        jobTitle: "Industrial Engineer",
        slug: "industrial-engineer",
        jobSummary: "Optimize complex production, logistics, and manufacturing systems for maximum efficiency and minimal waste.",
        jobDescription: "Analyze production data, design new facility layouts, develop process improvements, and implement strategies to improve efficiency, reduce costs, and enhance product quality across industrial operations.",
        jobRequirements: [
          "Bachelor's degree in Industrial Engineering or a related field",
          "Experience with lean manufacturing and Six Sigma methodologies",
          "Proficiency in simulation software and statistical process control (SPC)",
          "Strong quantitative analysis and systems thinking skills",
          "Experience in supply chain or logistics optimization"
        ],
        salary: "₦470k / month",
        location: "Lagos, Nigeria",
        type: "Full-Time"
      }
    ]
  }
];