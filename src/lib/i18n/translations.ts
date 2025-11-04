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
      badge: "Interact Naturally",
      title1: "TYPEBLE, YOUR",
      title2: "DIGITAL PARTNER",
      description:
        "Interact naturally with your business systems using only human language. Typeble integrates directly into your tools and executes tasks automatically.",
      getStarted: "GET STARTED NOW",
      seePlatforms: "SEE INTEGRATIONS",
      footer: "Free Consultation • Simple Implementation • Continuous Evolution",
      stats: {
        integrations: "System Integrations",
        companies: "Satisfied Companies",
        actions: "Actions Executed",
      },
    },
    features: {
      title: "Talk With Your Systems",
      subtitle:
        "Work naturally with your systems through human language. Typeble integrates and executes tasks automatically and immediately.",
      items: {
        realIntegration: {
          title: "Deep System Integration",
          description:
            "Typeble integrates directly into your systems and executes actions automatically. When you say 'create a quote', Typeble does it in your management system.",
        },
        workNaturally: {
          title: "Intuitive and Natural Interaction",
          description:
            "Describe what you need in simple language and Typeble executes the task in your systems instantly. Say goodbye to complex interfaces.",
        },
        naturalLanguage: {
          title: "Human Language Commands",
          description:
            "Talk to your dashboard naturally. Typeble understands complex commands and converts lengthy processes into simple conversations that generate real actions.",
        },
        yourSystems: {
          title: "Your Systems. Your Language.",
          description:
            "Use your existing systems through natural language. Interact with your work tools as if speaking with a colleague.",
        },
        worksWithTools: {
          title: "Compatibility with Your Tools",
          description:
            "Integrate with CRM, email, databases, and any other system. You don't need to change your tools — Typeble integrates directly with your existing ecosystem.",
        },
        instantExecution: {
          title: "Immediate Action Execution",
          description:
            "Don't wait. When you give a command, Typeble executes it immediately in your systems. Real actions for instant results.",
        },
      },
      highlight: {
        title: "TALK WITH YOUR SYSTEMS",
        description:
          "Interact naturally with your existing business systems. Typeble integrates directly and executes tasks automatically. When you say \"create a quote\", Typeble does it in your management system. Deep integration means concrete actions in your real tools.",
        features: [
          "Speak naturally, work immediately",
          "Deep and native integration",
          "Automatic task execution",
        ],
      },
    },
    pricing: {
      title: "Integration and Pricing",
      subtitle:
        "We connect directly to your systems and automate task execution.",
      tiers: {
        migration: {
          name: "Optimized Migration",
          price: "From $2,000",
          description: "Switch to platforms optimized for natural language.",
          features: [
            "Deep system integration",
            "Text/voice commands",
            "Automatic task execution",
            "3 months of Technical Support",
          ],
          cta: "Request Quote",
        },
        complete: {
          name: "Complete Typeble Platform",
          price: "From $5,000",
          description: "Complete platform with total integration into your systems.",
          features: [
            "Total system integration",
            "Natural language commands",
            "Intelligent dashboards with chat",
            "6 months of Technical Support",
          ],
          cta: "Request Quote",
        },
        enterprise: {
          name: "Enterprise Solutions (Enterprise)",
          price: "Custom Price",
          description: "Large-scale integration, tailored for large organizations.",
          features: [
            "Organization-wide integration",
            "Advanced AI and multi-platform",
            "Dedicated 24/7 support",
            "SLA and custom development",
          ],
          cta: "Contact Us",
        },
      },
      consultation: {
        title: "Free Consultation Without Commitment",
        description:
          "Schedule a free consultation to see real system integration in action. We analyze your platforms and demonstrate how we execute tasks automatically — without any commitment.",
        cta: "Schedule Consultation",
      },
    },
    howItWorks: {
      title: "How Typeble Works",
      subtitle:
        "Typeble integrates directly into your company's systems. We automate the execution of your daily tasks.",
      learnMore: "Learn More",
      steps: {
        step1: {
          title: "Interact",
          description:
            "Describe what you need in natural language (text or voice). You don't need to learn complex interfaces or navigate through menus.",
        },
        step2: {
          title: "Immediate Action",
          description:
            "Typeble understands your request and executes it directly in your systems. When you say 'create a quote', Typeble does it in your management system.",
        },
        step3: {
          title: "Concrete Results",
          description:
            "Get instant results in your real tools. Deep integration means concrete actions in your CRM, email, databases, and other systems.",
        },
        step4: {
          title: "Validate",
          description: "Validate and approve the result — it's simple.",
        },
      },
      example: {
        title: "Practical Example",
        description:
          "Instead of clicking through multiple menus, just describe what you need:",
        command: "'Create a quote for this client'",
        result: "Typeble creates the quote in your system immediately.",
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
      title: "Ready to Interact Like You Talk?",
      description:
        "Start working naturally with your systems today. Request a free consultation and see how Typeble integrates into your tools.",
      button: "GET STARTED",
    },
    footer: {
      description:
        "Interact naturally with your existing systems through human language.",
      links: {
        product: "Product",
        company: "Company",
        support: "Customer Support",
        legal: "Legal Information",
      },
      copyright: "© 2025 Typeble. All rights reserved.",
    },
    header: {
      nav: {
        features: "Features",
        howItWorks: "How It Works",
        pricing: "Pricing",
        useCases: "Case Studies",
        contact: "Contact",
      },
      cta: "Get Started",
    },
  },
  pt: {
    hero: {
      badge: "Interaja Naturalmente",
      title1: "TYPEBLE, O SEU ",
      title2: "PARCEIRO DIGITAL",
      description:
        "Interaja de forma natural com os seus sistemas empresariais, utilizando apenas a linguagem humana. O Typeble integra-se diretamente nas suas ferramentas e executa tarefas automaticamente.",
      getStarted: "COMEÇAR AGORA",
      seePlatforms: "VER INTEGRAÇÕES",
      footer: "Consulta Gratuita • Implementação Simples • Evolução Contínua",
      stats: {
        integrations: "Integrações de Sistemas",
        companies: "Empresas Satisfeitas",
        actions: "Ações Executadas",
      },
    },
    features: {
      title: "Converse Com Os Seus Sistemas",
      subtitle:
        "Trabalhe de forma natural com os seus sistemas através de linguagem humana. O Typeble integra-se e executa tarefas de forma automática e imediata.",
      items: {
        realIntegration: {
          title: "Integração Profunda de Sistemas",
          description:
            "O Typeble integra-se diretamente nos seus sistemas e executa ações de forma automática. Ao dizer 'cria um orçamento', o Typeble fá-lo no seu sistema de gestão.",
        },
        workNaturally: {
          title: "Interação Intuitiva e Natural",
          description:
            "Descreva o que precisa em linguagem simples e o Typeble executa a tarefa nos seus sistemas, instantaneamente. Diga adeus a interfaces complexas.",
        },
        naturalLanguage: {
          title: "Comandos em Linguagem Humana",
          description:
            "Fale com o seu painel de controlo (dashboard) naturalmente. O Typeble compreende comandos complexos e converte processos morosos em conversas simples que geram ações reais.",
        },
        yourSystems: {
          title: "Os Seus Sistemas. A Sua Linguagem.",
          description:
            "Utilize os seus sistemas existentes através de linguagem natural. Interaja com as suas ferramentas de trabalho como se falasse com um colega.",
        },
        worksWithTools: {
          title: "Compatibilidade com as Suas Ferramentas",
          description:
            "Integre com CRM, email, bases de dados e qualquer outro sistema. Não precisa de mudar as suas ferramentas — o Typeble integra-se diretamente com o seu ecossistema existente.",
        },
        instantExecution: {
          title: "Execução Imediata de Ações",
          description:
            "Não espere. Ao dar um comando, o Typeble executa-o de imediato nos seus sistemas. Ações reais para resultados instantâneos.",
        },
      },
      highlight: {
        title: "CONVERSE COM OS SEUS SISTEMAS",
        description:
          "Interaja de forma natural com os seus sistemas empresariais existentes. O Typeble integra-se diretamente e executa tarefas automaticamente. Ao dizer \"cria um orçamento\", o Typeble fá-lo no seu sistema de gestão. Integração profunda significa ações concretas nas suas ferramentas reais.",
        features: [
          "Fale naturalmente, trabalhe de imediato",
          "Integração profunda e nativa",
          "Execução automática de tarefas",
        ],
      },
    },
    pricing: {
      title: "Integração e Preços",
      subtitle:
        "Conectamo-nos diretamente aos seus sistemas e automatizamos a execução de tarefas.",
      tiers: {
        migration: {
          name: "Migração Otimizada",
          price: "A partir de 2.000€",
          description: "Mude para plataformas otimizadas para linguagem natural.",
          features: [
            "Integração profunda de sistemas",
            "Comandos por texto/voz",
            "Execução automática de tarefas",
            "3 meses de Suporte Técnico",
          ],
          cta: "Solicitar Orçamento",
        },
        complete: {
          name: "Plataforma Completo Typeble",
          price: "A partir de 5.000€",
          description: "Plataforma completa com integração total nos seus sistemas.",
          features: [
            "Integração total de sistemas",
            "Comandos em linguagem natural",
            "Dashboards inteligentes com chat",
            "6 meses de Suporte Técnico",
          ],
          cta: "Solicitar Orçamento",
        },
        enterprise: {
          name: "Soluções Empresariais (Enterprise)",
          price: "Preço Personalizado",
          description: "Integração em larga escala, à medida de grandes organizações.",
          features: [
            "Integração em toda a organização",
            "IA avançada e multi-plataforma",
            "Suporte dedicado 24/7",
            "SLA e desenvolvimento personalizado",
          ],
          cta: "Contacte-nos",
        },
      },
      consultation: {
        title: "Consulta Gratuita e Sem Compromisso",
        description:
          "Marque uma consulta gratuita para ver a integração real de sistemas em ação. Analisamos as suas plataformas e demonstramos como executamos tarefas automaticamente — sem qualquer compromisso.",
        cta: "Agendar Consulta",
      },
    },
    howItWorks: {
      title: "Como Funciona o Typeble",
      subtitle:
        "O Typeble integra-se diretamente nos sistemas da sua empresa. Automatizamos a execução das suas tarefas diárias.",
      learnMore: "Saber Mais",
      steps: {
        step1: {
          title: "Interaja",
          description:
            "Descreva o que precisa em linguagem natural (texto ou voz). Não necessita de preencher interfaces complexas nem navegar por menus.",
        },
        step2: {
          title: "Ação Imediata",
          description:
            "O Typeble compreende o seu pedido e executa-o diretamente nos seus sistemas. Ao dizer 'cria um orçamento', o Typeble fá-lo no seu sistema de gestão.",
        },
        step3: {
          title: "Resultados Concretos",
          description:
            "Obtenha resultados instantâneos nas suas ferramentas reais. Integração profunda significa ações concretas no seu CRM, email, bases de dados e outros sistemas.",
        },
        step4: {
          title: "Valide",
          description: "Valide e aprove o resultado — é simples.",
        },
      },
      example: {
        title: "Exemplo Prático",
        description:
          "Em vez de clicar em vários menus, basta descrever o que precisa:",
        command: "'Cria um orçamento para este cliente'",
        result: "O Typeble cria o orçamento no seu sistema de imediato.",
      },
    },
    testimonials: {
      title: "O Que Dizem os Nossos Clientes",
      subtitle:
        "Veja como as empresas estão a trabalhar naturalmente com os seus sistemas, utilizando o Typeble.",
      items: [
        {
          quote:
            "Costumava perder horas a navegar por interfaces complexas. Agora basta interagir com o sistema e a tarefa é executada instantaneamente. 'Mostra-me as vendas do mês passado' ou 'Cria um relatório para Q3'—feito em segundos, não minutos. É assim que as plataformas devem funcionar.",
          author: "Sarah Chen",
          role: "CEO, TechCorp Solutions",
        },
        {
          quote:
            "Trabalhar com linguagem natural mudou completamente a forma como a nossa equipa opera. Em vez de formar pessoas em navegação complexa, basta falarem com o sistema. Tarefas que exigiam vários passos agora levam apenas um pedido simples. Uma mudança total.",
          author: "Michael Rodriguez",
          role: "Gestor de Operações, GrowthX",
        },
        {
          quote:
            "Agora interagimos de forma natural com os nossos sistemas usando linguagem humana. A plataforma compreende-nos, por isso já não lutamos com interfaces complicadas. Quer dados? Pergunte. Precisa de criar algo? Descreva. É intuitivo e incrivelmente rápido.",
          author: "Emma Thompson",
          role: "Diretora de Operações, ScaleUp Inc",
        },
      ],
    },
    cta: {
      title: "Pronto para trabalhar com o Typeble?",
      description:
        "Comece a trabalhar naturalmente com os seus sistemas hoje. Peça uma consulta gratuita e veja como o Typeble se integra nas suas ferramentas.",
      button: "COMEÇAR",
    },
    footer: {
      description:
        "Interaja de forma natural com os seus sistemas existentes através de linguagem humana.",
      links: {
        product: "Produto",
        company: "Empresa",
        support: "Apoio ao Cliente",
        legal: "Informação Legal",
      },
      copyright: "© 2025 Typeble. Todos os direitos reservados.",
    },
    header: {
      nav: {
        features: "Funcionalidades",
        howItWorks: "Como Funciona",
        pricing: "Preços",
        useCases: "Casos de Estudo",
        contact: "Contacto",
      },
      cta: "Começar",
    },
  },
  da: {
    hero: {
      badge: "Interager Naturligt",
      title1: "TYPEBLE, DIN",
      title2: "DIGITALE PARTNER",
      description:
        "Interager naturligt med dine forretningssystemer ved kun at bruge menneskesprog. Typeble integrerer direkte i dine værktøjer og udfører opgaver automatisk.",
      getStarted: "KOM I GANG NU",
      seePlatforms: "SE INTEGRATIONER",
      footer: "Gratis Konsultation • Simpel Implementering • Kontinuerlig Udvikling",
      stats: {
        integrations: "Systemintegrationer",
        companies: "Tilfredse Virksomheder",
        actions: "Handlinger Udført",
      },
    },
    features: {
      title: "Tal Med Dine Systemer",
      subtitle:
        "Arbejd naturligt med dine systemer gennem menneskesprog. Typeble integrerer og udfører opgaver automatisk og øjeblikkeligt.",
      items: {
        realIntegration: {
          title: "Dybt Systemintegration",
          description:
            "Typeble integrerer direkte i dine systemer og udfører handlinger automatisk. Når du siger 'opret et tilbud', gør Typeble det i dit ledelsessystem.",
        },
        workNaturally: {
          title: "Intuitiv og Naturlig Interaktion",
          description:
            "Beskriv hvad du har brug for i simpelt sprog, og Typeble udfører opgaven i dine systemer øjeblikkeligt. Sig farvel til komplekse grænseflader.",
        },
        naturalLanguage: {
          title: "Menneskesprogskommandoer",
          description:
            "Tal til dit dashboard naturligt. Typeble forstår komplekse kommandoer og konverterer langvarige processer til simple samtaler, der genererer rig handlinger.",
        },
        yourSystems: {
          title: "Dine Systemer. Dit Sprog.",
          description:
            "Brug dine eksisterende systemer gennem naturligt sprog. Interager med dine arbejdsværktøjer, som om du taler med en kollega.",
        },
        worksWithTools: {
          title: "Kompatibilitet Med Dine Værktøjer",
          description:
            "Integrer med CRM, email, databaser og ethvert andet system. Du behøver ikke ændre dine værktøjer — Typeble integrerer direkte med dit eksisterende økosystem.",
        },
        instantExecution: {
          title: "Øjeblikkelig Handlingudførelse",
          description:
            "Vent ikke. Når du giver en kommando, udfører Typeble den øjeblikkeligt i dine systemer. Rige handlinger til øjeblikkelige resultater.",
        },
      },
      highlight: {
        title: "TAL MED DINE SYSTEMER",
        description:
          "Interager naturligt med dine eksisterende forretningssystemer. Typeble integrerer direkte og udfører opgaver automatisk. Når du siger \"opret et tilbud\", gør Typeble det i dit ledelsessystem. Dyb integration betyder konkrete handlinger i dine rig værktøjer.",
        features: [
          "Tal naturligt, arbejd øjeblikkeligt",
          "Dyb og oprindelig integration",
          "Automatisk opgaveudførelse",
        ],
      },
    },
    pricing: {
      title: "Integration Og Prissætning",
      subtitle:
        "Vi forbinder direkte til dine systemer og automatiserer opgaveudførelse.",
      tiers: {
        migration: {
          name: "Optimeret Migration",
          price: "Fra $2.000",
          description: "Skift til platforme optimeret til naturligt sprog.",
          features: [
            "Dybt systemintegration",
            "Tekst/stemme-kommandoer",
            "Automatisk opgaveudførelse",
            "3 måneders Teknisk Support",
          ],
          cta: "Anmod Om Tilbud",
        },
        complete: {
          name: "Komplet Typeble Platform",
          price: "Fra $5.000",
          description: "Komplet platform med total integration i dine systemer.",
          features: [
            "Total systemintegration",
            "Kommandoer på naturligt sprog",
            "Intelligente dashboards med chat",
            "6 måneders Teknisk Support",
          ],
          cta: "Anmod Om Tilbud",
        },
        enterprise: {
          name: "Enterprise Løsninger (Enterprise)",
          price: "Tilpasset Pris",
          description: "Storskala integration, skræddersyet til store organisationer.",
          features: [
            "Organisationsomfattende integration",
            "Avanceret AI og multi-platform",
            "Dedikeret 24/7 support",
            "SLA og tilpasset udvikling",
          ],
          cta: "Kontakt Os",
        },
      },
      consultation: {
        title: "Gratis Konsultation Uden Forpligtelse",
        description:
          "Book en gratis konsultation for at se rig systemintegration i aktion. Vi analyserer dine platforme og demonstrerer, hvordan vi udfører opgaver automatisk — uden nogen forpligtelse.",
        cta: "Book Konsultation",
      },
    },
    howItWorks: {
      title: "Sådan Virker Typeble",
      subtitle:
        "Typeble integrerer direkte i din virksomheds systemer. Vi automatiserer udførelsen af dine daglige opgaver.",
      learnMore: "Læs Mere",
      steps: {
        step1: {
          title: "Interager",
          description:
            "Beskriv hvad du har brug for i naturligt sprog (tekst eller stemme). Du behøver ikke lære komplekse grænseflader eller navigere gennem menuer.",
        },
        step2: {
          title: "Øjeblikkelig Handling",
          description:
            "Typeble forstår din anmodning og udfører den direkte i dine systemer. Når du siger 'opret et tilbud', gør Typeble det i dit ledelsessystem.",
        },
        step3: {
          title: "Konkrete Resultater",
          description:
            "Få øjeblikkelige resultater i dine rig værktøjer. Dyb integration betyder konkrete handlinger i dit CRM, email, databaser og andre systemer.",
        },
        step4: {
          title: "Valider",
          description: "Valider og godkend resultatet — det er enkelt.",
        },
      },
      example: {
        title: "Praktisk Eksempel",
        description:
          "I stedet for at klikke gennem flere menuer, bare beskriv hvad du har brug for:",
        command: "'Opret et tilbud til denne kunde'",
        result: "Typeble opretter tilbuddet i dit system øjeblikkeligt.",
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
      title: "Klar Til At Interagere Som Du Taler?",
      description:
        "Begynd at arbejde naturligt med dine systemer i dag. Anmod om en gratis konsultation og se, hvordan Typeble integrerer i dine værktøjer.",
      button: "KOM I GANG",
    },
    footer: {
      description:
        "Interager naturligt med dine eksisterende systemer gennem menneskesprog.",
      links: {
        product: "Produkt",
        company: "Virksomhed",
        support: "Kundesupport",
        legal: "Juridisk Information",
      },
      copyright: "© 2025 Typeble. Alle rettigheder forbeholdes.",
    },
    header: {
      nav: {
        features: "Funktioner",
        howItWorks: "Sådan Virker Det",
        pricing: "Prissætning",
        useCases: "Case Studies",
        contact: "Kontakt",
      },
      cta: "Kom I Gang",
    },
  },
};
