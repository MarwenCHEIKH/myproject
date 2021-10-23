import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/adminComponenets/admin-home/admin-home.component';
import { ManageOrdersComponent } from './admin/adminComponenets/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './admin/adminComponenets/manage-products/manage-products.component';
import { ManageUsersComponent } from './admin/adminComponenets/manage-users/manage-users.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'shop', component: ProductListComponent},
    {path: 'shop/:term', component: ProductListComponent},
    {path: 'shop/products/:id', component: ProductDetailComponent},
    {path: 'account', component: UserDetailComponent},
    {path: 'cart', component: CartComponent},
    {path: 'admin/home', component: AdminHomeComponent},
    {path: 'admin/products', component: ManageProductsComponent},
    {path: 'admin/users', component: ManageUsersComponent},
    {path: 'admin/orders', component: ManageOrdersComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    constructor (router : Router) {}
}
