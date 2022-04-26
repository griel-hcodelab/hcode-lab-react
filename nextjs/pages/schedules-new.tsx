import { NextPage } from "next"
import { Fragment } from "react"
import { Calendar } from "../components/Calendar"
import { Header } from "../components/Header"
import { Page } from "../components/Page"
import { Footer } from "../components/Page/Footer"

const SchedulesNew: NextPage = ()=>{
    return (
        <Fragment>
            <Header />

            <Page id="schedules-new" pageColor="blue" title="Escolha a Data">

                <Calendar />

                <form action="schedules-time-options.html">
                    <input type="hidden" name="schedule_at" />

                    <Footer />
                </form>


            </Page>

        </Fragment>
    )
}

export default SchedulesNew;