import { Component, OnInit } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.incomeChart() 
    this.registerChart()
    this.attendChart()
  }

  incomeChart() {
    var ctx = (<any>document.getElementById('incomeChart')).getContext('2d');
    var chart = new Chart(ctx, {
      // THE TYPE OF CHART WE WANT TO CREATE
      type: 'bar',

      // THE DATA FOR OUR DATASET
      data: {
        labels: ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"],
        datasets: [{
          label: "รายได้ประจำวัน",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(200, 8, 0, 0.2)',
            'rgba(58, 158, 0, 0.2)',
            'rgba(0, 71, 102, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(56, 162, 235, 1)',
            'rgba(255, 206, 86, 3)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(200, 8, 0, 1)',
            'rgba(58, 158, 0, 1)',
            'rgba(0, 71, 102, 1)'
          ],
          data: [20, 300, 120, 320, 100, 85, 40, 255, 40],
          borderWidth: 1
        }]
      }
    });
  }

  attendChart() {
    var ctx = (<any>document.getElementById('attendChart')).getContext('2d');
    var chart = new Chart(ctx, {
      // THE TYPE OF CHART WE WANT TO CREATE
      type: 'bar',

      // THE DATA FOR OUR DATASET
      data: {
        labels: ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-13:00", "13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"],
        datasets: [{
          label: "การเข้าใช้บริการ",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(200, 8, 0, 0.2)',
            'rgba(58, 158, 0, 0.2)',
            'rgba(0, 71, 102, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(56, 162, 235, 1)',
            'rgba(255, 206, 86, 3)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(200, 8, 0, 1)',
            'rgba(58, 158, 0, 1)',
            'rgba(0, 71, 102, 1)'
          ],
          data: [4, 11, 30, 4, 1, 14, 3, 2, 1],
          borderWidth: 1
        }]
      }
    });
  }

  registerChart() {
    var ctx = (<any>document.getElementById('registerChart')).getContext('2d');
    var chart = new Chart(ctx, {
      // THE TYPE OF CHART WE WANT TO CREATE
      type: 'bar',

      // THE DATA FOR OUR DATASET
      data: {
        labels: ["1-17 ปี", "18 ปีขึ้นไป"],
        datasets: [{
          label: "การสมัครสมาชิก",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(56, 162, 235, 1)'
          ],
          data: [18, 10],
          borderWidth: 1
        }]
      }
    });
  }
}
