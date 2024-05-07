import Typo from "@components/Typo/Typo";
import { Modal } from "antd";
import { useState } from "react";
import employeeService from "@services/employee";

interface IDeleteModalProps {
  delete_ids: number[];
  onClose: () => void;
  onDeleted: () => void;
}
export default function DeleteModal({
  delete_ids,
  onClose,
  onDeleted,
}: IDeleteModalProps) {
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    if (loading) return;
    if (delete_ids.length === 0) return;
    setLoading(true);
    employeeService
      .deleteMultipleEmployees({ record_ids: delete_ids })
      .then(() => onDeleted())
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
