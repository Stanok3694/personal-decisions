import moment from "moment";

const formatDate = (unformattedDate) => {
    const result = moment(unformattedDate, 'DD-MM-YYYY').format('L');
    return result;
}

const formatDateForUI = (unformattedDate) => {
    const result = moment(unformattedDate).format("DD.MM.YYYY");
    return result;
}

const FormatDate = (unformattedDate) => {
    return {
        forServices: formatDate(unformattedDate),
        forUI: formatDateForUI(unformattedDate) 
    }
}

export default FormatDate;