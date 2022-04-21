import { NextApiRequest, NextApiResponse } from "next";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '2mb'
        }
    }
}



export default function handlerUser(req: NextApiRequest, res: NextApiResponse){

    switch(req.method){
        case 'GET':
            res.status(200).send('Conectado')
        break;
        case 'POST':
            res.status(201).send('Criou com sucesso')
        break;
        case 'DELETE':
            res.status(204).end();
        break;
    }
}