import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const baseUrl = 'https://dev-api.flipspaces.app/api/core/external/space/projects/94fa79ee-65aa-44db-970e-63644d72c17b/layout/renders';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVG9rZW5Nb2RlbCI6eyJhY2NvdW50SWQiOiIwYTYyOTBlZC1iZTU1LTQ2ZjktYmYzYy01OTM3MmM3YzI0NzAiLCJlbWFpbEFkZHJlc3MiOiJzcGFjZXJlZ3Jlc3Npb250ZXN0aW5nQHlvcG1haWwuY29tIiwiZnVsbE5hbWUiOiJSZWdyZXNzaW9uIFRlc3RpbmciLCJwZXJtaXNzaW9ucyI6WyJIYXNBY2Nlc3NUb0V2ZXJ5dGhpbmciXSwidXNlclR5cGUiOiJDTElFTlQiLCJhY2Nlc3NUb2tlbkRvY3VtZW50SWQiOiI4ZWRiODk3MC00MGJiLTRiMDMtYTdkMC03M2IyZjVlMGFjZTQifSwiaWF0IjoxNjg0OTA3NjczfQ.t-mNhUe5tamoF8oetpf8Ym_m3kgfnQS1Zs1iaihGWE0';

  const queryParams = {
        versonId : '2',
        optionId : 'Standard',
        floorId : '7th Floor',
        listing : 'yes'

  };

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const options = {
    headers: headers,
    params: queryParams,
  };
console.log(baseUrl)
console.log(options)
  const response = http.get(baseUrl, options);
   console.log(response)
  // Perform checks on the response
  check(response, {
    'is status 200': (r) => r.status === 200,
    // Add more checks as needed
  });
}
