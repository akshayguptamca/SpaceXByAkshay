import { Component, OnInit } from '@angular/core';
import { ConfigService } from './service/api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * declared years array
   */
  years = ["2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"];
  spacXList: any;
  missionIdList: any;

  constructor(public configService: ConfigService,
    private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.showspaceXList();
  }

  /**
   * Method to show all SpaceX detail list
   */
  showspaceXList() {
    this.spinner.show();
    this.configService.getSpaceX().subscribe(data => {
      this.spacXList = data;
      this.spinner.hide();
    });
  }

  /**
   * 
   * @param year Method to show selected year spaceX list
   */
  onSelectYear(year) {
    this.spinner.show();
    this.configService.getSpaceXByYear(year).subscribe(data => {
      this.spacXList = data;
      this.spinner.hide();
    });
  }

  /**
   * 
   * @param launch Method to show spaceX list for launch success
   */
  onLaunch(launch) {
    this.spinner.show();
    this.configService.getSpaceXLaunch(launch).subscribe(data => {
      this.spacXList = data;
      this.spinner.hide();
    });
  }

  /**
   * 
   * @param land Method to show spaceX list for land success
   */
  onLand(land) {
    this.spinner.show();
    this.configService.getSpaceXLand(land).subscribe(data => {
      this.spacXList = data;
      this.spinner.hide();
    });
  }
}
