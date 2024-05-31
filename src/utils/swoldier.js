export const TEMPOS = [
  "3 0 2",
  "2 2 2",
  "4 1 1",
  "5 3 1",
  "1 0 1",
  "3 2 1",
  "2 1 1",
];

export const SCHEMES = {
  strength_power: {
    repRanges: [3, 8],
    ratio: [3, 2],
    rest: [120, 60],
  },
  growth_hypertrophy: {
    repRanges: [8, 15],
    ratio: [2, 3],
    rest: [90, 60],
  },
  cardiovascular_endurance: {
    repRanges: [12, 30],
    ratio: [2, 4],
    rest: [60, 45],
  },
};

export const WORKOUTS = {
  individual: [
    "biceps",
    "triceps",
    "chest",
    "back",
    "shoulders",
    "quads",
    "hamstrings",
    "glutes",
    "calves",
    "abs",
  ],
  bro_split: {
    push: ["triceps", "chest", "shoulders"],
    pull: ["back", "shoulders", "biceps"],
    legs: ["glutes", "calves", "hamstrings", "quads"],
  },
  bodybuilder_split: {
    chest: ["chest"],
    back: ["back"],
    shoulders: ["shoulders"],
    legs: ["glutes", "quads", "hamstrings", "calves"],
    arms: ["biceps", "triceps"],
    abs: ["abs"],
  },
  upper_lower: {
    upper: ["triceps", "biceps", "shoulders", "chest", "back"],
    lower: ["quads", "calves", "hamstrings", "glutes"],
  },
};

const bw_exercises = {};

export const EXERCISES = {
  barbell_bench_press: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      incline: "Bench inclined at 30-45°, bar above chest.",
      flat: "Horizontal bench.",
      decline:
        "Bench inclined at -15°, head lower, hook legs to prevent slipping.",
      underhand: "Flat bench, reverse underhand grip, reduce weight.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Keep shoulder blades retracted, arms wide. Lower bar to chest at nipple level.",
    substitutes: ["pushups", "dumbbell bench press", "floor press"],
  },
  prayer_press: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      incline: "45° angle above horizontal.",
      horizontal: "45° angle from horizontal.",
      decline: "-30° angle below horizontal.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Place weighted plate between palms, pray position, press hands while pushing plate away.",
    substitutes: ["palm prayer press"],
  },
  pec_dec: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      high: "Seat height to mouth/chin.",
      standard: "Seat height to nipple height.",
      decline: "Seat as high as possible, handles below nipples.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Ensure shoulders retracted, chest out. Bring handles together, within 90° range.",
    substitutes: ["cable chest fly"],
  },
  standing_dumbbell_incline_fly: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["dumbbells", "bands"],
    },
    unit: "reps",
    muscles: ["chest", "shoulders"],
    description:
      "Stand, dumbbells in each hand, palms forward. Raise one up and across until palm faces ceiling. Repeat.",
    substitutes: ["inclined cable fly"],
  },
  standing_plate_raises: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["chest", "shoulders"],
    description:
      "Stand, weighted plate in hands, raise to shoulder height, pause, lower.",
    substitutes: ["standing dumbbell incline fly"],
  },
  cable_fly: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      incline: "Cable low, hands start low, raise to face level.",
      horizontal: "Cable chest height.",
      decline: "Cable high, hands high to low motion.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Perform from high to low or low to high, bring handles together, then release.",
    substitutes: ["inclined dumbbell fly"],
  },
  pushup: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      incline: "Feet elevated, hands on ground.",
      military: "Hands in line with chest and shoulders.",
      decline: "Hands further underneath, lean forward.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Plank position, elbows flared, chest to ground, push back up.",
    substitutes: ["pushups", "dumbbell bench press", "floor press"],
  },
  dips: {
    type: "compound",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["chest", "triceps"],
    description:
      "Lean forward, lower body until elbows parallel to ground, then push up.",
    substitutes: ["chair dip"],
  },
  dumbbell_bench_press: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: ["dumbbell"],
    },
    variants: {
      incline: "30° inclined bench.",
      horizontal: "Flat bench.",
      decline: "Bench declined by 15°, head lower.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Retract shoulder blades, dumbbells above chest, elbows flared, press up.",
    substitutes: ["pushup", "bench press"],
  },
  landmine_press: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      unilateral: "One hand on end of barbell, press up and across chest.",
      two_handed: "Hold barbell with both hands, press forwards and up.",
    },
    unit: "reps",
    muscles: ["chest"],
    description: "Pin barbell, stand behind, lift end to chest height, press.",
    substitutes: ["prayer press"],
  },
  chest_press: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      high: "Seat for mouth/chin level.",
      standard: "Seat for nipple level.",
      decline: "Seat for handles below nipple.",
    },
    unit: "reps",
    muscles: ["chest"],
    description: "Begin with chest out, press handles out straight, release.",
    substitutes: ["bench press", "pushup"],
  },
  smith_machine_press: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      incline: "Bench inclined, bar above chest.",
      flat: "Horizontal bench.",
      decline: "Bench declined, head lower, hook legs to prevent slipping.",
      underhand: "Flat bench, reverse underhand grip, reduce weight.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Lying under smith machine, elbows flared, press bar to chest.",
    substitutes: ["bench press", "pushup", "dumbbell press"],
  },
  // decline_pushup: {
  //     type: 'accessory',
  //     meta: {
  //         environment: 'gymhome',
  //         level: [0, 1, 2],
  //         equipment: []
  //     },
  //     variants: {
  //         incline: 'Press your hands away from you at a 45 degree angle above horizontal.',
  //         horizontal: 'Press your hands away from you at a 45 degree angle from horizontal.',
  //         decline: 'Press your hands away from you at a -30 degree angle below horizontal.'
  //     },
  //     unit: 'reps', //vs duration
  //     muscles: ['chest'],
  //     description: 'With your feet elevated by 1ft or 30cm, begin in a plank position with hands slightly wider than shoulder width inline with your nipples. Lower until your thumbs touch your nipples and then press back up.',
  //     substitutes: ['pushup', 'dips']
  // },
  landmine_press: {
    type: "accessory",
    meta: { environment: "gym", level: [0, 1, 2], equipment: [] },
    variants: {
      unilateral: "Stand at 45-degree angle, press bar across chest.",
      two_handed: "Hold barbell with both hands, press forward and up.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Pin one end of barbell, stand behind it, lift from chest height.",
    substitutes: ["prayer press"],
  },
  chest_press: {
    type: "accessory",
    meta: { environment: "gym", level: [0, 1, 2], equipment: [] },
    variants: {
      high: "Adjust seat for mouth/chin level hand movement.",
      standard: "Adjust seat for nipple height hand movement.",
      decline: "Adjust seat for hand holds below nipple height.",
      unilateral: "Adjust seat, turn torso, press handle across body.",
    },
    unit: "reps",
    muscles: ["chest"],
    description: "Start with puffed chest, press handles out and back.",
    substitutes: ["bench press", "pushup"],
  },
  smith_machine_press: {
    type: "compound",
    meta: { environment: "gym", level: [0, 1, 2], equipment: [] },
    variants: {
      incline: "Bench inclined 30-45 degrees, hold bar above chest.",
      flat: "Perform on horizontal bench.",
      decline: "Bench inclined at -15 degrees, head at lower end, hook legs.",
      underhand: "Lie on flat bench, grab bar with reversed underhand grip.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Lie under smith machine, align bar with nipple height, keep elbows flared.",
    substitutes: ["bench press", "pushup", "dumbbell press"],
  },
  unilateral_cable_press: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    variants: {
      incline: "Cable low to high, use underhand grip.",
      horizontal: "Cable at chest height, use neutral or overhand grip.",
      decline: "Cable high to low.",
    },
    unit: "reps",
    muscles: ["chest"],
    description: "Align body at 30-45 degree angle, press cable across body.",
    substitutes: ["unilateral chest press"],
  },
  cable_crossover_press: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    variants: {
      incline: "Cable low to high, hands move from low to high.",
      horizontal: "Cable at chest height.",
      decline: "Cable high to low, hands come together in front.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Press handles together and crossed in front like a bench press.",
    substitutes: ["cable fly", "unilateral chest press"],
  },
  scapula_pushup: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["chest"],
    description:
      "From plank position, press body away from ground, keep elbows straight.",
    substitutes: ["pushup"],
  },
  dumbbell_chest_fly: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    variants: {
      incline: "Hold dumbbells directly above chest on an inclined bench.",
      flat: "Perform on a horizontal bench.",
      decline: "Perform on a decline bench, head lower than legs.",
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Hold dumbbells above chest, lower to sides while keeping arms mostly straight, palms up.",
    substitutes: ["cable fly"],
  },
  dumbbell_floor_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Lie on back with dumbbells over chest, lower to ground with elbows flared, then press up.",
    substitutes: ["dumbbell bench press"],
  },
  barbell_floor_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["chest"],
    description:
      "Lie on back with barbell over chest, lower to ground with elbows flared, then press up.",
    substitutes: ["barbell bench press"],
  },
  dumbbell_pullover: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["chest", "back"],
    description:
      "Hold single dumbbell above chest, track back over head, then return to start.",
    substitutes: ["inclined dumbbell fly"],
  },
  pullup: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing towards you.",
      neutral_grip: "Neutral grip, palms facing each other.",
      overhand: "Pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hands shoulder width apart, retract scapula, pull body up until chin is above bar, then lower. Use assisted pullup machine if needed.",
    substitutes: ["lat pulldown"],
  },
  lat_pulldown: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing towards you.",
      neutral_grip: "Neutral grip, palms facing each other.",
      overhand: "Pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hands shoulder width apart, retract scapula, pull bar down until it touches chest, then return to starting position.",
    substitutes: ["pullup", "kneeling lat pushdown"],
  },
  straight_arm_pushdown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Start with arms extended in front, press bar down until it touches lower mid-section. Thrust chest out and bring hips through/between arms, then return to starting position.",
    substitutes: ["pullup", "kneeling lat pulldown"],
  },
  kneeling_lat_pulldown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      underhand: "Supinated grip, palms facing towards you.",
      neutral_grip: "Neutral grip, palms facing each other.",
      overhand: "Pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hands shoulder width apart, retract scapula, pull bar down until it touches chest, then return to starting position while looking at the ceiling.",
    substitutes: ["pullup", "kneeling lat pushdown"],
  },
  one_arm_pulldown: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Seated in lat pulldown machine, retract shoulder and scapula, pull handle down until thumb touches shoulder. Repeat on both sides.",
    substitutes: ["pullup", "kneeling lat pushdown"],
  },
  barbell_bentover_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      underhand: "Supinated grip, palms facing away from your feet.",
      overhand: "Pronated grip, palms facing towards your feet.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Stand with hands slightly wider than shoulder width apart, hinge at hips until torso is angled 45 degrees forward. Pull elbows back behind you to complete the row.",
    substitutes: ["seated row", "dumbbell row"],
  },
  dumbbell_bentover_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbell"],
    },
    variants: {
      underhand: "Supinated grip, palms facing away from your feet.",
      neutral_grip: "Neutral grip, palms facing each other.",
      overhand: "Pronated grip, palms facing towards your feet.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Stand with hands beside body holding dumbbells. Hinge at hips until torso is angled 45 degrees forward. Pull elbows back behind you to complete the row.",
    substitutes: ["seated row", "dumbbell row"],
  },
  pendlay_row: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    variants: {
      underhand: "Supinated grip, palms facing away from your feet.",
      overhand: "Pronated grip, palms facing towards your feet.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Start with bar on ground, hands wider than shoulder width apart. Pull elbows back until bar touches mid-chest, then return to ground.",
    substitutes: ["seated row", "barbell row"],
  },
  bodyweight_row: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing away from your feet.",
      overhand: "Pronated grip, palms facing towards your feet.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Hang underneath a bar or table at chest height, row chest to bar, then lower. Keep body rigid and straight during exercise.",
    substitutes: ["seated row", "barbell row"],
  },
  tbar_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "With bar between legs, hinge at hips approximately 45 degrees. Pull elbows backwards until weights touch chest.",
    substitutes: ["seated row", "dumbbell row"],
  },
  seated_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing towards the ceiling.",
      overhand: "Pronated grip, palms facing towards the ground.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Keep back vertical, row elbows back, pulling hands towards hips. Minimize torso and hip movement.",
    substitutes: ["barbell row", "dumbbell row"],
  },
  unilateral_seated_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing the ceiling.",
      neutral_grip: "Neutral grip, palms facing towards your body.",
      overhand: "Pronated grip, palms facing towards the ground.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "With handle attachment, row elbow back, pulling hand and handle to hip, then release.",
    substitutes: ["seated row", "dumbbell row"],
  },

  cable_row: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    variants: {
      underhand: "Supinated grip, palms facing towards the ceiling.",
      overhand: "Pronated grip, palms facing towards the ground.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "With the cable at any height, bend your knees and lean back against the weights. Maintain your body in a stationary position, and row your elbows back, keeping your forearms neutral to the movement. Hold your core strong and tight.",
    substitutes: ["seated row", "tbar row"],
  },
  unilaterial_dumbbell_row: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Leaning forward at a 45 degree angle, with your weight supported through one arm pressing on a study surface, hang the dumbbell from your other arm. Ensure the leg on the same side as your supporting arm is forward. Row your elbow back and your hand to your hip. Repeat on both sides.",
    substitutes: ["unilateral seated row", "dumbbell row"],
  },
  chest_supported_dumbbell_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "With your chest supported on a bench angled to a 30 to 45 degree incline, hand your arms either side with dumbbells in each. Row your elbows back with your hands on a trajectory towards your lower waist. Slowly release the weights back forward.",
    substitutes: ["seated row", "barbell row"],
  },
  machine_row: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing the ceiling.",
      neutral_grip: "Neutral grip, palms facing towards your body.",
      overhand: "Pronated grip, palms facing towards the ground.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Adjust the seat height so your hands retract back to a lower torso height. Row your elbows back.",
    substitutes: ["seated row", "dumbbell row"],
  },
  machine_lat_pulldown: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing towards you.",
      neutral_grip: "Neutral grip, palms facing each other.",
      overhand: "Pronated grip, palms facing away from you.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Ensure you look at the ceiling while performing this exercise. Begin by retracting your scapula down and back, and then pull the machine bar down until your thumbs can touch your chest.",
    substitutes: ["lat pulldown", "pullup"],
  },
  smith_machine_row: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      underhand: "Supinated grip, palms facing forwards.",
      overhand: "Pronated grip, palms facing backwards.",
    },
    unit: "reps",
    muscles: ["back"],
    description:
      "Begin standing, with your hands slightly wider than shoulder width apart holding the bar. With a slight bend in your knees, hinge at your hips until your torso is angled 45 degrees forward. Imagine pulling your elbows back behind you to complete the row.",
    substitutes: ["seated row", "dumbbell row"],
  },
  seated_dumbbell_overhead_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With dumbbells in each hand, begin with the weights in-line with your ears and press them directly up above your head. Lower down until until your thumbs can touch your ears. Puff your chest out during this exercise.",
    substitutes: ["barbell overhead press", "arnold press"],
  },
  barbell_overhead_press: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Standing with the bar starting at chin height and hands slightly wider than shoulder width, press the bar up and as it moves above head height, press your head forward between your arms. Squeeze your bum throughout the duration of the exercise.",
    substitutes: ["barbell overhead press", "arnold press"],
  },
  dumbbell_lateral_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With dumbbells in each hand, pretend your a bird trying to flap your arms, and raise the weights up either side of your body. Ensure your elbows are always at a higher height than the weights and your wrists. Slowly lower down to each side.",
    substitutes: ["unilateral cable raise", "face pulls"],
  },
  dumbbell_front_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With dumbbells in each hand down by your side, one at a time, raise the dumbbell out infront of you until it is at eye height, keeping your arm straight. Then slowly lower back down and repeat on the other side.",
    substitutes: [
      "unilateral cable raise",
      "face pulls",
      "cable_rope_front_raise",
    ],
  },
  cable_rope_front_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With a rope handle in each hand (the cable pinned as low as possible and the cable itself, between your legs), raise the rope handles out infront of you until it is at eye height, keeping your arms straight. Then slowly lower back down.",
    substitutes: ["dumbbell front raise", "face pulls"],
  },
  unilateral_cable_raise: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "With the cable on the lowest adjustment, hold the vertical bar with one hand and lean out from the cable machine by approximately 30 degrees. Hold the handle in the other hand, and raise the handle (leading with your elbow) up to shoulder height.",
    substitutes: ["dumbbell lateral raise", "face pulls"],
  },
  cable_rope_face_pulls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Using the rope cable attachment, adjust the cable height so the pulley is just above head height. Hold the handles with your thumbs at the end of the rope, pointing towards you. Pull the rope towards your forehead, with your hands approximately ear height and your thumbs pointing behind you.",
    substitutes: ["unilateral cable raise", "cable push aparts"],
  },
  cable_push_aparts: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "For this exercise, grip the carribena/handles so that your pinky fingers are facing backwards. Then imagine you're walking through a forest full of vines and spread those bad boys apart. The cable should be pinned just above head height.",
    substitutes: ["unilateral cable raise", "cable rope face pulls"],
  },
  bentover_dumbbell_push_aparts: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Sitting bent forwards, head to knees, holding light dumbbells in either hand dead hanging down either side of your legs, raise them out to either side, pinkies leading the movement until they are in the same vertical plane as your shoulders and your thumbs are pointing straight downwards.",
    substitutes: ["unilateral cable raise", "cable rope face pulls"],
  },

  chest_supported_dumbbell_face_pulls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps", //vs duration
    muscles: ["shoulders"],
    description:
      "Lying on a 30 to 45 degree inclined bench with dumbbells in either hand, pull the dumbbells to either side of your ears, leading the motion with your elbows.",
    substitutes: ["unilateral cable raise", "cable push aparts"],
  },
  chest_supported_dumbbell_face_pulls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lying on a 30 to 45 degree inclined bench with dumbbells in either hand, pull the dumbbells to either side of your ears, leading the motion with your elbows.",
    substitutes: ["unilateral cable raise", "cable push aparts"],
  },
  chest_supported_barbell_face_pulls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lying on a 30 to 45 degree inclined bench with a barbell gripped twice shoulder width, pull your thumbs back until they are in-line with your ears, leading the motion with your elbows.",
    substitutes: ["dumbbell face pulls", "cable push aparts"],
  },
  arnold_dumbbell_press: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Seated on a bench with a back rest, hold the dumbbells in-front of you at eye height, palms facing your face. Keeping the dumbbells at their current height, open your shoulders and move your elbows to either side until the dumbbells are next to your ears, your palms facing forwards, and then press them up overhead.",
    substitutes: ["barbell overhead press", "dumbbell overhead press"],
  },
  lyings_ys: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lying face down on the ground, extend your arms up above your head so your elbows are tucked up against your ears, and your thumbs pointing to the ceiling and your palms to each other. Now try to raise your hands and arms off the ground, pulling your thumbs back as far as you can and your scapula together while maintaining the same shape.",
    substitutes: ["face pulls"],
  },
  lying_ts: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lying face down on the ground, extend your arms out to either side of your body, pointing directly away from yourself so your elbows and hands are in plane/level with your shoulders. Now while keeping your elbows and hands in the same location, rotate your hands so that your palms point upwards/above your head and your thumbs point to the ceiling. Now try to raise your hands and arms off the ground, pulling your thumbs back as far as you can and your scapula together while maintaining the same shape.",
    substitutes: ["supermans"],
  },
  lying_ws: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Lying face down on the ground, extend your arms out to either side of your body, pointing directly away from yourself so your elbows and hands are in plane/level with your shoulders. Now while keeping your elbows in the same location, bend them so that your fingers point directly upwards and so your elbow makes a 90 degree bend. Now position your hands so that your palms face your head, your fingers forwards/above your head, and your thumbs to the ceiling behind you. Now try to raise your hands and arms off the ground, pulling your thumbs back as far as you can and your scapula together while maintaining the same shape.",
    substitutes: ["plank side stars"],
  },
  plank_side_stars: {
    type: "accessory",
    meta: {
      environment: "home",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["shoulders"],
    description:
      "Seated on a bench with a back rest, hold the dumbbells in-front of you at eye height, palms facing your face. Keeping the dumbbells at their current height, open your shoulders and move your elbows to either side until the dumbbells are next to your ears, your palms facing forwards, and then press them up overhead.",
    substitutes: ["lying ts"],
  },
  back_squats: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes. Rest the bar on the backs of your shoulders, behind your head.",
    substitutes: ["front squats", "legpress"],
  },
  bodyweight_squat: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes.",
    substitutes: ["front squats", "legpress"],
  },
  front_squats: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "Stand with your feet slightly wider than shoulder width, toes facing 15 degrees out from forward, slowly lower your body down until your thighs are parallel with the ground. Ensure your core is tight and your knees track in the direction of your toes. Hold the bar on your shoulders, crossing your arms in-front of you (elbows above the bar).",
    substitutes: ["back squats", "legpress"],
  },
  goblet_squats: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "Elevate the heels of your feet on a plate approximate 2in or 5cm above thick. Keep your feet slightly narrower than shoulder width, and holding the dumbbell like a goblet at shoulder height, squat down, keeping your back as erect as possible.",
    substitutes: ["front squats", "legpress"],
  },
  box_squats: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "With a barbell on your shoulders, bodyweight, or holding a dumbbell, situate yourself standing infront of, and facing away from, a box or chair or simular elevated surface. Position your feet shoulder width apart, and slow squat down, as if sitting back to sit down on the chair. Only lightly let your bum touch the chair, before standing back up.",
    substitutes: ["front squats", "legpress"],
  },
  bulgarian_split_squats: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads", "glutes"],
    description:
      "Body weight or with dumbbells in each hand, lunge forward, elevating your rear leg up approximately 20 to 30cm, 1ft, above the ground. Keep your weight over your front leg, and lunge your body down until your front thigh is parallel with the ground.",
    substitutes: ["lunges", "legpress"],
  },
  lunges: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads", "glutes"],
    description:
      "Continuously lunge forward, slowly dropping your rear knee to touch the ground with each subsequent lunge. Ensure your body weight stays predominantly over your front leg.",
    substitutes: ["front squats", "bulgarian split squats"],
  },
  legpress: {
    type: "compound",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      wide_stance:
        "Place your feet a fair bit wider than shoulder width apart and vertically/centrally on the face of feet placement area.",
      neutral_stance:
        "Place your feet shoulder width apart and vertically/centrally on the face of feet placement area.",
      narrow_stance:
        "Place your feet 10cm/3in apart and vertically/centrally on the face of feet placement area.",
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "Slowly lower the weight down until your knees are at a 90 degree angle. Then push the weight back up, ensuring not to lock-out your legs at the top.",
    substitutes: ["front squats", "back squats"],
  },
  quad_extension: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "On a quad extension machine, straighten your legs against the resistance of the machine. Face your toes in different directions to preferencially engage different parts of your quad muscles.",
    substitutes: ["goblet squats", "legpress"],
  },

  step_ups: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads", "glutes"],
    description:
      "Step onto an elevated surface without jumping, then slowly lower yourself back down on one leg without falling.",
    substitutes: ["lunges", "front squats"],
  },

  wall_sits: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["quads"],
    description:
      "Lean against a wall with your knees at a 90-degree angle and hold the position for as long as possible without sinking down or using your arms.",
    substitutes: ["front squats", "goblet squats"],
  },

  romanian_deadlifts: {
    type: "compound",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      wide_stance: "Feet one and a half times wider than shoulder-width apart.",
      neutral_stance: "Feet shoulder-width apart.",
      narrow_stance: "Feet touching each other.",
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Hold a bar or dumbbells at waist level with a slight knee bend. Hinge at your hips, lowering the weights along your legs while keeping your back straight.",
    substitutes: ["dumbbell rdls"],
  },

  hamstring_back_extensions: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings", "glutes"],
    description:
      "Lock your feet in a back extension machine and lower your torso over the front while resisting the motion by curling your heels towards your bum.",
    substitutes: ["dumbbell rdls", "seated hamstring curl"],
  },

  unilateral_dumbbell_rdls: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings", "glutes"],
    description:
      "Lean your weight onto one foot and track dumbbells up and down that leg while maintaining a straight back.",
    substitutes: ["barbell rdls", "hamstring back extensions"],
  },

  seated_hamstring_curl: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Lock your knees in place and pull your heels towards your bum as far as possible.",
    substitutes: ["dumbbell rdls", "seated hamstring curl"],
  },

  tbar_rdls: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["barbell"],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Place the bar between your legs, slightly in front of your center of gravity, and sit back with mostly straight legs until the weight touches the ground, keeping your back straight.",
    substitutes: ["dumbbell rdls", "unilateral dumbbell rdls"],
  },

  lying_machine_hamstring_curls: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Lying on the machine, curl your heels towards your bum and then slowly release.",
    substitutes: ["tbar rdls", "seated hamstring curl"],
  },

  lying_dumbbell_hamstring_curls: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["dumbbell"],
    },
    unit: "reps",
    muscles: ["hamstrings"],
    description:
      "Lie face down, hold a dumbbell between your feet, and lower it towards the ground. Then curl it back up, pulling your heels towards your bum and up towards the ceiling.",
    substitutes: ["tbar rdls", "seated hamstring curl"],
  },

  cable_leg_adduction: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "Stand next to the cable machine, attach the handle to your outer foot, and move your foot away from the machine horizontally.",
    substitutes: ["cable kickbacks"],
  },

  cable_kickbacks: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "Face the cable machine, attach the handle to your ankle, and kick your heel backwards as far as possible.",
    substitutes: ["cable leg adduction"],
  },

  hip_thrusts: {
    type: "compound",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "With your back resting on an elevated surface or the ground, thrust your hips forward while keeping your heels in place.",
    substitutes: ["unilateral hip thrusts"],
  },

  unilateral_hip_thrusts: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "With your back resting on an elevated surface or the ground, thrust your hips forward with one knee bent and the other leg extended. Keep your heel in place.",
    substitutes: ["cable kickbacks"],
  },

  deadlift: {
    type: "compound",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["back", "hamstrings"],
    description:
      "Stand with the bar over your feet, grip it shoulder-width apart, and lift by straightening your legs. Keep your back straight. Reverse the motion to lower the bar to the ground.",
    substitutes: ["romanian deadlifts"],
  },

  donkey_kicks: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "From a position resembling a donkey, kick one leg backward and upward as much as possible.",
    substitutes: ["cable kickbacks"],
  },

  good_girls: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      'On the "good girls" machine, seated, bring your knees together.',
    substitutes: ["cable kickbacks"],
  },

  fire_hydrants: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "From a position on all fours, raise one leg out to the side, keeping the other three points of contact stationary.",
    substitutes: ["froggy pumps"],
  },

  froggy_pumps: {
    type: "accessory",
    meta: {
      environment: "gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "Lie on your back, bend your knees, and drop them to either side. Push through the outsides of your feet to lift your bum and lower back off the ground.",
    substitutes: ["cable kickbacks", "fire hydrants"],
  },

  bad_girls: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      'Strengthen abduction muscles by pushing your knees apart using the "bad girls" machine or a band around your knees while seated on a chair.',
    substitutes: ["cable kickbacks"],
  },

  seated_calf_raises: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      toes_in: "Face your toes 30 degrees inwards from forwards.",
      standard: "Ensure your feet are forward and shoulder-width apart.",
      toes_out: "Face your toes 30 degrees outwards from forwards.",
    },
    unit: "reps",
    muscles: ["calves"],
    description:
      "Seated with a restraint above your knees, raise your heels to push your knees away from the ground.",
    substitutes: ["standing calf raises"],
  },

  standing_calf_raises: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      toes_in: "Face your toes 30 degrees inwards from forwards.",
      standard: "Ensure your feet are forward and shoulder-width apart.",
      toes_out: "Face your toes 30 degrees outwards from forwards.",
    },
    unit: "reps",
    muscles: ["calves"],
    description:
      "Stand with weight and raise your heels to perform calf raises.",
    substitutes: ["seated calf raises"],
  },

  walking_calf_raises: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    unit: "reps",
    muscles: ["calves"],
    description:
      "Hold weights in each hand and walk while raising your heels on each step.",
    substitutes: ["standing calf raises"],
  },

  unilateral_calf_raises: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: [],
    },
    variants: {
      toes_in: "Face your toes 30 degrees inwards from forwards.",
      standard: "Ensure your feet are forward.",
      toes_out: "Face your toes 30 degrees outwards from forwards.",
    },
    unit: "reps",
    muscles: ["calves"],
    description: "With weight on the ball of one foot, perform calf raises.",
    substitutes: ["seated calf raises"],
  },

  monster_walks: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["band"],
    },
    unit: "reps",
    muscles: ["glutes"],
    description:
      "With a band around your knees, squat to a 60-degree knee bend and walk side to side, then front to back.",
    substitutes: ["bad girls"],
  },

  dumbbell_curls: {
    type: "compound",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["dumbbells", "bands"],
    },
    variants: {
      hammer: "Use a neutral grip, palms facing your body.",
      supinated:
        "Keep a supinated grip on the dumbbell, palms facing forwards to upwards.",
      alternating:
        "Curl each dumbbell upwards from your side until your elbows are fully bent.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Perform seated or standing with dumbbells in hand. Curl each dumbbell upwards from your side until your elbows are fully bent.",
    substitutes: ["hammer curls"],
  },

  rope_curls: {
    type: "accessory",
    meta: {
      environment: "home gym",
      level: [0, 1, 2],
      equipment: ["bands"],
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Using the rope cable attachment at the lowest elevation, hold the ends with a neutral grip and curl them inwards and upwards.",
    substitutes: ["dumbbell hammer curls"],
  },

  spider_curl: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    variants: {
      hammer: "Neutral grip, palms facing body.",
      supinated: "Supinated grip, palms facing upwards.",
      alternating: "Start neutral, finish with supinated grip.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description:
      "Support chest on inclined bench, dumbbells in hand, alternate curling with supinated wrist.",
    substitutes: ["barbell curls"],
  },
  barbell_curls: {
    type: "compound",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["barbell"] },
    variants: {
      wide_grip: "Wider than shoulder width apart.",
      narrow_grip: "Palms width apart.",
      standard: "Shoulder width apart.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description: "Hold barbell with supinated grip, minimize swinging.",
    substitutes: ["dumbbell curls"],
  },
  drag_curls: {
    type: "accessory",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell", "dumbbells"],
    },
    variants: {
      dumbbell: "With dumbbells.",
      barbell: "With barbell, hands slightly wider than shoulder width.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description: "Supinated grip, drag weights up in same plane as torso.",
    substitutes: ["dumbbell curls"],
  },
  unilateral_hammer_cable_curl: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    unit: "reps",
    muscles: ["biceps"],
    description: "Hold cable carabiner at lowest point, curl hand to chest.",
    substitutes: ["hammer curl"],
  },
  preacher_curls: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells", "barbell"],
    },
    variants: {
      underhand: "Underhand grip, palms up.",
      neutral_grip: "Neutral grip, palms horizontal.",
      overhand: "Overhand grip, palms down.",
    },
    unit: "reps",
    muscles: ["biceps"],
    description: "Elbows supported at 45-degree angle, micro-pause at bottom.",
    substitutes: ["barbell curl"],
  },
  cable_bar_curls: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    unit: "reps",
    muscles: ["biceps"],
    description: "Supinated grip, minimize shoulder engagement.",
    substitutes: ["dumbbell hammer curls"],
  },
  tricep_rope_pushdown: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    unit: "reps",
    muscles: ["triceps"],
    description: "Elbows stationary, twist handles downwards at bottom.",
    substitutes: ["bar cable pushdown"],
  },
  tricep_bar_pushdown: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    unit: "reps",
    muscles: ["triceps"],
    description: "Elbows stationary.",
    substitutes: ["rope cable pushdown"],
  },
  unilateral_cable_pushdown: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    variants: {
      overhand: "Palm down.",
      neutral: "Neutral hammer grip.",
      underhand: "Supinated grip, palm up.",
    },
    unit: "reps",
    muscles: ["triceps"],
    description: "Elbow in-front of hip, elbows stationary.",
    substitutes: ["rope cable pushdown"],
  },
  skull_crushers: {
    type: "compound",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["barbell"] },
    unit: "reps",
    muscles: ["triceps"],
    description: "Lie flat, barbell above skull, lower then press up.",
    substitutes: ["face press"],
  },
  face_press: {
    type: "compound",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["triceps"],
    description: "Incline plank position, lower body towards surface.",
    substitutes: ["overhead_skull_crushers"],
  },
  overhead_skull_crusher: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["barbell", "dumbbell", "bands"],
    },
    unit: "reps",
    muscles: ["triceps"],
    description: "Start behind head, extend arms overhead.",
    substitutes: ["rope cable pushdown"],
  },
  tricep_dip: {
    type: "compound",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["triceps"],
    description: "Bench behind, legs in-front, lower bum then press up.",
    substitutes: ["rope cable pushdown"],
  },
  dumbbell_skull_crushers: {
    type: "compound",
    meta: {
      environment: "gymhome",
      level: [0, 1, 2],
      equipment: ["dumbbells"],
    },
    unit: "reps",
    muscles: ["triceps"],
    description: "Lie flat, dumbbells above skull, lower then press up.",
    substitutes: ["face press"],
  },
  diamond_pushups: {
    type: "accessory",
    meta: { environment: "home", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["triceps"],
    description: "Pushup position, hands in diamond, elbows tucked.",
    substitutes: ["face press"],
  },
  unilateral_cable_push_aways: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    unit: "reps",
    muscles: ["triceps"],
    description: "Hold cable, press down with palm facing down.",
    substitutes: ["face press"],
  },
  jack_knives: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Sit in V shape, knees bent, extend legs out, bring knees to chest.",
    substitutes: ["crunches"],
  },
  crunches: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Lying flat, knees bent, crunch abs, aiming to flatten lower back.",
    substitutes: ["dead_bugs", "bicycle_crunches"],
  },
  l_sits: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description: "Sit or hang, hold legs up, keep core tight.",
    substitutes: ["banana_hold", "plank"],
  },
  russian_twists: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description:
      "Sitting, lean back, twist torso, touch ground on either side.",
    substitutes: ["jack_knives"],
  },
  plank: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "duration",
    muscles: ["abs"],
    description: "Hold plank position, engage core.",
    substitutes: ["banana_hold", "side_plank"],
  },
  side_plank: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "duration",
    muscles: ["abs"],
    description: "Support weight on elbow and feet, hold body straight.",
    substitutes: ["banana_hold", "plank"],
  },
  crunch_toes_touches: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description: "Lying flat, knees bent, touch opposite hand to foot.",
    substitutes: ["russian_twists"],
  },
  dead_bugs: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description: "Lie flat, lower opposite arm and leg, keep core tight.",
    substitutes: ["crunches", "lying_leg_lifts"],
  },
  lying_leg_lifts: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description: "Lie flat, raise and lower legs, keep core tight.",
    substitutes: ["jack_knives", "hanging_knee_raises"],
  },
  hanging_knee_raises: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description: "Hang, raise knees to chest, control swinging.",
    substitutes: ["lying_leg_lifts", "v_crunches"],
  },
  mountain_climbers: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description: "In push-up position, alternate bringing knees to elbows.",
    substitutes: ["plank", "kneeling_cable_crunch"],
  },
  kneeling_cable_crunch: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: ["bands"] },
    unit: "reps",
    muscles: ["abs"],
    description: "On knees, hold cable behind head, crunch down and up.",
    substitutes: ["jack_knives", "dead_bug"],
  },
  bicycle_crunches: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "reps",
    muscles: ["abs"],
    description: "Lie flat, twist torso, elbow to opposite knee.",
    substitutes: ["dead_bugs", "hanging_knee_raises"],
  },
  banana_hold: {
    type: "accessory",
    meta: { environment: "gymhome", level: [0, 1, 2], equipment: [] },
    unit: "duration",
    muscles: ["abs"],
    description: "Lie flat, curve body, hold arms and legs off ground.",
    substitutes: ["plank", "leg_lifts"],
  },
};

// module.exports = { tempos, workouts, exercises, schemes }
//info page
//tempos
//rep ranges
//warmup
