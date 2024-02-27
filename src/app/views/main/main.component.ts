import { Component } from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {ImageModule} from "primeng/image";
import {DataViewModule} from "primeng/dataview";
import {CardModule} from "primeng/card";
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TabViewModule,
    ImageModule,
    DataViewModule,
    CardModule,
    NgIf,
    NgTemplateOutlet
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  get IsDesktop(): boolean {
    const minWidthForDesktop = 768; // You can adjust this threshold as needed
    return window.innerWidth >= minWidthForDesktop;
  }

  homeString = "\n" +
    "\n" +
    "Lorem ipsum dolor sit amet. Non itaque ducimus vel tempore perspiciatis 33 unde iure aut repellendus maxime est veritatis quam. Et repudiandae molestias vel modi sunt qui voluptatem nulla est repellendus voluptates? Et quod aspernatur in dicta excepturi et quia laborum est illum rerum sit enim velit non odio odit.\n" +
    "\n" +
    "Id aliquam modi est voluptatem galisum ut culpa nihil! Aut dolores voluptate sed numquam eligendi eos distinctio laborum est molestiae aliquid a voluptas cupiditate? Eum omnis doloribus non voluptas placeat sit consequuntur quidem et numquam odit aut dolorum dolore eos voluptate dolorem. Ea provident voluptas sit eius voluptatem ea pariatur quia aut amet perferendis aut minus maiores ut reiciendis fugit hic doloremque commodi.\n" +
    "\n" +
    "Est accusantium facere ea magnam suscipit vel voluptates quia est neque blanditiis a voluptate dolores cum ipsum iure. Et ratione esse aut consequuntur corporis et perferendis autem qui reiciendis dolores.\n"

  contactString = "\n" +
    "\n" +
    "Lorem ipsum dolor sit amet. Non itaque ducimus vel tempore perspiciatis 33 unde iure aut repellendus maxime est veritatis quam. Et repudiandae molestias vel modi sunt qui voluptatem nulla est repellendus voluptates? Et quod aspernatur in dicta excepturi et quia laborum est illum rerum sit enim velit non odio odit.\n" +
    "\n" +
    "Id aliquam modi est voluptatem galisum ut culpa nihil! Aut dolores voluptate sed numquam eligendi eos distinctio laborum est molestiae aliquid a voluptas cupiditate? Eum omnis doloribus non voluptas placeat sit consequuntur quidem et numquam odit aut dolorum dolore eos voluptate dolorem. Ea provident voluptas sit eius voluptatem ea pariatur quia aut amet perferendis aut minus maiores ut reiciendis fugit hic doloremque commodi.\n" +
    "\n" +
    "Est accusantium facere ea magnam suscipit vel voluptates quia est neque blanditiis a voluptate dolores cum ipsum iure. Et ratione esse aut consequuntur corporis et perferendis autem qui reiciendis dolores.\n "

  aboutString = "Founded by three brothers, Schroeder Sibling Services LLC is a family owned and operated professional snow removal company. We are dedicated to providing you or your company with the best service in the industry. Not only that, but we pledge to beat our competitors' prices. Contact us today!"

  serviceString = "\n" +
    "\n" +
    "Lorem ipsum dolor sit amet. Non itaque ducimus vel tempore perspiciatis 33 unde iure aut repellendus maxime est veritatis quam. Et repudiandae molestias vel modi sunt qui voluptatem nulla est repellendus voluptates? Et quod aspernatur in dicta excepturi et quia laborum est illum rerum sit enim velit non odio odit.\n" +
    "\n" +
    "Id aliquam modi est voluptatem galisum ut culpa nihil! Aut dolores voluptate sed numquam eligendi eos distinctio laborum est molestiae aliquid a voluptas cupiditate? Eum omnis doloribus non voluptas placeat sit consequuntur quidem et numquam odit aut dolorum dolore eos voluptate dolorem. Ea provident voluptas sit eius voluptatem ea pariatur quia aut amet perferendis aut minus maiores ut reiciendis fugit hic doloremque commodi.\n" +
    "\n" +
    "Est accusantium facere ea magnam suscipit vel voluptates quia est neque blanditiis a voluptate dolores cum ipsum iure. Et ratione esse aut consequuntur corporis et perferendis autem qui reiciendis dolores.\n"
  phoneNumber: string = "763-447-1620";
  email: string = "schroedersiblingservices@gmail.com";
}
