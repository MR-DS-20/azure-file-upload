export = {
    stage: process.env.NODE_ENV,
    port:8082,
    domain:process.env.DOMAIN,
    db:{
        name: '',
        user:'',
        pw: '',
        uri: (user: string, pw :string, name :string) => {
            return `mongodb+srv://${user}:${pw}@mr-ds-20-ckbes.gcp.mongodb.net/${name}?retryWrites=true&w=majority`
        }
    },
    azureStorage: {
        STORAGE_ACCOUNT_ACCESS_KEY : process.env.STORAGE_ACCOUNT_ACCESS_KEY,
        STORAGE_ACCOUNT_NAME: process.env.STORAGE_ACCOUNT_NAME
        
    }
    
}
