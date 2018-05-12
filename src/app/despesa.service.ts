import { Injectable } from '@angular/core';
import { Despesa } from './despesa';

/* Local Storage Serviço */
import { LocalStorageService} from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private despesas: Despesa[] = new Array();

  constructor(private lss: LocalStorageService) { }

  getDb(): void {
    this.despesas = [];
    if (this.lss.get("despesas") != null)
    {
      this.despesas = <Despesa[]> JSON.parse(<string>this.lss.get("despesas"))
    }
  }

  public getAll(): Despesa[]{
    /*this.despesas = [
      new Despesa(1, "Mercado", "Extra", new Date("2018-05-06"), 280.90),
      new Despesa(2, "Lazer", "Cinema", new Date("2018-04-30"), 100)];*/
      this.getDb();
    return this.despesas;
  }

  save(despesa: Despesa): void{
    this.getDb();
    this.despesas.push(despesa);
    this.lss.set("despesas",JSON.stringify(this.despesas));
  }

  delete(despesaId: number) {
    for (var i=0; i<this.despesas.length;i++){
      if (this.despesas[i].id == despesaId) {
        this.despesas.splice(i, 1)
      }
    }
    this.lss.set("despesas", JSON.stringify(this.despesas));
  }

}
