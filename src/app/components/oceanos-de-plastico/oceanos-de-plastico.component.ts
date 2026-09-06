import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../shared/language.service';

interface OceanosContent {
  badge: string;
  title: string;
  introduction: string[];
  tags: string[];
  heroAlt: string;
  cards: { title: string; description: string }[];
  galleryTitle: string;
  galleryAlts: string[];
}

const content: Record<SiteLanguage, OceanosContent> = {
  pt: {
    badge: 'Divulgação Científica',
    title: 'Oceanos de Plástico',
    introduction: [
      'Utilizando como referência os projetos Marine Debris Detector e o experimento do Projeto de Detritos Plásticos (PLP) da Universidade do Mar Egeu, surgiu a pesquisa Oceanos de Plástico, que visa localizar, a partir de um algoritmo desenvolvido em Python e dados fornecidos pelo satélite Sentinel-2, os pontos com maior concentração de detritos flutuantes, quantificando-os e discriminando-os.',
      'A pesquisa contribui para o uso e reuso adequado desses materiais e colabora com o alcance dos Objetivos de Desenvolvimento Sustentável (ODS), apoiando estudos e análises avançadas sobre a presença de polímeros plásticos em mares, riachos e lagoas da região de Maceió, em Alagoas.',
    ],
    tags: ['Python', 'Sentinel-2', 'ODS', 'Detritos flutuantes'],
    heroAlt: 'Estrutura experimental do projeto Oceanos de Plástico sendo montada no campus da UNISANTA',
    cards: [
      { title: 'Estrutura experimental', description: 'Foi construída uma armação com dimensões de 10m x 10m contendo 3.600 garrafas plásticas do tipo PET.' },
      { title: 'Validação por satélite', description: 'As garrafas, nas cores branco, azul, vermelho e verde, podem ser captadas pelo Sentinel-2 e convertidas em dados.' },
      { title: 'Aplicação científica', description: 'O projeto apoia pesquisas e análises avançadas para identificar polímeros plásticos em ambientes hídricos.' },
    ],
    galleryTitle: 'Galeria do projeto',
    galleryAlts: ['Estrutura sem as garrafas', 'Processo de montagem', 'Estrutura montada e organizada'],
  },
  en: {
    badge: 'Scientific Outreach',
    title: 'Oceans of Plastic',
    introduction: [
      'Inspired by the Marine Debris Detector projects and the Plastic Litter Project (PLP) experiment at the University of the Aegean, the Oceans of Plastic research was created to locate areas with the highest concentration of floating debris using a Python algorithm and data provided by the Sentinel-2 satellite, quantifying and classifying them.',
      'The research supports the proper use and reuse of these materials and contributes to the Sustainable Development Goals (SDGs), supporting advanced studies and analyses of plastic polymers in seas, streams, and lagoons in the Maceió region of Alagoas.',
    ],
    tags: ['Python', 'Sentinel-2', 'SDGs', 'Floating debris'],
    heroAlt: 'Experimental structure of the Oceans of Plastic project being assembled on the UNISANTA campus',
    cards: [
      { title: 'Experimental structure', description: 'A 10m x 10m frame containing 3,600 PET plastic bottles was built.' },
      { title: 'Satellite validation', description: 'The white, blue, red, and green bottles can be captured by Sentinel-2 and converted into data.' },
      { title: 'Scientific application', description: 'The project supports advanced research and analyses to identify plastic polymers in aquatic environments.' },
    ],
    galleryTitle: 'Project gallery',
    galleryAlts: ['Structure without bottles', 'Assembly process', 'Assembled and organized structure'],
  },
  es: {
    badge: 'Divulgación Científica',
    title: 'Océanos de Plástico',
    introduction: [
      'Tomando como referencia los proyectos Marine Debris Detector y el experimento del Proyecto de Desechos Plásticos (PLP) de la Universidad del Mar Egeo, surgió la investigación Océanos de Plástico, que busca localizar, mediante un algoritmo desarrollado en Python y datos proporcionados por el satélite Sentinel-2, los puntos con mayor concentración de desechos flotantes, cuantificándolos y clasificándolos.',
      'La investigación contribuye al uso y reutilización adecuados de estos materiales y ayuda a alcanzar los Objetivos de Desarrollo Sostenible (ODS), apoyando estudios y análisis avanzados sobre la presencia de polímeros plásticos en mares, arroyos y lagunas de la región de Maceió, en Alagoas.',
    ],
    tags: ['Python', 'Sentinel-2', 'ODS', 'Desechos flotantes'],
    heroAlt: 'Estructura experimental del proyecto Océanos de Plástico montada en el campus de UNISANTA',
    cards: [
      { title: 'Estructura experimental', description: 'Se construyó una estructura de 10m x 10m con 3.600 botellas de plástico PET.' },
      { title: 'Validación por satélite', description: 'Las botellas blancas, azules, rojas y verdes pueden ser captadas por Sentinel-2 y convertidas en datos.' },
      { title: 'Aplicación científica', description: 'El proyecto apoya investigaciones y análisis avanzados para identificar polímeros plásticos en ambientes acuáticos.' },
    ],
    galleryTitle: 'Galería del proyecto',
    galleryAlts: ['Estructura sin las botellas', 'Proceso de montaje', 'Estructura montada y organizada'],
  },
};

@Component({
  selector: 'app-oceanos-de-plastico',
  standalone: true,
  imports: [NgFor],
  templateUrl: './oceanos-de-plastico.component.html',
  styleUrl: './oceanos-de-plastico.component.css'
})
export class OceanosDePlasticoComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'pt';
  currentContent = content.pt;
  private languageSubscription?: Subscription;

  constructor(private readonly languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.initializeFromStorage();
    this.languageSubscription = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.currentContent = content[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSubscription?.unsubscribe();
  }
}
