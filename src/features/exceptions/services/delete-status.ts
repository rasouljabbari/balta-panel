import { getData } from "@/services/api-method-functions";

export const toggleExceptionStatusService = async (exceptionId: number) => {
    return getData({
      endPoint: `admin/v1/exclusions/${exceptionId}`,
      type: 'delete',
    });
  };