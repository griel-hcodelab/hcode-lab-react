import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { ScheduleSession } from "../../../types/SchedulesSession";
import { sessionOptions } from "../../../utils/session";

export default withIronSessionApiRoute(async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const services = req.body.services
        .map((id: any)=> Number(id))
        .filter((id: number)=> !isNaN(id))

        if (services.length === 0) {

            res.status(400).send({
                message: 'Escolha um serviço'
            });

            return;

        }

        const schedule = {
            ...(req.session.schedule ?? {}),
            services,
        } as ScheduleSession

        req.session.schedule = schedule

        await req.session.save();
    
        res.status(200).json(req.session.schedule);

    } catch (e: any) {

        res.status(400).json({
            message:e.message
        });
        
    }

}, sessionOptions)