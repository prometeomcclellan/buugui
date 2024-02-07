import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { moreList } from 'src/app/environments/arrays';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {
moreName:string | undefined;
moreImage:any | undefined;
idMore:number | undefined;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.idMore = params["id"];
      let dMore = moreList[0].data;

      dMore?.forEach(mor =>{

        if (this.idMore == mor.moreId) {
          console.dir(mor.searchTag)
          this.moreName = mor.name; 
          this.moreImage = mor.image;         
        }
      })
    });
  }

}
