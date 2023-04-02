import {SORT_ORDER} from "../enums/sortDirection";
import {ClipConstants} from "../constants/ClipConstants";
import {SORT_BY} from "../enums/sortBy";

export class ClipsQueryParamDto {
   sortDirection?: SORT_ORDER=SORT_ORDER.DESC;
   sortBy?:SORT_BY=SORT_BY.DATE;
   page:number;
   limit?:number=ClipConstants.DEFAULT_PAGE_SIZE;
   clipId:number;
}
