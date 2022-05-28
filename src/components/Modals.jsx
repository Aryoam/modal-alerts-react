import { useModal } from "./useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenWarning, openWarning, closeWarning] = useModal(false);
  const [isOpenSuccess, openSuccess, closeSuccess] = useModal(false);
  const [isOpenError, openError, closeError] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openWarning}>Cuidado</button>
      <Modal
        type="warning"
        title="¡Warning!"
        text="Are you sure of this action?"
        isOpen={isOpenWarning}
        closeModal={closeWarning}
      >
        <p>This is a text</p>
        <button>This is a HTML button</button>
      </Modal>
      <button onClick={openSuccess}>Vamos</button>
      <Modal
        type="success"
        title="¡Vamos!"
        text="Todo ha salido bien :)"
        isOpen={isOpenSuccess}
        closeModal={closeSuccess}
      ></Modal>
      <button onClick={openError}>Uppss</button>
      <Modal
        type="error"
        title="Upss"
        text="Algo ha pasado"
        isOpen={isOpenError}
        closeModal={closeError}
      ></Modal>
    </div>
  );
};

export default Modals;
