import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import companiesDataSources from '../data-source';

const initialState = {
  dataSources: companiesDataSources,
};

export const dataSourceSlice = createSlice({
  name: 'dataSource',
  initialState,
  reducers: {
    setSelectAllCheckbox(state) {
      const test = !state.dataSources.some(i => !i.isSelect);
      state.dataSources.forEach(item => {
        if (test) {
          item.isSelect = !item.isSelect;
        } else {
          item.isSelect = true;
        }
      });
    },

    setSelectCheckbox(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      state.dataSources = state.dataSources.map(item => {
        if (item.id === itemId) {
          return { ...item, isSelect: !item.isSelect };
        }
        return item;
      });
    },

    deleteItemInDataSourse(state, action: PayloadAction<number>) {
      const idToDelete = action.payload;
      state.dataSources = state.dataSources.filter(i => i.id !== idToDelete);
    },

    deleteAllSelectItems(state) {
      state.dataSources = state.dataSources.filter(i => !i.isSelect);
    },

    setNewItem(state) {
      const randomId = Math.random() * 10;
      state.dataSources.push({
        id: randomId,
        isSelect: false,
        name: '',
        adress: '',
      });
    },

    changeField(state, action) {
      const { id, fieldName, value } = action.payload;
      state.dataSources = state.dataSources.map(item =>
        item.id === id ? { ...item, [fieldName]: value } : item,
      );
    },
  },
});

export default dataSourceSlice.reducer;
