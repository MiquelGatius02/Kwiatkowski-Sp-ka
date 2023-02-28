import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RankData } from '../interfaces/rankData.interface ';

@Injectable({
  providedIn: 'root'
})
export class ObtenerRankingService {

  typeUser: number = 0;
  Data: any;
  rankingData: RankData = { iduser: 0, id: 0, nombre: "", codigo_sala: "" };

  constructor(private http: HttpClient, public router: Router) { }

  getRanking(ranking: RankData) {
    this.http.get("http://127.0.0.1:8000/api/getRanking").subscribe(ranking => {
      this.rankingData.nombre = this.Data.nombre;
      this.rankingData.codigo_sala = this.Data.codigo_sala;
      this.rankingData.id = this.Data.id;
    });
  }
}
