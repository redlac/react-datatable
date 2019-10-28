import {
  dimensions,
  keyColumn,
  font,
  data,
  userConfiguration,
  pagination,
  rowsEdited,
  rowsGlobalEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  stripped,
  searchTerm,
  newRows,
  rowsDeleted,
  orderBy,
  rowsPerPage
} from "./optionsObjectSample";

const mergedMinimumOptionsSample = {
  dtKey: "",
  title: "",
  dimensions: {
    ...dimensions,
    datatable: {
      width: "100vw",
      height: "100vh",
      widthNumber: 1024,
      totalWidthNumber: 0
    },
    header: { height: "0px", heightNumber: 0 },
    body: {
      heightNumber: 658
    }
  },
  rowsEdited,
  rowsGlobalEdited,
  rowsSelected,
  refreshRows,
  isRefreshing,
  newRows,
  rowsDeleted,
  stripped,
  searchTerm,
  actions: null,
  keyColumn,
  data,
  orderBy,
  font,
  pagination: {
    ...pagination,
    rowsCurrentPage: data.rows
  },
  features: {
    canEdit: false,
    canEditRow: null,
    canGlobalEdit: false,
    canAdd: false,
    canPrint: false,
    canDownload: false,
    canSearch: false,
    canDelete: false,
    canSelectRow: false,
    canRefreshRows: false,
    canOrderColumns: false,
    canSaveUserConfiguration: false,
    editableIdNewRow: [],
    userConfiguration: {
      ...userConfiguration,
      columnsOrder: [...userConfiguration.columnsOrder]
    },
    rowsPerPage,
    additionalActions: [],
    additionalIcons: [],
    selectionIcons: []
  }
};
export default mergedMinimumOptionsSample;
