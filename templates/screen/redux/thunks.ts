import {AppThunk, AppDispatch} from '../../../common/redux/store';
import {RootState} from '../../../common/redux/reducer';
import Service from '../../common/core/Service';
import {raiseError} from '../../common/redux/slice';
import {} from './slice';
import Navigation from '../../common/navigation';

export const fun = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {

};
