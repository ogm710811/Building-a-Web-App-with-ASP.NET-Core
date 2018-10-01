import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {
    public credentials = {
        username: '',
        password: ''
    }
    errorMessage: string = '';

    constructor(
        private dataService: DataService,
        private router: Router
    ) { }

    ngOnInit() {
    }

    onLogin() {
        this.dataService.login(this.credentials)
            .subscribe(success => {
                if (success) {
                    if (this.dataService.order.items.length == 0) {
                        this.router.navigate(['/'])
                    } else {
                        this.router.navigate(['checkout']);
                    }
                }
            }, error => this.errorMessage = "Failed to login");
    }

}
