import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostDetailsComponent } from './post-details/post-details.component'

const appRoutes: Routes = [{
  path: '',
  component: CategoryComponent
},
{
  path: 'posts/:category',
  component: PostListComponent
},
{
  path: 'posts/:id',
  component: PostDetailsComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
