module.exports = (tpl, product) => {
    let output = tpl.replace(/{% ProductName %}/g, product.productName);
    output = output.replace(/{% ProductIcon %}/g, product.image);
    output = output.replace(/{% ProductFrom %}/g, product.from);
    output = output.replace(/{% ProductNutrient %}/g, product.nutrients);
    output = output.replace(/{% ProductQuantities %}/g, product.quantity);
    output = output.replace(/{% ProductPrice %}/g, product.price);

    if (!product.organic) output = output.replace(/{% IsProductNotOrganic %}/g, "not-organic");

    output = output.replace(/{% ProductDescription %}/g, product.description);
    output = output.replace(/{% ProductId %}/g, product.id);

    return output;

}