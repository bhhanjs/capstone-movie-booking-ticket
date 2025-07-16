const formatPrice = function (price) {
  const formatedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return formatedPrice;
};

export default formatPrice;
