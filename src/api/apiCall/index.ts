import { EndPoint } from "../apiEndPoint";
import axios from 'axios';
import { BASE_URL } from '../../env';

export const callToFightSearch = async () => {
    return await axios.get(BASE_URL + EndPoint.API_FLIGHT_SEARCH)
}

export const callToBookFlight = async () => {
    return await axios.get(BASE_URL + EndPoint.API_SUCCESS_TRIP)
}

export const callToCancelFlight = async () => {
    return await axios.get(BASE_URL + EndPoint.API_UNSUCCESS_TRIP)
}