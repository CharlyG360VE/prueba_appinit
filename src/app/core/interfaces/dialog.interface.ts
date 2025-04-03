import { AlertTypeEnum } from "@core/enums/general-dialog.enum";

export type AlertType = AlertTypeEnum.CHECK | AlertTypeEnum.WARNING | AlertTypeEnum.ERROR;

export interface IGeneralDialogData {
  alertType: AlertType;
  textPrimary: string;
  textSecondary: string;
  confirmBtn: boolean;
  textConfirmBtn: string;
  textCancelBtn: string;
  textNotConfirmBtn: string,
  closeBtn: boolean
}
