import { Button } from "@mui/material";
import { Specialization } from "../../../../../../models";
import React from "react";

interface PublicProps {
  spec: Specialization;
  onClick?: (spec: Specialization) => void;
}

export type Props = PublicProps;

export const ClassSpecButton: React.FC<Props> = ({ spec, onClick }) => {
  return (
    <Button
      size={"small"}
      onClick={() => {
        return onClick?.(spec);
      }}
    >
      {spec.id}
    </Button>
  );
};
