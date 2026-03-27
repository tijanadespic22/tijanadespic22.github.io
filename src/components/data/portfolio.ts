const caseStudies: CaseStudy[] = [
  {
    id: 'dentavita-website',
    title: 'Web sajt za Stomatološku Ordinaciju',
    category: 'UI/UX Dizajn & Izrada',
    client: 'Stomatološka Ordinacija "DentaVita"',
    thumbnail: '/projects/dentavita/1.png',
    images: ['/projects/dentavita/1.png'],
    description:
      'Dizajn i razvoj modernog, responzivnog web sajta za stomatološku ordinaciju "DentaVita", sa fokusom na poboljšanje korisničkog iskustva, povećanje angažmana i konverzija kroz intuitivan interfejs i optimizaciju sadržaja.',
    problem:
      'Klijent je imao zastarelu web stranicu koja nije bila prilagođena mobilnim uređajima, što je rezultiralo niskom stopom angažmana i gubitkom potencijalnih klijenata. Potreban im je moderan, responzivan dizajn koji bi poboljšao korisničko iskustvo i povećao vidljivost na pretraživačima.',
    solution:
      'Kreirao sam moderan i responzivan dizajn sa fokusom na jednostavnost korišćenja. Implementirao sam funkcionalnosti poput online zakazivanja, detaljnih profila usluga, i interaktivnih mapa lokacije. Koristio sam React i Tailwind CSS za frontend, a Node.js za backend razvoj. Takođe sam optimizovao sadržaj sajta za SEO kako bi povećao vidljivost na pretraživačima.',
    results: [
      'Povećanje angažmana korisnika za 60% u prva tri meseca',
      'Povećanje broja zakazivanja usluga putem sajta za 45%',
      'Poboljšanje zadovoljstva klijenata sa prosečnom ocenom od 4.9/5',
      'Povećanje vidljivosti na pretraživačima sa 20% više organskog saobraćaja',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma'],
    year: '2024',
    duration: '14 dana',
    url: 'https://ordinacija.hok.rs',
  },
  {
    id: 'dashboard-grooming-pasa',
    title: 'Aplikacija za Grooming Pasa ',
    category: 'UI/UX Dizajn & Izrada',
    client: 'TechFlow Solutions',
    thumbnail: '/projects/dog/4.png',
    images: ['/projects/dog/1.png', '/projects/dog/2.png', '/projects/dog/3.png'],
    description:
      'Dizajn i razvoj web aplikacije za praćenje i upravljanje uslugama šišanja pasa, uključujući zakazivanje, praćenje istorije usluga i analitiku zadovoljstva klijenata.',
    problem:
      'Klijent je imao zastarelu desktop aplikaciju koja nije bila user-friendly, što je dovodilo do gubitka klijenata i smanjenja efikasnosti zaposlenih. Potreban im je moderan, intuitivan i responzivan web interfejs koji bi poboljšao korisničko iskustvo i povećao angažman.',
    solution:
      'Kreirao sam moderan i responzivan dizajn sa fokusom na jednostavnost korišćenja. Implementirao sam funkcionalnosti poput kalendara za zakazivanje, detaljnih profila pasa, i interaktivnih grafikona za analizu zadovoljstva klijenata. Koristio sam React i Tailwind CSS za frontend, a Node.js za backend razvoj.',
    results: [
      'Povećanje angažmana korisnika za 50% u prva dva meseca',
      'Smanjenje vremena potrebnog za zakazivanje usluga za 70%',
      'Poboljšanje zadovoljstva klijenata sa prosečnom ocenom od 4.8/5',
      'Povećanje broja ponovljenih klijenata za 30%',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Figma'],
    year: '2025',
    duration: '3 meseca',
  },
  {
    id: 'mobile-fitness-app',
    title: 'Aplikacija za Fitnes Praćenje',
    category: 'UI/UX Dizajn',
    client: 'FitLife Pro',
    thumbnail: '/projects/fitness/4.png',
    description:
      'Redizajn i unapređenje korisničkog interfejsa mobilne aplikacije za fitnes praćenje, sa fokusom na poboljšanje korisničkog iskustva, povećanje angažmana i motivacije korisnika kroz gamification elemente.',
    problem:
      'Postojeća aplikacija je imala niz problema sa korisničkim iskustvom, uključujući komplikovan onboarding proces, nedostatak motivacije za korisnike da nastave sa korišćenjem aplikacije, i nejasne vizuelne indikatore napretka. Ovo je rezultiralo niskom stopom zadržavanja korisnika i smanjenjem broja pretplata.',
    solution:
      'Sproveo sam detaljnu analizu korisničkog iskustva i identifikovao ključne tačke bola. Redizajnirao sam onboarding proces da bude jednostavan i intuitivan, implementirao gamification elemente poput bedževa i nivoa za motivaciju korisnika, i unapredio vizuelne indikatore napretka kroz interaktivne grafikone i animacije. Koristio sam Figma za dizajn prototipa i Principle za kreiranje interaktivnih animacija.',
    results: [
      'Povećanje stope zadržavanja korisnika za 40% u prva tri meseca',
      'Povećanje broja pretplata za 25% nakon redizajna',
      'Poboljšanje korisničkog zadovoljstva sa prosečnom ocenom od 4.7/5',
      'Povećanje angažmana korisnika kroz gamification elemente za 35%',
    ],
    technologies: ['Figma', 'Adobe XD', 'Principle', 'User Testing'],
    year: '2025',
    duration: '2 meseca',
    images: ['/projects/fitness/1.png', '/projects/fitness/2.png', '/projects/fitness/3.png'],
  },
];

export {caseStudies};
