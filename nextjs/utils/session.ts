import { IronSessionOptions } from 'iron-session';
import { ScheduleSession } from '../types/SchedulesSession';

export const sessionOptions: IronSessionOptions = {

    cookieName: 'ferrari-hcode-session',
    password: String(process.env.SECRET_COOKIE),
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
};




declare module 'iron-session' {
    interface IronSessionData {
        schedule: ScheduleSession
    }
}