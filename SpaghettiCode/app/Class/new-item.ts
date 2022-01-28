import { AGED_BRIE } from "../Util/Variables";
import { AgedBrie } from "./agedBrie";
import { Item } from "./Item";

export class NewItem extends Item {
    isConjured: boolean;

    constructor(item: NewItem) {
        super(item.name, item.sellIn, item.quality);
        this.isConjured = item.isConjured;
    }
}