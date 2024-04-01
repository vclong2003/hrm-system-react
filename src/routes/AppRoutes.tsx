import Button from "@components/Button/Button";
import Input from "@components/formComponents/Input/Input";
import { Select } from "antd";
import { default as MySelect } from "@components/formComponents/Select/Select";

export default function AppRoutes() {
  return (
    <div>
      <Input type="text" />
      <Select>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </Select>
      <MySelect>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
        <Select.Option value="3">Option 3</Select.Option>
      </MySelect>
      <Button>Click me</Button>
    </div>
  );
}
