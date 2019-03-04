import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as moment from "moment";
import { UserService } from '../../services/users.service';
import { AutorizacionService } from '../../services/autorizeService';
import { Weight } from '../../models/wights';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: "graphic",
  templateUrl: "./graphic.component.html",
  styleUrls: ["./graphic.component.scss"]
})
export class GraphicComponent implements OnInit {
  data: Weight[];
  displayedColumns: string[] = ['date', 'weight'];
  pipe = new DatePipe("en-US");

  lineChartData: Array<any> = [
    {
      data: []
    }
  ];

  lineChartLabels: Array<any> = [];

  public lineChartOptions: any = {
    responsive: true
  };
  email: any;
  public lineChartColors: Array<any> = [
    {
      backgroundColor: "rgba(209, 138, 200,0.2)",
      borderColor: "rgba(148,159,177,1)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = "line";

  constructor(
    private auth: AutorizacionService,
    private userService: UserService,
    private afAuth: AngularFireAuth,
    // public dialogRef: MatDialogRef<GraphicComponent>
  ) {}

  ngOnInit() {
    this.afAuth.user.subscribe(data => {
      this.userService.getWeight(data.email).subscribe(data => {
        this.data = data;
        return this.data;
      });
    });
  }

  onValChange(value) {
    switch (value) {
      case "semana": {
        let startOfWeek = moment()
          .startOf("week")
          .toDate();
        let endOfWeek = moment()
          .endOf("week")
          .toDate();
        this.afAuth.user.subscribe(data => {
          this.email = data.email;
          return this.userService
            .getWeightDate(this.email, startOfWeek, endOfWeek)
            .subscribe((data: Weight[]) => {
              this.data = data;
              this.lineChartLabels = data.map(t =>
                this.pipe.transform(t.date["seconds"] * 1000)
              );
              this.lineChartData[0] = {
                label: "Weight",
                data: data.map(t => t.weight)
              };
            });
        });

        break;
      }
      case "mes": {
        let startOfMonth = moment()
          .startOf("month")
          .toDate();
        let endOfMonth = moment()
          .endOf("month")
          .toDate();
          this.afAuth.user.subscribe(data => {
            this.email = data.email;
            return this.userService
              .getWeightDate(this.email, startOfMonth, endOfMonth)
              .subscribe((data: Weight[]) => {
                this.data = data;
                this.lineChartLabels = data.map(t =>
                  this.pipe.transform(t.date["seconds"] * 1000)
                );
                this.lineChartData[0] = {
                  label: "Weight",
                  data: data.map(t => t.weight)
                };
              });
          });
        break;
      }

      case "año": {
        let startOfYear = moment()
          .startOf("year")
          .toDate();
        let endOfYear = moment()
          .endOf("year")
          .toDate();
          this.afAuth.user.subscribe(data => {
            this.email = data.email;
            return this.userService
              .getWeightDate(this.email, startOfYear, endOfYear)
              .subscribe((data: Weight[]) => {
                this.data = data;
                this.lineChartLabels = data.map(t =>
                  this.pipe.transform(t.date["seconds"] * 1000)
                );
                this.lineChartData[0] = {
                  label: "Weight",
                  data: data.map(t => t.weight)
                };
              });
          });
        break;
      }

      default: {
        break;
      }
    }
  }
}
