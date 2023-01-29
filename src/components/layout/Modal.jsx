const Modal = ({ text, onClickClose }) => {
  return (
    <div className="modal">
      <p>{text}</p>
      <button onClick={onClickClose}>Close</button>
    </div>
  );
};

export default Modal;
