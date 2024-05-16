import { Component, ViewChild } from '@angular/core';
import { ClientService } from '../services/client.service';
import { CLient, CLientADD } from '../models/Client';

@Component({
  selector: 'app-get-client-by-id',
  templateUrl: './get-client-by-id.component.html',
  styleUrl: './get-client-by-id.component.css'
})
export class GetClientByIDComponent {
  //public products: any;
  public clients!: CLient;
  public keyword: string="";
  @ViewChild("clientId") clientId!:Number;

  constructor( private clientService:  ClientService) {
  }

  

  title = 'customerFrontEnd';

 

  search() {
    console.log(this.clientId);
    this.clientService.getCLientsById(this.clientId)
      .subscribe(
        {
          next: data =>{
            this.clients = data;
          },
          error:err => {
            console.log(err);
          }
        })


  }

}
