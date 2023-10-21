import LoadingBar from 'react-redux-loading-bar';

const Loading = () => {
  return (
    <div style={{ position: 'fixed', top: '10px', zIndex: '1000' }}>
      <LoadingBar />
    </div>
  );
};

export default Loading;
