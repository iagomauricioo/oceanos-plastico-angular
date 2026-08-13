import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';



import ptData from '../../../assets/data/iwppo-2026/pt.json';
import enData from '../../../assets/data/iwppo-2026/en.json';
import esData from '../../../assets/data/iwppo-2026/es.json';

type Language = 'pt' | 'en' | 'es';

interface Person {
  name: string;
  nationality: string;
  country: string;
  photo: string;
  lattes: string;
  affiliation?: string;
}

interface Activity {
  time: string;
  title: string;
  type: string;
  room: string;
  speakers: string[];
  description: string;
}

interface ScheduleDay {
  date: string;
  dayLabel: string;
  activities: Activity[];
}

interface TextSection {
  title: string;
  paragraphs: string[];
}

interface ThematicAxis {
  title: string;
  description: string;
}

interface ParticipatingProgram {
  institution: string;
  program: string;
  grade: number | null;
  description: string;
}

interface TargetAudience {
  type: string;
  north: number;
  northeast: number;
  southeast: number;
  south: number;
  midwest: number;
  foreigners: number;
  fee: string;
}

interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface IwppoPageData {
  event: {
    edition: string;
    name: string;
    fullName: string;
    theme: string;
    shortTheme: string;
    startDate: string;
    endDate: string;
    city: string;
    state: string;
    country: string;
    modality: string;
    scope: string;
    periodicity: string;
    evaluationArea: string;
    homepage: string;
    description: string;
  };

  institutional: {
    fundingProgram: string;
    call: string;
    proponent: {
      name: string;
      nationality: string;
      institutionalRole: string;
      email: string;
      phone: string;
    };
    institution: {
      name: string;
      program: string;
    };
  };

  promotingInstitution: {
    name: string;
    website: string;
    country: string;
    type: string;
    address: string;
    director: {
      name: string;
      role: string;
      country: string;
    };
  };

  hero: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    tags: string[];
  };


  ui: {
    alt: {
      waterTexture: string;
      iwppoLogo: string;
    };
    eventCard: {
      start: string;
      end: string;
      location: string;
      modality: string;
    };
    sections: {
      about: string;
      history: string;
      justification: string;
      professionalContribution: string;
      thematicAxes: string;
      participatingPrograms: string;
      participatingGraduatePrograms: string;
      targetAudience: string;
      targetAudienceFees: string;
      speakers: string;
      invitedSpeakers: string;
      committees: string;
      committeesTitle: string;
      organizingCommittee: string;
      scientificCommittee: string;
      schedule: string;
      scheduleTitle: string;
      institutional: string;
      institutionalTitle: string;
    };
    table: {
      category: string;
      north: string;
      northeast: string;
      southeast: string;
      south: string;
      midwest: string;
      foreigners: string;
      registration: string;
    };
    labels: {
      grade: string;
      lattes: string;
      proponentData: string;
      fundingProgram: string;
      call: string;
      proponent: string;
      role: string;
      email: string;
      phone: string;
      institution: string;
      program: string;
      promotingInstitution: string;
      name: string;
      type: string;
      country: string;
      address: string;
      director: string;
      position: string;
      accessInstitutionalWebsite: string;
    };
  };

  about: TextSection;
  history: TextSection;
  justification: TextSection;
  professionalContribution: TextSection;

  thematicAxes: ThematicAxis[];
  participatingPrograms: ParticipatingProgram[];
  targetAudience: TargetAudience[];

  organizingCommittee: Person[];
  scientificCommittee: Person[];
  speakers: Person[];

  schedule: ScheduleDay[];
}

const data: Record<Language, IwppoPageData> = {
  pt: ptData as IwppoPageData,
  en: enData as IwppoPageData,
  es: esData as IwppoPageData
};

const updatedSchedule: ScheduleDay[] = [
  {
    date: '2026-12-02', dayLabel: '02 de dezembro de 2026', activities: [
      { time: '09:00', title: 'Cine Ambiental — Escola A', type: 'Atividade educativa', room: 'Auditório CCA', speakers: ['Jesse Marques Pavão'], description: 'Atividade de conscientização para estudantes da educação básica de Manaus sobre preservação ambiental e impactos da poluição plástica.' },
      { time: '14:00', title: 'Cine Ambiental — Escola B', type: 'Atividade educativa', room: 'Auditório CCA', speakers: ['Jesse Marques Pavão'], description: 'Atividade de conscientização para estudantes da educação básica de Manaus sobre preservação ambiental e impactos da poluição plástica.' },
      { time: '17:00', title: 'Credenciamento', type: 'Credenciamento', room: 'Entrada do Auditório Eulálio', speakers: ['Comissão organizadora'], description: 'Recepção e credenciamento dos participantes.' },
      { time: '18:00', title: 'Abertura oficial do III IWPPO e atividade cultural', type: 'Abertura', room: 'Auditório Eulálio', speakers: ['Jesse Marques Pavão', 'Marília', 'Comissão de Cerimonial'], description: 'Abertura oficial com apresentação de grupo de dança e coral da UFAM.' },
      { time: '19:00', title: 'Palestra Magna', type: 'Palestra', room: 'Auditório Eulálio', speakers: ['Henrique Pereira (UFAM/INPA)'], description: 'O desafio global da poluição plástica e os compromissos na Pan-Amazônia.' },
      { time: '20:30', title: 'Encerramento e momento cultural', type: 'Atividade cultural', room: 'Hall do auditório', speakers: ['Comissão de Cerimonial'], description: 'Encerramento das atividades do primeiro dia.' }
    ]
  },
  {
    date: '2026-12-03', dayLabel: '03 de dezembro de 2026', activities: [
      { time: '09:00', title: 'Painel 1 — Evidências científicas sobre os impactos da poluição plástica na Pan-Amazônia', type: 'Painel', room: 'Auditório CCA — com tradução', speakers: ['José Eduardo Martinelli Filho', 'Fabian Sá', 'Jemilli Castiglioni Viaggi'], description: 'Pesquisas recentes sobre rios, solos, ecossistemas locais, biodiversidade e comunidades ribeirinhas.' },
      { time: '10:30', title: 'Painel 2 — Monitoramento remoto, bioindicadores e rastreabilidade de resíduos', type: 'Painel', room: 'Auditório CCA — com tradução', speakers: ['Jesse Marques Pavão', 'Robson Guimarães dos Santos', 'Scott Wilson'], description: 'Métodos e tecnologias para monitorar, identificar e rastrear resíduos plásticos.' },
      { time: '11:30', title: 'Sessão técnica de jovens pesquisadores — pôsteres', type: 'Sessão técnica', room: 'Sala do CCA', speakers: [], description: 'Apresentação de trabalhos de jovens pesquisadores.' },
      { time: '12:45–13:45', title: 'Almoço', type: 'Intervalo', room: '', speakers: [], description: 'Intervalo para almoço.' },
      { time: '14:00', title: 'Mesa-redonda 1 / Keynote internacional — Tecnologias emergentes de captura e reciclagem', type: 'Mesa-redonda', room: 'Auditório CCA — com tradução', speakers: ['Alireza Moghayedi', 'Brendan P. Kelaher'], description: 'Inovações para coleta de plásticos e transformação desses materiais em novas matérias-primas.' },
      { time: '15:30', title: 'Painel 3 — Biorremediação, enzimas e startups de bioplásticos', type: 'Painel', room: 'Auditório CCA — com tradução', speakers: ['Marcell Mariano Correa Maceno', 'Marcos Paulo Alves de Sousa', 'Alexandre Urban Borbely'], description: 'Soluções biotecnológicas para degradação e substituição de plásticos convencionais.' },
      { time: '16:30', title: 'Painel 4 — Economia circular aplicada a bacias hidrográficas e oceânicas', type: 'Painel', room: 'Auditório CCA — com tradução', speakers: ['Ian Vázquez Rowe'], description: 'Estratégias de economia circular aplicadas à gestão dos resíduos.' },
      { time: '18:00', title: 'Sessão técnica de pôsteres e atividade cultural', type: 'Sessão técnica', room: 'Sala do CCA', speakers: [], description: 'Apresentação de jovens pesquisadores seguida de atividade cultural.' }
    ]
  },
  {
    date: '2026-12-04', dayLabel: '04 de dezembro de 2026', activities: [
      { time: '09:00', title: 'Mesa-redonda 2 — Instrumentos econômicos: logística reversa, taxação e créditos ambientais', type: 'Mesa-redonda', room: 'Auditório CCA — com tradução', speakers: ['Feni Dalano Roosevelt Agostinho'], description: 'Instrumentos econômicos voltados à prevenção e redução da poluição plástica.' },
      { time: '10:30', title: 'Mesa-redonda 3 — Acordo Global do Plástico da ONU e desdobramentos na Pan-Amazônia', type: 'Mesa-redonda', room: 'Auditório CCA — com tradução', speakers: ['Fernando Miguel Granja Martins', 'Jemilli Castiglioni Viaggi', 'Ana Filipa da Silva Bessa'], description: 'Implicações regionais das negociações e dos compromissos internacionais.' },
      { time: '11:30', title: 'Sessão técnica de jovens pesquisadores — pôsteres', type: 'Sessão técnica', room: 'Sala do CCA', speakers: [], description: 'Apresentação de trabalhos de jovens pesquisadores.' },
      { time: '12:45–13:45', title: 'Almoço', type: 'Intervalo', room: '', speakers: [], description: 'Intervalo para almoço.' },
      { time: '14:00', title: 'Painel 5 — Saberes indígenas e justiça ambiental', type: 'Painel', room: 'Auditório CCA — com tradução', speakers: ['Richard James Ladle', 'Bankole Ositadimma Awuzie'], description: 'Diálogo entre conhecimentos tradicionais, ciência e justiça ambiental.' },
      { time: '15:30', title: 'Painel 6 — Indústria 4.0, rastreabilidade e logística reversa', type: 'Painel', room: 'Auditório CCA — com tradução', speakers: ['Alireza Moghayedi'], description: 'Aplicações de IoT, big data e inteligência artificial na rastreabilidade de resíduos.' },
      { time: '16:30', title: 'Grupo de trabalho — redação de policy brief', type: 'Grupo de trabalho', room: 'Sala do CCA', speakers: ['Scott Wilson'], description: 'Elaboração colaborativa de recomendações para governos, organizações e comunidades.' },
      { time: '17:30', title: 'Sessão de premiação', type: 'Premiação', room: 'Auditório CCA', speakers: ['Jesse Marques Pavão', 'Marília'], description: 'Reconhecimento dos melhores artigos, pôsteres e protótipos.' },
      { time: '18:00', title: 'Encerramento — Carta Científica do III IWPPO', type: 'Encerramento', room: 'Auditório CCA', speakers: ['Jesse Marques Pavão', 'Alexinaldo Santana'], description: 'Leitura da carta científica e encerramento oficial do evento.' }
    ]
  }
];


const fallbackUi: Record<Language, IwppoPageData['ui']> = {
  pt: {
    alt: {
      waterTexture: 'Textura de água',
      iwppoLogo: 'Logo IWPPO 2026'
    },
    eventCard: {
      start: 'Início',
      end: 'Término',
      location: 'Local',
      modality: 'Modalidade'
    },
    sections: {
      about: 'Sobre o evento',
      history: 'Histórico',
      justification: 'Justificativa',
      professionalContribution: 'Formação e cooperação',
      thematicAxes: 'Eixos temáticos',
      participatingPrograms: 'Programas participantes',
      participatingGraduatePrograms: 'Programas de Pós-Graduação participantes',
      targetAudience: 'Público-alvo',
      targetAudienceFees: 'Público-alvo e valores de inscrição',
      speakers: 'Palestrantes',
      invitedSpeakers: 'Palestrantes convidados',
      committees: 'Comissões',
      committeesTitle: 'Comissão organizadora e comitê científico',
      organizingCommittee: 'Comissão Organizadora',
      scientificCommittee: 'Comitê Científico',
      schedule: 'Programação',
      scheduleTitle: 'Programação do evento',
      institutional: 'Institucional',
      institutionalTitle: 'Realização e informações institucionais'
    },
    table: {
      category: 'Categoria',
      north: 'Norte',
      northeast: 'Nordeste',
      southeast: 'Sudeste',
      south: 'Sul',
      midwest: 'Centro-Oeste',
      foreigners: 'Estrangeiros',
      registration: 'Inscrição'
    },
    labels: {
      grade: 'Conceito',
      lattes: 'Lattes',
      proponentData: 'Dados do proponente',
      fundingProgram: 'Programa de apoio',
      call: 'Edital',
      proponent: 'Proponente',
      role: 'Função',
      email: 'E-mail',
      phone: 'Telefone',
      institution: 'Instituição',
      program: 'Programa',
      promotingInstitution: 'Instituição promotora',
      name: 'Nome',
      type: 'Tipo',
      country: 'País',
      address: 'Endereço',
      director: 'Dirigente',
      position: 'Cargo',
      accessInstitutionalWebsite: 'Acessar site institucional'
    }
  },
  en: {
    alt: {
      waterTexture: 'Water texture',
      iwppoLogo: 'IWPPO 2026 Logo'
    },
    eventCard: {
      start: 'Start',
      end: 'End',
      location: 'Location',
      modality: 'Format'
    },
    sections: {
      about: 'About the event',
      history: 'History',
      justification: 'Justification',
      professionalContribution: 'Training and cooperation',
      thematicAxes: 'Thematic axes',
      participatingPrograms: 'Participating programs',
      participatingGraduatePrograms: 'Participating Graduate Programs',
      targetAudience: 'Target audience',
      targetAudienceFees: 'Target audience and registration fees',
      speakers: 'Speakers',
      invitedSpeakers: 'Invited speakers',
      committees: 'Committees',
      committeesTitle: 'Organizing Committee and Scientific Committee',
      organizingCommittee: 'Organizing Committee',
      scientificCommittee: 'Scientific Committee',
      schedule: 'Program',
      scheduleTitle: 'Event program',
      institutional: 'Institutional',
      institutionalTitle: 'Organization and institutional information'
    },
    table: {
      category: 'Category',
      north: 'North',
      northeast: 'Northeast',
      southeast: 'Southeast',
      south: 'South',
      midwest: 'Midwest',
      foreigners: 'Foreigners',
      registration: 'Registration'
    },
    labels: {
      grade: 'Grade',
      lattes: 'Lattes',
      proponentData: 'Proponent data',
      fundingProgram: 'Funding program',
      call: 'Call',
      proponent: 'Proponent',
      role: 'Role',
      email: 'E-mail',
      phone: 'Phone',
      institution: 'Institution',
      program: 'Program',
      promotingInstitution: 'Promoting institution',
      name: 'Name',
      type: 'Type',
      country: 'Country',
      address: 'Address',
      director: 'Director',
      position: 'Position',
      accessInstitutionalWebsite: 'Access institutional website'
    }
  },
  es: {
    alt: {
      waterTexture: 'Textura de agua',
      iwppoLogo: 'Logo IWPPO 2026'
    },
    eventCard: {
      start: 'Inicio',
      end: 'Fin',
      location: 'Lugar',
      modality: 'Modalidad'
    },
    sections: {
      about: 'Sobre el evento',
      history: 'Historia',
      justification: 'Justificación',
      professionalContribution: 'Formación y cooperación',
      thematicAxes: 'Ejes temáticos',
      participatingPrograms: 'Programas participantes',
      participatingGraduatePrograms: 'Programas de Posgrado participantes',
      targetAudience: 'Público objetivo',
      targetAudienceFees: 'Público objetivo y valores de inscripción',
      speakers: 'Ponentes',
      invitedSpeakers: 'Ponentes invitados',
      committees: 'Comisiones',
      committeesTitle: 'Comisión organizadora y comité científico',
      organizingCommittee: 'Comisión Organizadora',
      scientificCommittee: 'Comité Científico',
      schedule: 'Programa',
      scheduleTitle: 'Programa del evento',
      institutional: 'Institucional',
      institutionalTitle: 'Organización e información institucional'
    },
    table: {
      category: 'Categoría',
      north: 'Norte',
      northeast: 'Nordeste',
      southeast: 'Sudeste',
      south: 'Sur',
      midwest: 'Centro-Oeste',
      foreigners: 'Extranjeros',
      registration: 'Inscripción'
    },
    labels: {
      grade: 'Concepto',
      lattes: 'Lattes',
      proponentData: 'Datos del proponente',
      fundingProgram: 'Programa de apoyo',
      call: 'Convocatoria',
      proponent: 'Proponente',
      role: 'Función',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      institution: 'Institución',
      program: 'Programa',
      promotingInstitution: 'Institución promotora',
      name: 'Nombre',
      type: 'Tipo',
      country: 'País',
      address: 'Dirección',
      director: 'Director',
      position: 'Cargo',
      accessInstitutionalWebsite: 'Acceder al sitio institucional'
    }
  }
};


@Component({
  selector: 'app-iwppo-2026',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './iwppo-2026.component.html',
  styleUrl: './iwppo-2026.component.css'
})
export class Iwppo2026Component implements OnInit, AfterViewInit, OnDestroy {
  currentLanguage: Language = 'pt';
  pageData!: IwppoPageData;

  languages: Language[] = ['pt', 'en', 'es'];
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  eventHasStarted = false;
  private countdownTimer?: ReturnType<typeof setInterval>;
  private revealObserver?: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  ngOnInit(): void {
    this.setLanguage(this.currentLanguage);
    if (isPlatformBrowser(this.platformId)) {
      this.updateCountdown();
      this.countdownTimer = setInterval(() => this.updateCountdown(), 1000);
    }
  }

  ngAfterViewInit(): void {
  if (!isPlatformBrowser(this.platformId)) return;
  const elements = document.querySelectorAll('.iwppo-reveal');

  this.revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => this.revealObserver?.observe(element));
}

  ngOnDestroy(): void {
    if (this.countdownTimer) clearInterval(this.countdownTimer);
    this.revealObserver?.disconnect();
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language;

    const selectedData = data[language];

    this.pageData = {
      ...selectedData,
      event: { ...selectedData.event, startDate: '2026-12-02', endDate: '2026-12-04' },
      schedule: updatedSchedule,
      ui: selectedData.ui ?? fallbackUi[language]
    };
  }

  get countdownText() {
    return {
      pt: { title: 'Contagem regressiva', dates: 'Datas em destaque', units: ['Dias', 'Horas', 'Minutos', 'Segundos'], started: 'O III IWPPO começou!' },
      en: { title: 'Countdown', dates: 'Highlighted dates', units: ['Days', 'Hours', 'Minutes', 'Seconds'], started: 'III IWPPO has started!' },
      es: { title: 'Cuenta regresiva', dates: 'Fechas destacadas', units: ['Días', 'Horas', 'Minutos', 'Segundos'], started: '¡El III IWPPO ha comenzado!' }
    }[this.currentLanguage];
  }

  get countdownItems(): Array<{ value: number; label: string }> {
    const values: CountdownValue = this.countdown;
    return [
      { value: values.days, label: this.countdownText.units[0] },
      { value: values.hours, label: this.countdownText.units[1] },
      { value: values.minutes, label: this.countdownText.units[2] },
      { value: values.seconds, label: this.countdownText.units[3] }
    ];
  }

  private updateCountdown(): void {
    const distance = new Date('2026-12-02T09:00:00-04:00').getTime() - Date.now();
    if (distance <= 0) {
      this.eventHasStarted = true;
      this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return;
    }
    this.countdown = {
      days: Math.floor(distance / 86_400_000),
      hours: Math.floor((distance % 86_400_000) / 3_600_000),
      minutes: Math.floor((distance % 3_600_000) / 60_000),
      seconds: Math.floor((distance % 60_000) / 1000)
    };
  }

  isCurrentLanguage(language: Language): boolean {
    return this.currentLanguage === language;
  }

  hasLattes(person: Person): boolean {
    return Boolean(person.lattes && person.lattes.trim() !== '');
  }

  hasAffiliation(person: Person): boolean {
    return Boolean(person.affiliation && person.affiliation.trim() !== '');
  }

  hasSpeakers(activity: Activity): boolean {
    return Array.isArray(activity.speakers) && activity.speakers.length > 0;
  }

  trackByName(index: number, person: Person): string {
    return person.name;
  }

  trackByAxis(index: number, axis: ThematicAxis): string {
    return axis.title;
  }

  trackByProgram(index: number, program: ParticipatingProgram): string {
    return `${program.institution}-${program.program}`;
  }

  trackByAudience(index: number, audience: TargetAudience): string {
    return audience.type;
  }

  trackByScheduleDay(index: number, day: ScheduleDay): string {
    return day.date;
  }

  trackByActivity(index: number, activity: Activity): string {
    return `${activity.time}-${activity.title}`;
  }

  trackByText(index: number, text: string): string {
    return text;
  }

  trackByLanguage(index: number, language: Language): string {
    return language;
  }
}
