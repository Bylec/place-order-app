import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {Menu} from '../../shared/models/menu.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

}
