import { IEnv } from "../interfaces/IEnv";
export { IEnv } from "../interfaces/IEnv";


export const env:()=> IEnv = () =>{
    if (process.env.NODE_ENV === 'dev'){
        let env = require('./dev')
        
        return env.ENV
    }else{
       let env = require('./prod')
       return env.ENV
    }
}
