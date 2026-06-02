import painImg from "@/assets/service-pain-relief.jpg";
import obesityImg from "@/assets/service-obesity.jpg";
import sportsImg from "@/assets/service-sports.jpg";
import neuroImg from "@/assets/service-neuro.jpg";
import orthoImg from "@/assets/service-ortho.jpg";
import homeImg from "@/assets/service-home.jpg";
import exerciseImg from "@/assets/service-exercise.jpg";
import postureImg from "@/assets/service-posture.jpg";
import heroImg from "@/assets/hero.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

export type ServiceKey =
  | "physio"
  | "pain"
  | "obesity"
  | "sports"
  | "neuro"
  | "ortho"
  | "home"
  | "joint"
  | "exercise"
  | "posture"
  | "rehab";

export type ServiceDetail = {
  key: ServiceKey;
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  whatsappMessage: string;
  overview: string;
  problemCauses: string[];
  approach: string[];
  outcomes: string[];
  visitFlow: string[];
};

export const SERVICES: ServiceDetail[] = [
  {
    key: "physio",
    slug: "physiotherapy",
    name: "Physiotherapy",
    shortDescription: "Personalized assessment and treatment for pain, weakness and mobility.",
    image: heroImg,
    seoTitle: "Physiotherapy in Tirupati",
    seoDescription:
      "Expert physiotherapy in Tirupati for pain relief, weakness, mobility loss and recovery with personalized treatment plans.",
    whatsappMessage:
      "I want to book a physiotherapy consultation. Please guide me with available timings.",
    overview:
      "Physiotherapy helps restore movement, reduce pain and rebuild confidence after injury, illness, surgery or long term stiffness.",
    problemCauses: [
      "Muscle weakness from inactivity, injury or poor posture",
      "Joint stiffness after pain, swelling or limited movement",
      "Nerve irritation, balance issues or reduced coordination",
      "Poor movement habits that overload the spine and joints",
    ],
    approach: [
      "We assess pain, posture, strength, flexibility and daily activity limits.",
      "Treatment combines manual therapy, guided exercise, electrotherapy when needed and clear home advice.",
      "Progress is reviewed regularly so the plan stays practical and measurable.",
    ],
    outcomes: [
      "Reduced pain during daily activities",
      "Improved strength, mobility and balance",
      "Better confidence with walking, bending, sitting and work tasks",
    ],
    visitFlow: [
      "Clinical assessment and goal setting",
      "Pain relieving treatment and movement correction",
      "Home exercise plan with progress review",
    ],
  },
  {
    key: "pain",
    slug: "pain-relief-therapy",
    name: "Pain Relief Therapy",
    shortDescription: "Manual therapy, ultrasound, TENS and dry needling for chronic pain.",
    image: painImg,
    seoTitle: "Pain Relief Therapy in Tirupati",
    seoDescription:
      "Pain relief physiotherapy in Tirupati for back pain, neck pain, shoulder pain, knee pain and chronic muscle pain.",
    whatsappMessage:
      "I need help with pain relief therapy. Please guide me about consultation and treatment options.",
    overview:
      "Pain relief therapy focuses on finding why pain keeps returning, then calming irritated tissues and correcting the movement load behind it.",
    problemCauses: [
      "Muscle spasm, trigger points or overuse strain",
      "Poor posture during work, travel or sleep",
      "Joint stiffness, disc irritation or nerve sensitivity",
      "Old injuries that did not regain full strength",
    ],
    approach: [
      "We identify the pain pattern, aggravating movements and tender structures.",
      "Care may include manual therapy, TENS or IFT, ultrasound or muscle stimulation, stretching and strengthening.",
      "You get simple posture and activity changes so pain does not keep cycling back.",
    ],
    outcomes: [
      "Pain reduction with safer movement",
      "Less stiffness and muscle guarding",
      "Better sleep, sitting, walking and work tolerance",
    ],
    visitFlow: [
      "Pain assessment and movement testing",
      "Pain calming treatment and mobility work",
      "Strength plan to prevent recurrence",
    ],
  },
  {
    key: "obesity",
    slug: "obesity-management",
    name: "Obesity Management",
    shortDescription:
      "Structured weight loss programs combining exercise, diet and accountability.",
    image: obesityImg,
    seoTitle: "Obesity Management in Tirupati",
    seoDescription:
      "Physiotherapy led obesity management in Tirupati with exercise planning, body composition tracking and sustainable lifestyle support.",
    whatsappMessage:
      "I want to know about obesity management. Please share the program details and timings.",
    overview:
      "Obesity management is designed for sustainable fat loss, better stamina and improved joint health without crash routines.",
    problemCauses: [
      "Low activity levels due to pain, fatigue or busy schedules",
      "Poor exercise planning that leads to soreness or dropout",
      "Weight related stress on knees, back and feet",
      "Unclear tracking, motivation and accountability",
    ],
    approach: [
      "We start with a fitness and lifestyle assessment suited to your current ability.",
      "Exercise is progressed gradually with joint friendly strengthening, cardio and mobility work.",
      "Regular check ins help you stay consistent and adjust the plan safely.",
    ],
    outcomes: [
      "Improved stamina and movement confidence",
      "Reduced stress on painful joints",
      "Better body composition habits and long term routine",
    ],
    visitFlow: [
      "Assessment and goal planning",
      "Supervised exercise and lifestyle guidance",
      "Weekly progress tracking and plan updates",
    ],
  },
  {
    key: "sports",
    slug: "sports-rehabilitation",
    name: "Sports Rehabilitation",
    shortDescription: "Get athletes back to peak performance after injury with safe progression.",
    image: sportsImg,
    seoTitle: "Sports Rehabilitation in Tirupati",
    seoDescription:
      "Sports injury physiotherapy in Tirupati for sprains, strains, ligament injuries, shoulder pain and safe return to sport.",
    whatsappMessage:
      "I have a sports injury and want rehabilitation guidance. Please help me book a consultation.",
    overview:
      "Sports rehabilitation helps athletes and active people recover safely, rebuild strength and return to play with lower reinjury risk.",
    problemCauses: [
      "Sudden sprain, strain or impact injury",
      "Training overload without enough recovery",
      "Weakness, poor warm up or movement imbalance",
      "Returning to sport before strength and control are restored",
    ],
    approach: [
      "We assess the injury, sport demands, strength, flexibility and pain triggers.",
      "Treatment moves from pain control to mobility, strength, balance and sport specific drills.",
      "Return to play is based on function, not guesswork.",
    ],
    outcomes: [
      "Safer return to running, gym or sport",
      "Improved strength and control",
      "Lower risk of repeated injury",
    ],
    visitFlow: [
      "Injury assessment and pain control",
      "Progressive strengthening and balance training",
      "Sport specific return plan",
    ],
  },
  {
    key: "neuro",
    slug: "neuro-physiotherapy",
    name: "Neuro Physiotherapy",
    shortDescription: "Stroke, paralysis and Parkinson's rehabilitation with measurable goals.",
    image: neuroImg,
    seoTitle: "Neuro Physiotherapy in Tirupati",
    seoDescription:
      "Neuro physiotherapy in Tirupati for stroke, paralysis, Parkinson's, balance problems and walking rehabilitation.",
    whatsappMessage:
      "I need neuro physiotherapy guidance for recovery. Please share consultation details.",
    overview:
      "Neuro physiotherapy supports recovery of movement, balance, walking and daily function after nervous system conditions.",
    problemCauses: [
      "Stroke, paralysis or nerve related weakness",
      "Reduced balance, coordination or walking confidence",
      "Muscle tightness, stiffness or abnormal movement patterns",
      "Long bed rest leading to weakness and dependency",
    ],
    approach: [
      "We set realistic goals for sitting, standing, walking, hand use and daily independence.",
      "Sessions include strengthening, balance work, gait training, mobility practice and caregiver education.",
      "Progress is tracked patiently with dignity and encouragement.",
    ],
    outcomes: [
      "Better sitting, standing and walking ability",
      "Improved balance and confidence",
      "More independence in daily activities",
    ],
    visitFlow: [
      "Neurological movement assessment",
      "Functional training and caregiver guidance",
      "Progress review with home practice",
    ],
  },
  {
    key: "ortho",
    slug: "orthopedic-physiotherapy",
    name: "Orthopedic Physiotherapy",
    shortDescription: "Joint, bone and post fracture recovery using proven techniques.",
    image: orthoImg,
    seoTitle: "Orthopedic Physiotherapy in Tirupati",
    seoDescription:
      "Orthopedic physiotherapy in Tirupati for joint pain, post fracture stiffness, ligament injuries and post surgery rehabilitation.",
    whatsappMessage: "I want orthopedic physiotherapy for joint or bone recovery. Please guide me.",
    overview:
      "Orthopedic physiotherapy helps people recover from joint, bone, muscle and ligament problems with structured care.",
    problemCauses: [
      "Post fracture immobilization causing stiffness and weakness",
      "Ligament sprain, tendon irritation or muscle injury",
      "Arthritis or age related joint wear",
      "Post surgery pain, swelling and limited range",
    ],
    approach: [
      "We assess range of motion, swelling, strength, pain and functional limits.",
      "Treatment includes joint mobility, soft tissue care, strengthening and staged activity return.",
      "The plan respects medical precautions after fracture or surgery.",
    ],
    outcomes: [
      "Improved joint motion and strength",
      "Reduced pain and swelling",
      "Better ability to walk, climb stairs and use the limb",
    ],
    visitFlow: [
      "Orthopedic assessment",
      "Mobility and strengthening program",
      "Functional return plan",
    ],
  },
  {
    key: "home",
    slug: "home-visit-physiotherapy",
    name: "Home Visit Physiotherapy",
    shortDescription: "We bring full clinic grade care to the comfort of home.",
    image: homeImg,
    seoTitle: "Home Visit Physiotherapy in Tirupati",
    seoDescription:
      "Home visit physiotherapy in Tirupati for elderly patients, post surgery care, paralysis recovery and mobility training at home.",
    whatsappMessage:
      "I want to book home visit physiotherapy. Please share availability and charges.",
    overview:
      "Home visit physiotherapy brings guided rehabilitation to patients who cannot comfortably travel to the clinic.",
    problemCauses: [
      "Elderly or bedridden patients needing safe movement support",
      "Post surgery weakness or difficulty traveling",
      "Stroke, paralysis or balance issues at home",
      "Painful conditions where travel increases discomfort",
    ],
    approach: [
      "We assess the patient, home setup, safety risks and caregiver support.",
      "Sessions include mobility training, strengthening, pain care and home exercise guidance.",
      "Family members are educated on safe transfers and daily support.",
    ],
    outcomes: [
      "Improved mobility in the home environment",
      "Reduced travel stress for patients",
      "Better caregiver confidence and safety",
    ],
    visitFlow: [
      "Home assessment and goal setting",
      "Treatment, exercise and walking practice",
      "Caregiver education and follow up",
    ],
  },
  {
    key: "joint",
    slug: "joint-mobilization",
    name: "Joint Mobilization",
    shortDescription: "Restore range of motion in stiff, painful joints.",
    image: gallery4,
    seoTitle: "Joint Mobilization in Tirupati",
    seoDescription:
      "Joint mobilization physiotherapy in Tirupati for stiff shoulders, knees, spine, ankles and painful movement restriction.",
    whatsappMessage:
      "I have joint stiffness or pain and want joint mobilization treatment. Please guide me.",
    overview:
      "Joint mobilization uses skilled hands on techniques and movement retraining to improve restricted joint motion.",
    problemCauses: [
      "Long standing stiffness after injury or pain",
      "Frozen shoulder, knee stiffness or spinal restriction",
      "Reduced movement after surgery or immobilization",
      "Muscle guarding around a painful joint",
    ],
    approach: [
      "We test movement range, pain behavior and surrounding muscle tightness.",
      "Gentle graded mobilization is paired with stretching and strengthening.",
      "Home exercises help maintain the gained movement.",
    ],
    outcomes: [
      "Improved range of motion",
      "Less stiffness during daily activities",
      "Better joint control and comfort",
    ],
    visitFlow: [
      "Range and pain assessment",
      "Joint mobilization and soft tissue release",
      "Movement maintenance exercises",
    ],
  },
  {
    key: "exercise",
    slug: "exercise-therapy",
    name: "Exercise Therapy",
    shortDescription: "Guided therapeutic exercises to build lasting strength.",
    image: exerciseImg,
    seoTitle: "Exercise Therapy in Tirupati",
    seoDescription:
      "Exercise therapy in Tirupati for strength, balance, posture, pain prevention and long term rehabilitation.",
    whatsappMessage: "I want guided exercise therapy. Please help me choose the right program.",
    overview:
      "Exercise therapy turns recovery into a clear routine that builds strength, mobility, balance and endurance.",
    problemCauses: [
      "Weak muscles after injury, pain or inactivity",
      "Poor balance, flexibility or body control",
      "Recurring pain due to lack of strength",
      "Fear of movement after injury",
    ],
    approach: [
      "We select exercises based on your diagnosis, pain level and current fitness.",
      "Movements are taught with correct form and progressed step by step.",
      "The plan is practical for clinic sessions and home practice.",
    ],
    outcomes: [
      "Better strength and stamina",
      "Improved posture and movement confidence",
      "Lower recurrence of pain from weakness",
    ],
    visitFlow: [
      "Strength and mobility assessment",
      "Supervised exercise training",
      "Home plan and progression",
    ],
  },
  {
    key: "posture",
    slug: "posture-correction",
    name: "Posture Correction",
    shortDescription: "Reverse desk job posture and protect your spine for life.",
    image: postureImg,
    seoTitle: "Posture Correction in Tirupati",
    seoDescription:
      "Posture correction physiotherapy in Tirupati for neck pain, back pain, rounded shoulders and desk related stiffness.",
    whatsappMessage:
      "I need posture correction help for neck, back or desk related pain. Please guide me.",
    overview:
      "Posture correction helps reduce repeated stress on the neck, back and shoulders from work, phone use and daily habits.",
    problemCauses: [
      "Long sitting, laptop work or mobile phone posture",
      "Weak upper back, core or hip muscles",
      "Rounded shoulders and tight chest muscles",
      "Poor workstation setup and repeated habits",
    ],
    approach: [
      "We assess posture, mobility, muscle balance and work habits.",
      "Treatment includes mobility drills, strengthening, ergonomic advice and habit correction.",
      "Exercises are kept simple so they can be followed daily.",
    ],
    outcomes: [
      "Reduced neck, shoulder and back strain",
      "Improved sitting and standing comfort",
      "Better awareness of daily posture habits",
    ],
    visitFlow: [
      "Posture and movement screening",
      "Corrective exercise and mobility work",
      "Workstation and habit guidance",
    ],
  },
  {
    key: "rehab",
    slug: "rehabilitation-programs",
    name: "Rehabilitation Programs",
    shortDescription: "Multi week programs that track progress week by week.",
    image: gallery2,
    seoTitle: "Rehabilitation Programs in Tirupati",
    seoDescription:
      "Structured rehabilitation programs in Tirupati for surgery recovery, injury recovery, neurological rehab and long term mobility goals.",
    whatsappMessage:
      "I want to know about rehabilitation programs. Please share the best plan for my condition.",
    overview:
      "Rehabilitation programs are planned for people who need consistent, measured recovery over several weeks.",
    problemCauses: [
      "Recovery after surgery, fracture or long illness",
      "Long term pain affecting work or daily life",
      "Neurological weakness requiring repeated practice",
      "Incomplete recovery from older injuries",
    ],
    approach: [
      "We define weekly goals for pain, movement, strength and function.",
      "Treatment combines therapy sessions, exercise progression and patient education.",
      "Progress updates help patients and families understand improvement clearly.",
    ],
    outcomes: [
      "Clear recovery direction and measurable progress",
      "Improved daily independence",
      "Better confidence returning to normal activity",
    ],
    visitFlow: [
      "Baseline assessment and program planning",
      "Weekly treatment progression",
      "Outcome review and long term maintenance plan",
    ],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
) as Record<string, ServiceDetail>;

export const SERVICE_BY_KEY = Object.fromEntries(
  SERVICES.map((service) => [service.key, service]),
) as Record<ServiceKey, ServiceDetail>;

export function getServiceDetail(slug: string) {
  return SERVICE_BY_SLUG[slug];
}
