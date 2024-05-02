import { EditCustomerPage } from "../pages";

export const PATHS = {
  INVOICE: "invoice",
  EDIT_CUSTOMER: "editCustomer",
};

export const ROUTS = [
  {
    component: <EditCustomerPage />,
    path: PATHS.EDIT_CUSTOMER,
  },
];
