/**
 * Marketing content for PicAlive, extracted and expanded from PRODUCT_STORY.md.
 * Kept in one typed module so pages, schema, and internal links stay in sync.
 *
 * PicAlive is a single-purpose iOS app: it turns one still photo into a short,
 * realistic, AI-generated moving video ("Make Alive"). Everything here orbits
 * that one loop — choose a photo, tap once, get a living video.
 */

/* -------------------------------------------------------------------------- */
/*  Screenshots (self-contained App Store shots with baked-in headlines)      */
/* -------------------------------------------------------------------------- */

export type Shot = {
  src: string;
  alt: string;
  caption: string;
};

export const SHOTS: Record<string, Shot> = {
  memories: {
    src: "/screenshot_0.jpg",
    alt: "PicAlive turning an old black-and-white portrait into a realistic moving video of a smiling woman in a green dress waving beside a birch tree",
    caption: "Turn a faded old photo into a living moment",
  },
  oneTap: {
    src: "/screenshot_1.jpg",
    alt: "PicAlive animating two separate still photos into one lifelike video of an older man and a younger man standing together in a sunlit garden",
    caption: "Animate any photo — even ones that never moved",
  },
  breathe: {
    src: "/screenshot_2.jpg",
    alt: "PicAlive bringing a baby photo to life as a video of a laughing baby in yellow pajamas waving toward the camera",
    caption: "Watch faces smile, laugh, and wave again",
  },
  portrait: {
    src: "/screenshot_3.jpg",
    alt: "PicAlive animating a portrait into a moving video of a smiling woman with wavy blonde hair hugging a golden retriever puppy on a deck",
    caption: "Bring portraits, pets, and people to life",
  },
};

export const SHOT_ORDER: Shot[] = [
  SHOTS.memories,
  SHOTS.oneTap,
  SHOTS.breathe,
  SHOTS.portrait,
];

/* -------------------------------------------------------------------------- */
/*  The three product pillars                                                 */
/* -------------------------------------------------------------------------- */

export type Pillar = { name: string; title: string; body: string };

export const PILLARS: Pillar[] = [
  {
    name: "Effortless",
    title: "One photo, one tap",
    body: "No prompts to write, no styles to pick, no timelines to edit. Choose a photo, tap Make Alive, and PicAlive handles the rest automatically.",
  },
  {
    name: "Realistic",
    title: "Natural, believable motion",
    body: "Faces smile, hair sways, water ripples, and light shifts — motion that feels captured on camera, not a cartoon filter slapped on top.",
  },
  {
    name: "Shareable",
    title: "A real video, ready to post",
    body: "Every result is a standard video clip. Save it to your camera roll or send it straight to Messages, Instagram, TikTok, and anywhere else.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Capabilities (what the app does — no per-feature detail pages)            */
/* -------------------------------------------------------------------------- */

export type Capability = {
  icon: string; // maps to an icon component in FeatureGrid
  title: string;
  body: string;
};

export const CAPABILITIES: Capability[] = [
  {
    icon: "tap",
    title: "One-tap Make Alive",
    body: "Pick any photo and tap once. There's nothing to configure — PicAlive writes the animation for you on the server and sends back a finished clip.",
  },
  {
    icon: "motion",
    title: "Lifelike, realistic motion",
    body: "The AI animates faces, hair, water, foliage, and background depth so the moment moves the way it would have if you'd filmed it.",
  },
  {
    icon: "speed",
    title: "Live queue & progress",
    body: "A progress ring shows “Processing” or your place in line with a friendly countdown, refreshed every few seconds while you wait.",
  },
  {
    icon: "share",
    title: "Save & share instantly",
    body: "Download the finished video to your Photos library or hand it to the native iOS share sheet — Messages, Instagram, and more.",
  },
  {
    icon: "history",
    title: "Your history, kept safe",
    body: "Every generation lands in your library. Replay a favorite, re-animate the same photo, or delete a clip whenever you want.",
  },
  {
    icon: "privacy",
    title: "No account, ever",
    body: "No login, email, or password. An anonymous device identity gets you creating in seconds and keeps the whole experience frictionless.",
  },
];

/* -------------------------------------------------------------------------- */
/*  How it works — the Make Alive loop                                        */
/* -------------------------------------------------------------------------- */

export const HOW_IT_WORKS: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Choose a photo",
    body: "Open the picker and pick any image from your library — an old family portrait, a selfie, your pet, a landscape. PicAlive optimizes it automatically.",
  },
  {
    step: "02",
    title: "Tap Make Alive",
    body: "One tap uploads your photo. You never write a prompt or choose a style — PicAlive figures out the right, natural motion on its own.",
  },
  {
    step: "03",
    title: "Watch the queue",
    body: "A live progress ring shows whether it's processing or waiting in line, counting down the minutes so you always know what's happening.",
  },
  {
    step: "04",
    title: "Save & share",
    body: "Your video plays on a loop the instant it's ready. Save it to Photos or share it anywhere — the moment is now a clip you can keep.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Examples — what people bring to life                                      */
/* -------------------------------------------------------------------------- */

export type UseCase = {
  slug: string;
  emoji: string;
  title: string;
  audience: string;
  problem: string;
  solution: string;
  example: string;
};

export const USE_CASES: UseCase[] = [
  {
    slug: "old-family-photos",
    emoji: "🖼️",
    title: "Old family photos, moving again",
    audience: "Nostalgia seekers",
    problem:
      "Decades-old portraits are the only record of grandparents, childhood, and moments no one ever filmed — frozen and silent forever.",
    solution:
      "Feed a scanned or screenshotted photo to PicAlive and watch it move — a smile, a turn of the head, a wave — bringing the memory back to life.",
    example:
      "Animate a black-and-white portrait of your grandmother and see her smile and wave as if the camera had kept rolling.",
  },
  {
    slug: "portraits-and-selfies",
    emoji: "🤳",
    title: "Portraits & selfies that come alive",
    audience: "Everyday sharers",
    problem:
      "A great portrait is still just a still. You want people to stop scrolling and feel like they're really looking at you.",
    solution:
      "Turn any selfie or portrait into a short, lifelike clip where you move and react — perfect for a profile, a story, or a surprise.",
    example:
      "Upload a favorite selfie and get a living video where you smile and glance at the camera, ready to post.",
  },
  {
    slug: "pets",
    emoji: "🐶",
    title: "Pets brought to life",
    audience: "Pet lovers",
    problem:
      "Your best photo of your dog or cat catches the look perfectly — but it's over in a frozen instant you can never replay.",
    solution:
      "PicAlive animates fur, ears, and expression into a warm, playful clip that captures your pet's personality in motion.",
    example:
      "Animate a photo of your puppy on the porch and watch it blink, breathe, and tilt its head.",
  },
  {
    slug: "landscapes-and-nature",
    emoji: "🌄",
    title: "Landscapes that breathe",
    audience: "Travelers & photographers",
    problem:
      "That stunning sunset or waterfall shot loses its magic as a static image — the movement that made the moment is gone.",
    solution:
      "PicAlive adds gentle, believable motion — drifting clouds, rippling water, swaying trees — so the scene feels alive again.",
    example:
      "Bring a coastal photo to life with rolling waves and moving clouds for a mesmerizing loop.",
  },
  {
    slug: "social-content",
    emoji: "📱",
    title: "Scroll-stopping social clips",
    audience: "Creators & social users",
    problem:
      "You need eye-catching video for Reels, TikTok, and Stories, but you don't have footage — or the time and skill to edit it.",
    solution:
      "Turn a single striking photo into a share-ready video in a couple of minutes, with zero editing and nothing to learn.",
    example:
      "Post a moving version of a portrait or product shot and watch it outperform the still it started from.",
  },
  {
    slug: "loved-ones",
    emoji: "🤍",
    title: "Feel close to loved ones",
    audience: "Anyone remembering someone",
    problem:
      "When someone is far away or no longer with us, a photograph can feel painfully still and distant.",
    solution:
      "Seeing a familiar face move and smile again can be quietly moving — a gentle, personal way to feel a little closer.",
    example:
      "Animate a treasured portrait and keep a warm, living memory on your phone to revisit anytime.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Reasons to reach for PicAlive (emotional framing)                         */
/* -------------------------------------------------------------------------- */

export const PROBLEMS_SOLVED: string[] = [
  "“I wish I could see this old photo actually move.”",
  "“I want to relive this moment, not just look at it.”",
  "“I'd love a wow-clip to share, but I can't edit video.”",
  "“I don't want to learn prompts or settings — just make it move.”",
  "“I miss the way they smiled.”",
];

/* -------------------------------------------------------------------------- */
/*  Pricing — free tier vs PicAlive PRO                                       */
/* -------------------------------------------------------------------------- */

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  intro?: string;
  blurb: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "PicAlive PRO Weekly",
    price: "$4.99",
    cadence: "per week",
    intro: "First week just $2.99",
    blurb: "Pay-as-you-go access to everything in PRO. Ideal for a burst of animating — a batch of old photos, a weekend project — with the freedom to stop anytime.",
  },
  {
    name: "PicAlive PRO Quarterly",
    price: "$29.99",
    cadence: "per 3 months",
    blurb: "The most popular plan and the best value — roughly a third of the weekly rate for three full months of unlimited, watermark-free, priority creation.",
    featured: true,
  },
];

export const PRO_BENEFITS: string[] = [
  "Unlimited photo-to-video generations",
  "Priority, faster processing in the queue",
  "No watermark on saved or shared videos",
  "No ads and no upsell interruptions",
];

/** Free vs PRO comparison rows. */
export const PLAN_COMPARISON: { label: string; free: string; pro: string }[] = [
  { label: "Make Alive generations", free: "Limited", pro: "Unlimited" },
  { label: "Video quality", free: "Full HD", pro: "Full HD" },
  { label: "Watermark on exports", free: "PicAlive watermark", pro: "None" },
  { label: "Processing speed", free: "Standard queue", pro: "Priority queue" },
  { label: "Ads", free: "Occasional", pro: "None" },
  { label: "Save & share", free: "Yes", pro: "Yes" },
  { label: "History library", free: "Yes", pro: "Yes" },
  { label: "Account required", free: "No", pro: "No" },
];

/* -------------------------------------------------------------------------- */
/*  Companion apps (AI Journey ecosystem — PicAlive's siblings)               */
/* -------------------------------------------------------------------------- */

export const COMPANION_APPS: { name: string; what: string; emoji: string }[] = [
  { name: "Videx", what: "AI Video Generator", emoji: "🎬" },
  { name: "Photix", what: "AI Image Generator", emoji: "🎨" },
  { name: "FxAI", what: "AI Photo Enhancer", emoji: "✨" },
  { name: "SwapTo", what: "AI Face Swap", emoji: "🔄" },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials (illustrative, reflecting the app's stated 4.8 rating)       */
/* -------------------------------------------------------------------------- */

export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      "Turned my photo into a realistic moving video in seconds. I actually gasped when my grandma waved back at me.",
    name: "Elena M.",
    role: "Brought old photos to life",
  },
  {
    quote:
      "Watching my old photos move felt unreal — like the memory came back to life on my phone.",
    name: "Marcus T.",
    role: "Nostalgia seeker",
  },
  {
    quote:
      "Just upload a photo and it starts moving. So simple and fun! My whole family group chat is obsessed now.",
    name: "Priya S.",
    role: "Everyday sharer",
  },
  {
    quote:
      "I animated a photo of our dog and it captured his little head tilt perfectly. Can't stop watching it loop.",
    name: "Dani R.",
    role: "Pet lover",
  },
  {
    quote:
      "No prompts, no settings, no editing. One tap and a still selfie became a clip good enough to post to my story.",
    name: "Jordan K.",
    role: "Content creator",
  },
  {
    quote:
      "My travel shots finally feel like the moment I remember — the waves and clouds actually move now.",
    name: "Sofia L.",
    role: "Travel photographer",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                         */
/* -------------------------------------------------------------------------- */

export type Faq = { q: string; a: string };

export const FAQS: { category: string; items: Faq[] }[] = [
  {
    category: "Getting started",
    items: [
      {
        q: "What is PicAlive?",
        a: "PicAlive is an iOS app that turns a single still photo into a short, realistic, AI-generated moving video. You pick a photo, tap Make Alive, and a few minutes later you get a lifelike clip where faces, hair, water, and other elements move naturally — as if the moment had been filmed.",
      },
      {
        q: "Do I need any editing or prompt-writing skills?",
        a: "None at all. There's nothing to write, choose, or tune. You provide the photo and PicAlive handles everything else automatically — the animation instructions are generated on the server, so the whole process is one tap.",
      },
      {
        q: "Is PicAlive free?",
        a: "Yes — PicAlive is free to download and try. Free videos carry a small PicAlive watermark and have usage limits, with occasional ads. PicAlive PRO unlocks unlimited, ad-free, watermark-free videos with faster, priority processing.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. PicAlive has no logins, emails, or passwords. You're assigned an anonymous, secure device identity so you can start creating immediately.",
      },
      {
        q: "Which devices does PicAlive support?",
        a: "PicAlive runs on iPhone and iPad with a dark-mode interface, and adapts cleanly from a phone in your hand to a larger iPad screen.",
      },
    ],
  },
  {
    category: "How it works",
    items: [
      {
        q: "How does PicAlive animate my photo?",
        a: "When you tap Make Alive, your photo is sent to PicAlive's servers, where an AI model generates a matching animation and returns it as a video. You don't write a prompt or pick a style — a descriptive animation prompt is created automatically on the server side.",
      },
      {
        q: "How long does it take?",
        a: "Usually a few minutes. The app shows live progress — either “Processing video” or “In queue, N ahead” with an estimated countdown (roughly two minutes per task ahead of you). PRO subscribers get priority processing for faster results.",
      },
      {
        q: "What kinds of photos work best?",
        a: "Almost anything: portraits, selfies, pets, landscapes, and old family photos all animate beautifully. A clear subject and good lighting give the most natural motion. Higher-resolution images give the AI more detail to work with.",
      },
      {
        q: "What happens to the finished video?",
        a: "It plays automatically on a loop on the Result screen. You can save it straight to your Photos library or share it through the standard iOS share sheet. Every generation is also kept in your History to replay, re-animate, or delete.",
      },
      {
        q: "Can I reuse a photo or make another version?",
        a: "Yes. From your History you can regenerate — reuse a previous photo to run a fresh animation — or replay and manage any past result.",
      },
    ],
  },
  {
    category: "PicAlive PRO & pricing",
    items: [
      {
        q: "What does PicAlive PRO include?",
        a: "PRO gives you unlimited Make Alive generations, priority (faster) processing, no ads, and no watermark on the videos you save or share. It turns PicAlive into unlimited, uninterrupted, clean video creation.",
      },
      {
        q: "How much does PicAlive PRO cost?",
        a: "PicAlive PRO Weekly is $4.99 per week, with an introductory first week for $2.99. PicAlive PRO Quarterly is $29.99 for three months and is the most popular, best-value option. Prices are shown in the app and localized to your region by the App Store.",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. All plans are auto-renewing and can be cancelled anytime from your Apple ID subscription settings. PicAlive also supports Restore Purchases to re-apply an active subscription on your device.",
      },
      {
        q: "Do free users get watermarked videos?",
        a: "Videos saved or shared on the free tier carry a small, semi-transparent PicAlive watermark. Upgrading to PRO removes the watermark from every video you export.",
      },
    ],
  },
  {
    category: "Privacy & safety",
    items: [
      {
        q: "Is PicAlive private?",
        a: "There are no accounts, emails, or passwords — just an anonymous identifier stored securely in your device's Keychain. PicAlive asks for App Tracking Transparency before any personalized advertising, so you decide what you're comfortable with.",
      },
      {
        q: "What happens to the photos I upload?",
        a: "Your chosen photo is sent to PicAlive's cloud service to generate the animation and is processed to produce your video. Saving the result to your device's photo library is a deliberate step you take — the finished clip is yours to keep and share.",
      },
      {
        q: "Are there content safety measures?",
        a: "Yes. The backend can reject unsafe or inappropriate images, which is surfaced to you as a clear “unsafe content” message, helping keep the app appropriate for everyone.",
      },
    ],
  },
];

/** Flattened FAQ list for FAQPage structured data. */
export const ALL_FAQS: Faq[] = FAQS.flatMap((group) => group.items);
