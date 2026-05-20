import DonutChart from "@/features/reports/components/donut-chart";

export const columnChartData = {
  weekly: {
    series: [
      { name: "سفارش‌های ثبت شده", data: [42, 55, 48, 62, 58, 70, 64] },
      { name: "سفارش‌های ثبت نشده", data: [28, 32, 25, 38, 30, 42, 35] },
      { name: "سفارش‌ها تحویل داده شده", data: [65, 72, 68, 80, 75, 88, 82] },
    ],
    categories: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"],
  },
  monthly: {
    series: [
      { name: "سفارش‌های ثبت شده", data: [48, 52, 44, 58, 50, 62, 55, 60, 68, 64, 58, 66] },
      { name: "سفارش‌های ثبت نشده", data: [30, 28, 35, 32, 38, 40, 36, 42, 45, 38, 34, 40] },
      { name: "سفارش‌ها تحویل داده شده", data: [70, 75, 68, 82, 78, 85, 80, 88, 92, 86, 80, 90] },
    ],
    categories: ["هفته ۱", "هفته ۲", "هفته ۳", "هفته ۴", "هفته ۱", "هفته ۲", "هفته ۳", "هفته ۴", "هفته ۱", "هفته ۲", "هفته ۳", "هفته ۴"],
  },
  yearly: {
    series: [
      { name: "سفارش‌های ثبت شده", data: [44, 52, 48, 58, 54, 62, 56, 64, 68, 64, 58, 66] },
      { name: "سفارش‌های ثبت نشده", data: [28, 32, 30, 35, 38, 40, 36, 42, 45, 38, 34, 40] },
      { name: "سفارش‌ها تحویل داده شده", data: [62, 70, 68, 78, 75, 85, 80, 88, 92, 86, 82, 90] },
    ],
    categories: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
  },
};

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
    currentWeek: <DonutChart series={[45, 25]} height={230} 
    labels={["ثبت شده", "ثبت نشده"]} />,
    nextWeek: <DonutChart series={[35, 15]} height={230} 
    labels={["ثبت شده", "ثبت نشده"]} />,
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
    },
];