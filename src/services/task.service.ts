import http from "../http-common";
import ITaskData from "../types/task.type";

export const TaskDataServiceGetAll = () => {
  return http.get<Array<ITaskData>>("/tasks?userid=636d3cd30edc4e6ca7bbfafa");
};
export const TaskDataServiceGet = (id: string) => {
  return http.get<ITaskData>(`/tasks${id}`);
};
export const TaskDataServiceCreate = (data: ITaskData) => {
  return http.post<ITaskData>("/task", data);
};
export const TaskDataServiceUpdate = (data: ITaskData) => {
  return http.patch<any>(`/task`, data);
};
export const TaskDataServiceDelete = (id: any) => {
  return http.post<any>(`/task/delete?id=${id}`);
};

export default TaskDataServiceGetAll;
