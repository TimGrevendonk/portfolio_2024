import { useParams } from "react-router-dom";

// Project function:
const Project = ({ ...props }) => {
  console.log('[Debug project] rendered:', { props })
  const { id } = useParams();

  const styles = {
    container: {
    // border: '1px solid red',
    },
  };

   return (
     <>
        project {id}
      {props.children}
     </>
   );
}

export default Project