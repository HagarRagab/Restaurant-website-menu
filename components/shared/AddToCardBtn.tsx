import { ShoppingCart } from "lucide-react";

import { Button } from "../ui/button";

type AddToCardBtnProps = {
    className?: string;
};

function AddToCardBtn({ className }: AddToCardBtnProps) {
    return (
        <Button
            className={`${className} p-4 cursor-pointer hover:-translate-y-0.5 transition-transform`}
        >
            <ShoppingCart />
        </Button>
    );
}

export default AddToCardBtn;
