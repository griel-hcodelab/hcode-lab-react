import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from "../../../utils/session";
import { ScheduleSession } from "../../../types/SchedulesSession";
import { format, parse } from "date-fns";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {

    const scheduleAt = parse(req.body.scheduleAt, 'yyyy-MM-dd', new Date())

    try {

        const schedule = {

            scheduleAt: format(scheduleAt, 'yyyy-MM-dd')
    
        } as ScheduleSession
    
        req.session.schedule = schedule;
    
        await req.session.save();
    
        res.status(200).json({});

    } catch(e: any) {
        res.status(400).json({
            message:e.message
        });
    }
    

};

export default withIronSessionApiRoute(handler, sessionOptions)