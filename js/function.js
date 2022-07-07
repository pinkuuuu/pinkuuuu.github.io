function calculate()
{
    let fee = {
        rate: 202,
        multiplier_low: 1.1,
        multiplier_high: 1.12,
        low_fee: 20000
    };
    let price;
    let JPY = $("#priceJPY").val();

    if (JPY > 0)
    {
        if (JPY < 1300)
        {
            price = JPY * fee.rate * fee.multiplier_low + fee.low_fee;
        }
        else
        {
            price = JPY * fee.rate *  fee.multiplier_high;
        }

        price = price.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
    }
    else
    {
        price = "Bạn nhập sai giá rùi!"
    }

    $("#result").text(price);
}