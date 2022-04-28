import axios from "axios"
import { format, getDay, parse, parseJSON } from "date-fns"
import { ptBR } from "date-fns/locale"
import { withIronSessionSsr } from "iron-session/next"
import { get } from "lodash"
import { NextPage, Redirect } from "next"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Header } from "../components/Header"
import { Page } from "../components/Page"
import Footer from "../components/Page/Footer"
import { Toast } from "../components/Toast"
import { ScheduleSession } from "../types/SchedulesSession"
import { TimeOption } from "../types/TimeOption"
import { sessionOptions } from "../utils/session"

type ComponentPageProps = {
    schedule: ScheduleSession;
    timeOptions: TimeOption[];
}

type FormData = {
    scheduleAt: string;
    timeOptionId: string;
}


const ComponentPage: NextPage<ComponentPageProps> = (props) => {

    const [scheduleAt] = useState(props.schedule.scheduleAt);

    const [timeOptions] = useState(props.timeOptions);

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        setError
    } = useForm<FormData>();

    const router = useRouter()

    const save: SubmitHandler<FormData> = (data) => {
        
        axios
        .post('/api/schedules/time-options', data)
        .then(()=> router.push('/schedules-services'))
        .catch((e)=>{
            setError('scheduleAt', {
                message: e.response?.data?.message ?? e.message
            })
        })

    }

    return (
        <Fragment>
            <Header />

            <Page id="time-options" pageColor="blue" title="Escolha o horário">

                <header className="page-title">
                    <h2>Horários do Dia</h2>
                    <hr />
                </header>

                <form onSubmit={handleSubmit(save)}>
                    <input type="hidden" {...register('scheduleAt', {
                        value: scheduleAt
                    })} />

                    <h3>{
                        format(
                            parse(scheduleAt!, 'yyyy-MM-dd', new Date())
                            , "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR })
                    }</h3>

                    <div className="options">

                        {timeOptions && timeOptions.map((time, index) => (
                            <label key={time.id}>
                                <input type="radio" value={time.id} defaultChecked
                                    {...register('timeOptionId', {
                                        required: "Selecione um horário",
                                    })}
                                />
                                <span>{format(new Date(time.time), 'HH:mm', { locale: ptBR })}</span>
                            </label>
                        ))}


                    </div>

                    <Toast
                        type="danger"
                        open={Object.keys(errors).length > 0}
                        onClose={() => clearErrors()}
                    >

                        {Object.keys(errors).map((err) => (
                            get(errors, `${err}.message`, 'Verifique os horários')
                        ))}

                    </Toast>

                    <Footer />
                </form>


            </Page>

        </Fragment>
    )
}

export default ComponentPage;

export const getServerSideProps = withIronSessionSsr(async ({ req }) => {

    const { schedule } = req.session;

    if (!req.session.schedule?.scheduleAt) {
        return {
            redirect: {
                destination: '/schedules-new'
            } as Redirect
        }
    }

    const day = getDay(
        parse(String(schedule.scheduleAt), 'yyyy-MM-dd', new Date())
    )

    const { data: timeOptions } = await axios.get<TimeOption[]>('/time-options', {
        baseURL: process.env.API_URL,
        params: {
            day
        }
    })

    return {
        props: {
            schedule,
            timeOptions
        }
    }

}, sessionOptions);



