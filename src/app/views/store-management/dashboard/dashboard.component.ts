import { Component } from '@angular/core';

interface Column {
  name: string;
  soldQuantity: number;
  remainingQuantity:number;
  price:number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  products:any = [
    { name: "Product A", soldQuantity: 10, remainingQuantity: 20, price: 5.99 },
    { name: "Product B", soldQuantity: 15, remainingQuantity: 25, price: 6.99 },
    { name: "Product C", soldQuantity: 20, remainingQuantity: 30, price: 7.99 },
    { name: "Product D", soldQuantity: 25, remainingQuantity: 35, price: 8.99 },
    { name: "Product E", soldQuantity: 30, remainingQuantity: 40, price: 9.99 }
  ];

  cols:any = [
    { field: 'name', header: 'Name' },
    { field: 'soldQuantity', header: 'Sold Quantity' },
    { field: 'remainingQuantity', header: 'Remain Quantity' },
    { field: 'price', header: 'Price' }
];


salesData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'Purchases',
          backgroundColor: '#789FF8',
          borderColor: '#789FF8',
          data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
          label: 'Sales',
          backgroundColor: '#4AC05E',
          borderColor: '#4AC05E',
          data: [28, 48, 40, 19, 86, 27, 90]
      }
  ]
};

orderData = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
      {
          label: 'Paid',
          backgroundColor: '#789FF8',
          borderColor: '#789FF8',
          data: [81, 56, 55, 40]
      },
      {
          label: 'Credit',
          backgroundColor: '#4AC05E',
          borderColor: '#4AC05E',
          data: [19, 86, 27, 90]
      }
  ]
};

options = {
  maintainAspectRatio: false,
  aspectRatio: 0.8,
  plugins: {
      legend: {
          labels: {
              color: '#A0A6B3'
          }
      }
  },
  scales: {
      x: {
          ticks: {
              color: '#A0A6B3',
              font: {
                  weight: 500
              }
          },
          grid: {
              color: '',
              drawBorder: false
          }
      },
      y: {
          ticks: {
              color: '#A0A6B3'
          },
          grid: {
              color: '#A0A6B3',
              drawBorder: false
          }
      }

  }
};


ngOnit(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = '#A0A6B3';
    const textColorSecondary = '#E8377B';
    const surfaceBorder = 'red';
    
}

}
