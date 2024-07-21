import { IcompaniesDataSources } from "../../../entities/company/types";

const toggleAddRow = (dataSources: IcompaniesDataSources[]) => {
  const lastItem = dataSources[dataSources.length - 1];
  return dataSources.length ? !lastItem?.adress || !lastItem?.name ? true : false : false;
};

function toggleIsChecked(dataSources: IcompaniesDataSources[]) {
  return !!dataSources.length && !dataSources.some(i => !i.isSelect);
}

export { toggleAddRow, toggleIsChecked };
