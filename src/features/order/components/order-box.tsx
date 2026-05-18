import { Card } from "@/components/shared/card";
import { Badge, Button, TooltipWrapper } from "dst-rg";
import type { OrderBoxProps } from "@/features/order/types";
import { X } from 'lucide-react';

export default function OrderBox({id, isSelected, isDisabled = false, img="/assets/images/placeholder.webp", price, title, description, onAddToCart, onRemoveFromCart} : OrderBoxProps) {
    return(
        <Card className="p-xl">
            <img src={img} className="block mx-auto" />
            <Badge color="gray" className="my-3 whitespace-nowrap">{price.toLocaleString()} تومان</Badge>
            <h3 className="text-brand-600 font-semibold text-xl pb-3"> {title} </h3>
            <p className="text-gray-light-600 text-sm min-h-[3.75rem]"> {description} </p>
            
            {!isSelected && isDisabled ? (
                <TooltipWrapper 
                    content="حد انتخاب غذا تکمیل شد" 
                    description="برای انتخاب این غذا، ابتدا یکی از غذاهای انتخاب شده را حذف کنید"
                    dir="rtl"
                >
                    <div className="mt-5 w-full">
                        <Button 
                            variant="secondaryGray" 
                            disabled={true}
                            className="w-full" 
                            onClick={() => {}}
                        >
                            انتخاب
                        </Button>
                    </div>
                </TooltipWrapper>
            ) : (
                <Button 
                    variant={isSelected ? 'secondaryColor' : 'secondaryGray'} 
                    leftIcon={isSelected ? <X size={20} /> : ''}      
                    className="mt-5 w-full" 
                    onClick={() => isSelected ? onRemoveFromCart(id) : onAddToCart(id)}
                >
                    {isSelected ? 'حذف' : 'انتخاب'}
                </Button>
            )}
        </Card>
    )
}