/* eslint-disable @typescript-eslint/no-explicit-any */
// SHARED TYPES
import QcSnackbarInterface from '@/stores/snackbar/snackbar';

export interface RequestParams {
  type: string;
  url: string;
  payload?: any;
  loading?: boolean | null | undefined;
  customSuccessMessage?: string | null;
  customErrorMessage?: string | null;
  headers?: any;
}

// SERVICE
import { CustomService } from '../index';

// STORE
import pinia from '@/main';
import { useLoadingStore } from '@/stores/loading/loading.store';
import { useSnackbarStore } from '@/stores/snackbar/snackbar.store';
const { LOADING_DISPATCH } = useLoadingStore(pinia);
const { SNACKBAR_DISPATCH } = useSnackbarStore(pinia);

export default async function dynamicService(params: RequestParams) {
  if (params.loading) LOADING_DISPATCH(true);

  const response = await CustomService.customServiceMethod(
    params,
    (response: any) => {
      if (params.customSuccessMessage) {
        SNACKBAR_DISPATCH({
          model: true,
          closeLabel: 'Fechar',
          bgColor: 'positive',
          text: params.customSuccessMessage,
          icon: 'check',
          actionLabelColor: 'white',
          textColor: 'white',
        } as QcSnackbarInterface);
      }
      if (params.loading) LOADING_DISPATCH(false);
      return response;
    },
    (e: any) => {
      console.log(e, 'ERROR');
      SNACKBAR_DISPATCH({
        model: true,
        closeLabel: 'Fechar',
        bgColor: 'negative',
        text:
          params.customErrorMessage ||
          e.response?.data?.erros ||
          'Erro no request',
        icon: 'warning',
        actionLabelColor: 'white',
        textColor: 'white',
      } as QcSnackbarInterface);
    },
    () => {
      console.log('DONE');
      if (params.loading) LOADING_DISPATCH(false);
    }
  );
  return response;
}
