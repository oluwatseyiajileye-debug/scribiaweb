export type SceneArtId =
  | "moon-rise"
  | "shadow-patrol"
  | "watcher"
  | "order"
  | "ruins"
  | "hut"
  | "well"
  | "battle"
  | "egg"
  | "end";

export type Scene = {
  id: string;
  art: SceneArtId;
  variant: "title" | "content" | "end";
  kicker: string;
  title?: string;
  meta?: string;
  paragraphs?: string[];
  credit?: string;
};

export const scenes: Scene[] = [
  {
    id: "title",
    art: "moon-rise",
    variant: "title",
    kicker: "A SCRIBIA MOTION STORY",
    title: "RED NIGHT",
    meta: "Chapter One",
  },
  {
    id: "massacre",
    art: "moon-rise",
    variant: "content",
    kicker: "I",
    paragraphs: [
      "The red moon hangs over Ikuwamiri tonight — a shameless, eerie thing that feeds on blood and mayhem.",
      "Its belly is full. The streets are not empty.",
      "Men. Women. Children. No one was spared.",
    ],
  },
  {
    id: "shadow",
    art: "shadow-patrol",
    variant: "content",
    kicker: "II",
    paragraphs: [
      "Something moves between the bodies.",
      "A hideous shadow, patrolling what it has made — admiring its work as it steps over the dead.",
    ],
  },
  {
    id: "watcher",
    art: "watcher",
    variant: "content",
    kicker: "III",
    paragraphs: [
      "Far off, Lucianne — Queen of Witches — watches the shadow demon and the blood moon circle the ruins like dancers.",
      "She came herself, to witness the result of her own decision, and to be certain nothing was left undone.",
      "She breathes in the stench of forbidden magic and knows it for what it is: a debt, finally collected.",
      "Ikuwamiri had reached for what should never be touched. Ten months of warnings. Ten months of arrogance.",
      "Tonight, the council's patience ran out.",
    ],
  },
  {
    id: "order",
    art: "order",
    variant: "content",
    kicker: "IV",
    paragraphs: [
      "“My lady — everything is done. We are prepared to go in.”",
      "“Proceed,” she said. “Make sure they don't let their guard down. We don't know what those people unleashed when they knew they were cornered.”",
      "“Everything that needs to be done — done thoroughly.”",
    ],
  },
  {
    id: "ruins",
    art: "ruins",
    variant: "content",
    kicker: "V",
    paragraphs: [
      "Kim gave the signal. Twenty witches broke from the shadows and split into four, moving through what was left of Ikuwamiri.",
      "A village that had dabbled in the forbidden — and was sure to have hidden what it could not burn.",
      "At the village center, five searched the huts around the old well. Relics, destroyed on sight. Texts, gathered.",
      "And then — a door, and what waited behind it.",
    ],
  },
  {
    id: "wunni",
    art: "hut",
    variant: "content",
    kicker: "VI",
    paragraphs: [
      "Four women lay dead inside. Three, they had braced for. The fourth was worse — her stomach opened, a bloodied knife still in another's hand.",
      "“You knew her?” Clara asked.",
      "“Her name was Wunni,” Fiona said. “A midwife. A powerful witch.”",
      "“If she was the midwife,” Clara said slowly, “then someone here was about to give birth.”",
      "They looked at the body on the bed. At what it confirmed.",
      "“Then where,” Fiona asked, “is the baby?”",
    ],
  },
  {
    id: "well",
    art: "well",
    variant: "content",
    kicker: "VII",
    paragraphs: [
      "A screech tore through the ruins — from the well.",
      "They ran outside to find two of their own already fighting it: a bird, thirty meters of wing and fury, straining against something that would not let it fly.",
      "“Clara — call for backup,” Fiona ordered, already moving. “Jade, distract it. I'll bind it. You two finish it.”",
    ],
  },
  {
    id: "broken",
    art: "battle",
    variant: "content",
    kicker: "VIII",
    paragraphs: [
      "For a moment, the plan held. Jade's illusion pulled the creature's eye; Fiona's binding closed around it; the others struck true.",
      "Then it screamed — a sound that folded their formation in on itself and stole their focus whole.",
      "Before anyone could recover, its beak came down on Jade. There was no time for her to scream.",
      "Fiona's second binding never landed. A wing caught her first, and threw her back through the wall of a hut.",
    ],
  },
  {
    id: "egg",
    art: "egg",
    variant: "content",
    kicker: "IX",
    paragraphs: [
      "The two who remained could not afford to panic, even as the bird turned on them.",
      "Then — impossibly — it screamed in pain instead, and they struck without hesitating a second time.",
      "Wing after wing, screech after screech, until the great bird began to shrink.",
      "Beneath what was left of it, something small and red began to glow.",
      "And then it was gone — pulled whole into a single, pulsing egg.",
    ],
  },
  {
    id: "end",
    art: "end",
    variant: "end",
    kicker: "END OF CHAPTER ONE",
    title: "What hatched from that egg would change everything.",
    meta: "Chapter Two — Atunbi — coming soon",
    credit: "A motion story adaptation by SCRIBIA Writing Services",
  },
];
