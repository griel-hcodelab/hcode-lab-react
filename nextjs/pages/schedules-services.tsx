import { NextPage } from "next"
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Header } from "../components/Header";
import { Page } from "../components/Page"
import Footer from "../components/Page/Footer";
import { Panel } from "../components/Schedule/Panel";
import ScheduleServiceProvider, { useScheduleService } from "../components/Schedule/ScheduleServiceContext";
import { formatCurrency } from "../utils/formatCurrency";

type FormData = {
    services: number[]
}

const ScheduleServicesPage = () => {

    const { services, addSelectedService, removeSelectedService } = useScheduleService();

    const onChangeService = (checked: boolean, serviceId: number) => {

        if (checked) {
            addSelectedService(serviceId);
        } else {
            removeSelectedService(serviceId);
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
        setError
    } = useForm<FormData>();

    const save: SubmitHandler<FormData> = ({ services }) => {

        console.log(services);

    }

    return <Page id="schedules-services" pageColor="blue" title="Escolha os Serviços" panel={<Panel />}>

        <header className="page-title">
            <h2>Escolha os Serviços</h2>
            <hr />
        </header>

        <form onSubmit={handleSubmit(save)}>
            <input type="hidden" name="schedule_at" />
            <input type="hidden" name="option" />

            <div className="options">

                {services.map((service) => (
                    <label key={String(service.id)}>
                        <input type="checkbox" name="service" value={service.id} onChange={
                            (e: ChangeEvent<HTMLInputElement>) => {
                                onChangeService(e.target.checked, +service.id)
                            }
                        } />
                        <div className="square">
                            <div></div>
                        </div>
                        <div className="content">
                            <span className="name">{service.name}</span>
                            <span className="description">{service.description}</span>
                            <span className="price">{formatCurrency(+service.price)}</span>
                        </div>
                    </label>
                ))}

            </div>

            <Footer />
        </form>



    </Page>

}

const ScheduleServices: NextPage = () => {





    return (
        <ScheduleServiceProvider>


            <Header />

            <ScheduleServicesPage />


        </ScheduleServiceProvider>
    )
}


export default ScheduleServices;

