const Loading = ({ isLoading }) => {
  return <div>{isLoading ? <h4>Carregando...</h4> : ""}</div>;
};

export default Loading;
