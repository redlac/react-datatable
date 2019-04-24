import mergedSimpleOptionsSample from "./mergedSimpleOptionsSample";
import customTableBodyCellSample from "./customTableBodyCellSample";

const storeCustomTableBodyCellComponentSample = {
  datatableReducer: mergedSimpleOptionsSample,
  customComponentsReducer: {
    CustomTableBodyCell: customTableBodyCellSample,
    CustomTableBodyRow: null,
    CustomTableHeaderCell: null,
    CustomTableHeaderRow: null,
    customDataTypes: []
  }
};

export default storeCustomTableBodyCellComponentSample;