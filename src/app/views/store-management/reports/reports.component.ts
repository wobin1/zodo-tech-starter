import { Component } from '@angular/core';

interface Column {
  product: string;
  productID: number;
  category:string;
  remainingQuantity: number;
  turnOverQuantity: number;
  salesRatio: number;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  products:any = [
    {
      product: "Laptop",
      productID: 1001,
      category: "Electronics",
      remainingQuantity: 50,
      turnOverQuantity: 20,
      salesRatio: 0.4
    },
    {
      product: "Smartphone",
      productID: 1002,
      category: "Electronics",
      remainingQuantity: 100,
      turnOverQuantity: 80,
      salesRatio: 0.8
    },
    {
      product: "T-shirt",
      productID: 2001,
      category: "Clothing",
      remainingQuantity: 200,
      turnOverQuantity: 150,
      salesRatio: 0.75
    },
    {
      product: "Running Shoes",
      productID: 2002,
      category: "Footwear",
      remainingQuantity: 80,
      turnOverQuantity: 60,
      salesRatio: 0.75
    },
    {
      product: "Desk Chair",
      productID: 3001,
      category: "Furniture",
      remainingQuantity: 30,
      turnOverQuantity: 15,
      salesRatio: 0.5
    },
    {
      product: "Headphones",
      productID: 1003,
      category: "Electronics",
      remainingQuantity: 60,
      turnOverQuantity: 40,
      salesRatio: 0.67
    },
    {
      product: "Jeans",
      productID: 2003,
      category: "Clothing",
      remainingQuantity: 120,
      turnOverQuantity: 90,
      salesRatio: 0.75
    },
    {
      product: "Backpack",
      productID: 3002,
      category: "Accessories",
      remainingQuantity: 40,
      turnOverQuantity: 30,
      salesRatio: 0.75
    },
    {
      product: "Printer",
      productID: 1004,
      category: "Electronics",
      remainingQuantity: 25,
      turnOverQuantity: 10,
      salesRatio: 0.4
    },
    {
      product: "Dress Shoes",
      productID: 2004,
      category: "Footwear",
      remainingQuantity: 70,
      turnOverQuantity: 50,
      salesRatio: 0.71
    }
  ];
  

  cols:any = [
    { field: 'product', header: 'Product' },
    { field: 'productID', header: 'Product Id' },
    { field: 'category', header: 'category' },
    { field: 'remainingQuantity', header: 'Remaining Quantity' },
    { field: 'turnOverQuantity', header: 'Turn Over' },
    { field: 'salesRatio', header: 'salesRatio' }
];


data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'Revenue',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          tension: 0.4,
          borderColor: '#E8377B'
      },
      {
          label: 'Profit',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          tension: 0.4,
          borderColor: '#4AC05E'
      },
     
  ]
};

options = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
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

}
