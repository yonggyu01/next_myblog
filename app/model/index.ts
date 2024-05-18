export interface config {
    name: string,
    description : string,
    navItems:{
        label : string,
        href : string
    }[]
}

export type Steemitdata ={
    blog : string,
    entry_id : number,
    comment : body,
    reblogged_on : string
}

export type SteemitResult = {
    id  : String,
    jsonrpc : string,
    result :[] 
}
export interface body {
    author : string
    body : string
    json_metadata : string
    title: string
    created: string
}
