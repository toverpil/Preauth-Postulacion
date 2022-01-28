import { AgedBrie } from './Class/agedBrie';
import { BackStage } from './Class/backStage';
import { CustomItem } from './Class/customItem';
import { NewItem } from "./Class/new-item";
import { sulfurasRagnaros } from './Class/sulfurasRagnaros';
import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from "./Util/Variables";

export class GildedRose {
    items: Array<NewItem>;

    constructor(items = [] as Array<NewItem>) {
        this.items = items;
    }

    updateSellingAndQuality() {
        this.items.forEach(item => {
            if (item.name == AGED_BRIE) {
                return new AgedBrie(item).updateQualityAndSellIn();
            } else if (item.name == BACKSTAGE_PASSES) {
                return new BackStage(item).updateQualityAndSellIn();
            } else if (item.name == SULFURAS) {
                return new sulfurasRagnaros(item).updateQualityAndSellIn();
            } else {
                return new CustomItem(item).updateQualityAndSellIn();
            }
        });

        return this.items;
    }
}