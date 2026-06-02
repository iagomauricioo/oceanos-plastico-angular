import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { CommonModule } from '@angular/common';



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
  imports: [CommonModule],
  templateUrl: './iwppo-2026.component.html',
  styleUrl: './iwppo-2026.component.css'
})
export class Iwppo2026Component implements OnInit, AfterViewInit{
  currentLanguage: Language = 'pt';
  pageData!: IwppoPageData;

  languages: Language[] = ['pt', 'en', 'es'];

  ngOnInit(): void {
    this.setLanguage(this.currentLanguage);
  }

  ngAfterViewInit(): void {
  const elements = document.querySelectorAll('.iwppo-reveal');

  const observer = new IntersectionObserver(
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

  elements.forEach((element) => observer.observe(element));
}

  setLanguage(language: Language): void {
    this.currentLanguage = language;

    const selectedData = data[language];

    this.pageData = {
      ...selectedData,
      ui: selectedData.ui ?? fallbackUi[language]
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
