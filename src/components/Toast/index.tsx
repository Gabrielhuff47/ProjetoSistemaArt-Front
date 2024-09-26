import { TToastItemProps, useToast } from "@bem-lib/designsystem";


export const { toasts, addToasts, closeToast } = useToast();

  const getToast = (
    title: TToastItemProps["title"],
    severity: TToastItemProps["severity"],
    className: string
  ) => ({
    title,
    severity,
    className
  });