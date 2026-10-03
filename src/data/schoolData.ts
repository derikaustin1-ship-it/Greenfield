export interface SchoolInfo {
  name: string;
  tagline: string;
  type: string;
  curriculum: string;
  gender: string;
  grades: string;
  location: string;
  address: string;
  phone: string;
  email: string;
  officeHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const schoolInfo: SchoolInfo = {
  name: "Greenfield Matriculation School",
  tagline: "Growing Minds. Building Futures.",
  type: "Day School",
  curriculum: "Matriculation Curriculum",
  gender: "Co-Educational",
  grades: "Pre-Primary to Grade 12",
  location: "Coimbatore, Tamil Nadu, India",
  address: "Greenfield Matriculation School, Saravanampatti, Coimbatore, Tamil Nadu 641035, India",
  phone: "+91 98765 43210",
  email: "hello@greenfieldschool.example",
  officeHours: {
    weekdays: "8:30 AM – 4:30 PM",
    saturday: "8:30 AM – 1:00 PM",
    sunday: "Closed",
  }
};

export const quickStats = [
  { value: "20+", label: "Years of Learning", subtext: "Established in 2004", icon: "Award" },
  { value: "1500+", label: "Happy Students", subtext: "Pre-Primary to Grade 12", icon: "Users" },
  { value: "100+", label: "Dedicated Educators", subtext: "Qualified & Caring Staff", icon: "GraduationCap" },
  { value: "25+", label: "Clubs & Activities", subtext: "Holistic Student Life", icon: "Activity" },
];

export const coreValues = [
  { name: "Integrity", desc: "Instilling strong ethical principles, truthfulness, and responsibility in every child." },
  { name: "Respect", desc: "Fostering mutual respect for peers, teachers, elders, and the environment." },
  { name: "Curiosity", desc: "Encouraging active questioning, critical thinking, and lifelong joy of learning." },
  { name: "Responsibility", desc: "Building self-discipline, accountability, and leadership qualities." },
  { name: "Compassion", desc: "Nurturing empathy, kindness, and active community involvement." },
  { name: "Excellence", desc: "Striving for individual best performance in academics, sports, and character." }
];

export const whyChooseUs = [
  {
    id: "academic-foundation",
    title: "Strong Academic Foundation",
    description: "Structured learning tailored to build deep conceptual understanding, confidence, and exam excellence.",
    icon: "BookOpen",
    highlight: "Matriculation Excellence"
  },
  {
    id: "caring-teachers",
    title: "Caring & Qualified Teachers",
    description: "Passionate educators providing personalized guidance, encouragement, and mentor support for every student.",
    icon: "HeartHandshake",
    highlight: "1:15 Teacher-Student Ratio"
  },
  {
    id: "holistic-development",
    title: "Holistic Development",
    description: "Balanced focus on sports, arts, music, STEM, and value education alongside core academic subjects.",
    icon: "Compass",
    highlight: "All-Round Growth"
  },
  {
    id: "safe-environment",
    title: "Safe & Supportive Campus",
    description: "CCTV-monitored, lush green campus with friendly staff, dedicated security, and safe transport.",
    icon: "ShieldCheck",
    highlight: "100% Secure Campus"
  },
  {
    id: "future-ready",
    title: "Future-Ready Skills",
    description: "Integrating digital literacy, public speaking, inquiry-based learning, and creative problem solving.",
    icon: "Sparkles",
    highlight: "Modern Learning Tools"
  }
];

export const academicStages = [
  {
    id: "early-years",
    stage: "Early Years",
    grades: "Pre-Primary (Kindergarten)",
    tag: "Foundational Growth",
    description: "Play-based learning, phonics, storytelling, motor skills development, and friendly social integration.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    features: [
      "Activity-based play learning",
      "Language & phonics focus",
      "Expressive arts & crafts",
      "Gentle habit formation"
    ]
  },
  {
    id: "primary-middle",
    stage: "Primary & Middle School",
    grades: "Grades 1 – 8",
    tag: "Core Skill Building",
    description: "Strong fundamentals in Mathematics, Science, Languages, Social Studies, computer literacy, and team collaboration.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Conceptual Mathematics & Science labs",
      "Language proficiency & library reading",
      "Co-curricular clubs & sports",
      "Interactive smart classroom learning"
    ]
  },
  {
    id: "senior-school",
    stage: "Senior School",
    grades: "Grades 9 – 12",
    tag: "Academic Mastery & Careers",
    description: "Rigorous Matriculation Board preparation, focused science and commerce streams, career guidance, and leadership roles.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    features: [
      "Specialized Board exam coaching",
      "Advanced Physics, Chemistry & Biology labs",
      "Computer Science & Commerce streams",
      "Career counseling & entrance guidance"
    ]
  }
];

export const facilities = [
  {
    id: "smart-classrooms",
    name: "Smart Classrooms",
    category: "Academic",
    description: "Well-ventilated classrooms equipped with interactive digital smart boards, comfortable ergonomics, and audiovisual aids.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "science-labs",
    name: "Science Laboratories",
    category: "Academic",
    description: "Fully equipped Physics, Chemistry, and Biology laboratories enabling hands-on experimentation under teacher supervision.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "library",
    name: "Central Library",
    category: "Academic",
    description: "Quiet, spacious reading center holding over 10,000 books, periodicals, encyclopedias, and digital learning subscriptions.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "computer-lab",
    name: "Computer & Robotics Lab",
    category: "Technology",
    description: "Modern high-speed computer terminal setup with coding modules, digital productivity software, and internet safety.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sports-ground",
    name: "Sports Complex & Field",
    category: "Sports",
    description: "Spacious green outdoor playfields for Football, Cricket, Athletics, Basketball court, and Volleyball court.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "indoor-hall",
    name: "Indoor Activity Hall & Stage",
    category: "Culture",
    description: "Multipurpose auditorium for school assemblies, Table Tennis, Badminton, Chess, Yoga, and drama productions.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "art-music",
    name: "Art & Music Studios",
    category: "Culture",
    description: "Creative spaces for fine arts, pottery, classical Indian vocal, keyboard, guitar, and traditional dance rehearsals.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "transport",
    name: "Safe Transport Fleet",
    category: "Safety",
    description: "GPS-enabled fleet of school buses covering Saravanampatti and key residential corridors across Coimbatore with trained female attendants.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
  }
];

export const studentLifeActivities = [
  {
    title: "Sports & Athletics",
    desc: "Cricket, Football, Basketball, Athletics, Badminton, Yoga, and Annual Sports Day tournaments.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    badge: "Sports"
  },
  {
    title: "Performing Arts & Music",
    desc: "Annual Cultural Fest, choral music, classical Indian dance, drama competitions, and talent showcases.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    badge: "Arts"
  },
  {
    title: "Science & Robotics Club",
    desc: "Hands-on projects, science exhibition models, coding bootcamps, and inter-school STEM challenges.",
    image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=800&q=80",
    badge: "Clubs"
  },
  {
    title: "Eco Club & Sustainability",
    desc: "Tree planting drives, rainwater harvesting awareness, campus recycling, and organic garden care.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
    badge: "Community"
  },
  {
    title: "Literary & Public Speaking",
    desc: "Debate club, elocution, quiz competitions, creative writing, and student school magazine editorial team.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    badge: "Leadership"
  },
  {
    title: "Educational Field Trips",
    desc: "Visits to planetariums, nature reserves, historical heritage sites in Tamil Nadu, and industrial science centers.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    badge: "Excursions"
  }
];

export const achievementsList = [
  {
    title: "100% Matriculation Board Pass Rate",
    year: "2025 – 2026 Academic Session",
    category: "Academic Excellence",
    description: "Greenfield Grade 10 & 12 state board candidates secured 100% pass results with over 45% scoring distinction honors.",
    metric: "100% Pass"
  },
  {
    title: "Regional Inter-School Science Fair Champions",
    year: "Coimbatore District Science Meet",
    category: "Science & Innovation",
    description: "Our middle school student team won 1st Place for their renewable solar water purification working model project.",
    metric: "1st Rank"
  },
  {
    title: "District Athletics & Football Runners-Up",
    year: "Junior Sports Meet",
    category: "Sports Championship",
    description: "Greenfield Under-16 Football team reached the district finals, with 3 students selected for state regional training.",
    metric: "District Finalist"
  },
  {
    title: "State Level Tamil & English Debate Winner",
    year: "Youth Literary Fest",
    category: "Public Speaking",
    description: "Grade 11 student secured the Best Speaker trophy in the Inter-School Oratory Competition held in Tiruchirappalli.",
    metric: "Best Speaker"
  },
  {
    title: "Green Campus Sustainability Award",
    year: "Clean Schools Initiative",
    category: "Community & Eco Drive",
    description: "Recognized locally for zero single-use plastic policy, campus composting, and student-led environmental drives.",
    metric: "Eco Champion"
  },
  {
    title: "Inter-School Classical Cultural Trophy",
    year: "Kongu Region Cultural Fest",
    category: "Creative Arts",
    description: "Greenfield Dance & Music troupe won 1st Prize in Group Folk Dance and Instrumental Ensemble showcase.",
    metric: "Top Ensemble"
  }
];

export const parentTestimonials = [
  {
    quote: "Greenfield has provided a truly nurturing environment for my daughter. Her confidence in English public speaking and Mathematics has grown leaps and bounds in just two years. The teachers genuinely care.",
    name: "Anita R.",
    role: "Parent of Grade 6 Student",
    location: "Saravanampatti, Coimbatore"
  },
  {
    quote: "What stands out about Greenfield is the perfect balance between strong academic preparation for Matriculation board exams and active participation in sports and clubs. My son loves going to school every single morning.",
    name: "Rajesh K.",
    role: "Parent of Grade 9 Student",
    location: "Ganapathy, Coimbatore"
  },
  {
    quote: "The safety, discipline, and warmth of Greenfield give us complete peace of mind. The principal and staff are always approachable and keep parents informed about every child's individual progress.",
    name: "Priya S.",
    role: "Parent of Grade 4 Student",
    location: "Kalapatti, Coimbatore"
  }
];

export const newsUpdates = [
  {
    id: "sports-meet-2026",
    title: "Greenfield Annual Sports Meet Celebrates Student Grit & Spirit",
    category: "Sports & Events",
    date: "October 15, 2026",
    description: "A vibrant day of athletics, relay races, march pasts, and teamwork featuring energetic participation across all four school houses.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "science-week-2026",
    title: "Science & Innovation Week Inspires Young Inventors",
    category: "Academic & STEM",
    date: "September 28, 2026",
    description: "Students from Grades 3 to 12 showcased over 120 interactive projects covering robotics, green energy, and environmental science.",
    image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "new-academic-orientation",
    title: "New Academic Year Parent-Teacher Orientation Workshop",
    category: "Admissions & Parents",
    date: "August 10, 2026",
    description: "Principal welcomed parents to outline learning objectives, positive parenting strategies, and digital communication tools for the year.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80"
  }
];

export const galleryImages = [
  {
    id: "g1",
    title: "Bright & Spacious Smart Classroom",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g2",
    title: "Annual Sports Day Relay Race",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g3",
    title: "Lush Green School Main Entrance & Grounds",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g4",
    title: "Hands-on Chemistry Lab Experiment",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g5",
    title: "Cultural Music & Dance Performance",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g6",
    title: "Junior Kindergarten Storytelling Corner",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g7",
    title: "Inter-House Football Championship",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g8",
    title: "Computer Science Coding Session",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g9",
    title: "Science Fair Project Presentation",
    category: "Events",
    image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g10",
    title: "Student Library Reading Hour",
    category: "Student Life",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g11",
    title: "Outdoor Yoga & Wellness Morning",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "g12",
    title: "Art & Painting Exhibition",
    category: "Arts",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80"
  }
];

export const admissionsSteps = [
  {
    step: "Step 1",
    title: "Enquiry & Prospectus",
    desc: "Submit an online enquiry form or visit our school admissions desk in Saravanampatti to receive the informational prospectus."
  },
  {
    step: "Step 2",
    title: "Campus Guided Tour",
    desc: "Schedule a campus walk-through with our counselor to see classrooms, labs, library, and sports facilities in person."
  },
  {
    step: "Step 3",
    title: "Friendly Interaction",
    desc: "An informal, encouraging interaction with the student and parents to understand learning aptitude and individual interests."
  },
  {
    step: "Step 4",
    title: "Application Submission",
    desc: "Fill out the registration form with necessary birth certificate, transfer certificate (if applicable), and passport photos."
  },
  {
    step: "Step 5",
    title: "Seat Confirmation",
    desc: "Upon review, seat offer letter is issued. Complete fee payment and uniform distribution to welcome your child to Greenfield!"
  }
];

export const requiredDocs = [
  "Student Original Birth Certificate & 2 Photocopies",
  "Transfer Certificate (TC) from previous recognized school (for Grade 2 & above)",
  "Report Card / Marksheet of previous completed academic year",
  "4 Passport-size recent photographs of Student",
  "2 Passport-size photographs of Parent / Guardian",
  "Aadhaar Card copy of Student and Parents",
  "Community / Caste Certificate copy (if applicable)"
];

export const ageGuidelines = [
  { grade: "Pre-KG / Playgroup", age: "2.5 to 3.5 Years", cutoff: "As of June 30th" },
  { grade: "LKG (Lower KG)", age: "3.5 to 4.5 Years", cutoff: "As of June 30th" },
  { grade: "UKG (Upper KG)", age: "4.5 to 5.5 Years", cutoff: "As of June 30th" },
  { grade: "Grade 1", age: "5.5 to 6.5 Years", cutoff: "As of June 30th" },
  { grade: "Grade 2 to 10", age: "Corresponding Age Criteria", cutoff: "Based on previous grade pass TC" },
  { grade: "Grade 11 & 12", age: "15+ Years", cutoff: "Based on Grade 10 State/CBSE Board results" }
];

export const faqsList = [
  {
    question: "What is the medium of instruction at Greenfield?",
    answer: "English is the primary medium of instruction across all classes. Tamil and Hindi are offered as Second/Third languages under the Matriculation curriculum guidelines."
  },
  {
    question: "What are the school timings for different grades?",
    answer: "Pre-Primary (Pre-KG to UKG): 8:45 AM to 12:30 PM. Primary to Senior Secondary (Grades 1 to 12): 8:45 AM to 3:45 PM, Monday through Friday. Saturdays are half-days for Grades 6-12."
  },
  {
    question: "Does Greenfield provide school bus transport?",
    answer: "Yes, Greenfield operates a dedicated fleet of GPS-tracked school buses with trained female attendants covering major routes across Saravanampatti, Ganapathy, Kalapatti, Peelamedu, and nearby areas in Coimbatore."
  },
  {
    question: "Are there extracurricular activities included in the school routine?",
    answer: "Absolutely. Sports, music, visual arts, public speaking, yoga, and club activities are seamlessly integrated into the weekly timetable without compromising core academic hours."
  },
  {
    question: "How does the school ensure student safety and security?",
    answer: "Our campus is 100% enclosed with 24/7 security personnel at all gates, complete CCTV coverage in corridors and common areas, female attendants for junior restrooms, and strict visitor verification."
  },
  {
    question: "How do parents track their child's academic progress?",
    answer: "We conduct regular Parent-Teacher Meetings (PTMs) after each assessment term. Parents also receive structured progress report cards and regular updates through our school parent portal."
  }
];
