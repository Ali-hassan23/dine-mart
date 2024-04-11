import React from "react";

type PropTypes = {
  show: boolean;
  quantity : number,
  title : string
};

const Modal = ({ show,quantity,title }: PropTypes) => {

  if (!show) return null;
  return (
    <div className="fixed inset-0 flex justify-center h-24">
      <div className="bg-gray-200 m-4 px-5 flex items-center justify-center rounded-md">
          <h1 className="text-center">✔ {quantity} {title} Added To Cart</h1>        
      </div>
    </div>
  );
};

export default Modal;
