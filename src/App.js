import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import AdminInterface from "./pages_admin/AdminInterface";
import ClientInterface from "./pages_client/ClientInterface";
import Welcome from "./pages_client/Welcome";
import CreateNewTicket from "./pages_client/CreateNewTicket";
import CheckTicketStatus from "./pages_client/CheckTicketStatus";
import TicketSubmitted from "./pages_client/TicketSubmitted.js";
import EvaluationForm from "./pages_client/EvaluationForm.js";
import Test from "./pages_client/Test.js";
import ClientLogin from "./pages_client/ClientLogin";
import RequestReopen from "./pages_client/RequestReopen";
import RequestSubmitted from "./pages_client/RequestSubmitted";

import AllTickets from "./pages_admin/AllTickets.js";
import AllOpenTickets from "./pages_admin/AllOpenTickets";
import AllReopenedTickets from "./pages_admin/AllReopenedTickets";
import AllResolvedTickets from "./pages_admin/AllResolvedTickets";
import AllOverdueTickets from "./pages_admin/AllOverdueTickets";
import AllVoidedTickets from "./pages_admin/AllVoidedTickets";

import Categories from "./pages_admin/Categories.js";
import CategoryList from "./pages_admin/CategoryList";
import IssueList from "./pages_admin/IssueList";
import AddNewCategory from "./pages_admin/AddNewCategory";
import AddNewIssue from "./pages_admin/AddNewIssue";

import Dashboard from "./pages_admin/Dashboard.js";
import Feedback from "./pages_admin/Feedback.js";

import MyTickets from "./pages_admin/MyTickets.js";
import AssignedTickets from "./pages_admin/AssignedTickets.js";
import ReopenedTickets from "./pages_admin/ReopenedTickets";
import ResolvedTickets from "./pages_admin/ResolvedTickets";
import OverdueTickets from "./pages_admin/OverdueTickets";

import ServiceRequests from "./pages_admin/ServiceRequests.js";
import NewServiceRequests from "./pages_admin/NewServiceRequests";
import ReopenRequestTickets from "./pages_admin/ReopenTicketRequests";
import RejectedServiceRequests from "./pages_admin/RejectedServiceRequests";

import Templates from "./pages_admin/Templates.js";
import RejectingRequestsReasons from "./pages_admin/RejectingRequestsReasons";
import ResolvingTicketsSolutions from "./pages_admin/ResolvingTicketsSolutions";
import VoidingTicketReasons from "./pages_admin/VoidingTicketReasons";
import AddNewVoidingReason from "./pages_admin/AddNewVoidingReason";
import AddNewSolution from "./pages_admin/AddNewSolution";
import AddNewRejectingReason from "./pages_admin/AddNewRejectingReason";

import UserRoles from "./pages_admin/UserRoles.js";
import CreateNewUserRole from "./pages_admin/CreateUserRole";

import Users from "./pages_admin/Users.js";
import AddNewUser from "./pages_admin/AddNewUser";

import Login from "./pages_admin/Login.js";
import ForgotPassword from "./pages_admin/ForgotPassword";
import AccountRecovery from "./pages_admin/AccountRecovery";
import MyAccount from "./pages_admin/MyAccount";
import ViewEditIssue from "./pages_admin/ViewEditIssue";
import ViewAssignedTicket from "./pages_admin/ViewAssignedTicket";
import ViewReopenedTicket from "./pages_admin/ViewReopenedTicket";
import ViewOverdueTicket from "./pages_admin/ViewOverdueTicket";
import ViewResolvedTicket from "./pages_admin/ViewResolvedTicket";
import ViewEditCategory from "./pages_admin/ViewEditCategory";
import ViewAllOpenTicket from "./pages_admin/ViewAllOpenTicket";
import ViewUser from "./pages_admin/ViewUser";
import PageNotFound from "./PageNotFound";
import ViewEditUserRole from "./pages_admin/ViewEditUserRole";
import ViewAllVoidedTicket from "./pages_admin/ViewAllVoidedTicket";
import ViewAllOverdueTicket from "./pages_admin/ViewAllOverdueTicket";
import ViewAllReopenedTicket from "./pages_admin/ViewAllReopenedTicket";
import ViewAllResolvedTicket from "./pages_admin/ViewAllResolvedTicket";
import ViewNewServiceRequest from "./pages_admin/ViewNewServiceRequest";
import ViewReopenTicketRequest from "./pages_admin/ViewReopenTicketRequest";
import ViewRejectedServiceRequest from "./pages_admin/ViewRejectedServiceRequest";
import ViewRejectingReason from "./pages_admin/ViewRejectingReason";
import ViewResolvingSolution from "./pages_admin/ViewResolvingSolution";
import ViewVoidingReason from "./pages_admin/ViewVoidingReason";
import ViewFeedback from "./pages_admin/ViewFeedback";

import SupportInterface from "./pages_it/SupportInterface";
import AllTicketsIT from "./pages_it/AllTicketsIT";
import AllOpenTicketsIT from "./pages_it/AllOpenTicketsIT";
import DashboardIT from "./pages_it/DashboardIT";
import MyTicketsIT from "./pages_it/MyTicketsIT";
import MyAccountIT from "./pages_it/MyAccountIT";
import AllReopenedTicketsIT from "./pages_it/AllReopenedTicketsIT";
import AllResolvedTicketsIT from "./pages_it/AllResolvedTicketsIT";
import AllOverdueTicketsIT from "./pages_it/AllOverdueTicketsIT";
import AllVoidedTicketsIT from "./pages_it/AllVoidedTicketsIT";
import AssignedTicketsIT from "./pages_it/AssignedTicketsIT";
import ReopenedTicketsIT from "./pages_it/ReopenedTicketsIT";
import OverdueTicketsIT from "./pages_it/OverdueTicketsIT";
import ResolvedTicketsIT from "./pages_it/ResolvedTicketsIT";
import ViewAllOpenTicketIT from "./pages_it/ViewAllOpenTicketIT";
import ViewAllReopenedTicketIT from "./pages_it/ViewAllReopenedTicketIT";
import ViewAllOverdueTicketIT from "./pages_it/ViewAllOverdueTicketIT";
import ViewAllResolvedTicketIT from "./pages_it/ViewAllResolvedTicketIT";
import ViewAllVoidedTicketIT from "./pages_it/ViewAllVoidedTicketIT";
import ViewAssignedTicketIT from "./pages_it/ViewAssignedTicketIT";
import ViewReopenedTicketIT from "./pages_it/ViewReopenedTicketIT";
import ViewOverdueTicketIT from "./pages_it/ViewOverdueTicketIT";
import ViewResolvedTicketIT from "./pages_it/ViewResolvedTicketIT";

import HelpDeskInterface from "./pages_desk/HelpDeskInterface";
import DashboardHelp from "./pages_desk/DashboardHelp";
import MyTicketsHelp from "./pages_desk/MyTicketsHelp";
import AllTicketsHelp from "./pages_desk/AllTicketsHelp";
import MyAccountHelp from "./pages_desk/MyAccountHelp";
import ServiceRequestsHelp from "./pages_desk/ServiceRequestsHelp";
import AllOpenTicketsHelp from "./pages_desk/AllOpenTicketsHelp";
import AllOverdueTicketsHelp from "./pages_desk/AllOverdueTicketsHelp";
import AllReopenedTicketsHelp from "./pages_desk/AllReopenedTicketsHelp";
import AllResolvedTicketsHelp from "./pages_desk/AllResolvedTicketsHelp";
import AllVoidedTicketsHelp from "./pages_desk/AllVoidedTicketsHelp";
import AssignedTicketsHelp from "./pages_desk/AssignedTicketsHelp";
import ReopenedTicketsHelp from "./pages_desk/ReopenedTicketsHelp";
import OverdueTicketsHelp from "./pages_desk/OverdueTicketsHelp";
import ResolvedTicketsHelp from "./pages_desk/ResolvedTicketsHelp";
import NewServiceRequestsHelp from "./pages_desk/NewServiceRequestsHelp";
import ReopenTicketRequestsHelp from "./pages_desk/ReopenTicketRequestsHelp";
import RejectedServiceRequestsHelp from "./pages_desk/RejectedServiceRequestsHelp";

import ViewAllOpenTicketHelp from "./pages_desk/ViewAllOpenTicketHelp";
import ViewAllReopenedTicketHelp from "./pages_desk/ViewAllReopenedTicketHelp";
import ViewAllOverdueTicketHelp from "./pages_desk/ViewAllOverdueTicketHelp";
import ViewAllResolvedTicketHelp from "./pages_desk/ViewAllResolvedTicketHelp";
import ViewAllVoidedTicketHelp from "./pages_desk/ViewAllVoidedTicketHelp";
import ViewAssignedTicketHelp from "./pages_desk/ViewAssignedTicketHelp";
import ViewReopenedTicketHelp from "./pages_desk/ViewReopenedTicketHelp";
import ViewOverdueTicketHelp from "./pages_desk/ViewOverdueTicketHelp";
import ViewResolvedTicketHelp from "./pages_desk/ViewResolvedTicketHelp";
import ViewNewServiceRequestHelp from "./pages_desk/ViewNewServiceRequestHelp";
import ViewReopenTicketRequestHelp from "./pages_desk/ViewReopenTicketRequestHelp";
import ViewRejectedServiceRequestHelp from "./pages_desk/ViewRejectedServiceRequestHelp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ClientInterface />}>
          <Route index element={<Welcome />} />
          <Route path="createnewticket" element={<CreateNewTicket />} />
          <Route path="clientlogin" element={<ClientLogin />} />
          <Route path="checkticketstatus" element={<CheckTicketStatus />} />
          <Route path="requesttoreopen" element={<RequestReopen />} />
          <Route path="ticketsubmitted" element={<TicketSubmitted />} />
          <Route path="requestsubmitted" element={<RequestSubmitted />} />
          <Route path="evaluationform" element={<EvaluationForm />} />
          <Route path="test" element={<Test />} />
        </Route>

        <Route path="login-admin" element={<Login />}>
          <Route
            path="pages_admin/forgot-password"
            element={<ForgotPassword />}
          />

          <Route
            path="pages_admin/accountrecoveryy"
            element={<AccountRecovery />}
          />
        </Route>

        <Route path="/admin" element={<AdminInterface />}>
          <Route index element={<Dashboard />} />

          <Route path="pages_admin/dashboard" element={<Dashboard />} />
          <Route path="pages_admin/alltickets" element={<AllTickets />} />
          <Route
            path="pages_admin/alltickets/all-open-tickets"
            element={<AllOpenTickets />}
          />
          <Route
            path="pages_admin/alltickets/all-open-tickets/view-all-open-ticket"
            element={<ViewAllOpenTicket />}
          />
          <Route
            path="pages_admin/alltickets/all-overdue-tickets"
            element={<AllOverdueTickets />}
          />
          <Route
            path="pages_admin/alltickets/all-overdue-tickets/view-all-overdue-ticket"
            element={<ViewAllOverdueTicket />}
          />
          <Route
            path="pages_admin/alltickets/all-reopened-tickets"
            element={<AllReopenedTickets />}
          />
          <Route
            path="pages_admin/alltickets/all-reopened-tickets/view-all-reopened-ticket"
            element={<ViewAllReopenedTicket />}
          />
          <Route
            path="pages_admin/alltickets/all-resolved-tickets"
            element={<AllResolvedTickets />}
          />
          <Route
            path="pages_admin/alltickets/all-resolved-tickets/view-all-resolved-ticket"
            element={<ViewAllResolvedTicket />}
          />
          <Route
            path="pages_admin/alltickets/all-voided-tickets"
            element={<AllVoidedTickets />}
          />
          <Route
            path="pages_admin/alltickets/all-voided-tickets/view-all-voided-ticket"
            element={<ViewAllVoidedTicket />}
          />

          <Route path="pages_admin/categories" element={<Categories />} />
          <Route
            path="pages_admin/categories/category-list"
            element={<CategoryList />}
          />
          <Route
            path="pages_admin/categories/category-list/add-new-category"
            element={<AddNewCategory />}
          />
          <Route
            path="pages_admin/categories/category-list/view-edit-category"
            element={<ViewEditCategory />}
          />
          <Route
            path="pages_admin/categories/issue-list"
            element={<IssueList />}
          />
          <Route
            path="pages_admin/categories/issue-list/add-new-issue"
            element={<AddNewIssue />}
          />
          <Route
            path="pages_admin/categories/issue-list/view-edit-issue"
            element={<ViewEditIssue />}
          />

          <Route path="pages_admin/feedback" element={<Feedback />} />
          <Route
            path="pages_admin/feedback/view-feedback"
            element={<ViewFeedback />}
          />

          <Route path="pages_admin/mytickets" element={<MyTickets />} />
          <Route
            path="pages_admin/mytickets/assignedtickets"
            element={<AssignedTickets />}
          />
          <Route
            path="pages_admin/mytickets/view-assigned-ticket"
            element={<ViewAssignedTicket />}
          />
          <Route
            path="pages_admin/mytickets/overduetickets"
            element={<OverdueTickets />}
          />
          <Route
            path="pages_admin/mytickets/view-overdue-ticket"
            element={<ViewOverdueTicket />}
          />
          <Route
            path="pages_admin/mytickets/reopenedtickets"
            element={<ReopenedTickets />}
          />
          <Route
            path="pages_admin/mytickets/view-reopened-ticket"
            element={<ViewReopenedTicket />}
          />
          <Route
            path="pages_admin/mytickets/resolvedtickets"
            element={<ResolvedTickets />}
          />
          <Route
            path="pages_admin/mytickets/view-resolved-ticket"
            element={<ViewResolvedTicket />}
          />

          <Route
            path="pages_admin/servicerequests"
            element={<ServiceRequests />}
          />
          <Route
            path="pages_admin/servicerequests/reopen-ticket-requests"
            element={<ReopenRequestTickets />}
          />
          <Route
            path="pages_admin/servicerequests/reopen-ticket-requests/view-reopen-ticket-request"
            element={<ViewReopenTicketRequest />}
          />
          <Route
            path="pages_admin/servicerequests/rejected-service-requests"
            element={<RejectedServiceRequests />}
          />
          <Route
            path="pages_admin/servicerequests/rejected-service-requests/view-rejected-service-request"
            element={<ViewRejectedServiceRequest />}
          />
          <Route
            path="pages_admin/servicerequests/new-service-requests"
            element={<NewServiceRequests />}
          />
          <Route
            path="pages_admin/servicerequests/new-service-requests/view-new-service-request"
            element={<ViewNewServiceRequest />}
          />

          <Route path="pages_admin/templates" element={<Templates />} />
          <Route
            path="pages_admin/templates/rejecting-requests-reasons"
            element={<RejectingRequestsReasons />}
          />
          <Route
            path="pages_admin/templates/rejecting-requests-reasons/add-new-rejecting-reason"
            element={<AddNewRejectingReason />}
          />
          <Route
            path="pages_admin/templates/rejecting-requests-reasons/view-rejecting-reason"
            element={<ViewRejectingReason />}
          />
          <Route
            path="pages_admin/templates/resolving-tickets-solutions"
            element={<ResolvingTicketsSolutions />}
          />
          <Route
            path="pages_admin/templates/resolving-tickets-solutions/add-new-solution"
            element={<AddNewSolution />}
          />
          <Route
            path="pages_admin/templates/resolving-tickets-solutions/view-resolving-solution"
            element={<ViewResolvingSolution />}
          />
          <Route
            path="pages_admin/templates/voiding-ticket-reasons"
            element={<VoidingTicketReasons />}
          />
          <Route
            path="pages_admin/templates/voiding-ticket-reasons/add-new-voiding-reason"
            element={<AddNewVoidingReason />}
          />
          <Route
            path="pages_admin/templates/voiding-ticket-reasons/view-voiding-reason"
            element={<ViewVoidingReason />}
          />
          <Route path="pages_admin/userroles" element={<UserRoles />} />
          <Route
            path="pages_admin/userroles/create-user-role"
            element={<CreateNewUserRole />}
          />
          <Route
            path="pages_admin/userroles/view-edit-user-role"
            element={<ViewEditUserRole />}
          />

          <Route path="pages_admin/users" element={<Users />} />
          <Route
            path="pages_admin/users/add-new-user"
            element={<AddNewUser />}
          />
          <Route
            path="pages_admin/users/view-edit-user"
            element={<ViewUser />}
          />

          <Route path="pages_admin/myaccount" element={<MyAccount />} />
        </Route>

        <Route path="/it-support" element={<SupportInterface />}>
          <Route index element={<DashboardIT />} />

          <Route path="pages_it/dashboard" element={<DashboardIT />} />

          <Route path="pages_it/mytickets" element={<MyTicketsIT />} />
          <Route
            path="pages_it/mytickets/assignedtickets"
            element={<AssignedTicketsIT />}
          />
          <Route
            path="pages_it/mytickets/reopenedtickets"
            element={<ReopenedTicketsIT />}
          />
          <Route
            path="pages_it/mytickets/overduetickets"
            element={<OverdueTicketsIT />}
          />
          <Route
            path="pages_it/mytickets/resolvedtickets"
            element={<ResolvedTicketsIT />}
          />
          <Route
            path="pages_it/mytickets/view-assigned-ticket"
            element={<ViewAssignedTicketIT />}
          />
          <Route
            path="pages_it/mytickets/view-reopened-ticket"
            element={<ViewReopenedTicketIT />}
          />
          <Route
            path="pages_it/mytickets/view-overdue-ticket"
            element={<ViewOverdueTicketIT />}
          />
          <Route
            path="pages_it/mytickets/view-resolved-ticket"
            element={<ViewResolvedTicketIT />}
          />

          <Route path="pages_it/alltickets" element={<AllTicketsIT />} />
          <Route
            path="pages_it/alltickets/all-open-tickets"
            element={<AllOpenTicketsIT />}
          />

          <Route
            path="pages_it/alltickets/all-reopened-tickets"
            element={<AllReopenedTicketsIT />}
          />
          <Route
            path="pages_it/alltickets/all-resolved-tickets"
            element={<AllResolvedTicketsIT />}
          />
          <Route
            path="pages_it/alltickets/all-overdue-tickets"
            element={<AllOverdueTicketsIT />}
          />
          <Route
            path="pages_it/alltickets/all-voided-tickets"
            element={<AllVoidedTicketsIT />}
          />
          <Route
            path="pages_it/alltickets/all-open-tickets/view-all-open-ticket"
            element={<ViewAllOpenTicketIT />}
          />
          <Route
            path="pages_it/alltickets/all-reopened-tickets/view-all-reopened-ticket"
            element={<ViewAllReopenedTicketIT />}
          />
          <Route
            path="pages_it/alltickets/all-overdue-tickets/view-all-overdue-ticket"
            element={<ViewAllOverdueTicketIT />}
          />
          <Route
            path="pages_it/alltickets/all-resolved-tickets/view-all-resolved-ticket"
            element={<ViewAllResolvedTicketIT />}
          />
          <Route
            path="pages_it/alltickets/all-voided-tickets/view-all-voided-ticket"
            element={<ViewAllVoidedTicketIT />}
          />

          <Route path="pages_it/myaccount" element={<MyAccountIT />} />
        </Route>

        <Route path="/help-desk" element={<HelpDeskInterface />}>
          <Route index element={<DashboardHelp />} />

          <Route path="pages_desk/dashboard" element={<DashboardHelp />} />

          <Route
            path="pages_desk/servicerequests"
            element={<ServiceRequestsHelp />}
          />
          <Route
            path="pages_desk/servicerequests/new-service-requests"
            element={<NewServiceRequestsHelp />}
          />
          <Route
            path="pages_desk/servicerequests/reopen-ticket-requests"
            element={<ReopenTicketRequestsHelp />}
          />
          <Route
            path="pages_desk/servicerequests/rejected-service-requests"
            element={<RejectedServiceRequestsHelp />}
          />
          <Route
            path="pages_desk/servicerequests/reopen-ticket-requests/view-reopen-ticket-request"
            element={<ViewReopenTicketRequestHelp />}
          />
          <Route
            path="pages_desk/servicerequests/rejected-service-requests/view-rejected-service-request"
            element={<ViewRejectedServiceRequestHelp />}
          />
          <Route
            path="pages_desk/servicerequests/new-service-requests/view-new-service-request"
            element={<ViewNewServiceRequestHelp />}
          />

          <Route path="pages_desk/mytickets" element={<MyTicketsHelp />} />
          <Route
            path="pages_desk/mytickets/assignedtickets"
            element={<AssignedTicketsHelp />}
          />
          <Route
            path="pages_desk/mytickets/view-assigned-ticket"
            element={<ViewAssignedTicketHelp />}
          />
          <Route
            path="pages_desk/mytickets/reopenedtickets"
            element={<ReopenedTicketsHelp />}
          />
          <Route
            path="pages_desk/mytickets/view-reopened-ticket"
            element={<ViewReopenedTicketHelp />}
          />
          <Route
            path="pages_desk/mytickets/overduetickets"
            element={<OverdueTicketsHelp />}
          />
          <Route
            path="pages_desk/mytickets/view-overdue-ticket"
            element={<ViewOverdueTicketHelp />}
          />
          <Route
            path="pages_desk/mytickets/resolvedtickets"
            element={<ResolvedTicketsHelp />}
          />
          <Route
            path="pages_desk/mytickets/view-resolved-ticket"
            element={<ViewResolvedTicketHelp />}
          />

          <Route path="pages_desk/alltickets" element={<AllTicketsHelp />} />
          <Route
            path="pages_desk/alltickets/all-open-tickets"
            element={<AllOpenTicketsHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-open-tickets/view-all-open-ticket"
            element={<ViewAllOpenTicketHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-reopened-tickets"
            element={<AllReopenedTicketsHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-reopened-tickets/view-all-reopened-ticket"
            element={<ViewAllReopenedTicketHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-overdue-tickets"
            element={<AllOverdueTicketsHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-overdue-tickets/view-all-overdue-ticket"
            element={<ViewAllOverdueTicketHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-resolved-tickets"
            element={<AllResolvedTicketsHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-resolved-tickets/view-all-resolved-ticket"
            element={<ViewAllResolvedTicketHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-voided-tickets"
            element={<AllVoidedTicketsHelp />}
          />
          <Route
            path="pages_desk/alltickets/all-voided-tickets/view-all-voided-ticket"
            element={<ViewAllVoidedTicketHelp />}
          />

          <Route path="pages_desk/myaccount" element={<MyAccountHelp />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
