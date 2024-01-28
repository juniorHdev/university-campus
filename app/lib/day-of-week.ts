// Definición de tipos
type DayOfWeek = 'lun' | 'mar' | 'mié' | 'jue' | 'vie' | 'sáb' | 'dom';

interface DateObject {
    day: string;
    dayOfWeek: DayOfWeek;
    isToday: boolean;
}

// Función para obtener el nombre del día de la semana
function getDayOfWeek(date: Date): DayOfWeek {
    const dayIndex = date.getDay();
    const daysOfWeek: DayOfWeek[] = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
    return daysOfWeek[dayIndex];
}

// Función principal para obtener el array de objetos
export function getNextSevenDays(): DateObject[] {
    const currentDate = new Date();
    const nextSevenDays: DateObject[] = [];

    for (let i = 0; i < 7; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);

        const day = date.getDate().toString().padStart(2, '0');
        const dayOfWeek = getDayOfWeek(date);
        const isToday = i === 0; // El primer día es el día actual

        nextSevenDays.push({ day, dayOfWeek, isToday });
    }

    return nextSevenDays;
}