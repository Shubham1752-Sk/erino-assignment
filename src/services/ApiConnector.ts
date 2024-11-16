import axios from 'axios'

const axiosInstance = axios.create({})

export const apiConnector = ({method, url, bodyData, headers, params}: {
    method: string,
    url: string,
    bodyData: any,
    headers: any,
    params: any
}) => {
    return axiosInstance({
        method,
        url,
        data: bodyData ? bodyData : null,
        headers: headers ? headers : null,
        params: params ? params : null,
    })
}