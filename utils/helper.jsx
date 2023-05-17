export const getDiscountedPricePercentage =(originalPrice, discountedPrice) =>{
    const discount = originalPrice - discountedPrice;

    const discountPercentage = (discount/originalPrice) * 100;

    //[.toFixed()] -> This will take only 2 values after decimal when we find out percentage.
    return discountPercentage.toFixed(2)
}