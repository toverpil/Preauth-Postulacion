import { NewItem } from './new-item';
import {
    validatePositiveNumber,
    reportError,
    validateMaxQuality
} from "../Util/Util";
import {
    MAX_QUALITY,
    QUALITY_NORMAL_INCREMENT,
    SELLIN_NORMAL_DEGRADES
} from "../Util/Variables";

export class AgedBrie extends NewItem {
    item: NewItem;

    constructor(item: NewItem) {
        super(item);
        this.item = item;
    }

    public updateQualityAndSellIn() {
        this.item.sellIn = this._updateSellIn();
        this.item.quality = this._updateQuality();
    }

    private _updateQuality(): number {
        try {
            let newQuality = validatePositiveNumber(this.quality + QUALITY_NORMAL_INCREMENT);
            return validateMaxQuality(newQuality, MAX_QUALITY);
        }
        catch (error: any) {
            reportError({ message: error.message });
            return this.quality;
        }
    }

    private _updateSellIn(): number {
        try {
            return this.sellIn -= SELLIN_NORMAL_DEGRADES;
        }
        catch (error: any) {
            reportError({ message: error.message });
            return this.sellIn;
        }
    }
}
