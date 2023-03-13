import { Product } from "./product";
import { responseModel } from "./responseModel";

export interface productResponceModel extends responseModel{
    data:Product[],
    
}