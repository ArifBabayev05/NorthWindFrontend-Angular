
import { Category } from "./category";
import { responseModel } from "./responseModel";

export interface productResponceModel extends responseModel{
    data:Category[],
}