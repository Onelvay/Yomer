export interface User{
    id: number,   
    login:string,
    password:string,
    name: string,
}
export interface Company{
    id:number,
    name:string
}
export interface Vacancy{
    id:number,
    companyId: number,   
    companyName:string,
    direction:string,
}