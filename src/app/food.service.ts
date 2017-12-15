import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FoodService {
    private items: Array<any>;

    constructor(private http: Http) {}

    loadFood() {
        return this.http.get('assets/data/menu.json')
            .map(
                (response: Response) => {
                    const data = response.json()
                    this.items = data;
                    return this.items;
                }
            )
            .catch((error: Response) => {
                return Observable.throw("Something went wrong");
            })
    }

    getFood() {
        return this.items;
    }
}
