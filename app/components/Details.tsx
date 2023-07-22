import { useRef, type PropsWithChildren, useState } from "react";
import { useClickAway } from "react-use";

type DetailsProps = {
  title: string;
};

export function Details(props: PropsWithChildren<DetailsProps>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDetailsElement>(null);

  console.log(open);

  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <details open={open} ref={ref} onClick={() => setOpen((v) => !v)}>
      <summary>{props.title}</summary>
      {props.children}
    </details>
  );
}
