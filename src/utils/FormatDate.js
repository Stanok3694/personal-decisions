import moment from "moment";

const formatDate = (unformattedDate) => {
    console.log('i am used - formatDate');
    const result = moment(unformattedDate, 'DD-MM-YYYY').format('L');
    console.log(`formatDate - ${result}`);
    return result;
}

const formatDateForUI = (unformattedDate) => {
    console.log('i am used - formatDateForUI');
    const result = moment(unformattedDate).format("DD.MM.YYYY");
    console.log(`formatDateForUI - ${result}`);
    return result;
}

const FormatDate = (unformattedDate) => {
    return {
        forServices: formatDate(unformattedDate),
        forUI: formatDateForUI(unformattedDate) 
    }
}

export default FormatDate;