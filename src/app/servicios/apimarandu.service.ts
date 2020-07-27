import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApimaranduService {


  cargo = [{
    "id": 1,
    "cantidad": 2,
    "estado": true,
    "tipoCargo": { id: 1 },
    "tipoEntidad": { id: 2 }
  },
  {
    "id": 2,
    "cantidad": 3,
    "estado": true,
    "tipoCargo": { id: 1 },
    "tipoEntidad": { id: 2 }
  },
  {
    "id": 3,
    "cantidad": 1,
    "estado": true,
    "tipoCargo": { id: 2 },
    "tipoEntidad": { id: 3 }
  }
  ];

  tipo_cargo = [{ "estado": true, "id": 1, "nombre": "SECRETARIA" },
  { "estado": true, "id": 2, "nombre": "PRESIDENTE" },
  { "estado": true, "id": 3, "nombre": "VICEPRESIDENTE" }];

  tipo_entidad = [{ "estado": true, "id": 2, "nombre": "SOCIEDAD ANONIMA" },
  { "estado": true, "id": 3, "nombre": "SOCIEDAD ANONIMA SIMPLIFICADA" },
  { "estado": true, "id": 4, "nombre": "SRL" }]


  constructor(private http: HttpClient) { }
  url = 'https://stage.sys.meyrnr.misiones.gob.ar/fe-1.0/resources/';

  public getDocs() {
    return this.http.get(this.url);
  }

  public getCargos() {
    return this.cargo;
  }

  public getTipoCargo() {
    return this.tipo_cargo;
  }

  public getTipoEntidad() {
    return this.tipo_entidad;
  }


  public post(tipo: String, data: any) {
    console.log(`${this.url}${tipo}`, data);
    console.log(this.http.post(`${this.url}${tipo}`, data));
  }



}
