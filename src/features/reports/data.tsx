import DonutChart from "@/features/reports/components/donut-chart";

export const chartData = {
    weekly: {
        series: [
            {
                name: "هفته جاری",
                data: [30, 33, 35, 38, 40, 42, 45],
            }
        ],
        categories: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"]
    },
    monthly: {
        series: [
            {
                name: "ماه جاری",
                data: [32, 34, 36, 35, 37, 39, 38, 40, 42, 41, 43, 44, 46, 45, 47, 49, 48, 50, 52, 51, 53, 54, 56, 55, 57, 59, 58, 60, 62, 61],
            }
        ],
        categories: Array.from({ length: 30 }, (_, i) => `${i + 1}`)
    },
    yearly: {
        series: [
            {
                name: "سال جاری",
                data: [35, 37, 34, 32, 42, 45, 43, 44, 51, 48, 47, 50],
            }
        ],
        categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
    }
};

export const donutTabContent = {
    weekly: <DonutChart series={[45, 25, 30]} height={230}
        labels={["چلوکباب", "چلو مرغ", "کوبیده"]} />,
    monthly: <DonutChart series={[35, 15, 50]} height={230}
        labels={["چلوکباب", "جوجه کباب", "قرمه سبزی"]} />,
    yearly: <DonutChart series={[45, 35, 20]} height={230}
        labels={["چلوکباب", "چلو مرغ", "کوبیده"]} />,
};

export const reportListData = [
    {
        orderId: '#۳۰۶۵',
        reservationDate: '۱۴۰۴/۱۲/۱۱',
        mealType: 'نهار',
        mealCount: 20,
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '2,100,000',
        totalAmount: '3,000,000',
        orderCount: 50
    },
    {
        orderId: '#۳۰۶۶',
        reservationDate: '۱۴۰۴/۱۲/۱۲',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'unsuccessful',
        averageAmount: '1,800,000',
        totalAmount: '2,700,000',
        orderCount: 40
    },
    {
        orderId: '#۳۰۶۷',
        reservationDate: '۱۴۰۴/۱۲/۱۳',
        mealType: 'نهار',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '2,200,000',
        totalAmount: '3,300,000',
        orderCount: 30
    },
    {
        orderId: '#۳۰۶۸',
        reservationDate: '۱۴۰۴/۱۲/۱۴',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'delayed',
        deliveryStatus: 'unsuccessful',
        averageAmount: '1,900,000',
        totalAmount: '2,800,000',
        orderCount: 20
    },
    {
        orderId: '#۳۰۶۹',
        reservationDate: '۱۴۰۴/۱۲/۱۵',
        mealType: 'نهار',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '2,300,000',
        totalAmount: '3,400,000',
        orderCount: 40
    },
    {
        orderId: '#۳۰۷۰',
        reservationDate: '۱۴۰۴/۱۲/۱۶',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '1,700,000',
        totalAmount: '2,600,000',
        orderCount: 10
    },
    {
        orderId: '#۳۰۷۱',
        reservationDate: '۱۴۰۴/۱۲/۱۶',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '1,700,000',
        totalAmount: '2,600,000',
        orderCount: 40
    },
    {
        orderId: '#۳۰۷۲',
        reservationDate: '۱۴۰۴/۱۲/۱۶',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '1,700,000',
        totalAmount: '2,600,000',
        orderCount: 70
    },
    {
        orderId: '#۳۰۷۳',
        reservationDate: '۱۴۰۴/۱۲/۱۶',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '1,700,000',
        totalAmount: '2,600,000',
        orderCount: 5
    },
    {
        orderId: '#۳۰۷۴',
        reservationDate: '۱۴۰۴/۱۲/۱۶',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '1,700,000',
        totalAmount: '2,600,000',
        orderCount: 40
    },
    {
        orderId: '#۳۰۷۵',
        reservationDate: '۱۴۰۴/۱۲/۱۶',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '1,700,000',
        totalAmount: '2,600,000',
        orderCount: 8
    },
    {
        orderId: '#۳۰۷۶',
        reservationDate: '۱۴۰۴/۱۲/۱۶',
        mealType: 'شام',
        customerName: 'راهکارگستران',
        branch: 'آبرسان',
        driverName: 'عباس ابراهیمی',
        paymentStatus: 'paid',
        deliveryStatus: 'successful',
        averageAmount: '1,700,000',
        totalAmount: '2,600,000',
        orderCount: 40
    },
];