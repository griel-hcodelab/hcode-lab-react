import axios from "axios"
import { format } from "date-fns"
import { NextPage } from "next"
import { useRouter } from "next/router"
import { Fragment, useCallback, useState } from "react"
import { Calendar } from "../components/Calendar"
import { Header } from "../components/Header"
import { Page } from "../components/Page"
import Footer from "../components/Page/Footer"


const ComponentPage: NextPage = ()=>{

    const router = useRouter();

    const [scheduleAt, setScheduleAt] = useState<Date | null>(null);

    const onSubmit = useCallback((event:any)=>{

        event.preventDefault();

        if (!scheduleAt) {
            console.error('scheduleAt is not defined');
            return false;
        }

        axios.post('/api/schedules/new', {
            scheduleAt: format(scheduleAt, 'yyyy-MM-dd')
        })
        .then(({data})=>{
            router.push('/schedules-time-options')
        })
        .catch(error=>{
            console.error(error.message)
        });


    }, [scheduleAt]);

    return (
        <Fragment>
            <Header />

            <Page id="schedules-new" pageColor="blue" title="Escolha a Data">

                <Calendar selected={new Date()} onChange={(date)=> setScheduleAt(date)} />

                <form action="schedules-time-options.html" onSubmit={onSubmit}>
                    <input type="hidden" name="schedule_at" defaultValue={scheduleAt ? format(scheduleAt, 'yyyy-MM-dd') : ''} />

                    <Footer buttons={[
                        {
                            value: "Continuar",
                            type: "submit",
                        },
                        {
                            value: "Voltar",
                            href: '/'
                        }
                    ]} />
                </form>


            </Page>

        </Fragment>
    )
}

export default ComponentPage;