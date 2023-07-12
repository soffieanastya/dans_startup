import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

interface joblist {
    id:String;
    type:String;
    url:String;
    created_at:Date;
    company:String;
    company_url: String;
    location: String;
    title:String;
    description:String;
}


@Injectable()
export class JoblistService {
    constructor(private httpService: HttpService){}

    async joblist(): Promise<joblist[]> {
        const response: AxiosResponse<joblist[]> = await this.httpService
          .get<joblist[]>('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
          .toPromise();
    
        return response.data;
    }

    async searchJoblist(description,location,full_time):Promise<joblist[]>{
        let url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json?'
        if(description){
            url=url+`&description=${description}`
        }
        if(location){
            url=url+`&location=${location}`
        }
        if(full_time){
            url=url+`&full_time=true`
        }

        const response: AxiosResponse<joblist[]> = await this.httpService
            .get<joblist[]>(url)
            .toPromise();

        return response.data;
    }

    // PAGINATION, get 10 data
    async pageJoblist(page):Promise<joblist[]>{
        let url = `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=${page}`
        
        const response:AxiosResponse<joblist[]> = await this.httpService
            .get<joblist[]>(url)
            .toPromise();

        return response.data;
    }
}
