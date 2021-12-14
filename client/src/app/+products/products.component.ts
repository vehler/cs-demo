import { Component, OnInit } from '@angular/core';
import { Product } from './products.models';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];

  private sortOrder = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  constructor(private readonly productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService
      .getProducts()
      .subscribe((products) => this.products = products);
  }

  getProductSizes(product: Product){
    return product.inventory
      .map(inv => inv.size)
      .reduce((acc: string[], val: string) => {
        if(!acc.includes(val)){
          acc.push(val);
        }

        return acc;
      }, [])
      .sort((a: string, b: string) => {
        return this.sortOrder.indexOf(a) - this.sortOrder.indexOf(b);
      })
      .join(", ");
  }

}
