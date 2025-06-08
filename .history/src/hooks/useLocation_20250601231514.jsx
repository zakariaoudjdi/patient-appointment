import { useLocation } from 'react-router-dom';
function useLocation(){
  const location = useLocation()
  return 
{
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    state: location.state,
    key: location.key
  }
}