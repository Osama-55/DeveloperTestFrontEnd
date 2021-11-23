import { httpClient } from "./http";

class EmployeeService {
    getEmployees(){
        return httpClient.get('employee/Index');
    }
}
export default new EmployeeService();