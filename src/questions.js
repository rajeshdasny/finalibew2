const questions = [
  {
    question: "What is the minimum rating required for a receptacle?",
    options: ["15 A", "20 A", "10 A"],
    answer: 0,
  },
  {
    question: "What is the maximum operating temperature for cable insulation type ZW in wet location in C?",
    options: ["75C", "90C", "60C"],
    answer: 0,
  },
  {
    question: "Specific receptacle and switch box mounting heights are required by the ____.",
    options: ["Americans with Disabilities Act Guidelines (ADA)", "NEC", "OSHA"],
    answer: 0,
  },
  {
    question: "Insulated conductors installed in a conduit, in a concrete slab, in contact with the earth, would be considered to be installed in a ____.",
    options: ["Wet Location", "Dry Location", "Damp Location"],
    answer: 0,
  },
  {
    question: "Manufacturers provide ? specifications for terminations. The termination should be tightened to those specifications to ensure that the connection is electrically sound.",
    options: ["torquing", "loosening", "removing"],
    answer: 0,
  },
  {
    question: "Duct heaters installed in air ducts to be ? suitable for the installation.",
    options: ["identified as", "marked with a label", "placed near the duct"],
    answer: 0,
  },
  {
    question: "To ensure adequate protection, a(n) ? must be calculated on the basis of the amount of current present if a short circuit occurs, the time the arc is allowed to burn, and the distance the worker is from the arc.",
    options: ["flash hazard analysis", "voltage drop", "load calculation"],
    answer: 0,
  },
  {
    question: "The service disconnecting means to be installed at a(n) ? location.",
    options: ["readily accessible", "remote", "locked"],
    answer: 0,
  },
  {
    question: "Listed and/or labeled equipment shall ? in accordance with any instructions included in the listing or labeling.",
    options: ["be INSTALLED and USED", "be ignored", "be inspected only"],
    answer: 0,
  },
  {
    question: "Three classifications exist for electrical conductor they are",
    options: ["bare, covered, insulated", "solid, stranded, braided", "copper, aluminum, steel"],
    answer: 0,
  },
  {
    question: "Solve for H: A = (B * H) / 2",
    options: ["H= 2A/B", "H = A*B", "H = A/B"],
    answer: 0,
  },
  {
    question: "Is a fast-acting circuit breaker that senses small imbalances in the circuit caused by current leakage to ground and in a fraction of a second shuts off the electricity.",
    options: ["GFCI", "Fuse", "MCB"],
    answer: 0,
  },
  {
    question: "Solve (73.5 X 10^6) – (68.32 X 10^4)",
    options: ["72.8168 X 10^6", "5.18 X 10^6", "73.168 X 10^6"],
    answer: 0,
  },
  {
    question: "Which of the following would be defined as readily accessible?",
    options: ["A circuit breaker in an unlocked distribution panel", "A locked electrical room", "A covered junction box"],
    answer: 0,
  },
  {
    question: "Watertight plugs and connectors are designed for ____ environments.",
    options: ["Wet and damp", "Dry", "Outdoor only"],
    answer: 0,
  },
  {
    question: "Informational Notes are used to give ____ material.",
    options: ["Explanatory", "Mandatory", "Warning"],
    answer: 0,
  },
  {
    question: "Fill in the current carrying capacity with the following conductors: empires for three #4 AWG, UF, Copper clad aluminum in conduit.",
    options: ["65 or 85", "50 or 70", "90 or 110"],
    answer: 0,
  },
  {
    question: "What are some of the things that can be done to make cutting and threading conduit a neater job?",
    options: ["Use a container for the scraps AND Use a sandbox or mat to catch oil drippings.", "Cut outside only", "Use gloves only"],
    answer: 0,
  },
  {
    question: "Temperatures as high as ____ Fahrenheit can occur during an arc flash or arc blast.",
    options: ["35,000°", "10,000°", "50,000°"],
    answer: 0,
  },
  {
    question: "What tests are required by OSHA under the assured equipment grounding conductor program?",
    options: [
      "A continuity test AND a test of receptacles and plugs",
      "Visual inspection only",
      "Voltage test only",
    ],
    answer: 0,
  },
  {
    question: "The actuator on a switch comes in ____ different basic styles.",
    options: ["8", "5", "3"],
    answer: 0,
  },
  {
    question: "When leakage current exceeds ?, a GFCI will trip.",
    options: ["5 mA +/- 1 mA", "10 mA", "1 mA"],
    answer: 0,
  },
  {
    question: "What is the maximum operating temperature for cables insulation type XHHW Fahrenheit?",
    options: ["194 and 167", "180 and 160", "200 and 175"],
    answer: 0,
  },
  {
    question: "Extreme pain, respiratory arrest, severe muscular contractions. Death is possible. These reactions best describe a current from ? to 150 milliamperes.",
    options: ["50", "20", "100"],
    answer: 0,
  },
  {
    question: "Low-voltage lighting systems shall not be supplied by a branch circuit rated greater than",
    options: ["20", "15", "30"],
    answer: 0,
  },
  {
    question: "A junction box with a screw cover measures 32\" × 30\" × 6\". Express these dimensions in centimeters.",
    options: ["81.28cm, 76.2cm, 15.24cm", "80cm, 70cm, 15cm", "82cm, 75cm, 16cm"],
    answer: 0,
  },
  {
    question: "According to the NEC, a(n) ? is defined as “one who has skills and knowledge related to the construction and operation of the electrical equipment and installations and has received safety training to recognize and avoid the hazards involved.”",
    options: ["qualified person", "apprentice", "helper"],
    answer: 0,
  },
  {
    question: "Has standardized the configuration of receptacle contacts based upon the number of poles and wires, as well as the amperage and voltage rating of the product.",
    options: ["National Electrical Manufacturers Association (NEMA)", "OSHA", "NEC"],
    answer: 0,
  },
  {
    question: "As the diameter of the wire decreases, the AWG number ? , and the resistance of the conductor ? .",
    options: ["increases / increases", "decreases / decreases", "increases / decreases"],
    answer: 0,
  },
  {
    question: "NFPA is an abbreviation used in the electrical industry and means ____.",
    options: ["National Fire Protection Association", "National Fire Prevention Agency", "National Fault Protection Association"],
    answer: 0,
  },
  {
    question: "Mandatory rules of this Code are characterized by the use of the word ? .",
    options: ["Shall", "Should", "May"],
    answer: 0,
  },
  {
    question: "A circular mil (CM) is the area of a circle with a diameter of ? .",
    options: ["one mil", "one cm", "one mm"],
    answer: 0,
  },
  {
    question: "Isolated ground receptacles are required to be identified by ____.",
    options: ["An orange triangle on the face of the receptacle", "A blue square", "A green dot"],
    answer: 0,
  },
  {
    question: "UF wire is available in sizes from ? to ? .",
    options: ["14 – 4/0", "10 – 2/0", "12 – 1/0"],
    answer: 0,
  },
  {
    question: "364 A = ? mA",
    options: ["364,000 mA", "36,400 mA", "3,640 mA"],
    answer: 0,
  },
  {
    question: "High-voltage is defined as a potential difference of more than ____ nominal.",
    options: ["1,000V", "500V", "1,500V"],
    answer: 0,
  },
  {
    question: "Copper has excellent ? and therefore has a higher allowable ? than a comparable aluminum conductor.",
    options: ["conductivity / ampacity", "resistance / durability", "weight / cost"],
    answer: 0,
  },
  {
    question: "All switchboards, switchgear, panelboards, and motor control centers shall generally be located in ? spaces and protected from damage.",
    options: ["Dedicated", "Open", "Restricted"],
    answer: 0,
  },
  {
    question: "Manufacturers are required to mark their products so the manufacturer can be identified. The marking may consist of manufacturer’s ? .",
    options: ["trademark or name", "serial number", "installation date"],
    answer: 0,
  },
  {
    question: "It is the intent of the Code that ? internal wiring or the construction of equipment need not be inspected at the time of installation, except to detect alterations or damage if the equipment has been listed by a qualified electrical testing laboratory.",
    options: ["factory installed", "field installed", "third-party installed"],
    answer: 0,
  },
  {
    question: "Listed wire types designated with the suffix -2 shall be permitted to be used at a continuous 90°C operating temperature in ? locations.",
    options: ["wet and dry", "dry only", "wet only"],
    answer: 0,
  },
  {
    question: "The largest size wire listed in wire gauge number is ? .",
    options: ["4/0", "3/0", "2/0"],
    answer: 0,
  },
  {
    question: "Solve for X: 185/X = 50",
    options: ["3.7", "4.5", "2.5"],
    answer: 0,
  },
  {
    question: "Speed wire terminations are primarily used on ____ grade of wiring devices.",
    options: ["Residential", "Commercial", "Industrial"],
    answer: 0,
  },
  {
    question: "When a person receives an electrical shock, sometimes the ? from that electrical shock causes the muscles to contract. This “freezing” effect makes the person unable to pull free of the circuit.",
    options: ["Stimulation", "Pain", "Shock"],
    answer: 0,
  },
  {
    question: "Insulated conductors installed in a conduit, in a concrete slab, in contact with the earth, would be considered to be installed in a ____. ",
    options: ["Wet Location", "Dry Location", "Damp Location"],
    answer: 0,
  },
  {
    question: "When the provisions of the Code are followed, ? .",
    options: ["it will result in an installation essentially free of electrical hazards", "it may still have hazards", "it requires further inspection"],
    answer: 0,
  },
  {
    question: "If a “hot” wire contacts a grounded enclosure, a(n) ______________results.",
    options: ["Ground-fault", "Short circuit", "Open circuit"],
    answer: 0,
  },
  {
    question: "When converting from a whole number to a prefixed number, ? the whole number by the value of the prefix.",
    options: ["divide", "multiply", "add"],
    answer: 0,
  },
    {
      question: "Fuses and circuit breakers are designed to protect",
      options: ["Conductors and equipment"],
      answer: 0,
    },
    {
      question: "A properly installed _____ has a low resistance to ground and greatly reduces the amount of current that passes through your body.",
      options: ["Grounding conductor"],
      answer: 0,
    },
    {
      question: "Occupational Safety & Health Administration (OSHA) places the threshold voltage of electric shock at",
      options: ["50V"],
      answer: 0,
    },
    {
      question: "To ensure adequate protection, a(n) _____ must be calculated on the basis of the amount of current present if a short circuit occurs, the time the arc is allowed to burn, and the distance the worker is from the arc.",
      options: ["Flash hazard analysis"],
      answer: 0,
    },
    {
      question: "If a 'hot' wire contacts a grounded enclosure, a(n) _____ results.",
      options: ["Ground-fault"],
      answer: 0,
    },
    {
      question: "To find the area of a wire in circular mils, square the diameter expressed in",
      options: ["Mils"],
      answer: 0,
    },
    {
      question: "When converting from a whole number to a prefixed number, _____ the whole number by the value of the prefix.",
      options: ["Divide"],
      answer: 0,
    },
    {
      question: "The nine chapters of the NEC are broad in scope and are subdivided into different _____ to address the chapter scope.",
      options: ["Articles"],
      answer: 0,
    },
    {
      question: "Mandatory language in the NEC is represented by the use of _____ and _____",
      options: ["Shall", "Shall not"],
      answer: 0,
    },
    {
      question: "All listed or labeled equipment shall be installed and used in accordance with any _____ included in the listing or labeling.",
      options: ["Instruction NEC: 110.3(B)"],
      answer: 0,
    },
    {
      question: "When installed in a raceway, conductors must be stranded if their size is _____ or larger.",
      options: ["8 AWG"],
      answer: 0,
    },
    {
      question: "High-voltage is defined as a potential difference of more than _____ nominal.",
      options: ["1,000V"],
      answer: 0,
    },
    {
      question: "Low-voltage lighting systems shall not be supplied by a branch circuit rated greater than",
      options: ["20A"],
      answer: 0,
    },
    {
      question: "NFPA is an abbreviation used in the electrical industry and means",
      options: ["National Fire Protection Association"],
      answer: 0,
    },
    {
      question: "Which statement(s) describes the intent of the Code?",
      options: [
        "The Code is not intended to be a textbook for people without a working knowledge of the Code."
      ],
      answer: 0,
    },
    {
      question: "Informational Notes are used to give _____ material.",
      options: ["Explanatory"],
      answer: 0,
    },
    {
      question: "According to the NEC, a(n) _____ is defined as 'one who has skills and knowledge related to the construction and operation of the electrical equipment and installations and has received safety training to recognize and avoid the hazards involved.'",
      options: ["Qualified Person"],
      answer: 0,
    },
    {
      question: "NEC 230.70(A)(1) requires the service disconnecting means to be installed at a(n) _____ location.",
      options: ["Readily accessible"],
      answer: 0,
    },
    {
      question: "Section 424.58 requires duct heaters installed in air ducts to be _____ suitable for the installation.",
      options: ["Identified as"],
      answer: 0,
    },
    {
      question: "Section 110.18 requires all arcing parts of electrical equipment to be enclosed or separated, and _____ from all combustible material.",
      options: ["Isolated"],
      answer: 0,
    },
    {
      question: "NEC 110.27(A) requires live parts of electrical equipment operating at 50 volts or more to be _____ against accidental contact.",
      options: ["Guarded"],
      answer: 0,
    },
    {
      question: "Unused openings in boxes are generally required to be",
      options: ["Closed"],
      answer: 0,
    },
    {
      question: "All switchboards, switchgear, panelboards, and motor control centers shall generally be located in _____ spaces and protected from damage.",
      options: ["Dedicated"],
      answer: 0,
    },
    {
      question: "A good conductor is a material that will contain many",
      options: ["Free Electrons"],
      answer: 0,
    },
    {
      question: "Insulated conductors installed in a conduit, in a concrete slab, in contact with the earth, would be considered to be installed in a",
      options: ["Wet Location"],
      answer: 0,
    },
    {
      question: "Locking receptacles are used in applications where _____ is/are a primary concern.",
      options: ["Ensured, consistent contact"],
      answer: 0,
    },
    {
      question: "_____ has standardized the configuration of receptacle contacts based upon the number of poles and wires, as well as the amperage and voltage rating of the product.",
      options: ["National Electrical Manufacturers Association (NEMA)"],
      answer: 0,
    },
    {
      question: "Speed wire terminations are primarily used on _____ grade of wiring devices.",
      options: ["Residential"],
      answer: 0,
    },
    {
      question: "The actuator on a switch comes in _____ different basic styles.",
      options: ["8"],
      answer: 0,
    },
    {
      question: "Specific receptacle and switch box mounting heights are required by the",
      options: ["Americans with Disabilities Act Guidelines (ADA)"],
      answer: 0,
    },
    {
      question: "Watertight plugs and connectors are designed for _____ environments.",
      options: ["Wet and damp"],
      answer: 0,
    },
    {
      question: "The maximum voltage and amperage that a wiring device will withstand describes the",
      options: ["Service Rating"],
      answer: 0,
    },
    {
      question: "Isolated ground receptacles are required to be identified by",
      options: ["An orange triangle on the face of the receptacle"],
      answer: 0,
    },
    {
      question: "Where a neon transformer for a sign is installed in a soffit location, where is the switch-controlled lighting outlet required to be located?",
      options: ["At or near the transformer(s)"],
      answer: 0,
    } 
];

export default questions;


  