import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { ScheduleService } from "../../../types/SchedulesService";

type ScheduleServiceContextProps = {
    services: ScheduleService[];
    selecteds: ScheduleService[];
    addSelectedService: (serviceId: number)=>void;
    removeSelectedService: (serviceId: number)=>void;
}

const scheduleServiceContext = createContext<ScheduleServiceContextProps>({
    services: [],
    selecteds: [],
    addSelectedService: ()=>{},
    removeSelectedService: ()=>{},
});

export default function ScheduleServiceProvider({
    children
}: {
    children: React.ReactNode;
}) {

    const [services, setServices] = useState<ScheduleService[]>([]);
    const [selecteds, setSelecteds] = useState<ScheduleService[]>([]);

    const addSelectedService = (serviceId: number)=>{
        const service = services.find((service)=>service.id === serviceId);

        if (service) {
            setSelecteds([...selecteds, service]);
        }
    }

    const removeSelectedService = (serviceId: number)=>{
        const service = services.find((service)=>service.id === serviceId);

        if (service) {
            const filteredServices = selecteds.filter((item)=> item.id !== serviceId);
            setSelecteds(filteredServices);
        }
    }

    const loadServices = ()=>{
        axios
        .get<ScheduleService[]>(`/services`, {
            baseURL: process.env.API_URL,
        })
        .then(({ data })=>{
            setServices(data);
        })
        .catch();
    }

    useEffect(()=>{
        loadServices();
    }, []);
    
    useEffect(()=>{
        console.log(services);
    }, [services]);


    return (
        <scheduleServiceContext.Provider value={
            {
                services, selecteds, addSelectedService, removeSelectedService
            }
        }>
            {children}
        </scheduleServiceContext.Provider>
    )

}

export function useScheduleService() {
    const context = useContext(scheduleServiceContext);

    if (!context) {
        throw new Error('useScheduleService must be used within a ScheduleServiceProvider');
    }

    return context;
}