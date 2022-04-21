import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {

    res.json({
        data: [
            {
                id: 1,
                name: 'Roberto'
            }
        ]
    });

}