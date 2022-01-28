import { reportError } from '../Util/Util';
import { SULFURAS_QUALITY } from '../Util/Variables';
import { NewItem } from './new-item';

export class sulfurasRagnaros extends NewItem {
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
        return SULFURAS_QUALITY;
    }

    private _updateSellIn(): number {
        return this.sellIn;
    }
}