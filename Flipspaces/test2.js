import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const baseUrl = 'https://dev-api.flipspaces.app/api/core/external/space/projects/94fa79ee-65aa-44db-970e-63644d72c17b/layout/renders';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoVG9rZW5Nb2RlbCI6eyJhY2NvdW50SWQiOiIwYTYyOTBlZC1iZTU1LTQ2ZjktYmYzYy01OTM3MmM3YzI0NzAiLCJlbWFpbEFkZHJlc3MiOiJzcGFjZXJlZ3Jlc3Npb250ZXN0aW5nQHlvcG1haWwuY29tIiwiZnVsbE5hbWUiOiJSZWdyZXNzaW9uIFRlc3RpbmciLCJwZXJtaXNzaW9ucyI6WyJIYXNBY2Nlc3NUb0V2ZXJ5dGhpbmciXSwidXNlclR5cGUiOiJDTElFTlQiLCJhY2Nlc3NUb2tlbkRvY3VtZW50SWQiOiI4ZWRiODk3MC00MGJiLTRiMDMtYTdkMC03M2IyZjVlMGFjZTQifSwiaWF0IjoxNjg0OTA3NjczfQ.t-mNhUe5tamoF8oetpf8Ym_m3kgfnQS1Zs1iaihGWE0';

  const params = new URLSearchParams();
  params.append('versonId', '2');
  params.append('optionId', 'Standard');
  params.append('floorId', '7th Floor');
  params.append('listing', 'yes');

  const url = `${baseUrl}?${params.toString()}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const requestOptions = { headers };

  const res = http.get(url, requestOptions);
  console.log(url);

  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
