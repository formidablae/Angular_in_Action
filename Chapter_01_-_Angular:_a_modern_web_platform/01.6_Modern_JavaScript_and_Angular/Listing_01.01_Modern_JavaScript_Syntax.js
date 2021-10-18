import {Component} from '@angular/core';  // imports the component object from another module

@Component({  // uses a decorator to add metadata to the MyComponent object
	selector: 'my-component',
	template: `
		<div>
			<h4>{(title)}</h4>
		</div>
	`  // uses a template literal string to write inline HTML
})

export class MyComponent {  // exports the MyComponent object, which was defined as a class
	constructor() {
		this.title = 'My Component';
	}
}
