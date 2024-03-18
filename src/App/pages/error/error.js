// Error function:
const Error = ({ ...props }) => {
  console.log('[Debug error] rendered:', { props })

  const styles = {
    container: {
    // border: '1px solid red',
    },
  };

   return (
     <>
     <p>some kind of error</p>
      {props.children}
     </>
   );
}

export default Error;