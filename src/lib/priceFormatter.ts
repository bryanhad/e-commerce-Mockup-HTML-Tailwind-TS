export const priceFormatter = (price: number) => {
    const toLocaleFormatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    })

    return toLocaleFormatter.format(price)
}

