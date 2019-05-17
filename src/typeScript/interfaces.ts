export interface anyObject {
    [key: string]: any;
    [key: number]: any;
}

export interface boolObject {
    [key: string]: boolean;
}

export interface stringObject{
    [key: string]: string;
}

export interface configs {
    [key:string]: Array<anyObject>;
}