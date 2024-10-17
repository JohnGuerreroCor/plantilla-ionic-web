import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  links = [
    {
      titulo: 'Carnet',
      ruta: '/carnet',
      icono: 'fa-solid fa-id-card fa-6x p-4 ion-text-center color-icon',
      info: 'Consulta, cambio de foto para los diferentes estamentos de la institución y aclaración de las dependencias que administran la información de cada estamento.',
    },
    {
      titulo: 'Leyenda',
      ruta: '/leyenda',
      icono: 'fa-solid fa-stamp fa-6x p-4 text-center color-icon',
      info: 'Generación de tiquetes de acceso para las personas externas a la institución.',
    },
    {
      titulo: 'Tiquetes',
      ruta: '/tiquetes',
      icono: 'fa-solid fa-ticket fa-6x p-4 text-center color-icon',
      info: 'Generación de tiquetes de acceso para las personas externas a la institución.',
    },
    {
      titulo: 'Reportes',
      ruta: '/reportes',
      icono: 'fa-solid fa-chart-simple fa-6x p-4 text-center color-icon',
      info: 'Consulta y generación de los reportes específico y detallado de ingreso y salida por cada puesto de vigilancia y sedes de la institución.',
    },
    {
      titulo: 'Reportes',
      ruta: '/reportes',
      icono: 'fa-solid fa-chart-simple fa-6x p-4 text-center color-icon',
      info: 'Consulta y generación de los reportes específico y detallado de ingreso y salida por cada puesto de vigilancia y sedes de la institución.',
    },
    {
      titulo: 'Reportes',
      ruta: '/reportes',
      icono: 'fa-solid fa-chart-simple fa-6x p-4 text-center color-icon',
      info: 'Consulta y generación de los reportes específico y detallado de ingreso y salida por cada puesto de vigilancia y sedes de la institución.',
    },
    {
      titulo: 'Reportes',
      ruta: '/reportes',
      icono: 'fa-solid fa-chart-simple fa-6x p-4 text-center color-icon',
      info: 'Consulta y generación de los reportes específico y detallado de ingreso y salida por cada puesto de vigilancia y sedes de la institución.',
    },
    {
      titulo: 'Reportes',
      ruta: '/reportes',
      icono: 'fa-solid fa-chart-simple fa-6x p-4 text-center color-icon',
      info: 'Consulta y generación de los reportes específico y detallado de ingreso y salida por cada puesto de vigilancia y sedes de la institución.',
    },
    {
      titulo: 'Reportes',
      ruta: '/reportes',
      icono: 'fa-solid fa-chart-simple fa-6x p-4 text-center color-icon',
      info: 'Consulta y generación de los reportes específico y detallado de ingreso y salida por cada puesto de vigilancia y sedes de la institución.',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
