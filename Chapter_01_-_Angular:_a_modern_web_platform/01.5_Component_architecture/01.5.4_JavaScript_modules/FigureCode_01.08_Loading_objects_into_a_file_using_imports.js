import { component, DoCheck } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
	selector: 'app-investments',
	templateUrl: './investments.component.html',
	styleUrls: ['./investments.component.css']
})

export class InvestmentsComponent implements DoCheck {
	constructor(private accountService: AccountService) {
		
	}
	
	ngDoCheck() {
	
	}
	
	sell(index): void {
	
	}
}

