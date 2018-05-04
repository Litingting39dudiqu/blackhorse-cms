import moment from "moment";


export default function(value,partten){
    return moment(value).format(partten);
}