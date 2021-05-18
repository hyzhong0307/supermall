import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, service) {
    // 通过传递的三个参数，将下面数据保存到一个类中
    this.title = itemInfo.title;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.service = service
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}