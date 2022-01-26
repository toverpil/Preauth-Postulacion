export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class NewItem extends Item {
    isConjured: boolean;

    constructor(name, sellIn, quality, isConjured) {
        super(name, sellIn, quality);
        this.isConjured = isConjured;
    }
}

export class GildedRose {
    items: Array<NewItem>;

    readonly AGED_BRIE: string = 'Aged Brie';
    readonly SULFURAS: string = 'Sulfuras, Hand of Ragnaros';
    readonly BACKSTAGE_PASSES: string = 'Backstage passes to a TAFKAL80ETC concert';
    readonly QUALITY_NORMAL_DEGRADES: number = 1;
    readonly QUALITY_NORMAL_INCREMENT: number = 1;
    readonly SELLIN_NORMAL_DEGRADES: number = 1;
    readonly MAX_QUALITY: number = 50;
    readonly SULFURAS_QUALITY: number = 80;

    constructor(items = [] as Array<NewItem>) {
        this.items = items;
    }

    updateSellingAndQuality() {
        this.items.forEach(item => {
            this.updateSellIn(item);
            this.updateQuality(item);
        });
        return this.items;
    }

    updateSellIn(item: NewItem) {
        if (item.name == this.SULFURAS) {
            return item.sellIn;
        }
        return item.sellIn -= this.SELLIN_NORMAL_DEGRADES;
    }

    updateQuality(item: NewItem) {
        try {
            if (item.name === this.AGED_BRIE) {
                return this.updateAgedBrieQuality(item);
            }
            if (item.name === this.SULFURAS) {
                return item.quality = this.SULFURAS_QUALITY;
            }
            if (item.name === this.BACKSTAGE_PASSES) {
                return this.updateBackStageQuality(item);
            }

            return this.updateNormalItemQuality(item);
        }
        catch (error) {
            return item.quality = 0;
        }
    }

    updateAgedBrieQuality(item: NewItem) {
        try {
            let newQuality = item.quality + this.QUALITY_NORMAL_INCREMENT;

            if (newQuality >= this.MAX_QUALITY) {
                return item.quality = this.MAX_QUALITY;
            }

            return item.quality = this.validateNoNegativeNumber(newQuality);
        }
        catch (error) {
            return item.quality = 0;
        }
    }

    updateBackStageQuality(item: NewItem) {
        try {
            let degradesBackStage = 1;
            let newQuality = 0;

            if (item.sellIn < 0) {
                return item.quality = 0;
            }
            else if (item.sellIn <= 5) {
                degradesBackStage = 3;
            }
            else if (item.sellIn <= 10) {
                degradesBackStage = 2;
            }

            newQuality = item.quality + degradesBackStage;

            if (newQuality >= this.MAX_QUALITY) {
                return item.quality = this.MAX_QUALITY;
            }

            return item.quality = this.validateNoNegativeNumber(newQuality);
        }
        catch (error) {
            return item.quality = 0;
        }
    }

    updateNormalItemQuality(item: NewItem) {
        try {
            let degradesNormalItem = item.sellIn >= 0 ? this.QUALITY_NORMAL_DEGRADES : this.QUALITY_NORMAL_DEGRADES * 2;
            let degradesConjured = item.isConjured ? 2 : 1;
            let newQuality = item.quality - (degradesNormalItem * degradesConjured);

            if (newQuality >= 0) {
                return item.quality = newQuality;
            }

            return item.quality = 0;
        }
        catch (error) {
            return item.quality = 0;
        }
    }

    validateNoNegativeNumber(num: number) {
        try {
            if (num < 0)
                return 0;

            return num;
        }
        catch (error) {
            return 0;
        }
    }
}