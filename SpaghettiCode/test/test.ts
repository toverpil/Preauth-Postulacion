import { expect } from "chai";
import {
  backStageData
  , expectedBackStageData
  , agedBrieData
  , expectedAgedBrieData
  , sulfurasData
  , expectedSulfurasData
  , customItemData
  , expectedCustomItemData
} from "./Data/data";

const expect_backstage = backStageData.updateSellingAndQuality();
const expect_agedBrie = agedBrieData.updateSellingAndQuality();
const expect_sulfuras = sulfurasData.updateSellingAndQuality();
const expect_customItem = customItemData.updateSellingAndQuality();

describe('Update Selling and Quality', () => {
  it('Checking Update and Selling for BackStage in sellin < 0 and selling <= 5 and selling <= 10 and days > 10', () => {
    expect(expect_backstage).to.have.deep.members(expectedBackStageData);
  });

  it('Checking Update and Selling for Aged Brie in Quality >= 50 and Quality < 50', () => {
    expect(expect_agedBrie).to.have.deep.members(expectedAgedBrieData);
  });

  it('Checking Update and Selling for Sulfuras and permament Quality', () => {
    expect(expect_sulfuras).to.have.deep.members(expectedSulfurasData);
  });

  it('Checking Update and Selling for Custom Item conjured and no-conjured for positive and negative selling', () => {
    expect(expect_customItem).to.have.deep.members(expectedCustomItemData);
  });
})