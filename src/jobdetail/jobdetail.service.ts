import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';


interface JobDetail {
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
export class JobdetailService {
    constructor(private httpService:HttpService){}

    async job_detail(ID):Promise<JobDetail[]>{
        let url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/${ID}`
        
        const response:AxiosResponse<JobDetail[]> = await this.httpService
            .get<JobDetail[]>(url)
            .toPromise()

        return response.data
    }
}
