import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    list: any[] = ['first test item','second test item'];
    inputValue: string = '';

    get disabled(): boolean {
        return this.inputValue.trim().length === 0
    }

    constructor() { }

    ngOnInit(): void {
    }


    addItem() {
        this.list.push(this.inputValue);
        this.inputValue = '';
    }

    removeAll() {
        this.list = [];
    }

    removeItem(elementIndex: number) {
        this.list = this.list.filter((el,index) => index !== elementIndex)
    }
}
