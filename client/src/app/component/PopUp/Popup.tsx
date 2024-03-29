// components/Popup.js

import React from "react";
import Modal from "react-modal";
// Modal.setAppElement('#__next');
import Button from "../button/button";

const Popup = (props: any) => {
  const { isOpen, onClose, data } = props;
  return (
    <div className="flex justify-center bg-slate-400">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Example Modal"
      >
        <h2 className="items-center justify-center">Register Berhasil!</h2>
        <p>Data yang didaftarkan:</p>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <p>{JSON.stringify(data, null, 2)}</p>
        <Button type="button" color="bg-red-500" onClick={onClose}>
          Tutup
        </Button>
      </Modal>
    </div>
  );
};

export default Popup;
