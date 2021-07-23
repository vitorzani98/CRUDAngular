import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Produto teste',
    price: 125.98
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void{

    this.productService.create(this.product).subscribe(() => {
      
      this.productService.showMsg('Produto criado com sucesso!!!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void{

    this.productService.showMsg('Operação realizada com sucesso!!!')
    
    this.router.navigate(['/products'])

  }
}
