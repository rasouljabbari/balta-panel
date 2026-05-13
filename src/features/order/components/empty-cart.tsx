export default function EmptyCart() {
    return (
      <div className="flex-1 flex flex-col justify-center items-center px-6 text-center">
        <img
          src="/assets/images/empty-card.webp"
          alt="Empty cart"
        />
        <span className="text-xl py-4">
          سبد شما خالی است
        </span>
        <span className="text-gray-light-500 text-md">
          برای افزودن غذا ، یک آیتم را از لیست انتخاب کنید
        </span>
      </div>
    );
  }
