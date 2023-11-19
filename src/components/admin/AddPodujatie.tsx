import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: (good: boolean) => void;
}

const AddPodujatie: React.FC<ModalProps> = (props) => {
  return <>{props.isOpen}</>;
};

export default AddPodujatie;
