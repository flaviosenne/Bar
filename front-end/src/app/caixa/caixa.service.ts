import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CaixaService {

  apiBaseUri = 'http://localhost:3000'
  // INJEÇÃO DE DEPENDÊNCIA: pedimos ao Angular
  // para INJETAR nos parâmetros do construtor
  // as DEPENDÊNCIAS de que precisamos em uma
  // determinada classe. Assim, não precisamos
  // instanciar manualmente essas dependências.
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  private apiUri : string = this.apiBaseUri + '/caixa'

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  listar(): Observable<any> {
    return this.http.get<any>(this.apiUri)
  }

  excluir(id: string) {
    return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()
  }

  novo(body: Object) {
    console.log('Cheguei aqui')
    console.log(body)
    return this.http.post(this.apiUri, body).subscribe(()=> {
      this.showMessage(' criado com sucesso')
    })
  }

  atualizar(body: any) {
    return this.http.put(this.apiUri, body).toPromise()
  }

  obterUm(id: string) {
    return this.http.get(this.apiUri + '/' + id).toPromise()
  }

}
