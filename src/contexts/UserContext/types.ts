export interface iData{
    email: string;
    password: string;
}


export interface iUserContextProvider {
    submitFunction: (data: iData) => void,
}
