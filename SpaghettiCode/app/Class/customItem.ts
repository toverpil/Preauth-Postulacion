import { reportError, validateMaxQuality, validateNoNegativeNumber } from '../Util/Util';
import { MAX_QUALITY, QUALITY_NORMAL_DEGRADES, SELLIN_NORMAL_DEGRADES } from '../Util/Variables';
import { NewItem } from './new-item';

export class CustomItem extends NewItem {
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
            let newQuality = this._calculateQuality();
            return validateMaxQuality(newQuality, MAX_QUALITY)
        }
        catch (error: any) {
            reportError({ message: error.message });
            return this.quality;
        }
    }

    private _updateSellIn(): number {
        return this.sellIn -= SELLIN_NORMAL_DEGRADES;
    }

    private _calculateQuality(): number {
        try {
            let degradesNormalItem = this.sellIn >= 0 ? QUALITY_NORMAL_DEGRADES : QUALITY_NORMAL_DEGRADES * 2;
            let degradesConjured = this.isConjured ? 2 : 1;
            return validateNoNegativeNumber(this.quality - (degradesNormalItem * degradesConjured));
        }
        catch (error: any) {
            reportError({ message: error.message });
            return 0;
        }
    }
}