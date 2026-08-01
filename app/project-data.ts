// Edit this file to keep the public site current. Fields in ALL CAPS are
// intentionally left for the team to replace before the site is shared.

export type DataPoint = {
  label: string;
  value: number;
  note?: string;
};

export const project = {
  title: "WPT Efficiency",
  subtitle: "Comparing electromagnetic and acoustic power transfer across barriers",
  status: "In progress - prototype design & mentor outreach",
  updated: "July 2026",
  team: "ADD TEAM MEMBER NAMES",
  school: "ADD SCHOOL NAME",
  grade: "ADD GRADE LEVEL",
  contactEmail: "your-email@example.com",
  contactLabel: "ADD A WORKING PROJECT EMAIL",
};

export const questions = {
  primary:
    "For matched source power, receiver load, and barrier geometry, how do delivered DC power and transfer efficiency change with barrier material and thickness for inductive electromagnetic and ultrasonic acoustic power transfer?",
  secondary: [
    "How sensitive is each track to lateral misalignment, source-receiver separation, and an unintended air gap?",
    "Which loss mechanisms - resistive loss, eddy-current shielding, acoustic impedance mismatch, attenuation, or imperfect rectification - dominate under each test condition?",
    "Which approach is more practical for a sealed-device use case: an EV-scale non-metallic gap or a metal through-hull / enclosure wall?",
  ],
};

export const concepts = [
  {
    number: "01",
    title: "Inductive coupling",
    body: "An alternating current in a transmitter coil creates a changing magnetic field. A nearby receiver coil experiences an induced voltage. Transfer depends strongly on alignment, distance, coil geometry, resistance, and resonant tuning.",
  },
  {
    number: "02",
    title: "Acoustic coupling",
    body: "A piezoelectric transducer converts electrical energy into mechanical vibration. A matched receiver turns part of that vibration back into electricity. Interfaces, material properties, and resonance determine how much energy crosses the barrier.",
  },
  {
    number: "03",
    title: "Barriers change the physics",
    body: "A conductive wall can reduce magnetic coupling through induced currents, while acoustic transfer can be limited by reflection and impedance mismatch. The comparison is useful precisely because a barrier is not a neutral spacer.",
  },
  {
    number: "04",
    title: "Efficiency is a system result",
    body: "The project records input electrical power and usable DC power at the load. That keeps the comparison focused on what a real sensor or device could use, rather than on signal amplitude alone.",
  },
];

export const tracks = [
  {
    id: "em",
    tag: "Track A",
    title: "Electromagnetic / inductive",
    accent: "copper",
    question:
      "How does a coil-to-coil link respond when a controlled barrier is inserted between the transmitter and receiver?",
    design: [
      "Use a fixed transmitter coil, receiver coil, rectifier, and resistive load.",
      "Record input voltage/current and receiver-side DC voltage/current at a defined drive frequency.",
      "Change one variable at a time: separation, lateral offset, barrier material, or barrier thickness.",
      "Repeat each condition and publish the mean, spread, and setup notes.",
    ],
    measures: "Input power, load power, DC-to-DC efficiency, alignment offset, coil separation, barrier description",
  },
  {
    id: "acoustic",
    tag: "Track B",
    title: "Acoustic / ultrasonic",
    accent: "cyan",
    question:
      "How much electrical power can a piezoelectric transmitter-receiver pair recover after vibration crosses a controlled barrier?",
    design: [
      "Mount aligned piezoelectric elements on opposite sides of the test path with documented coupling conditions.",
      "Sweep near the useful resonance range while monitoring source power and regulated receiver-side output.",
      "Compare barrier thickness, material, interface conditions, and receiver alignment.",
      "Record failures as data: unstable coupling, heating, drift, and repeatability are part of the result.",
    ],
    measures: "Input power, recovered DC power, transfer efficiency, drive frequency, barrier description, coupling condition",
  },
];

export const equipment = [
  "Adjustable AC / signal source and measurement leads",
  "Transmitter and receiver coils for the EM link",
  "Piezoelectric transmitter and receiver elements for the acoustic link",
  "Rectifier / regulation stage and known resistive loads",
  "Digital multimeter or oscilloscope for voltage and current measurements",
  "Calipers or spacers for controlled geometry",
  "Documented barrier samples: non-conductive, conductive, and varied thicknesses",
  "Mounting hardware to control alignment and repeatable contact pressure",
];

export const sources = [
  {
    label: "Covic & Boys (2013) - Inductive Power Transfer",
    href: "https://doi.org/10.1109/JPROC.2013.2244536",
    note: "A foundational review of inductive power transfer. It informs the EM track's attention to coupling, compensation, alignment, and measured efficiency.",
  },
  {
    label: "Kurs et al. (2007) - Wireless Power Transfer via Strongly Coupled Magnetic Resonances",
    href: "https://doi.org/10.1126/science.1143254",
    note: "A landmark experimental demonstration of resonant magnetic coupling. It is useful context for why resonance and geometry matter in a coil link.",
  },
  {
    label: "SAE J2954 - Wireless Power Transfer for Light-Duty EVs",
    href: "https://saemobilus.sae.org/standards/j2954_202208-wireless-power-transfer-light-duty-plug-electric-vehicles-alignment-methodology",
    note: "A public-facing real-world anchor: EV wireless charging has explicit requirements for alignment, interoperability, safety, and testing.",
  },
  {
    label: "Wu et al. (2018) - Ultrasonic Through-Metal-Wall Power Transfer",
    href: "https://doi.org/10.3390/app8050692",
    note: "Demonstrates regulated DC output through a solid metal wall and connects the acoustic track to sealed-sensor applications.",
  },
  {
    label: "Ji et al. (2024) - Ultrasonic Power and Data Through a Metallic Wall",
    href: "https://doi.org/10.1103/PhysRevApplied.21.014059",
    note: "A recent metal-wall experiment showing how material design and mechanical resonance can strongly affect ultrasonic transmission.",
  },
];

export const updates = [
  {
    date: "Week 0",
    title: "Research question and public project structure drafted",
    body: "Defined the two-track comparison, selected measurable outputs, and organized the site so methods, sources, and results can be updated in one place.",
    state: "complete",
  },
  {
    date: "Next",
    title: "Build documentation and baseline conditions",
    body: "Photograph both bench setups, choose initial barrier samples, verify instruments, and record a baseline with no barrier before comparing materials.",
    state: "next",
  },
  {
    date: "After baseline",
    title: "Publish first measured series",
    body: "Add repeated runs, uncertainty notes, and plots for the first controlled variable. Negative or inconclusive results will be logged as well.",
    state: "planned",
  },
];

// Add real measurements here when they are ready. Each value is a measured
// transfer efficiency in percent. The chart on the page uses these values.
export const preliminaryData: DataPoint[] = [];

export const imageSlots = [
  {
    label: "EM build photo",
    description: "Add a clear photo of the transmitter coil, receiver coil, barrier position, and measurement leads.",
  },
  {
    label: "Acoustic build photo",
    description: "Add a clear photo of the piezoelectric pair, coupling / mounting method, barrier, and receiver circuitry.",
  },
  {
    label: "Measurement detail",
    description: "Add one close-up showing how distance, thickness, or alignment is measured and held repeatable.",
  },
];
