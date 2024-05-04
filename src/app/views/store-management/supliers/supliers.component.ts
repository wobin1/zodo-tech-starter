import { Component } from '@angular/core';
import * as FileSaver from 'file-saver';
import { MessageService } from 'primeng/api';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'app-supliers',
  templateUrl: './supliers.component.html',
  styleUrl: './supliers.component.scss',
  providers: [MessageService]
})
export class SupliersComponent {

  addSuplierModal:boolean = false;

  products:any = [
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    },
    {
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    }
];

selectedProducts:any = [];

constructor(private messageService: MessageService) {}

cols = [
  { field: 'SupplierName', header: 'Supplier Name', customExportHeader: 'Product Code' },
  { field: 'product', header: 'Product' },
  { field: 'contactNumber', header: 'Contact Number' },
  { field: 'email', header: 'Email' },
  { field: 'type', header: 'Type' },
  { field: 'onTheWay', header: 'On the way' }
];

 suppliersData = [
  {
    SupplierName: 'Supplier A',
    product: 'Product X',
    contactNumber: '+123456789',
    email: 'supplierA@example.com',
    type: 'taking returns',
    onTheWay: true
  },
  {
    SupplierName: 'Supplier B',
    product: 'Product Y',
    contactNumber: '+987654321',
    email: 'supplierB@example.com',
    type: 'not taking returns',
    onTheWay: false
  },
  {
    SupplierName: 'Supplier C',
    product: 'Product Z',
    contactNumber: '+555555555',
    email: 'supplierC@example.com',
    type: 'taking returns',
    onTheWay: true
  },
  {
    SupplierName: 'Supplier D',
    product: 'Product W',
    contactNumber: '+444444444',
    email: 'supplierD@example.com',
    type: 'not taking returns',
    onTheWay: false
  },
  {
    SupplierName: 'Supplier E',
    product: 'Product V',
    contactNumber: '+333333333',
    email: 'supplierE@example.com',
    type: 'taking returns',
    onTheWay: true
  },
  {
    SupplierName: 'Supplier F',
    product: 'Product U',
    contactNumber: '+222222222',
    email: 'supplierF@example.com',
    type: 'not taking returns',
    onTheWay: false
  },
  {
    SupplierName: 'Supplier G',
    product: 'Product T',
    contactNumber: '+111111111',
    email: 'supplierG@example.com',
    type: 'taking returns',
    onTheWay: true
  },
  {
    SupplierName: 'Supplier H',
    product: 'Product S',
    contactNumber: '+999999999',
    email: 'supplierH@example.com',
    type: 'not taking returns',
    onTheWay: false
  },
  {
    SupplierName: 'Supplier I',
    product: 'Product R',
    contactNumber: '+888888888',
    email: 'supplierI@example.com',
    type: 'taking returns',
    onTheWay: true
  },
  {
    SupplierName: 'Supplier J',
    product: 'Product Q',
    contactNumber: '+777777777',
    email: 'supplierJ@example.com',
    type: 'not taking returns',
    onTheWay: false
  }
];




items = [
{
    label: 'Options',
    items: [
        {
            label: 'Excel',
            icon: 'pi pi-file',
            command: () => {
                this.exportExcel();
            }
        },
        {
            label: 'Pdf',
            icon: 'pi pi-file-pdf',
            command: () => {
                this.exportPdf();
            }
        }
    ]
}
];

ngOnInit() {
  this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
}

addSupplier(){
  this.addSuplierModal = !this.addSuplierModal;
}

update() {
this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
}

delete() {
this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
}

exportColumns!:any;



exportPdf() {
    
}

exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.products);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'products');
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

}
