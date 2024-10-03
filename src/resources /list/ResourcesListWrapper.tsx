import { useParams } from 'react-router-dom';
import { useGetSubcategoryResourcesQuery } from '../../slice/ResourceSlice'
import ResourcesList from './ResourcesList'

type Props = {
  subcategoryId: string; 
}

const ResourcesListWrapper = ({}: Props) => {
  const {subcategoryId} =   useParams()
  console.log(subcategoryId, "hello")
 
  const { data, isLoading, error } = useGetSubcategoryResourcesQuery(subcategoryId);
   console.log(data, "xyz")
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading resources: {error.message}</p>;
  }

  return (
    <> 
      {data ? <ResourcesList data={data} subcategoryId={subcategoryId} /> : <p>No resources found.</p>}
    </>
  );
}

export default ResourcesListWrapper;
