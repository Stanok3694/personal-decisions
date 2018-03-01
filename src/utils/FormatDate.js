import moment from "moment";

const formatDate = (unformattedDate) => {
    if (unformattedDate) {
        const result = moment(unformattedDate, 'DD-MM-YYYY').format('L');
        return result;
    } else {
        return null;
    }
}

const formatDateForUI = (unformattedDate) => {
    if (unformattedDate) {
        const result = moment(unformattedDate).format("DD.MM.YYYY");
        return result;
    } else {
        return null;
    }
}

const FormatDate = (unformattedDate) => {
    return {
        forServices: formatDate(unformattedDate),
        forUI: formatDateForUI(unformattedDate) 
    }
}

export default FormatDate;