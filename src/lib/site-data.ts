import hero from '@/assets/new-hero.jpg';
import audio from '@/assets/new-audio.jpg';
import production from '@/assets/new-production.jpg';
import conference from '@/assets/hero-stage.jpg';
import broadcast from '@/assets/work-broadcast.jpg';
import exhibition from '@/assets/work-expo.jpg';
import speaker from '@/assets/work-keynote.jpg';
import panel from '@/assets/work-panel.jpg';

export const subBrands = {
  tsf: {
    name: "The Stage Factory (TSF)",
    tagline: "Heavy Structural Staging, German Pagodas & Certified Box Trussing",
    experience: "11+ Years Industrial Infrastructure",
    capabilities: [
      "Certified 300mm, 400mm & 520mm aluminum box trussing",
      "Heavy-duty all-weather German Pagodas (5x5m, 10x10m)",
      "High-load modular stage platforms & hydraulic catwalks",
      "Structural engineering & certified wind ratings",
      "3D CAD pre-visualization & floor weight distribution plans",
    ],
  },
  tsfAv: {
    name: "TSF-AV",
    tagline: "Concert-Grade Audio, P2.6 Ultra-HD LED Displays & Live Broadcast",
    experience: "Turnkey Enterprise Technical AV Rigs",
    capabilities: [
      "d&b audiotechnik V-Series & Y-Series line arrays",
      "P2.6 ultra-high-definition indoor LED display walls",
      "Novastar MX40 Pro / A8s calibration & processing",
      "Digico SD & Yamaha CL/QL digital audio consoles",
      "Broadcast multi-camera optical fiber switching & 4K live streaming",
    ],
  },
};

export const services = [
  {
    slug: 'staging',
    title: 'Staging & Trussing (TSF)',
    subBrand: 'The Stage Factory (TSF)',
    description: '11+ years of heavy structural staging, certified aluminum box trussing, and German Pagodas engineered for high-stakes corporate venues.',
    image: conference,
    alt: 'Heavy-duty certified aluminum box trussing and modular stage platform at a corporate summit',
    heading: 'The structural backbone of mega-events.',
    intro: 'Heavy-duty infrastructure engineered with certified load calculations and zero margin for error.',
    paragraphs: [
      'Through The Stage Factory (TSF), our dedicated structural division brings over 11 years of heavy staging and rigging expertise to Hyderabad and South India. Every stage, roof system, and suspended grid is engineered to exceed municipal and venue safety standards.',
      'We manufacture and deploy heavy-load modular platforms, curved fashion runways, motorized ground-support towers, and certified aluminum box trussing (300mm, 400mm, and 520mm profiles). For outdoor pavilions and large summits, we deploy premium German Pagodas built to withstand adverse weather with certified wind load ratings.',
      'Every project includes 3D CAD pre-visualization, point-load rigging analysis, and precise cable management so that your keynote environment looks architecturally flawless from every camera angle.'
    ],
    listTitle: 'TSF Structural Inventory',
    items: [
      'Certified 300mm, 400mm & 520mm heavy box trussing',
      'All-weather German Pagoda tents (5m x 5m, 10m x 10m)',
      'Heavy-capacity modular stages with custom finishes',
      'Motorized chain hoists & load-bearing roof systems',
      '3D CAD site drawings & certified structural calculations',
      'Complete power generation & industrial electrical distribution'
    ],
    extra: 'Structural capacity: certified point loads up to 1,500 kg per rigging point · full wind engineering documentation available upon request.',
    metaTitle: 'Corporate Staging, German Pagodas & Box Trussing Hyderabad | TSF by EventTribe',
    metaDescription: 'Heavy structural staging, German Pagodas and certified aluminum box trussing across Hyderabad and Telangana by The Stage Factory (TSF).'
  },
  {
    slug: 'audio',
    title: 'Concert-Grade Audio (TSF-AV)',
    subBrand: 'TSF-AV',
    description: 'd&b audiotechnik line array systems, Digico digital consoles, and Shure wireless management engineered for speech intelligibility and musical impact.',
    image: audio,
    alt: 'Audio engineer mixing live sound on a digital console with d&b audiotechnik line arrays',
    heading: 'Every word intelligible. Every cue impactful.',
    intro: 'Acoustically modeled sound systems designed for high-stakes corporate plenaries and live entertainment.',
    paragraphs: [
      'Corporate audio demands absolute vocal clarity. When a global CEO or keynote speaker addresses thousands of delegates, muffled sound or feedback is unacceptable. TSF-AV deploys world-class d&b audiotechnik line arrays engineered specifically for the acoustic signature of your venue.',
      'Using proprietary 3D acoustic prediction software (ArrayCalc), our system engineers map speaker angles, room reflections, and delayed fill zones before equipment arrives on site. This ensures uniform sound pressure levels and pristine speech intelligibility from the VIP front row to the furthest tier.',
      'From RF spectrum analysis for 30+ simultaneous Shure Axient wireless channels to multi-track recording and digital redundancy loops, our audio department guarantees flawless delivery.'
    ],
    listTitle: 'TSF-AV Audio Specifications',
    items: [
      'd&b audiotechnik V-Series & Y-Series line arrays',
      'Digico SD-Series & Yamaha CL/QL digital mixing consoles',
      'Shure Axient Digital & Sennheiser wireless microphone systems',
      'Dante networked audio protocol with complete analog backup lines',
      'ArrayCalc 3D venue acoustic mapping & alignment',
      'Certified FOH and monitor system engineers'
    ],
    extra: 'Full backline, stage monitoring, interpretation booth feeds, and press distribution boxes available.',
    metaTitle: 'Concert-Grade Corporate Sound & PA Systems Hyderabad | TSF-AV by EventTribe',
    metaDescription: 'd&b audiotechnik line arrays, Digico digital consoles, and certified sound engineers for conferences and summits in Hyderabad.'
  },
  {
    slug: 'video',
    title: 'P2.6 LED Walls & Video (TSF-AV)',
    subBrand: 'TSF-AV',
    description: 'P2.6 mm ultra-HD indoor LED walls, Novastar MX40 Pro processing, Barco seamless matrix switchers, and pixel-mapped multi-screen canvas.',
    image: production,
    alt: 'P2.6 ultra-high-definition LED video display wall displaying 4K visual keynote presentation',
    heading: 'High-density visual canvases that captivate.',
    intro: 'Zero-latency visual displays with true-to-life color reproduction and uncompressed 4K pipelines.',
    paragraphs: [
      'TSF-AV owns and maintains high-refresh-rate P2.6 mm indoor LED panels equipped with black-face SMD technology, delivering razor-sharp text, rich contrast, and wide 160-degree viewing angles without moiré effect on live camera feeds.',
      'Driven by flagship Novastar MX40 Pro and A8s receiving cards, our displays support high-bitrate HDR color processing and seamless aspect ratio scaling. Whether you require a continuous 60-foot plenary backdrop, curved panoramic video walls, or multi-split presentation displays, we manage pixel mapping and custom resolutions with precision.',
      'Our video control racks include Barco and Analog Way seamless switchers, multi-source presentation laptops, and redundant signal splitters to prevent any black-out or glitch during critical keynotes.'
    ],
    listTitle: 'TSF-AV Visual Capabilities',
    items: [
      'Ultra-fine pitch P2.6 mm indoor LED video displays (3840Hz refresh)',
      'Novastar MX40 Pro / COEX series video processors',
      'Barco E2 / S3 seamless presentation matrix switchers',
      'High-output 4K laser projection & 3D video projection mapping',
      'Optical fiber SDI video routing with auto-switching redundancy',
      'Dedicated playback engineers and PowerPoint cue operators'
    ],
    extra: 'Custom curved configurations, ultra-wide aspect ratio staging, and low-latency confidence monitors for speakers.',
    metaTitle: 'P2.6 LED Video Walls & 4K Display Systems Hyderabad | TSF-AV by EventTribe',
    metaDescription: 'P2.6 ultra-HD LED video walls, Novastar processors, and Barco seamless matrix switchers for enterprise summits in Hyderabad.'
  },
  {
    slug: 'lighting',
    title: 'Architectural & Stage Lighting (TSF-AV)',
    subBrand: 'TSF-AV',
    description: 'Precision broadcast-quality stage washes, grandMA3 console control, automated moving beam/profile fixtures, and corporate brand illumination.',
    image: audio,
    alt: 'Broadcast-calibrated stage profile lighting and dynamic beams across an arena stage',
    heading: 'Broadcast-grade illumination with dramatic impact.',
    intro: 'Lighting engineered for camera sensors, in-person ambiance, and brand storytelling.',
    paragraphs: [
      'Lighting for corporate events requires a delicate balance between television camera color temperature (CRI 95+) and theatrical room atmosphere. TSF-AV designs lighting plots that make speakers look radiant on camera while bathing the room in sophisticated corporate tones.',
      'Controlled by industry-standard grandMA3 and Avolites consoles, our lighting rigs include precision moving profiles, framing shutters, soft Fresnel stage washes, and high-intensity beam fixtures. We eliminate harsh glare on the main LED screen through calibrated angle rigging and shutter framing.',
      'From custom metal and glass brand gobos to synchronized dynamic walk-in sequences and exterior architectural uplighting, our lighting brings energy and authority to your event.'
    ],
    listTitle: 'TSF-AV Lighting Inventory',
    items: [
      'Moving head profiles with motorized framing shutters & CMY color mixing',
      'Broadcast-grade daylight and tungsten LED stage wash fixtures (CRI > 95)',
      'grandMA3 & Avolites Tiger Touch console automation',
      'Wireless battery-powered architectural LED uplighters',
      'Custom laser-cut stainless steel & dichroic glass brand gobos',
      'Safe overhead rigging on certified TSF aluminum box trussing'
    ],
    extra: 'Haze machines, low-lying dry ice fog, and DMX-controlled kinetic fixtures for ceremonial reveals.',
    metaTitle: 'Corporate Stage Lighting & Rigging Hyderabad | TSF-AV by EventTribe',
    metaDescription: 'Broadcast-grade stage lighting, grandMA3 control, moving heads and custom gobo illumination for corporate events across Hyderabad.'
  },
  {
    slug: 'event-production',
    title: 'Turnkey 360° Event Production',
    subBrand: 'EventTribe Master Brand',
    description: 'The single accountable partner: uniting TSF structural engineering and TSF-AV systems into a synchronized, fail-safe mega-event experience.',
    image: production,
    alt: 'Complete turnkey corporate event production integrating staging, line-arrays, and LED screens',
    heading: 'One master partner. Total operational peace of mind.',
    intro: 'Eliminate multi-vendor friction with a unified engineering team accountable from initial CAD to the final cue.',
    paragraphs: [
      'Managing separate vendors for staging, sound, LED screens, lighting, and power introduces critical points of failure. EventTribe acts as the master technical producer, orchestrating our structural division (The Stage Factory) and our technology division (TSF-AV) under one unified chain of command.',
      'Our workflow begins with a comprehensive technical survey of your venue. We deliver photorealistic 3D CAD previs, equipment load schedules, generator power distribution plans, and detailed run-of-show cue sheets weeks before event day.',
      'On site, our Technical Director manages the timeline, oversees safety protocols, synchronizes rehearsal schedules, and directs the live broadcast. You work with one accountable partner who owns the outcome.'
    ],
    listTitle: 'The EventTribe Turnkey Protocol',
    items: [
      'Single point of contact for staging, trussing, AV, and power',
      'Photorealistic 3D CAD previs & stage sightline validation',
      'Comprehensive power distribution & backup generator planning',
      'Minute-by-minute technical cue sheets & rehearsal management',
      'Dedicated on-site Technical Director & safety manager',
      'Complete post-event technical debrief & media handover'
    ],
    extra: 'Serving HITEX Exhibition Centre, HICC Novotel, Taj Falaknuma, ITC Kohenur, GMR Arena, and venues across Telangana and AP.',
    metaTitle: 'Turnkey Corporate Event Production Hyderabad | EventTribe Master Partner',
    metaDescription: 'Complete corporate event production in Hyderabad. Staging, trussing, d&b audio, P2.6 LED and broadcast managed by one accountable team.'
  },
  {
    slug: 'hybrid-events',
    title: 'Live Broadcast & Hybrid Summits (TSF-AV)',
    subBrand: 'TSF-AV',
    description: 'Multi-camera 4K broadcast switching, optical fiber video lines, dedicated live stream encoding, and seamless interactive speaker feeds.',
    image: broadcast,
    alt: 'Live multi-camera broadcast switching console with low-latency optical fiber video links',
    heading: 'Broadcast-quality production for global audiences.',
    intro: 'Connect on-site plenary halls with remote global attendees with zero lag and television-grade fidelity.',
    paragraphs: [
      'When global leadership or enterprise stakeholders cannot travel to Hyderabad, high-quality broadcast streaming bridges the gap. TSF-AV builds dedicated multi-camera television control rooms directly on site at your venue.',
      'We deploy Sony 4K broadcast studio cameras on motorized pedestals, jibs, and wireless steady-cams, fed via optical fiber into Blackmagic ATEM Constellation switchers. Remote speakers are brought in over dedicated low-latency pipelines with discrete audio mix-minus feeds so conversations flow naturally.',
      'We provide secure stream hosting, custom-branded broadcast graphic overlays (titles, lower thirds, countdowns), real-time live captioning, and instant full-resolution session recording for rapid post-event distribution.'
    ],
    listTitle: 'TSF-AV Broadcast Capabilities',
    items: [
      'Multi-camera 4K/HD broadcast camera packages with long zoom lenses',
      'Blackmagic ATEM Constellation 4K video switchers',
      'Optical fiber video transmission ensuring zero signal loss across large halls',
      'Custom motion graphic lower-thirds & presentation PIP overlays',
      'Dual-redundant internet bonded cellular/fiber live stream encoders',
      'Multi-track separate ISO recording of every camera feed'
    ],
    extra: 'Private enterprise CDN streaming, interactive Q&A feeds, and translation audio channel integration.',
    metaTitle: 'Corporate Live Streaming & Broadcast Production Hyderabad | TSF-AV by EventTribe',
    metaDescription: 'Multi-camera broadcast, optical fiber video switching, and hybrid conference streaming in Hyderabad by TSF-AV.'
  },
] as const;

export const events = [
  {
    slug: 'conferences',
    title: 'Corporate Conferences & AGMs',
    description: 'High-stakes plenaries, annual general meetings, global summits, and leadership conclaves delivered with zero tolerance for failure.',
    image: conference,
    alt: 'High-stakes enterprise conference stage with widescreen P2.6 LED backdrop in Hyderabad',
    heading: 'Conferences where precision is paramount.',
    intro: 'When industry leaders, shareholders, and global executives gather, flawless execution is the only option.',
    paragraphs: [
      'Annual General Meetings (AGMs), enterprise summits, and executive conclaves operate under strict schedules where even a momentary technical hiccup impacts company reputation. EventTribe specializes in delivering rock-solid production environments for enterprise clients across Hyderabad and South India.',
      'Our team coordinates the entire plenary floor: wide-format P2.6 LED backdrops that keep presentations legible from 200 feet away, d&b audiotechnik line arrays tuned for crystalline speech clarity, synchronized stage timers, and discreet prompter systems for key executives.',
      'Behind the scenes, we enforce strict signal redundancy. Primary and secondary video switchers, parallel digital audio engines, and dedicated uninterruptible power supplies (UPS) ensure uninterrupted delivery.'
    ],
    extra: 'Capabilities: multi-hall breakout AV, simultaneous translation channels, VIP holding room monitors, and secure stakeholder webcasts.',
    metaTitle: 'Corporate Conference & AGM Production Hyderabad | EventTribe',
    metaDescription: 'Turnkey technical production for enterprise summits, AGMs, and corporate conferences in Hyderabad and Telangana.'
  },
  {
    slug: 'product-launches',
    title: 'Product Launches & Reveals',
    description: 'Dramatic theatrical reveals, motorized staging, timecode-synced AV sequences, and high-impact experiential environments.',
    image: production,
    alt: 'Dramatic product reveal event with synchronized lighting, motorized stage, and high-resolution video',
    heading: 'Captivate the market from the opening cue.',
    intro: 'Transform product unveils into unforgettable brand milestones that drive media coverage and consumer demand.',
    paragraphs: [
      'A great product launch requires drama, anticipation, and razor-sharp timing. Whether revealing a new automobile, a flagship consumer tech device, or an industrial innovation, EventTribe designs immersive reveal mechanisms that astonish attendees.',
      'Through The Stage Factory (TSF), we fabricate custom curved display turntables, automated kabuki drop systems, motorized reveal tracks, and heavy-load presentation stages. TSF-AV pairs these structures with SMPTE timecode-synchronized video, lighting, and audio cues.',
      'When the countdown hits zero, light, sound, and screen visuals align with microsecond precision, ensuring your launch moment looks spectacular live and across press broadcast footage.'
    ],
    extra: 'Capabilities: 360-degree product projection mapping, motorized vehicle turntables, cryogenic CO2 jets, and confetti cannons.',
    metaTitle: 'Product Launch & Reveal Event Production Hyderabad | EventTribe',
    metaDescription: 'Theatrical product reveals, motorized stages, timecode-synced AV, and keynote production for enterprise launches in Hyderabad.'
  },
  {
    slug: 'trade-exhibitions',
    title: 'Trade Exhibitions & Conclaves',
    description: 'Certified overhead box truss grids, modular brand experience pavilions, keynote arenas, and multi-day venue power infrastructure.',
    image: exhibition,
    alt: 'Large trade exhibition hall with certified aluminum box truss grids and specialized booth lighting',
    heading: 'Where major industries connect and conduct business.',
    intro: 'Scalable structural engineering and electrical infrastructure for multi-day conventions and expos.',
    paragraphs: [
      'Large conventions and trade fairs at major venues like HITEX Hyderabad present massive logistical challenges: hundreds of individual exhibitors, dense foot traffic, high electrical loads, and stringent structural safety regulations.',
      'The Stage Factory (TSF) provides certified aluminum box truss rigging for overhead lighting grids, custom registration canopy pagodas, and main exhibition keynote stages. Our electrical master electricians design balanced three-phase distribution networks with primary and secondary backup generation.',
      'We supply complete AV packages for partner pavilions, interactive product demonstration kiosks, and multi-track conference breakout zones throughout the expo footprint.'
    ],
    extra: 'Capabilities: HITEX-compliant rigging, certified safety documentation, temporary German Pagoda villages, and 24/7 on-site technical standby.',
    metaTitle: 'Trade Exhibition & Expo Production Hyderabad | TSF by EventTribe',
    metaDescription: 'Certified truss rigging, pavilion staging, and complete venue power distribution for expos and conventions in Hyderabad.'
  },
  {
    slug: 'entertainment',
    title: 'Live Concerts & Mega-Events',
    description: 'Arena-scale line array audio rigs, motorized moving light shows, concert stages, and high-energy festival production.',
    image: audio,
    alt: 'Arena concert production stage with d&b audiotechnik line array stacks and high-power moving beams',
    heading: 'Sensational live energy engineered for massive crowds.',
    intro: 'Arena-scale sound, breathtaking lighting designs, and bulletproof staging for high-capacity live shows.',
    paragraphs: [
      'Producing live music performances, large award ceremonies, cultural galas, and arena shows requires immense power, precision, and crowd-safe engineering. EventTribe has the inventory and technical pedigree to command venues with up to 10,000 attendees.',
      'TSF builds heavy-duty all-weather stage roofs, front-of-house (FOH) mix towers, delay towers, and barricades. TSF-AV flies full-scale d&b audiotechnik line array hangs paired with ground-shaking cardioid subwoofers, delivering punchy, balanced audio across the entire stadium or outdoor grounds.',
      'Our lighting directors program synchronized grandMA3 light shows with high-output moving beams, strobes, hazers, and full-color concert lasers, creating world-class spectacles that leave audiences electrified.'
    ],
    extra: 'Capabilities: concert line arrays, digital stage boxes, wireless in-ear monitors (IEM), certified crowd control barriers, and heavy-duty generators.',
    metaTitle: 'Concert & Live Mega-Event Production Hyderabad | EventTribe',
    metaDescription: 'Arena-scale sound, concert lighting, and heavy outdoor staging for live shows and mega-events across Telangana and AP.'
  },
] as const;

export const photos = [
  { image: hero, alt: 'Large-scale corporate summit main stage in Hyderabad produced by EventTribe', category: 'Conferences' },
  { image: conference, alt: 'Enterprise keynote stage with P2.6 LED video wall and line array audio by TSF-AV', category: 'Conferences' },
  { image: speaker, alt: 'Keynote speaker at corporate leadership summit in Hyderabad', category: 'Conferences' },
  { image: exhibition, alt: 'Certified overhead aluminum box truss grid by The Stage Factory at trade expo', category: 'Exhibitions' },
  { image: audio, alt: 'Concert-grade digital mixing console and d&b audiotechnik sound system by TSF-AV', category: 'Entertainment' },
  { image: production, alt: 'Turnkey product launch stage with motorized reveal and dynamic lighting', category: 'Staging' },
  { image: panel, alt: 'Executive panel discussion on custom modular stage with studio lighting', category: 'Conferences' },
  { image: broadcast, alt: 'Broadcast television control room with optical fiber multi-camera switching', category: 'Lighting' },
];
