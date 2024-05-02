import Typo from "@components/Typo/Typo";
import { deleteMultipleEmployees } from "@store/employee";
import { AppDispatch } from "@store/index";
import { Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface IDeleteModalProps {
  delete_ids: number[];
  onClose: () => void;
}
export default function DeleteModal({
  delete_ids,
  onClose,
}: IDeleteModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  console.log(delete_ids);

  const onDelete = () => {
    if (loading) return;
    if (delete_ids.length === 0) return;
    setLoading(true);
    dispatch(deleteMultipleEmployees({ record_ids: delete_ids }))
      .unwrap()
      .then(() => onClose())
      .finally(() => setLoading(false));
  };

  return (
    <Modal
      title="Confirm deletion"
      open={true}
      onOk={onDelete}
      confirmLoading={loading}
      onCancel={onClose}>
      <Typo variant="body1">
        Do you want to delete {delete_ids.length} employees
      </Typo>
    </Modal>
  );
}
