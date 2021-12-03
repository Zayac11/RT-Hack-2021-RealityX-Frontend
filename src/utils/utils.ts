export const getCurrentDate = (timestamp: string) => {
    let date = new Date(timestamp)
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return mm + '.' + dd + '.' + yyyy + ' ' + hour + ':' + minutes + ':' + seconds
}