import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../post.model'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  categories: string[] = ["Household", "Books", "Appliances", "Computer"];
  posts: Post[] = [
    new Post("Vacuum", "New vacuum in great condition", 10, 97201, "vacuum.jpg", "Household", 1),
    new Post("Broom", "New broom in great condition", 12, 97204, "vacuum.jpg", "Household", 2),
    new Post("The Great Gatsby", "New The Great Gatsby in great condition", 13, 97203, "vacuum.jpg", "Books", 3),
    new Post("Oven", "New oven in great condition", 8, 97204, "vacuum.jpg", "Appliances", 4),
    new Post("Fridge", "New Fridge in great condition", 15, 97200, "vacuum.jpg", "Appliances", 5),
    new Post("Macbook", "New Macbook in great condition", 22, 97207, "vacuum.jpg", "Computer", 6)
  ];

  constructor(private router: Router){}

  ngOnInit() {
    console.log(this.posts);
  }

  showCategory(category: string){
    this.router.navigate(['posts', category]);
  }

}
