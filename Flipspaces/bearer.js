import http from 'k6/http';
import { check } from 'k6';
export default function () {
  const versonId = 2
  const optionId = 'Standard'
  const floorId  = '7th Floor'
  const listing = 'yes'
    const queryParams = {
        versionId : '2',
        optionId : 'Standard',
        floorId : '7th Floor',
        listing : 'yes'

    }
   const url2 = `https://dev-api.flipspaces.app/api/core/external/space/projects/94fa79ee-65aa-44db-970e-63644d72c17b/layout/renders?${versonId}&${optionId}&${floorId}&${listing}`;
  const baseUrl = 'https://dev-api.flipspaces.app/api/core/external/space/projects/94fa79ee-65aa-44db-970e-63644d72c17b/layout/renders/';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVG9rZW5Nb2RlbCI6eyJhY2NvdW50SWQiOiIwYTYyOTBlZC1iZTU1LTQ2ZjktYmYzYy01OTM3MmM3YzI0NzAiLCJlbWFpbEFkZHJlc3MiOiJzcGFjZXJlZ3Jlc3Npb250ZXN0aW5nQHlvcG1haWwuY29tIiwiZnVsbE5hbWUiOiJSZWdyZXNzaW9uIFRlc3RpbmciLCJwZXJtaXNzaW9ucyI6WyJIYXNBY2Nlc3NUb0V2ZXJ5dGhpbmciXSwidXNlclR5cGUiOiJDTElFTlQiLCJhY2Nlc3NUb2tlbkRvY3VtZW50SWQiOiI4ZWRiODk3MC00MGJiLTRiMDMtYTdkMC03M2IyZjVlMGFjZTQifSwiaWF0IjoxNjg0OTA3NjczfQ.t-mNhUe5tamoF8oetpf8Ym_m3kgfnQS1Zs1iaihGWE0';
  const url3 = 'https://dev-api.flipspaces.app/api/core/external/space/projects/94fa79ee-65aa-44db-970e-63644d72c17b/layout/renders?versionId=2&optionId=Standard&floorId=7th Floor&listing=yes'
 let urlWithParams = baseUrl + '?';
 for(const key in queryParams){
    if(queryParams.hasOwnProperty(key)){
        urlWithParams +=`${key}=${queryParams[key]}&`;
    }
 }
  const params = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
const url ='https://dev-api.flipspaces.app/api/core/external/space/projects/94fa79ee-65aa-44db-970e-63644d72c17b/layout/renders/?versonId=2&optionId=Standard&floorId=7th Floor&listing=yes'
 const res = http.get(url3,params);
 console.log(url2)
 console.log(res)
 check(res, {
    'is status 200' : (r) => r.status === 200
 })
 
}
