export type Language = "pt" | "da" | "en";

export interface Translations {
  hero: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    getStarted: string;
    seePlatforms: string;
    footer: string;
    stats: {
      integrations: string;
      companies: string;
      actions: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      realIntegration: {
        title: string;
        description: string;
      };
      workNaturally: {
        title: string;
        description: string;
      };
      naturalLanguage: {
        title: string;
        description: string;
      };
      yourSystems: {
        title: string;
        description: string;
      };
      worksWithTools: {
        title: string;
        description: string;
      };
      instantExecution: {
        title: string;
        description: string;
      };
    };
    highlight: {
      title: string;
      description: string;
      features: string[];
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    tiers: {
      migration: {
        name: string;
        price: string;
        description: string;
        features: string[];
        cta: string;
      };
      complete: {
        name: string;
        price: string;
        description: string;
        features: string[];
        cta: string;
      };
      enterprise: {
        name: string;
        price: string;
        description: string;
        features: string[];
        cta: string;
      };
    };
    consultation: {
      title: string;
      description: string;
      cta: string;
    };
  };
  howItWorks: {
    title: string;
    subtitle: string;
    learnMore: string;
    steps: {
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
      step4: {
        title: string;
        description: string;
      };
    };
    example: {
      title: string;
      description: string;
      command: string;
      result: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      quote: string;
      author: string;
      role: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    button: string;
  };
      footer: {
      description: string;
      links: {
        product: string;
        company: string;
        support: string;
        legal: string;
      };
      copyright: string;
    };
  header: {
    nav: {
      features: string;
      howItWorks: string;
      pricing: string;
      useCases: string;
      contact: string;
    };
    cta: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      badge: "Work Naturally",
      title1: "WORK THE WAY",
      title2: "YOU TALK",
      description:
        "Work naturally with your existing systems using human language. We integrate directly with your systems and execute actions automatically.",
      getStarted: "GET STARTED",
      seePlatforms: "SEE OUR PLATFORMS",
      footer: "Free consultation • Seamless migration • Constant improvements",
      stats: {
        integrations: "System Integrations",
        companies: "Companies Trust Us",
        actions: "Actions Executed",
      },
    },
    features: {
      title: "Work The Way You Talk",
      subtitle:
        "Work naturally with your systems using human language. We integrate directly and execute actions automatically.",
      items: {
        realIntegration: {
          title: "Real System Integration",
          description:
            "We integrate directly with your systems and execute actions automatically. When you say 'create a quote,' we create it in your system.",
        },
        workNaturally: {
          title: "Work Naturally",
          description:
            "Work the way you talk. Describe what you need in natural language, and our platforms execute it instantly in your systems. No complex interfaces to learn.",
        },
        naturalLanguage: {
          title: "Natural Language Actions",
          description:
            "Talk to your dashboard naturally. Our platforms understand commands and convert complex workflows into simple chat conversations that execute real actions.",
        },
        yourSystems: {
          title: "Your Systems, Your Language",
          description:
            "Work with your existing systems using natural language. No need to learn complex interfaces—just talk to your tools the way you'd talk to a colleague.",
        },
        worksWithTools: {
          title: "Works with Your Tools",
          description:
            "Integrate with CRM, email, databases, and any other system you use. We connect to your existing tools and work with your current setup.",
        },
        instantExecution: {
          title: "Instant Execution",
          description:
            "No waiting, no delays. When you give a command, our platforms execute it immediately in your systems. Real actions, real results, instantly.",
        },
      },
      highlight: {
        title: "WORK THE WAY YOU TALK",
        description:
          "Work naturally with your existing systems using human language. We integrate directly and execute actions automatically. When you say \"create a quote,\" we create it in your system. Real integration means real actions in your actual tools.",
        features: [
          "Talk naturally, work instantly",
          "Real system integration",
          "Automatic action execution",
        ],
      },
    },
    pricing: {
      title: "Real Integration & Pricing",
      subtitle:
        "We connect directly to your systems and execute actions automatically.",
      tiers: {
        migration: {
          name: "Platform Migration",
          price: "From $2k",
          description: "Migrate to platforms that work with natural language",
          features: [
            "Real system integration (CRM, email, databases)",
            "Work naturally with human language",
            "Execute actions automatically",
            "Multi-device chat access",
            "Team training & onboarding",
            "Natural language commands",
            "3 months support",
          ],
          cta: "Get quote",
        },
        complete: {
          name: "Complete Platform",
          price: "From $5k",
          description: "Complete platform with real system integration",
          features: [
            "Real system integration (all your tools)",
            "Work the way you talk",
            "Automatic action execution",
            "Natural language interactions",
            "Intelligent dashboards with chat",
            "All devices ready",
            "6 months support",
            "Constant evolution",
          ],
          cta: "Get quote",
        },
        enterprise: {
          name: "Enterprise Solutions",
          price: "Custom",
          description: "Large-scale integration for entire organizations",
          features: [
            "Company-wide system integration",
            "Advanced AI capabilities",
            "Multi-platform integration",
            "Real-time action execution",
            "Dedicated support",
            "24/7 availability",
            "SLA guarantee",
            "Custom development",
          ],
          cta: "Contact us",
        },
      },
      consultation: {
        title: "Free Consultation",
        description:
          "Book a free consultation to see real system integration in action. We'll analyze your platforms and show how we execute actions automatically—no obligation.",
        cta: "Book Consultation",
      },
    },
    howItWorks: {
      title: "How It Works",
      subtitle:
        "Typeble integrates directly with your company's systems. We execute actions automatically.",
      learnMore: "Learn More",
      steps: {
        step1: {
          title: "You Talk",
          description:
            "Describe what you need in natural language. No need to learn complex interfaces or navigate through menus.",
        },
        step2: {
          title: "We Execute",
          description:
            "Our AI understands your request and executes it directly in your systems. When you say \"create a quote,\" we create it in your system.",
        },
        step3: {
          title: "Real Results",
          description:
            "Get instant results in your actual tools. Real integration means real actions in your CRM, email, databases, and other systems.",
        },
        step4: {
          title: "Validate",
          description: "Validate and approve — it's simple",
        },
      },
      example: {
        title: "Example",
        description:
          "Instead of clicking through menus, just describe what you need:",
        command: '"Cria um orçamento para este cliente"',
        result: "We create the quote in your system instantly.",
      },
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle:
        "See how companies are working naturally with their systems using Typeble.",
      items: [
        {
          quote:
            "I used to waste hours navigating complex interfaces. Now I just talk to the system naturally and it happens instantly. 'Show me sales from last month' or 'Create a report for Q3'—done in seconds, not minutes. This is how platforms should work.",
          author: "Sarah Chen",
          role: "CEO, TechCorp Solutions",
        },
        {
          quote:
            "Working with natural language has completely changed how our team works. Instead of training people on complex navigation, they just talk to the system naturally. Tasks that used to take multiple steps now take one simple request. Game changer.",
          author: "Michael Rodriguez",
          role: "Operations Manager, GrowthX",
        },
        {
          quote:
            "We now work naturally with our systems using human language. The platform understands us, so we're not fighting with complex interfaces anymore. Want data? Just ask. Need to create something? Describe it. It's intuitive and incredibly fast.",
          author: "Emma Thompson",
          role: "Director of Operations, ScaleUp Inc",
        },
      ],
    },
    cta: {
      title: "Ready to Work the Way You Talk?",
      description:
        "Start working naturally with your systems today. Get a free consultation and see how Typeble integrates with your tools.",
      button: "GET STARTED",
    },
          footer: {
        description:
          "Work naturally with your existing systems using human language.",
        links: {
          product: "Product",
          company: "Company",
          support: "Support",
          legal: "Legal",
        },
        copyright: "© 2025 Typeble. All rights reserved.",
      },
    header: {
      nav: {
        features: "Features",
        howItWorks: "How It Works",
        pricing: "Pricing",
        useCases: "Use Cases",
        contact: "Contact",
      },
      cta: "Get Started",
    },
  },
  pt: {
    hero: {
      badge: "Trabalhe Naturalmente",
      title1: "TRABALHE DA FORMA",
      title2: "QUE FALA",
      description:
        "Trabalhe naturalmente com os seus sistemas existentes através de linguagem humana. A Typeble integra-se directamente com os seus sistemas e executa acções automaticamente.",
       getStarted: "COMECE",
       seePlatforms: "VER AS NOSSAS PLATAFORMAS",
       footer: "Consulta gratuita • Migração sem problemas • Melhorias constantes",
       stats: {
         integrations: "Integrações de Sistemas",
         companies: "Empresas Confiam em Nós",
         actions: "Acções Executadas",
       },
     },
             features: {
      title: "Trabalhe Da Forma Que Fala",
      subtitle:
        "Trabalhe naturalmente com os seus sistemas através de linguagem humana. A Typeble integra-se directamente e executa acções automaticamente.",
      items: {
        realIntegration: {
          title: "Integração Real de Sistemas",
          description:
            "A Typeble integra-se directamente com os seus sistemas e executa acções automaticamente. Quando diz 'cria um orçamento', a Typeble cria-o no seu sistema.",
        },
        workNaturally: {
          title: "Trabalhe Naturalmente",
          description:
            "Descreva o que precisa em linguagem natural e a Typeble executa instantaneamente nos seus sistemas. Sem interfaces complexas.",
        },
        naturalLanguage: {
          title: "Acções em Linguagem Natural",
          description:
            "Fale com o seu dashboard naturalmente. A Typeble compreende comandos e converte fluxos complexos em conversas simples que executam acções reais.",
        },
        yourSystems: {
          title: "Os Seus Sistemas, A Sua Linguagem",
          description:
            "Trabalhe com os seus sistemas existentes através de linguagem natural. Fale com as suas ferramentas como falaria com um colega.",
        },
        worksWithTools: {
          title: "Funciona Com As Suas Ferramentas",
          description:
            "Integre com CRM, email, bases de dados e qualquer outro sistema. Não necessita de alterar os seus sistemas — a Typeble integra-se directamente com as suas ferramentas existentes.",
        },
        instantExecution: {
          title: "Execução Instantânea",
          description:
            "Sem esperas. Quando dá um comando, a Typeble executa-o de imediato nos seus sistemas. Acções reais, resultados instantâneos.",
        },
      },
      highlight: {
        title: "TRABALHE DA FORMA QUE FALA",
        description:
          "Trabalhe naturalmente com os seus sistemas existentes através de linguagem humana. A Typeble integra-se directamente com os seus sistemas e executa acções automaticamente. Quando diz \"cria um orçamento\", a Typeble cria-o no seu sistema. Integração real significa acções reais nas suas ferramentas reais.",
         features: [
           "Fale naturalmente, trabalhe instantaneamente",
           "Integração real de sistemas",
           "Execução automática de acções",
         ],
       },
    },
         pricing: {
       title: "Integração Real e Preços",
       subtitle:
         "Conectamo-nos directamente aos seus sistemas e executamos acções automaticamente.",
      tiers: {
        migration: {
          name: "Migração de Plataforma",
          price: "A partir de 2K€",
          description: "Migre para plataformas que funcionam com linguagem natural",
           features: [
             "Integração real de sistemas (CRM, email, bases de dados)",
             "Trabalhe naturalmente com linguagem humana",
             "Execute acções automaticamente",
             "Acesso ao chat em vários dispositivos",
             "Formação e integração da equipa",
             "Comandos em linguagem natural",
             "Suporte de 3 meses",
           ],
           cta: "Solicitar orçamento",
         },
        complete: {
          name: "Plataforma Completa",
          price: "A partir de 5K€",
          description: "Plataforma completa com integração real de sistemas",
           features: [
             "Integração real de sistemas (todas as suas ferramentas)",
             "Trabalhe da forma que fala",
             "Execução automática de acções",
             "Interacções em linguagem natural",
             "Dashboards inteligentes com chat",
             "Pronto para todos os dispositivos",
             "Suporte de 6 meses",
             "Evolução constante",
           ],
           cta: "Solicitar orçamento",
         },
         enterprise: {
           name: "Soluções Empresariais",
           price: "Personalizado",
           description: "Integração em larga escala para organizações inteiras",
           features: [
             "Integração de sistemas em toda a empresa",
             "Capacidades avançadas de IA",
             "Integração multi-plataforma",
             "Execução de acções em tempo real",
             "Suporte dedicado",
             "Disponibilidade 24/7",
             "Garantia SLA",
             "Desenvolvimento personalizado",
           ],
           cta: "Contacte-nos",
         },
      },
             consultation: {
         title: "Consulta Gratuita",
         description:
           "Marque uma consulta gratuita para ver a integração real de sistemas em acção. Analisaremos as suas plataformas e mostraremos como executamos acções automaticamente—sem compromisso.",
         cta: "Marcar Consulta",
       },
    },
      howItWorks: {
        title: "Como Funciona",
        subtitle:
          "O Typeble integra-se directamente com os sistemas da sua empresa. Executamos acções automaticamente.",
        learnMore: "Saber Mais",
             steps: {
         step1: {
           title: "Fale",
           description:
             "Descreva o que precisa em linguagem natural. Não precisa de aprender interfaces complexas ou navegar por menus.",
         },
        step2: {
          title: "Executamos",
          description:
            "A Typeble compreende o seu pedido e executa-o directamente nos seus sistemas. Quando diz \"cria um orçamento\", a Typeble cria-o no seu sistema.",
        },
                 step3: {
          title: "Resultados Reais",
          description:
            "Obtenha resultados instantâneos nas suas ferramentas reais. Integração real significa acções reais no seu CRM, email, bases de dados e outros sistemas.",
        },
        step4: {
          title: "Valide",
          description: "Valide e aprove — é simples",
        },
       },
            example: {
          title: "Exemplo",
          description:
            "Em vez de clicar através de menus, apenas descreva o que precisa:",
          command: '"Cria um orçamento para este cliente"',
          result: "A Typeble cria o orçamento no seu sistema de imediato.",
        },
    },
    testimonials: {
      title: "O Que Os Nossos Clientes Dizem",
      subtitle:
        "Veja como as empresas estão a trabalhar naturalmente com os seus sistemas usando o Typeble.",
      items: [
                 {
           quote:
             "Costumava perder horas a navegar por interfaces complexas. Agora apenas falo com o sistema naturalmente e acontece instantaneamente. 'Mostra-me as vendas do mês passado' ou 'Cria um relatório para Q3'—feito em segundos, não minutos. É assim que as plataformas devem funcionar.",
           author: "Sarah Chen",
           role: "CEO, TechCorp Solutions",
         },
         {
           quote:
             "Trabalhar com linguagem natural mudou completamente a forma como a nossa equipa trabalha. Em vez de formar pessoas em navegação complexa, elas apenas falam com o sistema naturalmente. Tarefas que costumavam levar vários passos agora levam um pedido simples. Mudança total.",
           author: "Michael Rodriguez",
           role: "Gestor de Operações, GrowthX",
         },
         {
           quote:
             "Agora trabalhamos naturalmente com os nossos sistemas usando linguagem humana. A plataforma compreende-nos, por isso já não lutamos com interfaces complexas. Quer dados? Apenas pergunte. Precisa de criar algo? Descreva. É intuitivo e incrivelmente rápido.",
           author: "Emma Thompson",
           role: "Directora de Operações, ScaleUp Inc",
         },
      ],
    },
      cta: {
        title: "Pronto Para Trabalhar Da Forma Como Fala?",
        description:
          "Comece a trabalhar naturalmente com os seus sistemas hoje. Obtenha uma consulta gratuita e veja como o Typeble se integra com as suas ferramentas.",
        button: "COMECE",
      },
              footer: {
          description:
            "Trabalhe naturalmente com os seus sistemas existentes através de linguagem humana.",
        links: {
          product: "Produto",
          company: "Empresa",
          support: "Suporte",
          legal: "Legal",
        },
        copyright: "© 2025 Typeble. Todos os direitos reservados.",
      },
    header: {
      nav: {
        features: "Funcionalidades",
        howItWorks: "Como Funciona",
        pricing: "Preços",
        useCases: "Casos de Uso",
        contact: "Contacto",
      },
             cta: "Comece",
    },
  },
  da: {
    hero: {
      badge: "Arbejd Naturligt",
      title1: "ARBEJD PÅ DEN MÅDE",
      title2: "DU TALER",
      description:
        "Arbejd naturligt med dine eksisterende systemer ved hjælp af menneskesprog. Vi integrerer direkte med dine systemer og udfører handlinger automatisk.",
      getStarted: "KOM I GANG",
      seePlatforms: "SE VORES PLATFORMES",
      footer: "Gratis konsultation • Problemløs migration • Konstante forbedringer",
      stats: {
        integrations: "Systemintegrationer",
        companies: "Virksomheder Stoler På Os",
        actions: "Handlinger Udført",
      },
    },
    features: {
      title: "Arbejd På Den Måde Du Taler",
      subtitle:
        "Arbejd naturligt med dine systemer ved hjælp af menneskesprog. Vi integrerer direkte og udfører handlinger automatisk.",
      items: {
        realIntegration: {
          title: "Rig Es Systemintegration",
          description:
            "Vi integrerer direkte med dine systemer og udfører handlinger automatisk. Når du siger 'opret et tilbud', opretter vi det i dit system.",
        },
        workNaturally: {
          title: "Arbejd Naturligt",
          description:
            "Arbejd på den måde, du taler. Beskriv hvad du har brug for i naturligt sprog, og vores platforme udfører det øjeblikkeligt i dine systemer. Ingen komplekse grænseflader at lære.",
        },
        naturalLanguage: {
          title: "Naturligt Sprog Handlinger",
          description:
            "Tal til dit dashboard naturligt. Vores platforme forstår kommandoer og konverterer komplekse arbejdsgange til simple chat-samtaler, der udfører rig handlinger.",
        },
        yourSystems: {
          title: "Dine Systemer, Dit Sprog",
          description:
            "Arbejd med dine eksisterende systemer ved hjælp af naturligt sprog. Ingen grund til at lære komplekse grænseflader—bare tal til dine værktøjer, som du ville tale til en kollega.",
        },
        worksWithTools: {
          title: "Virker Med Dine Værktøjer",
          description:
            "Integrer med CRM, email, databaser og alle andre systemer, du bruger. Vi forbinder til dine eksisterende værktøjer og arbejder med dit nuværende setup.",
        },
        instantExecution: {
          title: "Øjeblikkelig Udførelse",
          description:
            "Ingen ventetid, ingen forsinkelser. Når du giver en kommando, udfører vores platforme den øjeblikkeligt i dine systemer. Rige handlinger, rig resultater, øjeblikkeligt.",
        },
      },
      highlight: {
        title: "ARBEJD PÅ DEN MÅDE DU TALER",
        description:
          "Arbejd naturligt med dine eksisterende systemer ved hjælp af menneskesprog. Vi integrerer direkte og udfører handlinger automatisk. Når du siger \"opret et tilbud\", opretter vi det i dit system. Rig integration betyder rig handlinger i dine faktiske værktøjer.",
        features: [
          "Tal naturligt, arbejd øjeblikkeligt",
          "Rig systemintegration",
          "Automatisk handlingudførelse",
        ],
      },
    },
    pricing: {
      title: "Rig Integration Og Prissætning",
      subtitle:
        "Vi forbinder direkte til dine systemer og udfører handlinger automatisk.",
      tiers: {
        migration: {
          name: "Platform Migration",
          price: "Fra $2k",
          description: "Migrer til platforme, der fungerer med naturligt sprog",
          features: [
            "Rig systemintegration (CRM, email, databaser)",
            "Arbejd naturligt med menneskesprog",
            "Udfør handlinger automatisk",
            "Chat-adgang på flere enheder",
            "Teamtræning og onboarding",
            "Kommandoer på naturligt sprog",
            "3 måneders support",
          ],
          cta: "Få tilbud",
        },
        complete: {
          name: "Komplet Platform",
          price: "Fra $5k",
          description: "Komplet platform med rig systemintegration",
          features: [
            "Rig systemintegration (alle dine værktøjer)",
            "Arbejd på den måde du taler",
            "Automatisk handlingudførelse",
            "Interaktioner på naturligt sprog",
            "Intelligente dashboards med chat",
            "Alle enheder klar",
            "6 måneders support",
            "Konstant udvikling",
          ],
          cta: "Få tilbud",
        },
        enterprise: {
          name: "Enterprise Løsninger",
          price: "Tilpasset",
          description: "Storskala integration til hele organisationer",
          features: [
            "Firmaomspændende systemintegration",
            "Avancerede AI-funktioner",
            "Multi-platform integration",
            "Realtids handlingudførelse",
            "Dedikeret support",
            "24/7 tilgængelighed",
            "SLA-garanti",
            "Tilpasset udvikling",
          ],
          cta: "Kontakt os",
        },
      },
      consultation: {
        title: "Gratis Konsultation",
        description:
          "Book en gratis konsultation for at se rig systemintegration i aktion. Vi analyserer dine platforme og viser, hvordan vi udfører handlinger automatisk—ingen forpligtelse.",
        cta: "Book Konsultation",
      },
    },
    howItWorks: {
      title: "Sådan Virker Det",
      subtitle:
        "Typeble integrerer direkte med din virksomheds systemer. Vi udfører handlinger automatisk.",
      learnMore: "Læs Mere",
      steps: {
        step1: {
          title: "Du Taler",
          description:
            "Beskriv hvad du har brug for i naturligt sprog. Ingen grund til at lære komplekse grænseflader eller navigere gennem menuer.",
        },
        step2: {
          title: "Vi Udfører",
          description:
            "Vores AI forstår din anmodning og udfører den direkte i dine systemer. Når du siger \"opret et tilbud\", opretter vi det i dit system.",
        },
                  step3: {
            title: "Rig Resultater",
            description:
              "Få øjeblikkelige resultater i dine faktiske værktøjer. Rig integration betyder rig handlinger i dit CRM, email, databaser og andre systemer.",
          },
          step4: {
            title: "Valider",
            description: "Valider og godkend — det er enkelt",
          },
        },
        example: {
        title: "Eksempel",
        description:
          "I stedet for at klikke gennem menuer, bare beskriv hvad du har brug for:",
        command: '"Opret et tilbud til denne kunde"',
        result: "Vi opretter tilbuddet i dit system øjeblikkeligt.",
      },
    },
    testimonials: {
      title: "Hvad Vores Kunder Siger",
      subtitle:
        "Se hvordan virksomheder arbejder naturligt med deres systemer ved hjælp af Typeble.",
      items: [
        {
          quote:
            "Jeg brugte timer på at navigere i komplekse grænseflader. Nu taler jeg bare til systemet naturligt, og det sker øjeblikkeligt. 'Vis mig salg fra sidste måned' eller 'Opret en rapport for Q3'—færdig på sekunder, ikke minutter. Sådan skal platforme fungere.",
          author: "Sarah Chen",
          role: "CEO, TechCorp Solutions",
        },
        {
          quote:
            "At arbejde med naturligt sprog har fuldstændigt ændret, hvordan vores team arbejder. I stedet for at træne folk i kompleks navigation, taler de bare til systemet naturligt. Opgaver, der plejede at tage flere trin, tager nu én simpel anmodning. Game changer.",
          author: "Michael Rodriguez",
          role: "Operations Manager, GrowthX",
        },
        {
          quote:
            "Vi arbejder nu naturligt med vores systemer ved hjælp af menneskesprog. Platformen forstår os, så vi kæmper ikke længere med komplekse grænseflader. Vil have data? Bare spørg. Har brug for at oprette noget? Beskriv det. Det er intuitivt og utroligt hurtigt.",
          author: "Emma Thompson",
          role: "Direktør for Operationer, ScaleUp Inc",
        },
      ],
    },
    cta: {
      title: "Klar Til At Arbejde På Den Måde Du Taler?",
      description:
        "Begynd at arbejde naturligt med dine systemer i dag. Få en gratis konsultation og se, hvordan Typeble integrerer med dine værktøjer.",
      button: "KOM I GANG",
    },
          footer: {
        description:
          "Arbejd naturligt med dine eksisterende systemer ved hjælp af menneskesprog.",
        links: {
          product: "Produkt",
          company: "Virksomhed",
          support: "Support",
          legal: "Juridisk",
        },
        copyright: "© 2025 Typeble. Alle rettigheder forbeholdes.",
      },
    header: {
      nav: {
        features: "Funktioner",
        howItWorks: "Sådan Virker Det",
        pricing: "Prissætning",
        useCases: "Anvendelsestilfælde",
        contact: "Kontakt",
      },
      cta: "Kom I Gang",
    },
  },
};
