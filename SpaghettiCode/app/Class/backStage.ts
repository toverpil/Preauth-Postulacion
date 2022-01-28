import { reportError, validateMaxQuality } from '../Util/Util';
import { MAX_QUALITY, SELLIN_NORMAL_DEGRADES } from '../Util/Variables';
import { NewItem } from './new-item';

export class BackStage extends NewItem {
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
            return validateMaxQuality(newQuality, MAX_QUALITY);
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
            if (this.sellIn < 0) return 0;
            if (this.sellIn <= 5) return this.quality + 3;
            if (this.sellIn <= 10) return this.quality + 2;
            return this.quality + 1;
        }
        catch (error: any) {
            reportError({ message: error.message });
            return 0;
        }
    }
}