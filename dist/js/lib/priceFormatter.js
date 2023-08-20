export const priceFormatter = (price) => {
    const toLocaleFormatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    return toLocaleFormatter.format(price);
};
