import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { cityList } from 'src/app/environments/arrays';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {
cityName:string | undefined;
cityImage:any | undefined;
idCity:number | undefined;
  ciudadId?: string | undefined;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.idCity = params["id"];
      let dCities = cityList[0].data;

      dCities?.forEach(cit =>{

        if (this.idCity == cit.cityId) {
          console.dir(cit.searchTag)
          this.cityName = cit.name; 
          this.cityImage = cit.image;         
        }
      })
    });
    
  }

}
