export {
  backStageData
  , expectedBackStageData
  , agedBrieData
  , expectedAgedBrieData
  , sulfurasData
  , expectedSulfurasData
  , customItemData
  , expectedCustomItemData
}

import { GildedRose } from '../../app/gilded-rose';

const backStageData = new GildedRose(
  [{
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 15,
    quality: 10,
    isConjured: false
  }, {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 10,
    quality: 10,
    isConjured: false
  }, {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 5,
    quality: 10,
    isConjured: false
  }, {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 0,
    quality: 10,
    isConjured: false
  }]
)

const expectedBackStageData =
  [
    {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 14,
      quality: 11,
      isConjured: false
    }, {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 9,
      quality: 12,
      isConjured: false
    }, {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 4,
      quality: 13,
      isConjured: false
    }, {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: -1,
      quality: 0,
      isConjured: false
    }
  ]

const agedBrieData = new GildedRose(
  [{
    name: 'Aged Brie',
    sellIn: 30,
    quality: 50,
    isConjured: false
  }, {
    name: 'Aged Brie',
    sellIn: 10,
    quality: 10,
    isConjured: false
  }]
)


const expectedAgedBrieData =
  [
    {
      name: 'Aged Brie',
      sellIn: 29,
      quality: 50,
      isConjured: false
    }, {
      name: 'Aged Brie',
      sellIn: 9,
      quality: 11,
      isConjured: false
    }
  ]


const sulfurasData = new GildedRose(
  [{
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 1,
    quality: 23,
    isConjured: false
  }, {
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 40,
    quality: 20,
    isConjured: false
  }]
)


const expectedSulfurasData =
  [
    {
      name: 'Sulfuras, Hand of Ragnaros',
      sellIn: 1,
      quality: 80,
      isConjured: false
    }, {
      name: 'Sulfuras, Hand of Ragnaros',
      sellIn: 40,
      quality: 80,
      isConjured: false
    }
  ]

const customItemData = new GildedRose(
  [{
    name: 'Another amazing object',
    sellIn: -2,
    quality: 23,
    isConjured: true
  }, {
    name: 'Another amazing object',
    sellIn: 3,
    quality: 23,
    isConjured: true
  },
  {
    name: 'Another amazing object',
    sellIn: -2,
    quality: 23,
    isConjured: false
  }, {
    name: 'Another amazing object',
    sellIn: 3,
    quality: 23,
    isConjured: false
  }]
)


const expectedCustomItemData =
  [
    {
      name: 'Another amazing object',
      sellIn: -3,
      quality: 19,
      isConjured: true
    }, {
      name: 'Another amazing object',
      sellIn: 2,
      quality: 21,
      isConjured: true
    }, {
      name: 'Another amazing object',
      sellIn: -3,
      quality: 21,
      isConjured: false
    }, {
      name: 'Another amazing object',
      sellIn: 2,
      quality: 22,
      isConjured: false
    }
  ]

