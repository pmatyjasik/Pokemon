export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getCurrentDate = async () => {
    const response = await fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Warsaw");
    const data = await response.json();
    const date = new Date(data.dateTime);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const formattedDate = `${day}.${month}.${year}`;
    return `${data.dayOfWeek}, ${formattedDate}`;
};
