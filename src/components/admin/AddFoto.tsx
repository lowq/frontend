import React from "react";

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

const AddFoto: React.FC<ModalProps> = (props) => {
  return <>{props.open}</>;
};

export default AddFoto;
