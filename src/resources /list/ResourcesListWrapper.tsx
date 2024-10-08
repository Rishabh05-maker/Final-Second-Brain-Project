import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteResourceMutation, useGetSubcategoryResourcesQuery } from '../../slice/ResourceSlice'
import ResourcesList from './ResourcesList'

type Props = {
  subcategoryId: string; 
}

const ResourcesListWrapper = ({}: Props) => {
  const {subcategoryId} =   useParams()
  
 
  const { data, isLoading, error } = useGetSubcategoryResourcesQuery(subcategoryId);
  const [DeleteResource] = useDeleteResourceMutation()
 const navigate = useNavigate()




  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading resources: {error.message}</p>;
  }


  const handleDeleteResource = (_id) => {
    DeleteResource(_id).then((res)=>{
      console.log(res)
    }).catch(err =>{
      console.error("Error deleting resorces:", err)
      })
  }
 const handleEdit = (_id) => {
  navigate(`/edit-resource/${_id}`)
 }


  return (
    <> 
      {data ? <ResourcesList data={data} subcategoryId={subcategoryId} DeleteResource={handleDeleteResource} handleEdit={handleEdit} /> : <p>No resources found.</p>}
    </>
  );
}

export default ResourcesListWrapper;
