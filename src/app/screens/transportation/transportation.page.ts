import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { trList } from 'src/app/environments/arrays';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.page.html',
  styleUrls: ['./transportation.page.scss'],
})
export class TransportationPage implements OnInit {
  trName:string | undefined;
  trImage:any | undefined;
  idTr:number | undefined;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idTr = params["id"];
      let dTr = trList[0].data;

      dTr?.forEach(tr =>{

        if (this.idTr == tr.transportId) {
          console.dir(tr.searchTag)
          this.trName = tr.name; 
          this.trImage = tr.image;         
        }
      })
    });
  }

}
