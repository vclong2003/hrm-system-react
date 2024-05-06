import * as S from "./BenefitsSelector.styled";

import Cross from "@assets/icons/cross.png";

import { useMemo } from "react";
import { useFormikContext } from "formik";

import { IBenefit } from "@interfaces/benefit";

interface IBenefitsSelectorProps {
  name: string;
  availableBenefits: IBenefit[];
}
export default function BenefitsSelector({
  name,
  availableBenefits,
}: IBenefitsSelectorProps) {
  const { setFieldValue, values } = useFormikContext<{
    [key: string]: number[];
  }>();

  const avalable = useMemo(() => {
    return availableBenefits.filter(
      (benefit) => !values[name]?.includes(benefit.id)
    );
  }, [name, values, availableBenefits]);

  const selected = useMemo(() => {
    return availableBenefits.filter((benefit) =>
      values[name]?.includes(benefit.id)
    );
  }, [name, values, availableBenefits]);

  const handleSelect = (id: number) => {
    setFieldValue(name, [...values[name], id]);
  };

  const handleRemove = (id: number) => {
    setFieldValue(
      name,
      values[name].filter((i) => i !== id)
    );
  };

  return (
    <S.BenefitsSelector>
      <S.AvailableList>
        {avalable.map((benefit) => (
          <S.AvailableItem
            variant="body2"
            key={benefit.id}
            onClick={() => handleSelect(benefit.id)}>
            {benefit.name}
          </S.AvailableItem>
        ))}
      </S.AvailableList>
      <S.SelectedList>
        {selected.map((benefit) => (
          <S.SelectedItem variant="body2" key={benefit.id}>
            {benefit.name}
            <S.RemoveIcon
              src={Cross}
              onClick={() => handleRemove(benefit.id)}
            />
          </S.SelectedItem>
        ))}
      </S.SelectedList>
    </S.BenefitsSelector>
  );
}
