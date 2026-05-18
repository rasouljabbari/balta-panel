import { Badge, Button } from 'dst-rg';
import { FileText, X } from 'lucide-react';
import type { OrderDetailsModalProps } from '@/features/order/types';
import { CashIcon, ClockIcon, RamenIcon, CalendarDetailIcon } from '@/components/icons/order-icons';
import { useEffect } from 'react';

export default function OrderDetailsModal({ isOpen, onClose, order }: OrderDetailsModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen || !order) return null;

    return (
        <div className="fixed inset-0 z-[60]">
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />
            
            <div 
                className="absolute left-0 top-0 h-full w-[400px] bg-white shadow-xl flex flex-col transition-transform duration-300 ease-out"
                style={{ 
                    animation: isOpen ? 'slideInFromLeft 0.3s ease-out' : 'slideOutToLeft 0.3s ease-out',
                }}>
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#E4E7EC]">
                    <div className="flex items-center py-2">
                        <span className="flex items-center gap-2 p-2 bg-gray-light-100 rounded-[100px]">
                            <FileText className="w-5 h-5 text-gray-light-500" />
                        </span>                    
                        <h2 className="text-lg font-semibold text-gray-light-900 pr-3">جزئیات سفارش</h2>
                    </div>
                    
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-light-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between overflow-y-auto py-5 space-y-6">
                    {/* Order Items */}
                    <div className="space-y-5 px-6">
                        {order.items.map((item, index) => (
                            <div key={index} className={`flex items-center justify-between text-sm ${index !== 0 ? 'border-t border-[#E4E7EC] pt-3' : ''}`}>
                                <div className="flex items-center gap-2 py-2">
                                    <span className="text-gray-light-900 font-medium whitespace-nowrap">{item.title}</span>
                                    <Badge color="gray">
                                        {order.status}
                                    </Badge>
                                </div>
                                <span className="text-gray-light-700">
                                    {item.quantity && (
                                        <span className="text-gray-light-500"> {item.quantity}</span>
                                    )}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Order Description */}
                    {order.description && (
                        <div className="space-y-2 px-6">
                            <h3 className="text-sm font-medium text-gray-light-700">توضیحات سفارش</h3>
                            <p className="text-sm text-gray-light-600 leading-relaxed">
                                {order.description}
                            </p>
                        </div>
                    )}

                    {/* Order Summary */}
                    <div className="border-t border-gray-light-300 pt-6">
                        <h3 className="text-md font-semibold text-gray-light-900 mb-4 text-start px-6">خلاصه سفارش</h3>
                        
                        <div className="space-y-3 px-6">
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-light-600">
                                    <CalendarDetailIcon className="w-5 h-5" />
                                    <span className="text-gray-light-600 text-sm">تاریخ</span>
                                </div>
                                <span className="text-gray-light-900 font-medium">{order.date}</span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-light-600">
                                    <ClockIcon className="w-5 h-5" />
                                    <span className="text-gray-light-600 text-sm">ساعت تحویل</span>
                                </div>
                                <span className="text-gray-light-900 font-medium">{order.time}</span>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2 text-gray-light-600">
                                    <RamenIcon className="w-5 h-5" />
                                    <span className="text-gray-light-600 text-sm">تعداد غذا</span>
                                </div>
                                <span className="text-gray-light-900 font-medium">{order.items.length} پرس</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-gray-light-600">
                                    <CashIcon className="w-5 h-5" />
                                    <span className="text-gray-light-600 text-sm" >مجموع مبلغ</span>
                                </div>
                                <span className="text-gray-light-900">
                                    {order.totalAmount.toLocaleString('fa-IR')} تومان
                                </span>
                            </div>

                            <div className="pt-4">
                                <Button variant="secondaryGray" className="w-full">دانلود پیش فاکتور</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
