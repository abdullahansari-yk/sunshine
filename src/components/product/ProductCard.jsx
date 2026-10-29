import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden">
      <div className="relative w-full h-80">
        <Image src="/banana.jpg" alt="banana " fill />
      </div>
    </div>
  );
};

export default ProductCard;
