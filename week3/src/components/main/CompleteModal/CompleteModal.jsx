import { MODAL_TEXT } from "../../../constants";
import { useOverlay } from "../../../hooks";
import Button from "../../common/Button/Button";
import Heading from "../../common/Heading/Heading";
import Modal from "../../common/Modal/Modal";
import Text from "../../common/Text/Text";

const CompleteModal = ({ isDone, onRestart, ...props }) => {
  const handleComplete = () => {
    close();
    onRestart();
  };

  const { close } = useOverlay();

  return (
    <Modal isOpen={isDone} onClose={close} {...props}>
      <Heading size="large">{MODAL_TEXT.HEADING}</Heading>
      <Text size="large">{MODAL_TEXT.TEXT}</Text>
      <Button
        type="reset"
        variant="primary"
        size="medium"
        onClick={handleComplete}
      >
        {MODAL_TEXT.BTN_TEXT}
      </Button>
    </Modal>
  );
};

export default CompleteModal;
