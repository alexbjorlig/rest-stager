import { Request, Response } from 'express';
import { genRandomArrayOfData } from '../helpers/genRandomArrayOfData';

export function singleResponse(req: Request, res: Response) {
    try {
        const arraySize: number = (req.query.arraySize) ? Number(req.query.page) : 100;
        const randomData: any[] = genRandomArrayOfData(arraySize);
        res.send(randomData);
    } catch (error) {
        console.log(error.message);
    }
}
